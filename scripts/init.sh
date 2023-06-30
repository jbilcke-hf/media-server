#!/bin/bash

echo "creating the storage folders.."
mkdir -p $WEBTV_VIDEO_STORAGE_PATH
mkdir -p $WEBTV_AUDIO_STORAGE_PATH

echo "create the named pipes.."
mkfifo video.pipe
mkfifo audio.pipe
