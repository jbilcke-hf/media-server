#!/bin/bash

echo "Starting the audio collection stream for channel 2.."
current_count=0

while true; do
    new_count=$(ls $WEBTV_AUDIO_STORAGE_PATH_CHANNEL_2*.m4a 2> /dev/null | wc -l)

    if [ $new_count -ne $current_count ]; then
        echo "there are $new_count audio files for channel 2"

        echo "Updating audio playlists for channel 2..."
        current_count=$new_count
        files=($WEBTV_AUDIO_STORAGE_PATH_CHANNEL_2*.m4a)
        
        # Re-create the audio playlists
        echo "ffconcat version 1.0" > channel_2_audio_tmp.txt
        for (( i=0; i<${#files[@]}; i++ )); do
            echo "file '${files[$i]}'" >> channel_2_audio_tmp.txt
        done
        mv channel_2_audio_tmp.txt mv channel_2_audio.txt
    fi

    # the new audio playlist will only be updated after the current VIDEO playlist ended
    # so there is no emergency here
    sleep 60
done