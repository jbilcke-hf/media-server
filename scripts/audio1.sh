#!/bin/bash

echo "Starting the audio collection stream for channel 1.."
current_count=0

while true; do
    new_count=$(ls $WEBTV_AUDIO_STORAGE_PATH_CHANNEL_1*.m4a 2> /dev/null | wc -l)

    if [ $new_count -ne $current_count ]; then
        echo "there are $new_count audio files for channel 1"

        echo "Updating audio playlists for channel 1..."
        current_count=$new_count
        files=($WEBTV_AUDIO_STORAGE_PATH_CHANNEL_1*.m4a)
        
        # Re-create the audio playlists
        echo "ffconcat version 1.0" > channel_1_audio_list_a.txt
        echo "ffconcat version 1.0" > channel_1_audio_list_b.txt
        for (( i=0; i<${#files[@]}; i++ )); do
            echo "file '${files[$i]}'" >> channel_1_audio_list_a.txt
            echo "file '${files[$i]}'" >> channel_1_audio_list_b.txt
        done
        echo "file 'channel_1_audio_list_b.txt'" >> channel_1_audio_list_a.txt
        echo "file 'channel_1_audio_list_a.txt'" >> channel_1_audio_list_b.txt
    fi

    sleep 1
done