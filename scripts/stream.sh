echo "starting the FFMPEG stream, to merge video and audio and send it to the RTMP server.."
ffmpeg -re -i video.pipe -i audio.pipe -c:v libx264 -preset veryfast -tune zerolatency -c:a aac -ar 44100 -f flv rtmp://localhost/live/webtv