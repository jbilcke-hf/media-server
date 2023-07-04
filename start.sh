#!/bin/bash

# initialize the stream pipes
bash ./scripts/init.sh

# ------ background processes ---------

# starts the streaming server first, otherwise ffmpeg won't find it
node ./media-server.js &

sleep 1

# background process that creates an audio stream from audio files
# bash scripts/audio.sh &

# background process that creates a video stream from video files
bash scripts/video.sh &

sleep 1

# background process that sends data to the media server
bash scripts/stream.sh &

sleep 1

# here we have the possibility of using multiple workers
# buf if we do that, we will have to split the workload (split the prompts)
WEBTV_WORKER_INSTANCE_ID=1 npm run start