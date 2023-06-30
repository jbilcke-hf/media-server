#!/bin/bash

echo "starting final stream loop.."
while true; do
    sleep 1
    echo "trying to create the final stream.."
    # ffmpeg -re -i video.pipe -i audio.pipe -c:v libx264 -preset veryfast -tune zerolatency -c:a aac -ar 44100 -f flv rtmp://localhost/live/webtv
    ffmpeg -fflags +discardcorrupt -re -i video.pipe -c:v libx264 -preset veryfast -tune zerolatency -c:a aac -ar 44100 -f flv rtmp://localhost/live/webtv
    
    echo "final stream got interrupted, will try again in 1 sec"
done