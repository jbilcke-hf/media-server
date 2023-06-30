const NodeMediaServer = require('node-media-server')

const config = {
  /*
  auth: {
    api: true,
    api_user: process.env.WEBTV_MEDIA_SERVER_USER,
    api_pass: process.env.WEBTV_MEDIA_SERVER_PASSWORD
  },
  */
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

console.log("starting the RTMP server..")
var nms = new NodeMediaServer(config)
nms.run()