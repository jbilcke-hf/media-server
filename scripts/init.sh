#!/bin/bash

# ------------- CHANNEL 1 --------------
echo "creating the storage folders for channel 1.."
mkdir -p $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_1
mkdir -p $WEBTV_AUDIO_STORAGE_PATH_CHANNEL_1

echo "creating the playlists for channel 1.." 
echo "ffconcat version 1.0" > channel_1_video.txt
echo "ffconcat version 1.0" > channel_1_audio.txt

# ------------- CHANNEL 2 --------------
echo "creating the storage folders for channel 2.."
mkdir -p $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_2
mkdir -p $WEBTV_AUDIO_STORAGE_PATH_CHANNEL_2

mkdir -p $WEBTV_VIDEO_ARCHIVE_PATH_CHANNEL_2


echo "creating the playlists for channel 2.." 
echo "ffconcat version 1.0" > channel_2_video.txt
echo "ffconcat version 1.0" > channel_2_video.txt


# ------------- CHANNEL 3 --------------
echo "creating the storage folders for channel 3.."
mkdir -p $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_3
mkdir -p $WEBTV_AUDIO_STORAGE_PATH_CHANNEL_3

mkdir -p $WEBTV_VIDEO_ARCHIVE_PATH_CHANNEL_3

echo "creating the playlists for channel 3.." 
echo "ffconcat version 1.0" > channel_3_video.txt
echo "ffconcat version 1.0" > channel_3_video.txt


# ------------- CHANNEL 4 --------------
echo "creating the storage folders for channel 4.."
mkdir -p $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_4
mkdir -p $WEBTV_AUDIO_STORAGE_PATH_CHANNEL_4

mkdir -p $WEBTV_VIDEO_ARCHIVE_PATH_CHANNEL_4

echo "creating the playlists for channel 4.." 
echo "ffconcat version 1.0" > channel_4_video.txt
echo "ffconcat version 1.0" > channel_4_video.txt
