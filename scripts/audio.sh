#!/bin/bash

echo "Starting the audio collection stream.."
current_count=0

while true; do
    new_count=$(ls $WEBTV_AUDIO_STORAGE_PATH*.mp3 2> /dev/null | wc -l)

    if [ $new_count -ne $current_count ]; then
        echo "there are $new_count audio files"

        echo "Updating audio playlists..."
        current_count=$new_count
        files=($WEBTV_AUDIO_STORAGE_PATH*.mp3)
        
        # Re-create the audio playlists
        echo "ffconcat version 1.0" > audio_list_a.txt
        echo "ffconcat version 1.0" > audio_list_b.txt
        for (( i=0; i<${#files[@]}; i++ )); do
            if (( i%2 == 0 )); then
                echo "file '${files[$i]}'" >> audio_list_a.txt
            else
                echo "file '${files[$i]}'" >> audio_list_b.txt
            fi
        done
        echo "file './audio_list_b.txt'" >> audio_list_a.txt
        echo "file './audio_list_a.txt'" >> audio_list_b.txt
    fi

    sleep 1
done