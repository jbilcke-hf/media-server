#!/bin/bash

# initialize the stream pipes
bash ./scripts/init.sh

# ------------ UPDATE MUSIC ------------
# echo "skipping new music download"
bash scripts/download_fresh_music.sh

# ---------- CONTENT ALIGNMENT ---------
bash scripts/censorship.sh

# ----------- ARCHIVE OLD, UNINTERESTING VIDEOS -------
# bash scripts/decimate_content.sh

# ------ background processes ---------

# starts the streaming server first, otherwise ffmpeg won't find it
node ./media-server.js &

sleep 1

bash scripts/interpolate.sh &

sleep 1

# background process that creates an audio stream from audio files
bash scripts/audio1.sh &
# bash scripts/audio2.sh &

# [LEGACY] background process that creates a video stream from video files
# bash scripts/legacy_video3.sh &

sleep 1

# background process that sends data to the media server
bash scripts/channel_random.sh &
bash scripts/channel_random_twitch.sh &
bash scripts/channel_comedy.sh &
bash scripts/channel_documentary.sh &

sleep 1

# here we have the possibility of using multiple workers
# buf if we do that, we will have to split the workload (split the prompts)
WEBTV_WORKER_INSTANCE_ID=1 npm run start