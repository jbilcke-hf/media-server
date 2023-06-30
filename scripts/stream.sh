echo "starting the FFMPEG stream, to merge video and audio and send it to the RTMP server.."
ffmpeg -i video.pipe -i audio.pipe -c copy -f flv $WEBTV_RTMP_URL