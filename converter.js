const { v4 } = require('uuid')
const raw = {
  "input": "a photorealistic movie about two robot musician DJs making movie in front of dancing humans",
  "captions": [
    "Ultra HD footage of a metallic robot DJ vigorously mixing music in a grungy-looking hangar turned into a club. With the spotlight casting shadows on rough, textured walls, the atmosphere is electric, filled with dancing humans in vintage leather jackets, against the backdrop of dim ambient lighting. Cinematic, photorealistic, movie environment.",

    "4k footage of an energetic crowd of humans bouncing to the beats laid down by a pair of robot DJs. The setting is a high class, chic nightclub. Soft, ambient light falls on velvet curtains and brushed aluminum frames creating striking contrasts. The floor trembles with rhythms making the scene a lively, motional dance floor. Photorealistic, cinematic and movie-like.",

    "Aerial view of a robot DJ stirring up an crowd in an outdoor luxury house party at dusk. The house is extravagantly lit and the twilight sky adds a solemn yet mystic backdrop to the scene. The shadows and sparkles of a lit swimming pool accentuate the cinematic feel of the dancing humans. Photorealistic, movie quality.",

    "Wide-angle shot capturing a human DJ captivating a crowd of dancing robots in a futuristic bar. The neon lights play off the smooth, polished surfaces of the robots, while the atmosphere is given texture by the crowd's synchronized movements. The color scheme is dominated by blues and purples. Movie-style, Photorealistic.",

    "Full HD, close-up view of the DJ's hand manipulating the turntable, with the crowd of humans and robots visible in the reflective surface. The figures, lights, and movements merge into an abstract dance party painting. The lens captures every detail from fingerprints to light reflections. Cinematic, photorealistic, movie quality.",

    "A stunning panoramic view of a duo of human DJs orchestrating an explosive concert for a massive gathering of robots. The concert is held in a gigantic steel warehouse, with endless rows of robots participating. Contrasting cold steel surfaces with pulsating warm lights, the aerial view presents a breathtaking spectacle. Cinematic, photorealistic, movie.",

    "Ultra HD, ground level view of robots and humans sharing a dance floor, their movements synchronized to the hypnotic rhythms of a robot DJ. Located in a rustic bar, the scene mixes modern robots and vintage decors in an interesting juxtaposition. The atmosphere is warm and lively. Movie-style, Photorealistic.",

    "4k footage of Robot DJ surrounded by humans, all engrossed in the music. Set in a high-end nightclub with LED-lit dance floor that reflects off the robots' polished metal bodies to create a sea of lights. Humans in fashionable attire join in the dance, creating a striking statement of coexistence. Cinematic, photorealistic, movie-quality.",

    "Close-up shot of a human DJ manipulating the DJ equipment, his intense concentration mirrored in the intent gazes of watching robots. Exposed circuitry and vivid lights give the scene a futuristic cinematic feel. The details on the DJ equipment and the robots are highlighted at dusk under accent lighting. Photorealistic, Movie-style.",

    "Extensive shot capturing a pair of robot DJs going head-to-head to outmatch each other with their music skills. The setting is an old factory, where the rustic setting contrast starkly with modern robots. The crowd of robots and humans watches eagerly, their faces lit by diverse stage lights. Photorealistic, cinematic, movie quality.",

    "An extreme close-up shot of a robot DJ's hands manipulating the sliders and knobs, its metallic fingers reflecting the neon lights, showcasing the intricate designs of the robot. In the blurred background, one can make out the dancing figures of humans. The atmosphere is energetic and loud. Photorealistic, movie style, cinematic.",

    "A wide shot of a human DJ surrounded by dancing robots in a simple, ambiently lit bar. The warm wooden tones of the bar contrast with the cool metallic tints of the robots. The room's mood is casual yet vibrant, with ecstatic robots moving in synchronized patterns. Cinematic, Photorealistic, Movie-style."
  ]
}

const result = {
    "sequenceId": v4(),
    "skip": false,
    "lastGenerationAt": "",
    "videoPrompt": raw.input,
    "audioPrompt": "techno house music edm",
    "tags": [
      "trailer",
      "music"
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