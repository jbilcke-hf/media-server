const { v4 } = require('uuid')
const raw =     {
  "input": "a photorealistic movie set in the 60s, french new wave, with 60s haircuts, a bit esoteric, with a lot of concrete buildings, vintage cars and women, gentlemen dressed appropriately for the time period, various dialog, people having a 60s party in a villa with a pool, it is a genre film, a bit experimental and esoteric, there are some dreamy places (all geometric, white with only one or a few characters per scene etc).",
  "captions": [
    "Photorealistic movie of a mid-60s concrete villa facade, with soft ambient lighting and vintage cars parked in the driveway, gentlemen with slick hair and trench coats leaving the cars. French new wave style, wide-angle shot, cinematic, high details, ultra realistic on film.",
    "Photorealistic movie of a beautiful lady in a 60s dress, standing by the concrete structure, with a dreamy pool in the background. Dusk light creating fascinating shadows, French New Wave style, close-up shot, cinematic, stunning, high quality.",
    "Photorealistic movie of gentlemen and ladies dressed in 60s attire, mingling in the villa's lavish open-concept living room, high ceiling covered in geometric patterns, ambient light from glass chandeliers. French new wave style, bokeh shot, cinematic, highly detailed, ultra realistic.",
    "Photorealistic footage of a lady in a white, delicate 60s dress, strolling by the pool, past vintage furniture arranged for an outdoor party. Moonlight casts a surreal glow, French New Wave style, wide-angle shot with depth of field, cinematic, award-winning, high details, 4k.",
    "Photorealistic movie of elegant gents engrossed in a deep conversation, against the backdrop of geometric concrete walls, their cigarettes creating a thin layer of smoke. French new wave style, close-up shot with bokeh effect, cinematic and highly detailed.",
    "Photorealistic movie of the glamorous ladies dancing by the pool, their chiffon dresses flowing with the rhythm, soft lighting from the lanterns casting dreamy shadows. French New Wave style, wide-angle shot, cinematic, stunning, detailed skin, ultra realistic.",
    "Photorealistic movie of a gentleman leaning against a vintage car, a mystical, geometric amulet glinting under his shirt collar. Ambient lighting from nearby street lamps, French new wave style, close-up shot, cinematic, high quality, 4k.",
    "Photorealistic movie of a record player spinning a vinyl, while party guests sway to the rhythmic 60s music in the background. French New Wave style, close-up shot, cinematic, highly detailed, ultra realistic.",
    "Photorealistic movie of a lady being swept into a dance, her face expressing sheer joy, a concrete structure and party lights in the background. French New Wave style, bokeh shot, cinematic, award-winning, high details, 4k.",
    "Photorealistic movie of a couple having a quiet, esoteric conversation by the pool, only audible whispers and an atmospheric 60s tune pervading the scene. French new wave style, wide-angle shot, cinematic, stunning, highly detailed.",
    "Photorealistic movie of different shots of guests' faces, an interplay of laughter, whispers, and thoughtful silences, highlighting the range of human emotions. French New Wave style, montage of close-up shots, cinematic, award-winning, high details, 4k.",
    "Photorealistic movie of a sweeping view of the villa, bathed in the soft glow of dawn, the remnants of the party adding a sense of nostalgia. French new wave style, aerial shot, cinematic, stunning, highly detailed, ultra realistic." 
  ]
}

const result = {
    "sequenceId": v4(),
    "skip": false,
    "lastGenerationAt": "",
    "videoPrompt": raw.input,
    "audioPrompt": "ambient electronic music from the 50s kraftwerk inspiration",
    "tags": [
      "trailer",
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