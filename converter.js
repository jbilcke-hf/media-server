const { v4 } = require('uuid')
const raw = {
  "input": "a photorealistic movie about a huge kraken squid attacking a large pirate sailing ship and ultimately crushing it, leaving only a few survivors",
  "captions": [
    "Movie scene of a high sea under a stormy sky, intense waves crashing into a looming pirate ship, all sails set, swinging on the harsh ocean, sunset, Canon EOS C300 Mark II, studio quality, 8k uhd, cinematic, photorealistic, movie.",
    "Movie scene follows a large kraken squid smoothly moving under the dark ocean surface, close to the pirate ship, high detailed, Adobe Premiere with Red Giant effects, 85 mm lens, extreme close-up, cinematic, photorealistic.",
    "Movie scene capturing giant shadowy squid tentacle quietly emerging from the deep sea, glistening in the fleeting light, harsh storm and rain pouring, Canon EOS C300 Mark II, depth of field, breathtaking, cinematic, photorealistic, movie.",
    "Movie scene of sailors on the pirate ship catching sight of the tentacle, their faces in horror under the dramatic lighting by random lightning bolts, Canon EOS C300 Mark II, high details, cinematic, photorealistic.",
    "Movie scene capturing the kraken squid tentacle attacking the pirate ship, crushing part of the structure, redwood splinters flying, Canon EOS C300 Mark II with Slo mo 240 fps, harrowing, intense, cinematic, photorealistic, movie.",
    "Movie scene depicts the massive squid tentacle sweeping across the pirate decks, with chaotic action of sailors scrambling, the ship seems ready to capsize, Canon EOS C300 Mark II, ultra realistic, breathtaking, cinematic, photorealistic.",
    "Movie scene showcasing entire pirate ship jerked off its axis by the powerful squid, water tidal wave engulfing it, 8k uhd, Canon EOS C300 Mark II, slow motion capture, studio quality, cinematic, photorealistic, movie.",
    "Movie scene capturing the fallout, the pirate ship now a wreck, crushed under the power of the kraken squid, flying debris, 8k uhd, Canon EOS C300 Mark II, slow-motion capture, cinematic, photorealistic, movie.",
    "Movie scene picturing the last dramatic moment, where the kraken vanishes into the depth of the ocean pulling the shipwreck with it, Canon EOS C300 Mark II, breathtaking visual, studio quality, cinematic, photorealistic, movie.",
    "Movie scene capturing handful of shipwrecked survivors on a makeshift life raft amidst the debris field, tiny makeshift sail, dusk light, Canon EOS C300 Mark II, sorrowful, high detailed, cinematic, photorealistic, movie."
  ]
}
const result = {
    "sequenceId": v4(),
    "skip": false,
    "lastGenerationAt": "",
    "videoPrompt": raw.input,
    "audioPrompt": "epic music for a pirate movie, lot of energy, adventure, action",
    "tags": [
      "trailer",
      "action",
      "adventure"
    ],
    "channel": "main",
    "shots": raw.captions.map((cap, i) => ({
      shotId: v4(),
      "index": i,
      "lastGenerationAt": "",
      "videoPrompt": cap,
      "audioPrompt": ""
    }))
}

console.log(JSON.stringify(result, null, 2))