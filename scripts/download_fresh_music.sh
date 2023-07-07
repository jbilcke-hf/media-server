
echo "Downloading music files.."
wget https://www.dropbox.com/s/fzxqbu87ul3ctqa/pack1.zip
unzip -o pack1.zip -d .
cp *.m4a $WEBTV_AUDIO_STORAGE_PATH_CHANNEL_1
mv *.m4a $WEBTV_AUDIO_STORAGE_PATH_CHANNEL_2
rm -Rf __MACOSX
rm pack1.zip
