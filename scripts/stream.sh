#!/bin/bash

COUNT=0

echo "Starting final stream loop.."
while true; do
    if ((COUNT % 30 == 0)); then
        echo "--- video list_a.txt ---"
        cat list_a.txt
  
        echo "--- audio_list_a.txt ---"
        cat audio_list_a.txt
    fi
    sleep 1
    ((COUNT++))
    echo "Trying to create the final stream.."
    ffmpeg -y -nostdin -re -f concat -safe 0 -i "list_a.txt" -i "audio_list_a.txt" -loglevel error -c:v libx264 -preset veryfast -tune zerolatency -c:a aac -ar 44100 -f flv rtmp://localhost/live/webtv
    echo "Final stream got interrupted, will try again in 1 sec"
done