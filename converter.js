const { v4 } = require('uuid')
const raw = {
  "input": "Scenes from a movie about a young magician who explore a damp, misty forest, see a majestic deer, who transform into a beautiful and friendly witch, which talks to the magician. She gives him a magical wand. The magician travels back to his magical school of magic on his witch broom, just in time to fight a huge orc goblin which is trying to destroy the magical school. The magical schools is beautiful, looking a bit like an eerie chapel, alone in the middle of a misty lake. The shots should all be beautiful, using appropriate large or shot range shots, with golden hour for the castle shot, nice camera movement etc.",
  
  "captions": [
    "Photorealistic movie shot of a young magician, with his navy blue wizard robes adorned with silver moons and stars, his brown leather boots, and his feathered hat stepping hesitantly into a damp, misty forest filled with moss-laden ancient trees and ferns underbrush in the morning light, shot in Cinema 4D, showcasing a high degree of photorealism.",
    
    "Cinematic video of a majestic deer, its majestic antlers laced with flourishing green foliage, emerging from the foggy backdrop bathed in the warm glow of the morning sun, forming a stark contrast against the earthly hues of the surrounding misty forest, captured in 8K UHD, to unveil the breathtakingly realistic details.",

    "Cinematic rendition of the deer morphing into the earth-toned witch, in ethereal display of light and magical elements, the misty forest alive with twinkling fairy lights that perfectly mimic the real world counterparts, shot in 4k UHD, reveling in its award-winning photorealism.",

    "Movie scene of the witch and the young magician, dressed in his navy robe with starry print, in earnest conversation on a moss-covered bridge, washed in the dewy morn's light, with their expressive eyes twinkling, the Cinema 4D camera movement emulating the human eyes' attention to detail.",

    "Feature film quality shot of the kind witch, in her botanical-themed earthy toned robe, gifting the young magician, in his iconic starry, navy robe, the intricately designed magical wand aglow with magical energy, in the dimly lit yet mystifying forest, brought to life in unparalleled photorealistic detail by an 8K UHD camera.",

    "HD video in Cinema 4D capturing the young magician in his navy blue robes, etched with silver stars and moons, his feathered hat still firmly in place, riding his enchanted broomstick over lush forests, under the morning sky painted with pastel hues, showcasing its award-winning photorealistic details.",

    "Photorealistic, wide-angle video of the grand magical school, resembling a serene, slightly eerie chapel, in the middle of a misty lake, bathed in the ethereal glow of the setting sun, masterfully captured in 8K UHD that showcases each texture, color, and the play of lights and shadows in high detail.",

    "Award winning movie snapshot of the looming Orc Goblin, its hideous features enhanced by the subtly dramatic sunlight, emerging ominously onto the school's sacred grounds, painted in sharp, realistic detail and contrasted against the seemingly tranquil lake and verdant surroundings, all captured in 4K UHD with photorealistic CGI effects.",

    "High quality 4k UHD video featuring the young magician, still garbed in his signature navy robes adorned with silver moons and stars, ready to confront the monster through the plush velvet drapes and marble archways of the school, the surrounding fog adding a sense of ethereal beauty to the tense scenario, captured in ultra-realistic Cinema 4D.",

    "Cinematic highlight video in 4K quality portraying the young magician, in his iconic wizard outfit with shimmering moons and stars, standing defiantly as he casts a spell that illuminates the ornate interiors of the dark school, serving a visual feast of rich colors, deep shadows, and flawless textures, embodying the true essence of ultra-realistic cinematography."
  ]
}
const result = {
    "sequenceId": v4(),
    "skip": false,
    "lastGenerationAt": "",
    "videoPrompt": raw.input,
    "audioPrompt": "epic orchestral music, for a movie about magicians",
    "tags": [
      "trailer",
      "cinema",
      "fantasy",
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