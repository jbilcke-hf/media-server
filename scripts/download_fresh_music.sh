
echo "Downloading music files.."
cd $WEBTV_AUDIO_STORAGE_PATH_CHANNEL_1
wget https://www.dropbox.com/s/fzxqbu87ul3ctqa/pack1.zip
unzip -o pack1.zip -d .
rm -Rf __MACOSX
rm pack1.zip
