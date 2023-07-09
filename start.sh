#!/bin/bash

# initialize the stream pipes
bash ./scripts/init.sh

# ------------ UPDATE MUSIC ------------
# echo "skipping new music download"
bash scripts/download_fresh_music.sh

# ---------- CONTENT ALIGNMENT ---------
bash scripts/censorship.sh

# ----------- ARCHIVE OLD, UNINTERESITNG VIDEOS -------
bash scripts/archive_old_videos.sh

# ------ background processes ---------

bash scripts/interpolate.sh &

# starts the streaming server first, otherwise ffmpeg won't find it
node ./media-server.js &

sleep 1

# background process that creates an audio stream from audio files
bash scripts/audio1.sh &
bash scripts/audio2.sh &

# background process that creates a video stream from video files
# bash scripts/video1.sh &
bash scripts/video2.sh &
bash scripts/video3.sh &

sleep 1

# background process that sends data to the media server
# bash scripts/stream1.sh &
bash scripts/stream2.sh &
bash scripts/stream3.sh &

sleep 1

# here we have the possibility of using multiple workers
# buf if we do that, we will have to split the workload (split the prompts)
WEBTV_WORKER_INSTANCE_ID=1 npm run start