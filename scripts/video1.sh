#!/bin/bash

echo "Starting the video collection stream for channel 1.."
echo "listing files in $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_1*.mp4"
current_count=0

while true; do
    new_count=$(ls $WEBTV_VIDEO_STORAGE_PATH_CHANNEL_1*.mp4 2> /dev/null | wc -l)

    if [ $new_count -ne $current_count ]; then
        echo "there are $new_count videos files for channel 1"

        echo "Updating playlists for channel 1.."
        current_count=$new_count
        files=($WEBTV_VIDEO_STORAGE_PATH_CHANNEL_1*.mp4)
        
        # Re-create playlists
        echo "ffconcat version 1.0" > channel_1_video_list_a.txt
        echo "ffconcat version 1.0" > channel_1_video_list_b.txt
        for (( i=0; i<${#files[@]}; i++ )); do
            # echo "file '${files[$i]}'"
            if (( i%2 == 0 )); then
                echo "file '${files[$i]}'" >> channel_1_video_list_a.txt
            else
                echo "file '${files[$i]}'" >> channel_1_video_list_b.txt
            fi
        done
        echo "file './channel_1_video_list_b.txt'" >> channel_1_video_list_a.txt
        echo "file './channel_1_video_list_a.txt'" >> channel_1_video_list_b.txt
    fi

    sleep 1
done