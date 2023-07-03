#!/bin/bash

echo "starting the audio collection stream.."
while true; do
    num_files=$(ls $WEBTV_AUDIO_STORAGE_PATH*.mp3 2> /dev/null | wc -l)
    if [ $num_files -eq 0 ]
    then
        sleep 1
    fi
    for f in $WEBTV_AUDIO_STORAGE_PATH*.mp3
    do
        echo "playing $f"
        ffmpeg -fflags +discardcorrupt -re -i "$f" -loglevel panic -vn -acodec copy -f mp3 -y audio.pipe 2>/dev/null
    done
done