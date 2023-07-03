#!/bin/bash

echo "creating the storage folders.."
mkdir -p $WEBTV_VIDEO_STORAGE_PATH
mkdir -p $WEBTV_AUDIO_STORAGE_PATH

echo "creating the playlists.." 
echo "ffconcat version 1.0" > list_a.txt
echo "ffconcat version 1.0" > list_b.txt
echo "file './list_b.txt'" >> list_a.txt
echo "file './list_a.txt'" >> list_b.txt

echo "create the named pipes.."
mkfifo video.pipe
mkfifo audio.pipe
