#!/bin/bash

echo "Starting the video collection stream.."
echo "listing files in $WEBTV_VIDEO_STORAGE_PATH*.mp4"
current_count=0

while true; do
    new_count=$(ls $WEBTV_VIDEO_STORAGE_PATH*.mp4 2> /dev/null | wc -l)

    if [ $new_count -ne $current_count ]; then
        echo "there are $new_count videos files"

        echo "Updating playlists..."
        current_count=$new_count
        files=($WEBTV_VIDEO_STORAGE_PATH*.mp4)
        
        # Re-create playlists
        echo "ffconcat version 1.0" > list_a.txt
        echo "ffconcat version 1.0" > list_b.txt
        for (( i=0; i<${#files[@]}; i++ )); do
            echo "file '${files[$i]}'"
            if (( i%2 == 0 )); then
                echo "file '${files[$i]}'" >> list_a.txt
            else
                echo "file '${files[$i]}'" >> list_b.txt
            fi
        done
        echo "file './list_b.txt'" >> list_a.txt
        echo "file './list_a.txt'" >> list_b.txt
    fi

    sleep 1
done