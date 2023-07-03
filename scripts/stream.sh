#!/bin/bash

echo "Starting final stream loop.."
while true; do
    sleep 1
    echo "Trying to create the final stream.."
    ffmpeg -y -nostdin -re -f concat -safe 0 -i "list_a.txt" -i "audio_list_a.txt" -loglevel panic -c:v libx264 -preset veryfast -tune zerolatency -c:a aac -ar 44100 -f flv rtmp://localhost/live/webtv
    echo "Final stream got interrupted, will try again in 1 sec"
done