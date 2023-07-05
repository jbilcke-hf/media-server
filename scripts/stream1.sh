#!/bin/bash

COUNT=0

echo "Starting FFMPEG live stream for channel 1"
while true; do
    # if ((COUNT % 60 == 0)); then
    #     echo "--- video channel_1_video_list_a.txt ---"
    #     cat channel_1_video_list_a.txt
  
    #     #echo "--- channel_1_audio_list_a.txt ---"
    #     #cat channel_1_audio_list_a.txt
    # fi

    #sleep 1
    
    # ((COUNT++))

    # echo "Trying to create the final stream fo channel 1.."
    ffmpeg -y -nostdin -re -f concat -safe 0 -i "channel_1_video_list_a.txt" -loglevel error -c:v libx264 -preset veryfast -tune zerolatency -c:a aac -ar 44100 -f flv rtmp://localhost/live/webtv
    # ffmpeg -y -nostdin -re -f concat -safe 0 -i "channel_1_video_list_a.txt" -i "channel_1_audio_list_a.txt" -loglevel error -c:v libx264 -preset veryfast -tune zerolatency -c:a aac -ar 44100 -f flv rtmp://localhost/live/webtv
    
    # echo "Live stream for channel 1 got interrupted, will try again in 1 sec"
done