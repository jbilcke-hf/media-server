#!/bin/bash

echo "Starting the video collection stream for channel 2.."
echo "listing files in $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_2*.mp4"
current_count=0

while true; do
    new_count=$(ls $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_2*.mp4 2> /dev/null | wc -l)

    if [ $new_count -ne $current_count ]; then
        echo "there are $new_count videos files for channel 2"

        echo "Updating playliss for channel 2.."
        current_count=$new_count
        files=($WEBTV_VIDEO_STORAGE_PATH_CHANNEL_2*.mp4)

        echo "ffconcat version 1.0" > channel_2_video.txt
        for (( i=0; i<${#files[@]}; i++ )); do
            echo "file '${files[$i]}'" >> channel_2_video.txt
        done
    fi

    sleep 1
done