#!/bin/bash

# ------------- CHANNEL 1 --------------
echo "creating the storage folders for channel 1.."
mkdir -p $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_1
mkdir -p $WEBTV_AUDIO_STORAGE_PATH_CHANNEL_1

bash download_fresh_music.sh

echo "creating the playlists for channel 1.." 
echo "ffconcat version 1.0" > channel_1_video.txt
echo "ffconcat version 1.0" > channel_1_audio.txt

# ------------- CHANNEL 2 --------------
echo "creating the storage folders for channel 2.."
mkdir -p $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_2
mkdir -p $WEBTV_AUDIO_STORAGE_PATH_CHANNEL_2

echo "creating the playlists for channel 2.." 
echo "ffconcat version 1.0" > channel_2_video.txt
echo "ffconcat version 1.0" > channel_2_video.txt
