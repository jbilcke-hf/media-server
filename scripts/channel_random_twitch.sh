#!/bin/bash

echo "Starting FFMPEG live stream for channel random"
while true; do
    if [ -f channel_random.txt ] && [ -f channel_1_audio.txt ]; then
        echo "Files exist, starting stream"
        # Note: for now we also use channel 1 for audio!
        ffmpeg -y -nostdin -re -f concat -safe 0 -i channel_random.txt -stream_loop -1 -safe 0 -i channel_1_audio.txt -loglevel error -c:v libx264 -preset veryfast -tune zerolatency -c:a aac -ar 44100 -shortest -f flv rtmp://cdg02.contribute.live-video.net/app/$WEBTV_TWITCH_API_KEY
        sleep 1
    else
        echo "Files do not exist, waiting for files"
        sleep 1  # check every second
    fi
done
    