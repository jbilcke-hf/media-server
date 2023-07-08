#!/bin/bash

echo "Starting the video collection stream for channel 4.."
echo "listing files in $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_4*.mp4"
current_count=0

while true; do
    new_count=$(ls $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_4*.mp4 2> /dev/null | wc -l)

    if [ $new_count -ne $current_count ]; then
        echo "there are $new_count videos files for channel 4"

        echo "Updating playliss for channel 4.."
        current_count=$new_count
        files=($WEBTV_VIDEO_STORAGE_PATH_CHANNEL_4*.mp4)

        echo "ffconcat version 1.0" > channel_4_video_tmp.txt
        for (( i=0; i<${#files[@]}; i++ )); do
            echo "file '${files[$i]}'" >> channel_4_video_tmp.txt
        done
        mv channel_4_video_tmp.txt channel_4_video.txt
    fi

    # channel 4 is an interactive channel, so we have tighter delays
    sleep 20
done