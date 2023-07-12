import { ChatClient } from "@kararty/dank-twitch-irc"

const promptQueue: string[] = []

const lowerCaseName = process.env.WEBTV_TWITCH_BOT_USERNAME
const username = lowerCaseName
const channel = lowerCaseName

const fullCaseName = "AI_WebTV"

// https://dev.twitch.tv/docs/irc/authenticate-bot/
// ex to generate a token:
// https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=<CLIENTID>&redirect_uri=http://localhost&scope=chat%3Aread+chat%3Aedit
const client = new ChatClient({
  username,
  password: `oauth:${process.env.WEBTV_TWITCH_BOT_TOKEN}`,
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
  const words = msg.messageText.split(" ")
  const [command, ...rest] = words

  if (msg.channelName === channel && words.includes(`@${fullCaseName}`)) {
    console.log("We have been directly mentioned")
    // client.say(channel, "yes, my lord?")
    // TODO: we should use a chatbot eg. HuggingChat to add prompts to the queue

    if (command === "!queue") {
      client.say(channel, `there are ${promptQueue.length} prompts in the queue`)
    } else if (command === "!add") {
      client.say(channel, "adding prompts to the queue isn't supported yet")
    }
  }
})

// See below for more events
client.connect()
client.join("ai_webtv")