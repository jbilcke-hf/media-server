---
title: Media Server
emoji: 📡
colorFrom: gray
colorTo: black
sdk: docker
pinned: false
app_port: 8000
---

Media server 📡


The main code of the webtv is located inside the [media-server](https://huggingface.co/spaces/jbilcke-hf/media-server/tree/main) :

manual steps:
- human input to write a short paragraph describing a multi-shot video sequence
- manual submit it to GPT-4 to generate a list of video captions for each shot (the system instructions are extracts from a stable diffusion guide)
- commit the captions to the [playlist database](https://huggingface.co/spaces/jbilcke-hf/media-server/raw/main/database.json)

Inside the `media-server` space (generation process running in the background):
- for each prompt in the database
- generate a silent 3 seconds video clip with   Zeroscope V2 576w (hosted on Hugging Face Spaces)
- upscale the clip with  Zeroscope V2 XL (also a HF Space)
- perform frame interpolation with FILM (also a HF Space)
- storage in the Persistent Storage of the media-server Space

Inside the `media-server` space (streaming process running in the foreground):
- for each video file in the persistent storage folder
- add it to a new FFmpeg playlist (it's just a .txt file)
- broadcast it over the RTMP protocol using FFmpeg (in FLV format)
- diffusion of the stream using node-media-server

Inside the `AI-WebTV` space:
- display the stream using `mpegts.js`
- this doesn't work on iPhone, but now there is also a Twitch mirror

