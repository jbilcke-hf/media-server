#!/bin/bash

# this script will destroy (well, move to the archives) 15% of the videos

# Calculate the number of .mp4 files
TOTAL_VIDEO_COUNT=$(ls -l "${VIDEO_DIR}"*.mp4 | wc -l)

# Calculate the number of files to move (15%)
VIDEO_COUNT_TO_MOVE=$((TOTAL_VIDEO_COUNT / 10))

# If there are no videos to move then exit the script
if [ "$VIDEO_COUNT_TO_MOVE" -le 0 ]; then
    echo "No videos to move. Exiting."
    exit 0
fi

# List all .mp4 files in the directory, sorted by modification date, take the oldest 10%
FILES_TO_MOVE=$(ls -ltr "${WEBTV_VIDEO_STORAGE_PATH_CHANNEL_2}*.mp4" | head -n ${VIDEO_COUNT_TO_MOVE})

# Move the old files to the archive directory
for file in $FILES_TO_MOVE
do
  mv "${file}" "${WEBTV_VIDEO_ARCHIVE_PATH_CHANNEL_2}"
    
  OPTIONAL: remove from channel 3 as well
  
  # Extract the base filename
  BASENAME=$(basename ${file})
    
  # Check whether file of the same name is in CHANNEL_3 and move if it is
  if [[ -f "${WEBTV_VIDEO_STORAGE_PATH_CHANNEL_3}/${BASENAME}" ]]; then
      mv "${WEBTV_VIDEO_STORAGE_PATH_CHANNEL_3}/${BASENAME}" "${WEBTV_VIDEO_ARCHIVE_PATH_CHANNEL_3}"
  fi
done