#!/bin/bash

COUNT=0

echo "Starting FFMPEG live stream of channel 3 to Twitch"
while true; do
    # Note: for now we also use channel 1 for audio!
    ffmpeg -y -nostdin -re -f concat -safe 0 -i channel_3_video.txt -stream_loop -1 -safe 0 -i channel_1_audio.txt -loglevel error -c:v libx264 -preset veryfast -tune zerolatency -c:a aac -ar 44100 -shortest -f flv rtmp://cdg02.contribute.live-video.net/app/$WEBTV_TWITCH_API_KEY
done