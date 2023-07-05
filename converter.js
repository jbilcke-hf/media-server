const { v4 } = require('uuid')
const raw = {
  "input": "japanese animation anime movie, featuring a llama with super powers",
  "captions": [
    "Animated content: a white llama with vibrant blue eyes and a multicolored, magical aura around it, standing in a verdant forest, next to an adorable golden-brown Shiba Inu. The atmosphere is drenched in dramatic lighting and a thick blanket of mysterious fog. The artstyle is Japanese animation, with exaggerated comical expressions on llama's face. Camera is rotating around the characters, capturing the moment in an epic composition. Cinematic, movie, film grain.",
    
    "Anime content: the white llama, draped in a celestial blue cloak, emanating energy waves, standing on a precarious, wooden bridge suspended over a deep chasm. The bridge is animated to appear old, with creaking planks occasionally breaking and falling. The Shiba Inu watches with visible concern in its eyes. Dramatic lighting, mist falling from above. Wide-angle shot, capturing the perilous height and depth, in the style of a movie. Cinematic, film grain.",
    
    "Animation: Close-up of the llama's face, portraying funny, exaggerated expressions, blink of its blue eyes brimming with determination. The Shiba Inu is baring its teeth in a comical grin, creating a humorous atmosphere. Highlighting the fur detail, soft, fluffy and well-kept. Background is blurry, using bokeh effect. Dramatic lighting highlighting characters. Cinematic, movie, ultra-realistic, film grain.",
    
    "Anime footage: the white llama hovering mid-air, surrounded by a glowing aura, firing beams of pink and purple energy from its hooves. Its face is comically scrunched up in concentration with the Shiba Inu, on the ground, barking supportively. Bright colors, high contrast. Cinematic lighting, from a low angle, capturing the action in high detail. Cinematic, movie, film grain, aerial view.",
    
    "Animated content: wide shot of the llama touching down on verdant green mountains riddled with enormous, blasted craters. Its clothes are charred but its posture is triumphant, the Shiba Inu circles around it, tail wagging at high speed. Animated cloud of dust, debris detail. Camera performs dolly zoom shot, capturing the breadth of destruction. Cinematic, movie, high contrast colors, film grain.",
    
    "Japanese animation: white llama and Shiba Inu navigate a bustling animated metropolis, hyper-detailed with neon-lit buildings, holographic signs, pedestrians in varied attire. Focus on characters, teeming environment. Camera pans from ground level to bird-eye view, showing the city's beautiful layout. Vibrancy of colors, detailed textures, complex lighting. Cinematic, movie, film grain.",
    
    "Animation: white llama and Shiba Inu entering a traditional Japanese dojo in sundown. Detailed texture of the classic architecture, painted sliding doors, tatami mats. Orange hue lingering in the air, moody and atmospheric lighting. Camera details environment in a tracking shot, ending with characters. Cinematic, movie, film grain.",
    
    "Anime video: llama and Shiba Inu seated at a shoji screen, enjoying ramen in beautifully detailed ceramic bowls. Lighting is soft, soothing. Characters are seen laughing, steaming ramen bowls and animated, large droplets of soup spray in the air for humorous effect. Detailed textures, colors, and shadows. Camera close-up, panning to cinematic long shot. Movie, film grain.",
    
    "Animated footage: white llama soaring through a starlit sky, detailed, heavenly vista as its backdrop. The Shiba Inu is snuggled comfortably on its back. God's rays, subtle, soft lighting from the moon. Detailed textures of characters' fur, llama's magical aura. Movie, film grain, cinematic, ultra high-definition.",
    
    "Anime movie footage of the white llama landing on a mountain peak as sun rises. The bright light casts dramatic shadows, illuminating the characters' relieved expressions. Vivid colors, detailed, glorious sunrise. The Shiba Inu hops off, still looking adorable despite the long journey. Camera at a low angle, slowly panning to capture this climactic scene. Cinematic, film grain, movie."
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