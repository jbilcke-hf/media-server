#!/bin/bash

echo "Starting the video collection stream for channel 3.."
echo "listing files in $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_3*.mp4"
current_count=0

while true; do
    new_count=$(ls $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_3*.mp4 2> /dev/null | wc -l)

    if [ $new_count -ne $current_count ]; then
        echo "there are $new_count videos files for channel 3"

        echo "Updating playlist for channel 3.."
        current_count=$new_count
        files=($WEBTV_VIDEO_STORAGE_PATH_CHANNEL_3*.mp4)

        echo "ffconcat version 1.0" > channel_3_video_tmp.txt
        for (( i=0; i<${#files[@]}; i++ )); do
            echo "file '${files[$i]}'" >> channel_3_video_tmp.txt
        done
        rm -f channel_3_video.txt
        mv channel_3_video_tmp.txt channel_3_video.txt
    fi

    # the new playlist will only be updated after the current playlist ended
    # so there is no emergency here
    sleep 60
done