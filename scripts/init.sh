#!/bin/bash

# ------------- CHANNEL 1 --------------
echo "creating the storage folders for channel 1.."
mkdir -p $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_1
mkdir -p $WEBTV_AUDIO_STORAGE_PATH_CHANNEL_1

echo "creating the playlists for channel 1.." 
echo "ffconcat version 1.0" > channel_1_video_list_a.txt
echo "ffconcat version 1.0" > channel_1_video_list_b.txt
echo "ffconcat version 1.0" > channel_1_audio_list_a.txt
echo "ffconcat version 1.0" > channel_1_audio_list_b.txt

echo "file 'channel_1_video_list_b.txt'" >> channel_1_video_list_a.txt
echo "file 'channel_1_video_list_a.txt'" >> channel_1_video_list_b.txt
echo "file 'channel_1_audio_list_b.txt'" >> channel_1_audio_list_a.txt
echo "file 'channel_1_audio_list_a.txt'" >> channel_1_audio_list_b.txt

# ------------- CHANNEL 2 --------------
echo "creating the storage folders for channel 2.."
mkdir -p $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_2
mkdir -p $WEBTV_AUDIO_STORAGE_PATH_CHANNEL_2

echo "creating the playlists for channel 2.." 
echo "ffconcat version 1.0" > channel_2_video_list_a.txt
echo "ffconcat version 1.0" > channel_2_video_list_b.txt
echo "ffconcat version 1.0" > channel_2_audio_list_a.txt
echo "ffconcat version 1.0" > channel_2_audio_list_b.txt

echo "file 'channel_2_video_list_b.txt'" >> channel_2_video_list_a.txt
echo "file 'channel_2_video_list_a.txt'" >> channel_2_video_list_b.txt
echo "file 'channel_2_audio_list_b.txt'" >> channel_2_audio_list_a.txt
echo "file 'channel_2_audio_list_a.txt'" >> channel_2_audio_list_b.txt

# maybe we will try that again in the future
# echo "create the named pipes.."
# mkfifo video.pipe
# mkfifo audio.pipe
