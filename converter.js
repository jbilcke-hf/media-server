const { v4 } = require('uuid')
const raw = {
  "input": "a 3d render, Pixar-like movie about animals boxing and fighting each other in various arenas",
  "captions": [
    "3D render > intense boxing scene with a kangaroo and a raccoon in a rustic wooden ring, surrounded by cheering crowd of various animals > Pixar-like style, cute and comical, detailed textures of wood, fur and red boxing gloves > low angle shot under morning sunlight, long shadows stretching, bokeh effect > cinematic, photorealistic, movie, award-winning",

    "3D render > cute lion in shorts, big red boxing gloves, sparring against a wiry, quick footed zebra, both bathed in a spectacular sunset > Pixar-like style, comical, with a desert savannah arena background > wide-angled perspective, detailed fur, hair, and smooth animation > cinematic, photorealistic, movie",

    "3D render > A humorously serious boxing event in a rainforest setting, monkey wearing golden gloves, fighting a towering bear > Pixar-like style, funny expressions, lush greenery, lighting from dappled sunlight > aerial view showcasing detailed ring, audience, canopy > cinematic, photorealistic, movie",

    "3D render > Attention grabbing scene of giraffe and fox, big red boxing gloves, in indoor professional fighting ring, surrounded by darkened crowd > Pixar-like style, hyper-details, dramatic, multicolored spotlights > close-up shot, accent lighting on fighters, grainy texture > shot with Arri Alexa LF > cinematic, photorealistic, movie",

    "3D-render > twin-tailed sly raccoon fighting a heavyweight rhino in an urban rooftop arena under neon lights > Pixar-like style, radiant colors, rooftops of buildings lining horizon > wide-angle night view, showing aerial shot cinematic, photorealistic, movie",

    "3D render > boxing match featuring muscular kangaroo and agile meerkat in ancient Roman Colosseum, filled with animal spectators > Pixar-like style, detailed stone textures, warm afternoon ambiance > 300 degree panoramic view, luscious 3D color depth > cinematic, photorealistic, movie",

    "3D render > dueling scene featuring bear and cougar in massive ring set amidst icy mountain peaks > Pixar-like style, gleaming icy textures, cool blue palette > pulled back camera shot showing full scope of mountains and fighting ring in sharp relief >  cinematic, photorealistic, movie",

    "3D-render > lanky flamingo sparring against sturdy hippopotamus in bustling metropolis, concrete ring with skyscrapers backdrop > Pixar-like style, dynamic movements, colorful feather vs thick skin texture > aerial shot that sweeps over the urban scenery > cinematic, photorealistic, movie",

    "3D render > night fight under the stars, lizard vs rabbit, in a ring surrounded by nocturnal animals in an open Savannah > Pixar-like style, vibrant but eerie, detailed skin and fur textures > dutch angle shot, lit from the sides highlighting the fighters' textures >  cinematic, photorealistic, movie",

    "3D render > dramatic fight of a well-muscled bull and a nimble mongoose in an old traditional Japanese dojo > Pixar like style, high quality lighting, ornate wood, paper panel textures > close-up shot showcasing fierce attacks and evasive maneuvers > cinematic, photorealistic, movie",

    "3D render > boxing match featuring an aggressive wolverine and an athletic cheetah in an underwater boxing ring, surrounded by oceanic life > Pixar-like style, glossy textures, rich colors and highly detailed animal skins > wide-angle perspective, notable scenery detail in the background > cinematic, photorealistic, movie",
    
    "3D render > Boxing match between a turtle and a squirrel on a boxing ring in the middle of a dense jungle, with various animals watching keenly > Pixar-like style, detailed and textured turtle shell and squirrel fur, ambient lighting > Jungle canopy shot above the ring against the backdrop of a setting sun > cinematic, photorealistic, movie"
  ]
}
const result = {
    "sequenceId": v4(),
    "skip": false,
    "lastGenerationAt": "",
    "videoPrompt": raw.input,
    "audioPrompt": "fast-paced combat music with guitars rifss and electronic drum loop",
    "tags": [
      "trailer",
      "comedy",
      "animation",
      "action"
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