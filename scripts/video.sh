#!/bin/bash

echo "starting the video collection stream.."
while true; do
    sleep 1
    for f in $WEBTV_VIDEO_STORAGE_PATH*.mp4
    do
        echo "playing $f"
        ffmpeg -re -i "$f" -vcodec copy -f mpegts -y video.pipe 2>/dev/null
    done
done