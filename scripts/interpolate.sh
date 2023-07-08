#!/bin/bash

# Make sure to provide your directories paths
INPUT_DIR=$WEBTV_VIDEO_STORAGE_PATH_CHANNEL_2
OUTPUT_DIR=$WEBTV_VIDEO_STORAGE_PATH_CHANNEL_3
TEMP_DIR=$(mktemp -d)

# Loop through all .mp4 files in input directory
for FILE_PATH in $INPUT_DIR*.mp4; do
    # get the base file name
    FILE_NAME=$(basename "$FILE_PATH")
    
    # Create a temp file path
    TEMP_FILE_PATH=$TEMP_DIR"/"$FILE_NAME

    # Check if file does not exist in output directory
    if [ ! -f "$OUTPUT_DIR$FILE_NAME" ]; then
        echo "Processing $FILE_NAME, output will be saved in $OUTPUT_DIR$FILE_NAME"
        
        # Run your node command
        if ! npm run postprod:interpolate "$FILE_PATH" "$TEMP_FILE_PATH"
        then
            # The first attempt has failed, retrying
            echo "Attempt 1 failed for $FILE_NAME, retrying..."

            if ! npm run postprod:interpolate "$FILE_PATH" "$TEMP_FILE_PATH"
            then
                # Both attempts have failed, skipping the file
                echo "Both attempts failed for $FILE_NAME, skipping the file..."
                continue
            fi
        fi

        # Running ffmpeg to resize and apply unsharp mask
        # Also we speed things up, and re-add the noise
        if ! ffmpeg -hide_banner -v fatal -nostats -loglevel 0 -i "$TEMP_FILE_PATH" -vf "setpts=0.35*PTS,scale=-1:576:lanczos,unsharp=5:5:0.2:5:5:0.2,noise=c0s=10:c0f=t+u" -r 24 "$OUTPUT_DIR$FILE_NAME"
        then
            # ffmpeg command failed
            echo "ffmpeg command failed for $FILE_NAME, skipping the file..."
        fi
        
    else
        echo "File $FILE_NAME already exists in the output directory, skipping."
    fi
done

# Remove temp folder
rm -r "$TEMP_DIR"