import { ChatClient } from "@kararty/dank-twitch-irc"

const client = new ChatClient({
  username: process.env.WEBTV_TWITCH_USERNAME,
  password: `oauth:${process.env.WEBTV_TWITCH_API_KEY}`,
})

client.on("ready", () => {
  console.log("Successfully connected to chat")
})

client.on("close", (error) => {
  if (error != null) {
    console.error("Client closed due to error", error)
  }
})

client.on("PRIVMSG", (msg) => {
  console.log(`[#${msg.channelName}] ${msg.displayName}: ${msg.messageText}`)
})

// See below for more events
client.connect()
client.join("flngr")