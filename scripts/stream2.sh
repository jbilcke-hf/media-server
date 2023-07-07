#!/bin/bash

COUNT=0

echo "Starting FFMPEG live stream for channel 2"
while true; do
    # Note: for now we also use channel 1 for audio!
    ffmpeg -y -nostdin -re -f concat -safe 0 -i channel_2_video.txt -stream_loop -1 -safe 0 -i channel_1_audio.txt -loglevel error -c:v libx264 -preset veryfast -tune zerolatency -c:a aac -ar 44100 -shortest -f flv rtmp://localhost/live/webtv2
done