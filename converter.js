const { v4 } = require('uuid')
const raw = {
  "input": "a photorealistic post apocalyptical movie, with city invaded by vegetation, huge carnivorous plants that walk and try to eat the remaining human survivors",
  "captions": [
    "Photograph of a post-apocalyptic cityscape at dawn, overtaken by jungle-like vegetation. Photorealistic style, panoramic wide-angle view, cinematic quality. High details, golden light casting long shadows, foggy weather conditions, vivid, lush green colors, dew on leaves, 2000s era derelict buildings.",
    "High-quality movie footage of a colossal carnivorous plant, ambulating through ruined streets shrouded in fog. Grim, yet lush, fascinating style, ultra-wide angle, cinematic, photorealistic. Rough textured bark, dew-drenched leaves shimmering in soft dawn light, wet concrete, and remnants of modern buildings.",
    "Photograph of a small group of human survivors observing from a hideout. Photorealistic, cinematic style, foreground detail of their distressed and dirty clothing, worried expressions, and makeshift weapons. The background is a blurred, richly detailed urban jungle at dawn.",
    "Movie shot of human survivors sprinting across a decrepit bridge covered by moss and vines, with colossal carnivorous plants hot in pursuit. High-resolution, suspenseful, dramatic lighting casting long shadows, sweat and fear on their faces, broken modern infrastructure contrasting vibrant, aggressive vegetation.",
    "Photorealistic movie still of a large carnivorous plant intricately entwined around a skyscraper. Captured during bright noon, under harsh sunlight, high resolution, breathtaking shot showcasing details including textured plant bark and colossal roots breaking through the concrete, juxtaposed against a cloudless, vivid blue sky.",
    "Cinematic movie snippet of a survivor climbing up a vine-covered building, trying to evade a carnivorous plant reaching for him. Shot in high resolution during midday, focus on the tense physical effort, grimy, scarred skin and terrified eyes, extensive urban jungle backdrop, clear sky above.",
    "High-quality movie scene showing a carnivorous plant catching a glimpse of a group of survivors in an underground sewer. Photorealistic style, low angle perspective of the plant peering down, with a flickering sliver of daylight illuminating mossy brick walls, surface water, and fearful human faces.",
    "Epic dusk shot of silhouette of human figures running across the horizon with carnivorous plants close behind. Photorealistic, cinematic quality, the details in the shadows and the sky painted with hues of orange, pink, and purple. The buildings lay in ruins, overgrown with vegetation.",
    "Night scene of the survivors huddled around a fire in an overgrown city park, old world monuments looming in the dark. Photorealistic details of the firelight flickering on their faces, cast-long shadows and bouncing off the textured leaves. The park overgrown with eerie vegetation, stars visible above the ruined skyline.",
    "Movie ending shot of dawn breaking over the vegetated cityscape, the survivors and plants in a temporary standoff. Photorealistic style, wide-angle view showing the changing sky colors, dew-drenched leaves reflecting the early light, the human figures small and resolute, holding their ground. Cinematic, quiet anticipation before the next battle."
  ]
}
const result = {
    "sequenceId": v4(),
    "skip": false,
    "lastGenerationAt": "",
    "videoPrompt": raw.input,
    "audioPrompt": "intense and fast-paced electronic and orchestra music with synthetisers, electronic drum machine",
    "tags": [
      "trailer",
      "comedy",
      "action",
      "adventure",
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