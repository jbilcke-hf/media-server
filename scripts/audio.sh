#!/bin/bash

echo "starting the audio collection stream.."
while true; do
    sleep 1
    for f in $WEBTV_AUDIO_STORAGE_PATH*.mp3
    do
        ffmpeg -re -i "$f" -vn -acodec copy -f mp3 -y audio.pipe 2>/dev/null
    done
done