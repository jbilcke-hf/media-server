const { v4 } = require('uuid')
const raw = {
  "input": "photorealistic space opera movie featuring various extraterrestrial forms and futuristic cities with renaissance influence",
  "captions": [
    "Photograph of an extraterrestrial humanoid squid standing in a futuristic Venetian style city with green cobblestones, under a purple sky, lit by bioluminescent lanterns. Renaissance influence, dramatic accent lighting, wide-angle, Canon EOS, high quality, cinematic, IMAX film grain, movie.",
    "Photograph of a massive, colorful spaceship hovering over the canals of the futuristic city, reflecting in the water. Night setting with dramatic ambient lighting, fisheye view, film grain texture, IMAX, Canon EOS, trending on Artstation.",
    "Highly detailed photograph of humanoid insect characters, in metallic fabric clothing, walking through a grand hallway lit by floating candlelight, in a renaissance-style building. Wide-angle, Canon EOS, featured in a movie, cinematic, IMAX film grain.",
    "Photograph of a panoramic view of a renaissance-influenced, futuristic cityscape from a ship's cockpit, under an orange sky and turquoise ground. Detail of intricate building designs, dramatic soft lighting, Dutch angle, Canon EOS, Imax, high quality, cinematic, awarded film.",
    "Photograph of a ship racing through a turquoise and pink canyon, visible through a window inside the ship. Characters reacting in the foreground. Dramatic backlight lighting, depth of field, Canon EOS, high quality, cinematic, IMAX film grain.",
    "Close-up photograph of a humanoid robot, reflecting the colors of a nebula, with the star-filled space in the background. Subtle polaroid effect, studio quality, ultra-realistic, Canon EOS, cinematic, IMAX film grain.",
    "Cinematic photograph of multiple spaceships hovering over a renaissance influenced city, with the colorful nebula reflecting on the building rooftops. Shot in landscape, with powerful backlight, Canon EOS, IMAX, movie scene, high quality, trending on Artstation.",
    "Detailed photograph of building facades inspired by Venetian architecture made of colorful, reflective metal. Strong neon lamp lighting on robot passing by. Wide angle shot, Canon EOS, high quality, cinematic, IMAX film grain.",
    "Photograph of a character entering a grand building, the structure combines futuristic and renaissance elements, with humanoid squids visible in the background. Nightclub lighting, Canon EOS, ultra-realistic, cinematic, IMAX film grain, trending on Artstation.",
    "Photograph of a canyon scene as a spaceship navigates through it, with shots of the rocky surface and colorful dust clouds. Direct sunlight, ultra-wide angle, Canon EOS, high quality, cinematic, IMAX film grain.",
    "Cinematic photograph of a large spaceship landing on green ground under a red sky, casting long shadows. Sunset light, ultra-realistic, Canon EOS, IMAX film grain, high quality, movie scene.",
    "Close-up photograph of a humanoid insect character's face, showing the intricate design and colors of its metal-like skin. Warm backlight, Canon EOS, ultra-realistic, cinematic, IMAX film grain, trending on Artstation.",
    "Photograph of a spaceship cockpit view of an upcoming nebula. Whole crew visible in shadows. Accent lighting, wide-angle, Canon EOS, studio quality, cinematic, IMAX film grain.",
    "Photograph of an alien Market Square surrounded by renaissance-styled futuristic buildings, bustling with various alien forms. Morning light, dramatic shadows, Canon EOS, high quality, IMAX film grain, cinematic.",
    "Photograph of humanoid squid character inside a cathedral-like ship, under bioluminescent lighting, Canon EOS, high quality, cinematic, IMAX film grain, trending on Artstation.",
    "Cinematic photograph of a spaceship chase scene in the airspace of a futuristic city, reflections of vibrant lights on the spaceship's surface. Night time, neon light strobes, Canon EOS, IMAX film grain, high quality.",
    "Photograph of a Venetian style bridge joining futuristic buildings with extraterrestrial characters crossing, under a purple alien sky. Evening, ambient lighting, Canon EOS, high quality, cinematic, IMAX film grain.",
    "Photograph of a massive, Jodorowsky's Dune-inspired spaceship looming over a cityscape, as seen from a character's point of view. Overcast with god ray lighting, Canon EOS, cinematic, IMAX film grain, movie scene.",
    "Close-up photograph of a humanoid robot's hand against a metallic Venetian style building, showing intricate engravings. Side lighting, Canon EOS, cinematic, IMAX film grain, high quality, trending on Artstation.",
    "Photograph of a movie scene featuring an alien fish market inside a tower, overlooking the horizon with multiple suns. Dusk light, Canon EOS, wide-angle shot, cinematic, IMAX film grain, trending on Artstation.",
    "Photograph of a humanoid insect character in a dark cloak, seen through the mist on a narrow city bridge over a canal. Crepuscular rays, Canon EOS, ultra-realistic, cinematic, IMAX film grain.",
    "Cinematic photograph of a space battle scene, featuring colorful spaceships against the backdrop of a large nebula. Wide angle, Canon EOS, high quality, IMAX film grain.",
    "Photograph of an alien character's face framed by a futuristic helmet, a colorful cityscape reflected on the visor. Ambient light, Canon EOS, high quality, cinematic, IMAX film grain, trending on Artstation.",
    "Detailed photograph of a giant robot statue in the foreground, with cityscape in the background, under a blue and pink sky. Direct sunlight, Canon EOS, high quality, cinematic, IMAX film grain, movie scene.",
    "Photograph of a spaceship flying low over an alien sea, with futuristic city in the background, under a yellow sunset. Canon EOS, cinematic, IMAX film grain, high quality, trending on Artstation."
  ]
}

const result = {
    "sequenceId": v4(),
    "lastGenerationAt": "",
    "videoPrompt": raw.input,
    "audioPrompt": "ambient deep house, futuristic and moden, drum machine, synth",
    "tags": [
      "trailer",
      "science-fiction"
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