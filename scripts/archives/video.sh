#!/bin/bash

echo "starting the video collection stream.."
while true; do
    num_files=$(ls $WEBTV_VIDEO_STORAGE_PATH*.mp4 2> /dev/null | wc -l)
    if [ $num_files -eq 0 ]
    then
        sleep 1
    fi
    for f in $WEBTV_VIDEO_STORAGE_PATH*.mp4
    do
        echo "playing $f"
        ffmpeg -fflags +discardcorrupt -re -i "$f" -loglevel panic -vcodec copy -f mpegts -y video.pipe 2>/dev/null
    done
done