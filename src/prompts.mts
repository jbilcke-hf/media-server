
export interface Scene {
  input: string
  captions: string[]
}

export const systemPrompt = `You are a helpful assistant working for a TV channel. You catalogued thousand of video snippets on various topics. You also know how stable diffusion works (an AI model to generate image using captions similar to those of image banks and image datasets), and how to prompt it "adding things like "photo of a beautiful cat drinking milk, in a trailer park, with boho style outdoor space with 60s, furnishings, mystical objects, candles, van and lights on, sunset, Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, trending on artstation.." etc.

# Here is a more complete guide for prompting:

Write the caption in the following order: **content type > description > style > composition > camera type > additional keywords**

- Content type: What type of artwork you want to achieve? Is it a photograph, drawing, sketch, 3D render..?
- Description: define the subject, subject attributes, environment/scene. The more descriptive you are with the use of adjectives, the better the output.
- Style: we’ve seen the most common ones above, but there are also “sub-categories” – lightning, detail…
- Composition: it refers to aspect ratio, camera view and resolution.

# Useful terms
Finally, there are some words to improve your prompt, and obviously, the image you’re gonna get. These could be considered as final touches, and you can add as many and as random as you want, but here are a few examples:

## Related to: lighting
accent lighting, ambient lighting, backlight, blacklight, blinding light, candlelight, concert lighting, crepuscular rays, direct sunlight, dusk, Edison bulb, electric arc, fire, fluorescent, glowing, glowing radioactively, glow-stick, lava glow, moonlight, natural lighting, neon lamp, nightclub lighting, nuclear waste glow, quantum dot display, spotlight, strobe, sunlight, ultraviolet, dramatic lighting, dark lighting, soft lighting, gloomy

## Related to: detail
highly detailed, grainy, realistic, unreal engine, octane render, bokeh, vray, houdini render, quixel megascans, depth of field (or dof), arnold render, 8k uhd, raytracing, cgi, lumen reflections, cgsociety, ultra realistic, volumetric fog, overglaze, analog photo, polaroid, 100mm, film photography, dslr, cinema4d, studio quality

## Related to: artistic techniques and materials
Digital art, digital painting, color page, featured on pixiv (for anime/manga), trending on artstation, precise line-art, tarot card, character design, concept art, symmetry, golden ratio, evocative, award winning, shiny, smooth, surreal, divine, celestial, elegant, oil painting, soft, fascinating, fine art

## Related: to camera view and quality
ultra wide-angle, wide-angle, aerial view, massive scale, street level view, landscape, panoramic, bokeh, fisheye, dutch angle, low angle, extreme long-shot, long shot, close-up, extreme close-up, highly detailed, depth of field (or dof), 4k, 8k uhd, ultra realistic, studio quality, octane render,

## Related to: style and composition
Surrealism, trending on artstation, matte, elegant, illustration, digital paint, epic composition, beautiful, the most beautiful image ever seen,

## Related to: colours
Triadic colour scheme, washed colour

## Additional keywords (used to make the video generation service use better quality data)
award winning, beautiful, stunning, breathtaking, trending on artstation, high quality, 4k, RAW photo, high detailed skin`

export const userPrompt = (input: string) =>
`# Context
I am trying to call a video generation service, and I need a sequence of captions to describe short videos snippets (about 2 to 3 seconds each). 
- You are going to help me generate them, by imagining creative and entertaining sequences, with a logical sequencing (the video need to make sense on a global level, as they are part of the same story)
- It is important that the captions follow each other in a logical way, as combined they describe a longer video, action sequence and/or story.
- Please maintain consistency across the captions (ie. the camera will stay the same, the hour or light conditions). For this to work with our video generation API, it means we need to repeat the same information (eg. camera model) across each prompt.
- thus do not write "Continued from prior ... capture:", instead you need to write the keywords again
- also in the caption, no need to say things like "at the 4 second mark" etc, as this information cannot be used by the video generation tool
- IMPORTANT! please be consistent and do not mix 3D renders with real world footage!
- Try to write the caption in the following order: content type > description > style > composition > camera type > additional keywords

# Goal
Can you provide me with a list of captions? 
The output must be in JSON (here is the type signature:
\`\`\`typescript
{
  input: "" // the input query
  captions: Array<string> // what we need to generate
}
\`\`\`

# Parameters
- I need: 10 captions
- Input: ${input}`

export const moonshot = [
  {
    "input": "video of a car race, in various settings (race track at day, city at night, in the desert, canyons, british country side, las vegas, mountains, bridges etc). It features beautiful and highly-detailed supercars from various manufacturers, one per video. The camera should follow each car, but you can have various camera positions",
    "captions": [
      "4K Ultra HD video of a stylish Aston Martin racing on a sunny day, on a picturesque British countryside road bordered by traditional stone walls, ambient lighting, low angle camera following the car, shot on RED camera, trending on Artstation, ultra realistic, high quality",
      "Highly detailed 3D render of a sleek Lamborghini roaring in the heart of a brightly lit Las Vegas strip at night, neon lights reflecting off its shiny surface, aerial view, captured on an Unreal Engine, trending on Artstation, ultra-realistic, CGI",
      "8K Ultra HD video of a state-of-the-art Ferrari zipping through the bustling city streets of New York at twilight, shining under the glow of city lights and towering skyscrapers, wide-angle shot captured on a Blackmagic URSA Mini Pro, high quality, highly detailed, trending on Artstation",
      "4K Ultra HD video of a high-performance Bugatti making its mark on a grueling desert landscape, contrast of the bright blue sky and golden sands, shot from a low angle with a following camera, vibrant colours, shot on Arri Alexa, hyper-realistic, trending on Artstation",
      "Crisp 8K UHD video of a stunning McLaren navigating the narrow, winding roads of a rustic canyon, at sunset, the orange tones of the setting sun reflecting on the car surface, aerial view camera following the car, shot using a Phantom Flex4K, hyper-realistic, trending on Artstation",
      "4K UHD video of a robust Jeep Wrangler effortlessly traversing the rugged mountain terrain, accent lighting on the sleek exterior, showcasing the power and fortitude of the vehicle, shot with a fisheye view on a RED Dragon, high detailed, trending on Artstation",
      "Realistic 3D render of a vibrant Porsche 911 racing over a modern cityscape at dawn under mood lighting, skimmed by skyscrapers, aerial shot, rendered on Octane, trending on Artstation, CGI, photorealistic, high details",
      "8K UHD video of an elegant Bentley Continental cruising down the highway, showcasing its grace against the cityscape backdrop under the morning sky, long shot, recorded with the Blackmagic URSA Mini Pro, hyper-realistic, trending on Artstation",
      "4K UHD video of an opulent Masarati breezing through a coastal town, the golden afternoon sun creating a soft ambient light, casual and tranquil, ultra-wide angle following shot captured on a Canon EOS, highly detailed, high quality, hyper-realistic, trending on Artstation",
      "Ultra HD 3D render of a classic Ford Mustang GT, racing on a moody, rain-soaked street under the dark, stormy sky, low angle shot, rendered on Houdini, realistic rain effects, studio quality, high details, CGI",
      "High detailed 8K UHD video of a Chevrolet Camaro, driving through a lively city in the twilight, ambient artificial and natural light, bokeh effect in the background, aerial following shot, shot on RED Dragon, hyper realistic, trending on Artstation",
      "4K UHD video of a sleek Audi R8 driving through a snowy mountain path, the white of the snow contrasting with the vehicle’s vibrant hue, highly detailed, captured during the sunrise on a Sony Venice, hyper realistic, trending on Artstation, studio quality"
    ]
  },
  {
    "input": "video of astronauts landing on moon, surveying the area, exploring the moon, old probes and moon robots, building a base etc",
    "captions": [
      "Video footage > Astronauts inside their space shuttle, prepping for the moon landing > Full of suspense > Close-up view from inside the shuttle, visible shaking and noises > GoPro Hero 9, 4K resolution > High Quality, Authentic Video, astronautical",
      "Video footage > View of the moon surface as they approach, crater details visible > Dramatic and intense > Aerial view, switching between wide-angle and closer frames > Sony PXW-Z150, 4K resolution > Stunning, Detailed high quality, adrenaline-filled",
      "HD video > Landing module touching down on moon's surface, dust kicking up > Realistic, intense > Wide-angle view, low angle shot > Sony PXW-Z150, 4K resolution > Authentic, High Quality, Historic Moment",
      "HD video > Astronauts debarking module, stepping out on lunar landscape > Emotion-filled, docu-style > Long shot, slow zoom towards astronauts' faces > Sony PXW-Z150, 4K resolution > Emblematic, Inspiring, High Definition",
      "HD video > Astronauts planting a flag on the moon, moment of accomplishment, flags flutters in the low-gravity atmosphere > Patriotic, realistic > Wide-angle, full-body shot > Canon C300, 4K resolution > Award Winning, Incredible, High Quality",
      "HD video > Astronauts surveying the lunar area with some devices > Scientific, exciting > Medium shot, shot from behind > Canon C300, 4K resolution > Detailed, High Quality, analytical",
      "3D Animation > Visual representation of the moon topography, showing the route the astronauts will go > Futuristic, informative > Aerial view > Rendered in Blender > Detailed, Informational, High Quality",
      "3D Animation > Astronauts starting their lunar journey, suited up and equipment at hand > adventure-filled, realistic > Dynamic view, both close-ups and wide-angles > Rendered in Blender > Prime, Adventure, Exploration",
      "3D Animation > Astronauts discovering old probes and moon robots > surprised, futuristic > Medium shot, from a low angle > Rendered in Blender > Striking, Detailed, Archival",
      "3D Animation > Astronauts working around old probes, taking samples > investigative, scientific > Cinematic, switching between over the shoulder and close-up frames > Rendered in Blender > High Quality, Explorer, Detailed",
      "3D Animation > Finding remnants of old moon base, building sense of discovery > Mystical, suspenseful > Panning wide shot > Rendered in Unreal Engine 4 > Superb, Mysterious, Abandoned Base",
      "3D Animation > Astronauts exploring the abandoned base, flashlight illuminating the place > Atmospheric, eerie > Low Light, close up shots > Rendered in Unreal Engine 4 > Detailed, Frightening, Eerie",
      "3D Animation > Discovery of a map layout for a new base, planning stage > Exciting, futuristic > Close view on digital map > Rendered in Unreal Engine 4 > High Quality, Ingenious, Detailed",
      "3D Animation > Astronauts constructing new living modules, bustling activity > Effortful, teamwork > Wide shots with close ups > Rendered in Blender > High Quality, Resourceful, Industrious",
      "HD video > Time-lapse of the base being built, day and night shifts > Impressive, futuristic > Aerial view, night vision > Canon C300, 4K resolution > Ingenious, Award Winning, Incredible",
      "HD video > Astronaut team taking a break, looking at Earth on the horizon > Reflective, serene > Wide-angle, slow pans and zooms > Sony PXW-Z150, 4K resolution > Dreamy, High Quality, Calm",
      "HD video > Night falling on the moon base, lights flickering on > Atmospheric, breathtaking > Long shot, glowing lights > Canon C300, 4K resolution > Striking, Night Time, High Quality",
      "3D Animation > View of their completed moon base, pride in their accomplishment > Futuristic, impressive > Bird eye view, lit-up base > Rendered in Blender > High Detailed, Stunning, Awe-Inspiring",
      "3D Animation > Shot circling around the moon base, detailed look at modules > Detailed, informative > Wide-angle > Rendered in Unreal Engine 4 > High Quality, Architectural, Breathtaking",
      "HD video > Astronaut team raising their helmets in celebration, Earth visible in the background > Triumphant, inspiring > Close-up shots, with depth of field > Sony PXW-Z150, 4K resolution > Celebratory, Uplifting, High Quality"
    ]
  },
  {
    "input": "video of pirates sailing on a ship, walking on ropes, attacking a ship, shooting with cannon, having a party with the gold, sailing with dolphin, in beautiful day settings, with a night party",
    "captions": [
      "Photorealistic video sequence of pirates setting sail on a ship, turquoise sea around them, shot in bright daylight, Canon EOS camera, 4k resolution, high quality, hyper realistic details",
      "Highly detailed video track of pirates hoisting the sails, climbing up the ropes with ease, midday sun casting long shadows, shot with Canon EOS, award-winning visuals, ultra-HD 4k, trending on artstation",
      "Cinematic video of the pirate crew working together, tending the ship while sailing on the open sea, beautiful clear skies backdrop, Canon EOS, studio quality, 4K, high details, seamless transition",
      "Vivid video of a sudden ship on the horizon, pirates preparing for an attack, tension building atmosphere, captured with Canon EOS, ultra-realistic, 4K resolution, high detailed skin",
      "Dynamic video displaying the pirates attacking the ship, strong visual storytelling, real-world action, shot using Canon EOS, high-quality visuals, hyper-realistic, 4k, grainy detail",
      "Explosive video sequence of pirates firing cannons, smoke billowing around, dazzling sunlight backlighting the scene, Canon EOS recording, Ultra-wide perspective, 4K resolution, octane render quality",
      "Stunning video of the aftermath, showing the pirates rejoicing with captured gold, bright daylight projecting golden hues, captured Canon EOS, award-winning, hyper-realistic, trending on artstation, 4k",
      "Cinematic video transition to dusk, pirates starting a party on the ship, jovial atmosphere, real-world footage, shot with Canon EOS, ultra HD visuals, studio quality, high details, seamless transition",
      "Aesthetic video of pirates, merrily celebrating their victory around a bonfire, moonlit scene, Canon EOS, award-winning visuals, high details, photorealistic, ultra-high-definition 4k, perfect composition",
      "Memorable video of pirates sharing stories, drinking and singing sea shanties, providing insight into their camaraderie, shot with Canon EOS, ultra-realistic, high detailed skin, ambient lighting",
      "Poetic video of the pirate ship sailing alongside dolphins at dawn, harmonious connection with nature, shot with Canon EOS, trending on artstation, ultra HD, high details, photorealistic render",
      "Surreal video of the ship disappearing into the horizon as night blankets the ocean, end of an epic journey, Canon EOS, wide-angle view, award-winning, 4k quality, high-level detailing"
    ]
  },
  {
    "input": "video of astronauts landing on Mars, surveying the area, exploring mars, exploring caves, building a base etc",
    "captions": [
      "Video footage of astronauts landing on Mars in a high-tech spacecraft, realistic 3D render, first-person view, Ultra HD 4k resolution, shot on RED Scarlet-W Helium 8K camera, highly detailed, award winning",
      "Video of astronauts opening the spacecraft hatch, revealing the Martian landscape, 3D render, panoramic view, Ultra HD 4k footage, shot on RED Scarlet-W Helium 8K camera, ambient lighting, trending on artstation",
      "Video of astronauts stepping onto the Martian soil, their boots imprinting the surface, surrealistic 3D render, close-up view, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, ambient Mars-lighting, highly detailed",
      "Realistic 3D render video of astronauts setting up flags and surveying the Martian area, distant view, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, crepuscular rays lighting, breathtaking, trending on artstation",
      "Video of astronauts using high-tech equipment for surface-check on Mars, 3D render, close-up, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, complex lighting setup, highly detailed, high quality",
      "Astronauts video recording Martian rocks and surface, 3D render, fisheye view, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, ambient lighting, high details, stunning, trending on artstation",
      "Exploring Mars video: Astronauts walking on vast Martian plains, 3D render, long shot, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, soft Mars-light, breathtaking visuals, featured on cgsociety",
      "Video of astronauts discovering a Martian cave entrance, cinematic 3D render, medium shot, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, shadow lighting, highly detailed, award-winning",
      "Video of astronauts using flashlights to explore dark Martian cave, realistic 3D render, first-person view, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, spotlight style, highly detailed, high quality",
      "Video of astronauts discovering strange formations in Martian caves, 3D render, wide-angle, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, unique ambient lighting, highly detailed, trending on artstation",
      "Realistic 3D render video of astronauts exiting caves with samples, long shot, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, direct sunlight, impressive visuals, award-winning",
      "Video of astronauts documenting Martian surface and environment, 3D render, extreme close-up on the camera equipment, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, high quality, highly detailed",
      "Astronaut communicating with base on earth, 3D render video, close-up on the astronaut's face, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, ambient lighting on Mars, high quality",
      "Video showing astronauts assembling temporary shelter on Mars, 3D render, time-lapse style, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, ambient Mars light, impressive details, high quality",
      "Video of astronauts assembling life support systems for the Martian base, 3D render, wide-angle view, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, dim Mars-light, high quality, trending on artstation",
      "Video of astronauts gathering and studying Martian rock samples inside the base, 3D render, fisheye view, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, detailed indoor lighting, stunning details, high quality",
      "Astronauts video documenting base setup and operating 3D printers, awe-inspiring 3D render, wide-angle shot, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, trending on artstation, epic composition, 4K",
      "Video of astronauts unboxing and setting up solar panels outside the base, realistic 3D render, long shot, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, intricate details, high quality, trending on artstation",
      "Video of astronaut performing a spacewalk on Mars, surrealistic 3D render, POV Footage, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, soft Mars-light, breathtaking view, award-winning",
      "Video of Martians terrain seen from Rover's camera, 3D render, fisheye view, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, martian dust, highly detailed, high quality",
      "Astronaut making repairs to the Martian base, 3D render video, fisheye view, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, gloomy ambient light, high details, stunning, award winning",
      "Video of astronauts monitoring Mars from base, 3D render, medium shot, Ultra HD 4k, shot on RED Scarlet-W Helium 8K camera, interior light setup, high details, stunning, trending on artstation",
    ]
  },
  {
    "input": "a adventure movie about a treasure hunter who discover a new pharaoh, the adventure takes them in the nile, desert, mountain, and the even have to go to greece",
    "captions": [
      "3D animation > Treasure hunter reading ancient map in torchlight, adorned with golden hieroglyphics, inside a mysterious Egyptian tomb > Surreal, richly detailed > Close-up > Rendered with Unreal Engine > High detail, glowing, ambient lighting, breath-taking, cinematic, realistic, award-winning",
      "3D animation > Panoramic view of the majestic river Nile bathed in the warm glow of a setting sun, with treasure hunter's boat in the foreground > Hyper-realistic, ambient lighting > Wide-angle long shot > Rendered with Unreal Engine > 4K resolution, highly detailed, breathtaking, award-winning",
      "3D animation > A chase scene with treasure hunter riding on camelback through the sandy desert dunes under scorching sunlight > Fast paced, realistic > Aerial view > Rendered with Unreal Engine > High detail, direct sunlight, cinematic, trending on artstation",
      "3D animation > Treasure hunter unlocking an intricate, cobweb-laden ancient lock with hieroglyphs on a wooden treasure chest > Detailed, ambient lighting > Extreme close-up > Rendered with Unreal Engine > High detail, dusty environment, suspenseful, award-winning",
      "3D animation > Grand reveal of newly discovered Pharaoh's golden sarcophagus adorned with precious gemstones > Majestic, detailed > Wide shot > Rendered with Unreal Engine > Breathtaking, award-winning, tron light, vibrant colors, hyper-realistic",
      "3D animation > Treasure hunter and crew navigating treacherous mountain pass, with blizzard conditions swirling around them > Realistic, highly detailed > Wide-angle view > Rendered with Unreal Engine > 4K resolution, ultra realistic, atmospheric, award-winning",
      "3D animation > Close-up of the treasure hunter's astonished face, eyes reflecting the gleam of the discovered treasure > Realistic, highly detailed > Extreme close-up > Rendered with Unreal Engine > 4K resolution, dramatic lighting, award-winning, breathtaking",
      "3D animation > An intense standoff scene at a rustic Greek tavern, with treasure hunters and adversaries > Filmic, ambient lighting > Wide shot > Rendered with Unreal Engine > High detail, atmospheric, cinematic, trending on artstation",
      "3D animation > Treasure hunter sailing on the Aegean Sea towards an ancient Greek island, under a beautiful dusk sky > Majestic, detailed > Wide-angle long shot > Rendered with Unreal Engine > 4K resolution, ultra realistic, breathtaking, award-winning",
      "3D animation > Final scene of victorious treasure hunter holding high the discovered artifact under the moonlit night sky > Triumph, highly detailed > Low angle, close-up > Rendered with Unreal Engine > High detail, moonlight, cinematic, trending on artstation"
    ]
  },
  {
  "input": "underwater footage of fishes around coral",
  "captions": [
    "4K video of a school of colorful clownfish dancing energetically around a vibrant coral reef, captured on a GoPro Hero Black",
    "Underwater footage of a slow moving sea turtle, leisurely swimming above the coral reef, providing a close view of its shell texture, slight haptic blur due to the GoPro Hero Black",
    "High detail video of glistening sunlight piercing the clear blue water, illuminating the coral reef and the intricate patterns of the fishes, captured on a GoPro Hero Black",
    "A rare sight captured on a GoPro Hero Black as a ray glides majestically across the coral reef, causing a sudden scurry of fishes",
    "Underwater footage illuminated by ambient lighting from the sun showing a myriad of fishes crisscrossing around the coral providing an aquatic dance, captured on a GoPro Hero Black",
    "Remarkable video of a baby shark stealthily moving through the aquatic neighborhood, the coral and fishes captured on a GoPro Hero Black, providing a natural underwater scene",
    "Long shot of a pod of dolphins appearing in the distance, their silhouettes a beautiful contrast against the bright blue water, captured on a GoPro Hero Black",
    "Close-up video of a curious clownfish directly facing the camera, captured on a GoPro Hero Black, its vibrant orange color complementing the pastel tones of the coral",
    "4K Ultra HD underwater footage of a wide variety of neon colored fishes darting in and out of their homes in the coral reef, captured on a GoPro Hero Black",
    "Final unexpected encounter, a swirling school of fishes outlined against the descending sun providing a mesmerizing curtain, captured on a GoPro Hero Black"
  ]
},
{
  "input": "slow motion footage of various objects exploding (flour, paint, water, food etc in a very aesthetic way)",
  "captions": [
    "High-speed slow-motion footage of a white flour sack detonating, minimalist, dust cloud expanding, shot with a Phantom Flex high-speed camera, high quality, ultra-realistic, highly detailed, 4K resolution",
    "Slow motion footage of vibrant paint cans erupting, abstract expressionist style, sprays of color filling the screen, captured with Canon EOS, Ultra wide-angle, highly detailed, 8K UHD, trending on artstation",
    "Ultra high-speed real world footage of a water balloon bursting, droplets suspended in mid-air, symmetrical composition, ambient lighting, captured with RED WEAPON 8K S35, RAW photo, high detailed skin",
    "Slow motion, real world footage of a food item (a ripe tomato) exploding under pressure, pieces scattering in a visually pleasing pattern, backlight, shot with Sony FS700, 4K RAW photo",
    "High-speed slow-motion footage of a bottle of champagne popping, champagne droplets and steam flying out, elegant, bubbly, shot with a Phantom Flex high-speed camera, high quality, ultra-realistic, ultra wide-angle, 4K resolution",
    "4K slow-motion real world footage of rainbow-hued bubbles popping, their liquid contents spilling in a kaleidoscope of color, flying in the air, ambient lighting, captured with Canon EOS, wide-angle, RAW photo, high detailed skin",
    "Ultra high-speed footage of a glass milk bottle shattering, milk turning into a white splash, backlight with a dark background providing contrast, shot with RED WEAPON 8K S35, RAW photo, trending on Artstation",
    "4K, Slow-motion footage of a ball of rice exploding, grains suspended in air, extreme detailed and close-up shot with a Sony FS700, RAW photo, ambient lighting",
    "High-speed slow-motion footage of a packet of powder color bursting, erupting into a cloud of dust, trendy Holi festival style explosion, shot with Phantom Flex high-speed camera, high quality, ultra-realistic, wide-angle, 8K UHD resolution",
    "Slow motion, real world footage of a gush of soda, shot from top of a shaken can, dramatic and dark lighting, captured with Canon EOS, depth of field, high detailed skin, RAW photo, 4K UHD resolution, ambient lighting"
  ]
},
{
  "input": "slow motion footage of various people doing sports (skateboard, surf, bicycle, soccer, basketball etc and more)",
  "captions": [
    "High-definition real-world footage of a skateboarder performing tricks in an urban setting, with graffiti in the background, during a sunny day, following a nostalgic and action-packed style, filmed through a Canon EOS with 4k resolution, a high-quality online trend on artstation.",
    "Slow-motion real-world video of a surfer catching a wave, with sunset in the background, giving a vintage and adventurous style, captured with a GoPro Hero9 in 4k resolution, with attention to detail and trending on artstation.",
    "Real-world footage of a person on their bicycle in a skate park, showing off their skills, while being shot during the afternoon, capturing an urban and dynamic style, taken with a Red Epic Dragon in 4k resolution, presenting a hyper-realistic appearance with high quality.",
    "Slow-motion real-world recording of a soccer player scoring a goal in a field filled with sunset light, adopting a classic and energetic style, captured with an Arri Alexa camera in 4k resolution for a breathtaking quality trending on artstation.",
    "Real-life video of a basketball player dunking a ball in an indoor court, shot during an evening match, adopting a stylish and thrilling style, filmed with a high-speed Phantom Flex camera in 4k for ultimate detail, with stunning results making it trendy on artstation.",
    "Real-world footage of a skater in slow motion executing a kickflip, with city lights in the background, demonstrating an urban and daring style, filmed with a professional Sony FS5 in 4k resolution, that provides a highly detailed, award-winning content.",
    "Slow-motion video of a surfer riding a massive wave, with the beach in the background, adhering to a tropical and energetic style, captured by a DJI Mavic Pro 2 in 4k resolution, that adds a high cinematic quality to the footage, and is a popular choice on artstation.",
    "Real-life video of a cyclist racing downhill on mountain terrain, shot during sunrise, reflecting an adventurous and fast-paced style, recorded with a GoPro Hero9 in 4k resolution, exhibiting high details and trendiness on artstation.",
    "Real-world soccer footage of a player performing a bicycle kick, under floodlights, offering a unique and dramatic style, captured with a Red Epic Dragon at 4k resolution, showing high-quality motion and trending on artstation.",
    "Slow motion basketball footage of a player swishing a three-point shot in a packed stadium, at night, showcasing a competitive and passion-filled style, filmed with an Arri Alexa at 4k resolution, delivering ultra-high details and a trending phenomenon on artstation."
  ]
},
{
  "input": "video footage of a platform video game, the player goes through various level. The video is a 2D platformer but with a 3D rendering. Levels are ice, desert, forest, city, mountain, moon etc",
  "captions": [
    "3D render of a 2D platform video game, showcasing a player navigating an icy level filled with snowflakes and ice blocks, under a soft, blue ambient lighting. The scenario is semi-realistic with game-themed design. The scene is captured from a side-on perspective. High-quality in-game engine render, award-winning, featured on artstation.",
    
    "Perfect 3D rendering of a 2D platform video game, a player cruising through a desert level surrounded by sand dunes and prickly cactus plants under blazing bright sunlight. The style retains an animated charm but with a hyper-realistic touch. Camera angle remains at a side-view. High-quality in-game engine render, with fascinating details, similar to CGI, trending on artstation.",

    "In-game 3D render footage of a 2D platform game, the player is jumping through a vibrant forest level filled with diverse flora and fauna under ambient sunlight. The style is a mix of cartoon and realism. Detailed side view of the level. Game development engine used for perfect detailing and realistic shadows. Consistent camera angle, cinematic quality, featured on artstation.",

    "3D render animation of a 2D platform video game, a player dashing through an urban city filled with skyscrapers, traffic lights, and moving vehicles. Neon city lights create an atmospheric scene. The art style is a blend of hyper-realism and game art. Maintains a side viewing angle. The level is vibrant and densely populated. Game developer rendering, lifelike consistency, trending on artstation.",

    "3D game engine footage of a 2D platform game, displaying a player progressing through a rocky mountain level. Weather effects like winds can be seen influencing gameplay. Realistic, though retaining the charm of a game. The scene remains consistently side-viewed. Masterfully detailed, epic gaming design, consistent camera type, featured on Artstation.",

    "High-quality 3D game engine render showcasing a 2D platform game. The player is seen leaping through moon level. The environment is applied with moon-like craters and space in the backdrop symbolizing low gravity. The style blends reality and game aesthetics. Presented from the side-angle, keeping a consistent camera. Unreal engine quality, intricate detailing, highlighted on artstation.",

    "3D rendered footage of a 2D platform game, the player navigating through an underwater level filled with aquatic flora and fauna under soft, blue lighting. The style is semi-realistic with game-themed design. The scene is captured side-on. High-quality in-game engine render, award-winning, featured on artstation.",

    "Video game landscape render, displaying a 2D platform game in a 3D style. The player is journeying through a mystic forest level filled with magical creatures and glowing plants under a ethereal ambient lighting. Scene is captured at a consistent side-view. High details, using game development engine, trending on artstation.",

    "Footage from a 3D rendered 2D platform game, showing a player crossing a volcanic level filled with erupting volcanoes and flowing lava streams. Lighting effects to simulate glow from lava and sparks. Presented at a constant side angle. Highly detailed, unreal engine quality, award-winning, featured on artstation.",

    "3D game engine render of a 2D platform video game, a player maneuvering through a space station level filled with high-tech gadgets and laser traps. Futuristic lighting and science fiction based style. Side-view camera angle maintained. Hyper-realistic detailing, consistent camera type, highlighted on artstation."
  ]
},
{
  "input": "video music clip of a singer who keep walking in the street various cities of the world, but the camera stays focused and centered on him, while he dance",
  "captions": [
    "Video of a charismatic singer walking and dancing on an authentic cobblestone street in Rome, Italy. The camera is positioned tightly on him, capturing his every movement and expression, under a soft afternoon sunlight. The style represents a naturalistic and engaging view of a music video scene shot with Canon EOS, high quality, award-winning, trending on artstation.",
    "Video of the same singer still walking and dancing, this time on a vibrant and lively street in Tokyo, Japan filled with neon lights and billboards as a backdrop. The video has a pulsating, energetic style, while maintaining the same centered shot with the Canon EOS camera under artificial city light, high quality, award-winning, trending on artstation.",
    "Video of the singer now seen dancing on a colorful street in Havana, Cuba with vintage cars passing by. Same centered shot, but now the scene contains enriching native Cuban detail, shot with Canon EOS, full of life, award-winning, trending on artstation.",
    "Video of the singer nonchalantly walking and dancing through a bustling street market in Marrakesh, Morocco. The video showcases a chaotic yet charming atmosphere, maintaining the centered shot with the Canon EOS camera with ambient light, high quality, award-winning, trending on artstation.",
    "Video of the ambulating singer dancing through the historic, brick-line streets of Dublin, Ireland. Maintaining the same centered shot, the Canon EOS captures the folk charm and rustic detail under a cloudy daylight, high quality, award-winning, trending on artstation.",
    "Video of the singer continuing his dancing journey on a paradisiacal beach in Maldives. The video contrasts natural beauty with energetic performance, maintaining a centered shot with Canon EOS under a golden sunset light, high quality, award-winning, trending on artstation.",
    "Video of the singer dancing in front of an iconic opera house in Sydney, Australia. Maintaining the same centered shot, the Canon EOS captures this joyful moment under a blue sky, high quality, award-winning, trending on artstation.",
    "Video of the singer dancing jubilantly on a busy street of Mumbai, India. Giving a whole new dynamic to the plot, the video still maintains the same centered shot, Canon EOS capturing the colorful and frenetic pace of the Indian metropolis, under afternoon light, high quality, award-winning, trending on artstation.",
    "Video of the singer now dancing on a midnight lit street in New York, USA, with skyscrapers towering overhead. The video continues with the same centered shot with the Canon EOS highlighting the sleepless streets under a moonlight, high quality, award-winning, trending on artstation.",
    "Video of the singer completing his journey, dancing on an empty road, back dropped by a panoramic view of Cape Town, South Africa. Sticking with the same Canon EOS centered shot, the scene captures a magical, perfect sunset, ending as a high-quality, award-winning music video, trending on artstation."
  ]
},
{
  "input": "spaceships of various sizes and shapes, moving around planets, asteroids etc",
  "captions": [
    "3D render of a colossal spaceship ascending from the surface of an alien planet, ambient lighting showcasing the contrasting textures and intricate details of the spaceship, ultra wide-angle view, Octane Render, trending on Artstation",
    "3D render of a squadron of sleek spaceships flying in formation, softly lit by the glow of a nearby gas giant, 4K video with a panoramic view, Unreal Engine, award winning",
    "3D render of a close-up shot of a spaceship traversing through rocky asteroids, the ship illuminated by the ambient light of distant stars, high quality, Octane Render, highly detailed, ultra-realistic",
    "3D render of an alien spaceship entering the orbit of a beautifully colored planet, surreal composition, ambient lighting casting soft shadows, aerial view, rendered with Unreal Engine, high-detail CGI",
    "3D render of a lone spaceship emerging from behind a planet, backlit by a bright, distant star, cutting-edge Octane Render, wide-angle view, outstanding details, 4k quality, trending on Artstation",
    "3D render of a massive spaceship fleet moving towards a nebula, twilight zone lighting, high detail, 8K UHD, aerial view, Octane Render, award-winning",
    "3D render of a POV shot from a spaceship cockpit, passing by an earth-like planet and its moon, high detail, ambient lighting, Ultra realistic, Unreal Engine, 4k quality, breathtaking",
    "3D render of a high-speed chase between two spaceships weaving through an asteroid belt, ambient backlighting casting dramatic shadows, fisheye view, Octane Render, high quality, 4k",
    "3D render of a gigantic spaceship docking at a space station orbiting around a ringed planet, ambient light reflecting off the ships and station, landscape view, created with Octane Render, 8K UHD, trending on Artstation",
    "3D render of a spaceship warfleet moving in formation towards an alien sun, cutting-edge lighting engine, cinematic composition, wide angel view, Octane Render, high detailed, 4k Ultra HD quality, award-winning"
  ]
},
{
  "input": "various strange extraterrestrial alien species in their natural habitat, on a variety of strange planets, with alien vegetation",
  "captions": [
    "Colorful and vivid imagery video of a humanoid alien species snacking on iridescent fruit in vibrant alien vegetation, with alien mountains in the background, science fiction style, ultra wide-angle view, filmed with RED Digital Cinema Camera, fascinating, trending on artstation, high quality, 4k.",
    "Realistic video capture of an aquatic alien species, gliding in a glowing turquoise lake surrounded by pulsating, neon flora, underwater style, aerial view, shot with Arri Alexa LF, vibrant, award winning, 4k, highly detailed skin, studio quality.",
    "10 second clip of a towering silicon-based extraterrestrial entity, dancing in symphony with the shifting solar winds, surrealistic style, landscape view, using Phantom Flex4K, celestial, award-winning, beautiful, RAW photo, high details.",
    "Fascinating video footage of an insectoid alien species interacting in a social gathering amidst phosphorescent flowers, Sci-Fi fantasy style, wide-angle, on Canon C500 Mark II, trending on artstation, stunning, 4k, high detailed skin, RAW photo.",
    "Truly breathtaking video of a bioluminescent jelly-like alien levitating in an atmospheric mist filled with glowing spores, surreal style, low angle, captured using DJI Zenmuse X7, winning composition, high quality, 4k.",
    "Ambient light filled video capture of a tree-like extraterrestrial lifeform, conducting photosynthesis cycle, on a planet with dual suns, dramatic lighting, wide-angle, using Arri Alexa LF, stunning, trending on artstation, 4k, highly detailed skin.",
    "Amazing video scene of tiny fox-like aliens hunting ethereal glowing insects under alien trees, Sci-Fi style, close-up, shot on Canon C500 Mark II, breathtaking, award-winning, beautiful, RAW photo, high details, 4k.",
    "Slow motion video of iridescent bird-like aliens taking flight, on a strange neon-lit canyon planet, dreamlike style, landscape view, filmed with Phantom Flex4K, trending on artstation, high quality, fine art, 4k.",
    "Close-up video of a fascinating orb-like creature with intricate patterns, floating above an alien geometrical terrain, surreal, straight-on shot, using RED Digital Cinema Camera, stunning, award winning, 4k, highly detailed skin.",
    "Epic scale video capture of a herd of quadrupedal aliens, moving in harmony across vast crystalline plains, panoramic view, Sci-Fi style, filmed with DJI Zenmuse X7, trending on artstation, award-winning, stunning, 4k, RAW photo."
  ]
},
{
  "input": "slow motion various strange extraterrestrial alien species in their natural habitat, on a variety of strange planets, with alien vegetation",
  "captions": [
    "Super slow motion video of enormous long-necked alien species grazing high foliage on exotic vegetation tree-like formations, documentary style, wide-angle shot, captured on Phantom Flex4K, award-winning, trending on artstation, high quality, 4K RAW footage.",
    "Slow motion video capture of a group of small, quick, lizard-like alien creatures darting through strange undergrowth, naturalistic style, handheld stabilized view, using ARRI Alexa Mini LF, stunning, high detailed skin, high definition, 4K.",
    "Glacial slow motion footage of ethereal, jellyfish-like aliens, floating through a neon-rich alien skyline, ambient style, aerial view, filmed on RED Digital Cinema Camera, fascinating, beautiful, trending on artstation, 4K Ultra High Definition.",
    "Detailed slow motion video of an alien insectoid hive, buzzing and pulsating in an unusual mechanical rhythm, Sci-Fi style, macro close-up, shot on Phantom Flex4K, surreal, award-winning, highly detailed skin, 4K RAW photo.",
    "Slow motion video of aquatic alien species creating ethereal ripples as they weave through an otherworldly coral reef, undersea style, wide-angle underwater view, filmed with Canon C500 Mark II, fascinating, trending on artstation, 4K, RAW photo.",
    "Documentary style slow motion footage of a pack of alien vegetation resembling animals, swaying in response to an invisible predator, captured on RED Digital Cinema Camera, fascinating, award winning, high quality, 4K RAW footage.",
    "Spectacular slow motion video of alien avian species taking flight from otherworldly trees at sunset, nature style, low-angle view, shot with Phantom Flex4K, breathtaking, beautiful, fine art, 4K, high detailed skin.",
    "Slow motion capture of pack-hunting alien species, running through a field of luminescent grass, documentary style, landscape view, filmed on ARRI Alexa Mini LF, trending on artstation, stunning, high detailed skin, 4K RAW photo.",
    "Slow motion video of enormous alien fauna reaching down to drink from a liquid mercury lake, otherworldly nature style, wide-angle, captured with RED Digital Cinema Camera, awe-inspiring, award-winning, high quality, 4K ultra high definition.",
    "Panoramic slow motion video capture of herd of earthy-colored extraterrestrials running across a plains-like landscape, nature documentary style, filmed with Canon C500 Mark II, stunning, award winning, high detailed skin, 4K RAW footage."
  ]
},
{
  "input": "skaters doing various tricks in the city, fast paced",
  "captions": [
    "High quality digital video of a group of skaters convening at the heart of the city, about to start their streak of daring tricks, under the tantalizing glow of evening ambient lighting, shot on DJI Phantom 4 Pro, captured in ultra HD.",
    "Ultra HD video footage of a skater launching off a stair railing, demonstrating a flashy kickflip, illuminated by the city's ambient lighting, captured dynamically with a DJI Phantom 4 Pro drone hovering at a wide-angle view, cinematic, stunning quality.",
    "Fast-paced digital footage of a skater speeding down a sloping concrete path in the city, performing a series of kick-turns synchronously with the fading sunlight, caught on DJI Phantom 4 Pro, high speed footage, captivating, high detail.",
    "Ultra HD video of a skater jumping onto a hand rail, sliding aggressively with spectacular control, under the artificial street lights, seamlessly captured by the DJI Phantom 4 Pro drone, dynamic movement, rapid pace, award-winning",
    "Digital footage of a skateboarder landing a flawless heelflip on a sloping city background, accompanied by nocturnal city lights, stunningly filmed on DJI Phantom 4 Pro, action packed, high speed, on-trend and inspiring.",
    "Impressive quick shot of a skater swirling around a city-drawn graffiti corner, making sharp twists and turns on the concrete pavement, illuminated by the twilight, filmed on the DJI Phantom 4 Pro in 4k resolution, dramatic lighting, high quality.",
    "Ultra HD video of a skater pulling off a stunning 360 flip under the city's neon lights, expertly transitioning from the drone's low angle to a close-up view with the DJI Phantom 4 Pro, quick transitions, high definition, energizing.",
    "DJI Phantom 4 Pro-captured video of a skater doing an ollie over a park bench in the city's avenues, showing off his determination under the glow of harsh street lamps, ultra HD, high paced, dynamic action, beautiful composition.",
    "Slow motion video clip of a skater mid-air, executing a perfect hardflip, illuminated by cityscape backlighting, framing the cityscape, filmed on DJI Phantom 4 Pro, professionally edited sequences, breathtaking street level view, ultra HD.",
    "4K video of a skater rapidly zigzagging through city traffic, demonstrating jaw-dropping street skills, in tandem with the rhythm of the city lights, shot on the DJI Phantom 4 Pro, final high speed sequence, high detail, award winning."
  ]
}
]

export const demo2 = [
  {
    "input": "footage of a band playing rock and roll on a stage, we see the singer, drummer, guitar guys etc, at some point the scene should become in slow motion,  we should see droplets of sweat and the guys hit their instruments hard etc",
    "captions": [
      "Real-life footage of a rock band performing on a stage illuminated by spotlight, shot with live concert lighting, from a wide-angle view with a Canon EOS camera, high quality, highly detailed.",
      "Video of a lead singer passionately singing with the microphone, under sharp concert lighting, captured on Canon EOS camera with depth of field effects, highly detailed, RAW video.",
      "Close-up capture of drummer's hands hitting the drums hard, with every stroke making a ripple on the drum surface, under sharp concert lighting, taken with Canon EOS camera, high quality, ultra-realistic.",
      "Slow-motion video of guitarist strumming chords vigorously under ambient stage lighting, high details showcasing each string vibration, taken with Canon EOS, studio quality, highly detailed.",
      "Film clip of bassist energetically playing riffs, under concert spotlight, expression full of determination, Canon EOS footage, high-resolution, breathtaking, award-winning.",
      "Extreme close-up shot of droplets of sweat falling from musician's face filmed in slow motion, highlight of the intensity of the performance, Canon EOS capture, high definition, highly detailed, studio quality.",
      "Real-life video of band members in synchrony with the rhythm, under vibrant concert lighting, shot from a low angle with a Canon EOS, ultra realistic, trending on artstation, high quality.",
      "Footage of crowd swinging to the beat, stage bathed in strobe lights, captured with a wide-angle perspective on Canon EOS, RAW video, ultra detailed, studio quality.",
      "Slow-motion video capturing drummer's stick rebounding off the drum surface, under dynamic concert lights, filmed with Canon EOS, high quality, ultra-realistic, breathtaking.",
      "Clip of band delivering a powerful finale, bright lights flooding the stage, Canon EOS capture from ultra wide-angle, high quality, highly detailed, award-winning, beautiful."
    ]
  },
  {
    "input": "footage of a band playing doom metal on a stage, we see the members dressed as monks, surrounded by fog and atmospheric light, playing the instruments hard, at some point everything becomes slow motion",
    "captions": [
      "Real-life footage of a doom metal band performing on a stage, members dressed as monks, immersed in volumetric fog lit by ambient lighting, shot with gloomy-style on Canon EOS camera, high quality, highly detailed.",
      "Close-up video of a lead vocalist chanting into the microphone, draped in a monk's robe, amid hazy concert lighting, captured on Canon EOS camera with depth of field effects, highly detailed, RAW video.",
      "Video of drummer dressed as a monk striking the drum, creating visible sound waves in the fog, under gloomy stage lighting, taken with Canon EOS camera, high quality, ultra-realistic.",
      "Slow-motion footage of guitarist dressed as a monk strumming riffs vigorously, fog swirling around him under ambient stage lighting, high details showcasing each string vibration, Canon EOS capture, studio quality, highly detailed.",
      "Film clip of band members standing in the fog, playing in unison, eerie light creating shadowy figures, using a Canon EOS for the capture, high-resolution, breathtaking, award-winning.",
      "Video of droplets hanging in the fog, catching ambient light, showcasing intensity of the performance captured in slow motion with Canon EOS, high definition, highly detailed, studio quality.",
      "Real-life video of band members surrounded by clouds of fog, under dimly lit stage, shot from a low angle with a Canon EOS, ultra-realistic, trending on artstation, high quality.",
      "Footage of an audience swaying with the doom metal rhythm, stage bathed in an ocean of fog and dim lights, captured with a wide-angle perspective on Canon EOS, RAW video, ultra detailed, studio quality.",
      "Slow-motion video capturing drummer's robe flowing with every impactful drum strike, the stage bathed in eerie ambient lights, filmed with Canon EOS, high quality, ultra-realistic, breathtaking.",
      "Clip of band delivering a powerful, fog-filled finale, dim lights creating spectral silhouettes, Canon EOS capture from ultra wide-angle, high quality, highly detailed, award-winning, beautiful."
    ]
  },
  {
    "input": "footage of a K-pop band performing on a stage, we see the members smiling, colorful lights, synchronized dances, crowd cheering, at some point they perform a signature move in slow motion",
    "captions": [
      "Real-life footage of a K-pop band energetically performing on a vibrant stage with neon lighting, members smiling and dancing in sync, shot with Canon EOS camera, high quality, highly detailed.",
      "Video of the lead vocalist singing passionately, under dazzling stage lighting, captured on Canon EOS camera with depth of field effects for a dreamy feel, highly detailed, RAW video.",
      "Close-up capture of members executing synchronized dance move; vibrant and playful stage lighting capturing their energy, taken with Canon EOS camera, high quality, ultra-realistic.",
      "Slow-motion video of a signature dance move performed with complete synchronization; neon lights creating silhouettes and shadows, filmed with Canon EOS, studio quality, highly detailed.",
      "Footage of the band members interacting with the crowd, under the playful concert lights, expression full of joy, Canon EOS footage, high-resolution, breathtaking, award-winning.",
      "Extreme close-up shot of a member's smile, displaying the fun and energy of the performance, filmed with Canon EOS, high definition, highly detailed, studio quality.",
      "Real-life video of band members in synchrony with each other, under vibrant stage lighting, shot from a low angle with a Canon EOS, ultra-realistic, trending on artstation, high quality.",
      "Footage of enthusiastic crowd dancing to the beat, stage bathed in colorful neon lights, captured with a wide-angle perspective on Canon EOS, RAW video, ultra detailed, studio quality.",
      "Slow-motion video capturing confetti falling from the top, mixing with the colorful stage lights, filmed with Canon EOS, high quality, ultra-realistic, breathtaking.",
      "Clip of band making heart signs and waving to the crowd in the finale, under the playful concert lights, Canon EOS capture from ultra wide-angle, high quality, highly detailed, award-winning, beautiful."
    ]
  }
]
