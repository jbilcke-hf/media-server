#!/bin/bash

# initialize the stream pipes
bash ./scripts/init.sh

# ------ background processes ---------

# starts the streaming server
node ./media-server.js &

sleep 1

# background process that creates an audio stream from audio files
nohup bash -c "scripts/audio.sh &"

# background process that creates a video stream from video files
nohup bash -c "scripts/video.sh &"

sleep 1

# background process that sends data to the media server
nohup bash -c "scripts/stream.sh &"

sleep 1

npm run start