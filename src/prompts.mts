
export interface Scene {
  input: string
  captions: string[]
}

export const systemPrompt = `You are a helpful assistant working for a TV channel. You catalogued thousand of video snippets on various topics. You also know how stable diffusion works (an AI model to generate image using captions similar to those of image banks and image datasets), and how to prompt it, adding things like "photo of a beautiful cat drinking milk, in a trailer park, with boho style outdoor space with 60s, furnishings, mystical objects, candles, van and lights on, sunset, Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, trending on artstation.." etc.

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
- Input: ${input}  (note: add the keywords "cinematic", "imax", "movie", "film grain" to help the AI generator)`

export const demoPrompts = [
  {
    "input": "an anime movie in the style of Studio Ghibli and Miyazaki, showing a magical panda becoming friend with a black cat. The panda can transform into various people and objects. Set in feudal japan, they go on adventures in beautiful japanese landscape. We can see leaves of cherry blossom, beautify japanese mountains, plains, rivers, traditional japanese settings. In nearly all scenes we should have dynamic camera effects (eg. rotating around the scene), as well as mist, haze or fog effect. To add to the mystic, each some scenes should have dramatic light effects, such as golden hour, god's ray.",
    "captions": [
      "Magical panda and black cat making friends in a picturesque Japanese landscape, Studio Ghibli style > Cinematic, picturesque composition > IMAX camera panning around the scene > Award-winning, high quality, trending on Artstation, cinematic, movie, dramatic lighting, golden hour, god's rays, film grain",
      "Magical panda transforming into a young feudal Japanese boy, black cat watches in awe, Studio Ghibli style > Cinematic, high detail composition > IMAX camera zooming in > Award-winning, high quality, trending on Artstation, cinematic, movie, mist effect, film grain",
      "Black cat and transformed panda venturing into cherry blossom forest, Studio Ghibli style > Cinematic, evocative composition > IMAX camera rotating around scene > Award-winning, high quality, dynamic camera effects, trending on Artstation, cinematic, movie, dramatic lighting, god's rays, film grain",
      "Panda transforming into samurai warrior, black cat looks on, Studio Ghibli style > Cinematic, high detail composition > IMAX camera zooming out > Award-winning, high quality, trending on Artstation, cinematic, movie, dramatic lighting, mist effect, film grain",
      "Samurai panda and black cat heroically standing on hilltop, overlooking misty Japanese plains, Studio Ghibli style > Epic composition > IMAX camera panning > High quality, cinematic, IMAX, movie, god's rays, film grain, trending on Artstation",
      "Samurai panda returning to original form, cherry blossom petals fall, Studio Ghibli style > Cinematic, elegant composition > IMAX camera rotating > High quality, dynamic camera effects, cinematic, IMAX, movie, dramatic light, film grain",
      "Panda and black cat navigating down the flowing river in a small boat, Studio Ghibli style > Cinematic, beautiful composition > IMAX camera panning following the boat > High quality, cinematic, movie, mist effect, film grain, trending on Artstation",
      "Magical panda transforms into a protective dragon, black cat sits on dragon's head, Studio Ghibli style > Epic, detailed composition > IMAX camera zooming in and out > High quality, dynamic camera effects, cinematic, IMAX, movie, dramatic light, mist, film grain",
      "Dragon panda flying over majestic Mountain Fuji, Studio Ghibli style > Grand scale composition > IMAX camera panning across landscape > High quality, IMAX, movie, golden hour lighting, god's rays, film grain, trending on Artstation",
      "Dragon panda and black cat arriving in traditional Japanese village, Studio Ghibli style > Detailed, cinematic composition > IMAX camera tracking in on village > High quality, dynamic camera effects, cinematic, IMAX, movie, dramatic light, film grain",
      "Panda changing back from dragon to his original form, village people stunned, Studio Ghibli style > Cinematic, picturesque composition > IMAX camera rotating around scene > High quality, cinematic, IMAX, fog effect, movie, dramatic light, film grain",
      "Panda and black cat being welcomed warmly by the village, beautiful cherry blossoms decorate scene, Studio Ghibli style > Evocative, detailed composition > IMAX camera zooming in and out > High quality, cinematic, IMAX, movie, god's rays effect, film grain",
      "Panda and black cat sharing a meal with the villagers, under a cherry blossom tree, Studio Ghibli style > Warm, detailed composition > IMAX camera moving side to side > High quality, cinematic, dynamic camera effects, IMAX, movie, ambient lighting, film grain",
      "Night falling, panda and black cat roasting marshmallows by the fire, villagers watch, Studio Ghibli style > Captivating composition > IMAX camera panning across scene > High quality, cinematic, IMAX, movie, fire light effect, film grain",
      "Panda transforming into a gigantic lantern tower lighting up the village, Studio Ghibli style > Mystical composition > IMAX camera zooming out to show glowing village > High quality, dynamic camera effects, cinematic, IMAX, movie, dramatic lighting, film grain",
      "Panda returning to his original form, villagers cheering, black cat proudly watching, Studio Ghibli style > Joyful, warm composition > IMAX camera tracking in > High quality, cinematic, IMAX, movie, spotlight effect, film grain",
      "Panda and black cat lying under the star-filled sky, villagers asleep, Studio Ghibli style > Cinematic composition > IMAX camera slowly panning across starry sky >  High quality, cinematic, IMAX, movie, ambient lighting, film grain",
      "Sunrise, panda and black cat leaving the villagers, heading towards a new adventure, Studio Ghibli style > Cinematic, picturesque composition > IMAX camera panning watching as they leave > High quality, dynamic camera effects, cinematic, IMAX, movie, golden hour lighting, film grain",
      "Panda and black cat riding on a cloud, overlooking beautiful Japanese landscapes, Studio Ghibli style > Epic scale composition > IMAX camera rotating around >  High quality, cinematic, IMAX, movie, god's rays, film grain",
      "Cloud with panda and cat entering a misty forest, Studio Ghibli style > Mysterious, detailed composition > IMAX camera tracking from below >  High quality, dynamic camera effects, cinematic, IMAX, movie, fog effect, film grain",
      "Panda transforming into a large umbrella, shielding black cat from rain, Studio Ghibli style > Charming, cinematic composition > IMAX camera zooming in >  High quality, cinematic, IMAX, movie, rain effects, film grain",
      "Panda umbrella and black cat observing a distant castle, Studio Ghibli style > Anticipating composition > IMAX camera panning towards the castle > High quality, dynamic camera effects, cinematic, IMAX, movie, dramatic light, film grain",
      "Panda transforming from umbrella into a humble knight, black cat by his side, Studio Ghibli style > Cinematic, high detail composition > IMAX camera rotating >  High quality, cinematic, IMAX, movie, dramatic lighting, film grain",
      "Knight panda and black cat bravely approaching the castle, Studio Ghibli style > Adventurous, grand scale composition > IMAX camera tracking them > High quality, dynamic camera effects, cinematic, IMAX, movie, spotlight effect, film grain",
      "Knight panda and black cat standing before the castle gates, ready for their next adventure, Studio Ghibli style > Climactic composition > IMAX camera zooming out > High quality, cinematic, IMAX, movie, god's rays, film grain"
    ]
  },
  {
    "input": "A real movie about evil mages and orcs attacking a castle of knights, in the style of Michael Bay. Some scenes include: cutting down trees, building siege weapons at night, attacking the castle in the morning, sending a dragon to attack, knights defending, a huge battle outside the castle, and the aftermath of the battle.",
    "captions": [
      "High definition cinematic film of evil mages and orcs in a dense forest, surreptitiously cutting down trees under the concealment of a moonlit night, panoramic view, shot on IMAX, with film grain effect, in the style of a Michael Bay movie.",
      "Realistic footage of orcs industriously building siege weapons from the fallen trees, under a cobalt sky dotted with glistening stars, using medium-wide lens shot, incorporating surrealistic lighting details, on a DSLR, trending on ArtStation.",
      "Dramatic movie film of the first light of dawn breaking over the horizon, casting an eerie glow on the orcs gearing up for the onslaught, majestic aerial view shot on a high resolution IMAX camera, with, additional dynamic camera effects and washed colors.",
      "Full-length film footage of the orcs initiating their violent attack on the castle, catapulting flaming rocks across the sky, grand wide-angle shot, with enriching detail and film grain effect, recorded with high end Canon EOS, maintaining the Michael Bay style.",
      "Brilliant movie scene depicting a blood-chilling summoning of a fire-breathing dragon by the mages, focus on the sparkling golden hour, extreme long-shot using a DSLR camera, imbued with a surrealistic style, maintaining high details and trending on ArtStation.",
      "Award-winning film scene of the dragon soaring high above, drawing fiery circles around the besieged castle, aerial view shot on IMAX, with dynamic camera effects, enlightened with the golden hour's light, realistic with a film grain effect.",
      "High-quality movie footage of the knights' valiant defense against the siege, dramatic archers taking aim under direct sunlight, medium wide-angle shot with DSLR, capturing the Michael Bay style with high details, graceful panoramic sweeping of the camera, trending on ArtStation.",
      "In the real-life scenery of the film, the knight's skyward arrows strike the dragon in a shower of sparks, ultra-wide angle lens view taken at the edge of sunset, shot in a Canon EOS, in a style that is cinematic, filled with magical realism and grandeur.",
      "Epic battle scene in the movie with knights clashing with the orc army outside the castle, powerful low-angle shot, under the dramatic dusk light, shot on IMAX showcasing cinematic bokeh and film grain effect, in a Michael Bay styled frenzy.",
      "Captivating film scene of the knights making a glorious stand against the relentless orc warriors, dramatic strobe lighting, wide angle shot capturing the action at ground level, recorded with a high-end Canon EOS, adding a gritty realism in-line with Michael Bay's signature style.",
      "Intense movie sequence of the final strike by the knights, sudden ambush on the orcs under an overpowering strobe light, DSLR close-ups capturing the shock and surprise, Michael Bay's style of dynamic camera effects and intense film grain applied.",
      "Dramatic end to the battle in the film with the knights emerging victorious, golden hour light creating a divine aura, wide-angle shot on IMAX showing the grandeur, maintaining high details with a gritty film grain effect in Michael Bay's style.",
      "Haunting film footage of the battlefield aftermath, shrouded in an ethereal mist, graceful aerial view shot on a DSLR capturing the mystical ambience, surrealistic lighting details, complete with a Michael Bay style film grain effect.",
      "Beautiful morning light after the battle in the movie, ambient light piercing through the dissipating fog, dramatic wide-angle shot on IMAX, with high detail and film grain effect, showcasing the cinematic Michael Bay style.",
      "Cinematic film closure with the misty aftermath, portraying the fading echoes of the fierce battle, panoramic camera sweep, shot on Canon EOS, the moody gray sky contributing to the surrealistic style, film grain effect maintaining visual consistency with the Michael Bay style."
    ]
  },
  {
    "input": "a movie shot in a Michael Bay style, about an alien ship destroying Los Angeles",
    "captions": [
      "cinematic shot of the misty streets of Los Angeles during the early morning, drone camera, ambient lighting, foggy, wide-angle, film grain, Michael Bay style, cinematic, imax, movie, high quality",
    
      "cinematic wide-angle drone shot of an airplane taking off in the misty sunrise Los Angeles, ambient lighting, film grain, Michael Bay style, cinematic, imax, movie, high quality",
    
      "photorealistic multi-kilometer wide alien spaceship hovering over Los Angeles at dawn, ultra wide-angle, detailed fog effect, dramatic lighting, cinematic, imax, movie, Michael Bay style, film grain",
     
      "photorealistic extreme long shot of a light beam shooting down from the alien ship impacting Los Angeles, ambient lighting, foggy, Michael Bay style, cinematic, imax, movie, film grain",
     
      "photorealistic abd cinematic shot of a colossal explosion in Los Angeles caused by the alien ship's light beam, Michael Bay style, ambient lighting, wide-angle, film grain, cinematic, imax, movie, high quality",
     
      "photorealistic cars and debris being launched into the air amid the alien chaos in Los Angeles, ultra wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "photorealistic citizens of Los Angeles running from destruction, ambient lighting, foggy, ultra wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "photorealistic military leaders strategizing a response, ambient lighting, close-up, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "photorealistic armada of jets departing to engage the alien ship attack, late morning light, ambient lighting, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "photorealistic jet planes ascending towards the floating alien ship, ambient lighting, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "photorealistic jet squadron maneuvering in formation, ambient lighting, extreme long-shot, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "photorealistic video, dynamic chase between the jet planes and the alien ship over LA, noon sunlight, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "photorealistic jet plane narrowly avoiding alien fire in a dramatic canyon chase, ambient lighting, extreme close-up, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "photorealistic jet plane taking a daring shot at the alien ship, intense sunlight, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "photorealistic graphic video of the alien ship starting to fall apart under the onslaught of the jet planes, direct sunlight, extreme long-shot, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "photorealistic alien mothership exploding brilliantly in the Los Angeles atmosphere, ambient lighting, extreme long-shot, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "photorealistic jet planes flying away from the explosion, dramatic lighting, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "photorealistic close-up of a jet pilot celebrating the victory against the alien ship, ambient lighting, Michael Bay style, cinematic, imax, movie, film grain",
     
      "photorealistic video of the citizens of Los Angeles cheering as the jet planes fly over the city during the golden hour, ambient lighting, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "photorealistic video of the joyous celebration in Los Angeles, with American flags waving in the golden sunset, God's rays, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "photorealistic celebration scene of 4th of July in Los Angeles, firework lights, ambient lighting, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "dramatic shot of the jubilant crowds under the fireworks in Los Angeles, ambient lighting, extreme long-shot, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "video of a jet plane doing a victory flyover with smoke trails and fireworks lighting up the evening sky, Michael Bay style, ambient lighting, extreme long-shot, film grain, cinematic, imax, movie, high quality",
     
      "video of a jet plane landing with a golden sunset in the background, ambient lighting, close-up, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "cinematic drone video of the calm after the storm in Los Angeles at dusk, ambient lighting, ultra wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality"
    ]
  },
  {
    "input": "a short advert for pasta, with grocery shopping, cooking, dining, and a product display in a movie style",
    "captions": [
      "Photograph of a bustling grocery store with a focus on the pasta aisle, vivid colors and rich details, shot in a wide-angle, cinematic style, Canon 5D Mark III, high resolution, movie quality with a hint of film grain, trending on ArtStation, featured.",
      "Wide-angle photograph of a hand reaching out to pick a pasta packet off a shelf, lots of natural light, complex yet elegantly composed, using a Canon 5D Mark III, high details, cinema level quality, IMAX and film grain effect, trending on ArtStation, award-winning",
      "Photograph of a cozy kitchen setup, rustic style with warm ambient lighting, lots of details, shot in Canon 5D Mark III, cinematic, IMAX, grainy film effect, high resolution, featured on ArtStation, award-winning quality.",
      "Detailed close-up photograph of a kitchen counter with raw pasta, fresh ingredients beside, dynamic lighting, Canon 5D Mark III, cinematic, IMAX, strong film grain texture, hyper-realistic, showcased on ArtStation, movie quality, breathtaking.",
      "High-resolution photograph of steaming pasta tossed in the air, captured in a freeze motion, vibrant colors, shot using Canon 5D Mark III, cinematic style, IMAX shot with a film grain effect, trending on ArtStation, high quality, award winning.",
      "Photograph of a candlelit dinner table setup, with freshly cooked pasta served, romantic ambiance, shot using Canon 5D Mark III, cinema style composition with an IMAX feel and film grain effect, high detail, critically acclaimed, showcased on ArtStation.",
      "Photograph of a couple enjoying their pasta dinner, warm ambient lighting, nostalgic feel, shot using Canon 5D Mark III, cinematic approach, IMAX, strong film grain, beautiful composition, photo-realistic, trending on ArtStation, award-winning.",
      "Artful close-up photograph of a packet of pasta, elegantly positioned with a strong depth of field, shot in a professional studio using Canon 5D Mark III, cinematic style, IMAX, high quality with a film grain effect, movie-like, award-winning, featured on ArtStation."
    ]
  },
  {
    "input": "real movie about sailships and pirates",
    "captions": [
      "Real movie footage of a grand sailship navigating in the calm turquoise Caribbean sea during sunrise, Canon EOS, ambient lighting, stunning, awe-inspiring, wide-angle, high details, cinematic, IMAX, film grain, trending on artstation",
      "Genuine film sequence showing the detailed craftsmanship and beauty of the ship's hull, sails, and mast, direct sunlight highlighting every nuance, Canon EOS, high quality, studio quality, 4k, ultra realistic, cinematic, IMAX, depth of field, trending on artstation",
      "Film footage of a pirates looking out towards at the endless expanse of the sea from the ship deck, warm orange color due to the setting sun, Canon EOS, backlight, award winning, wide-angle, cinematic, film grain, IMAX, trending on artstation",
      "A real movie scene featuring an aerial view of the sailship gracefully navigating near a beautiful tropical coast, cloudy sky promising an impending storm, Canon EOS, aerial view, natural lighting, epic composition, cinematic,detail, IMAX, film grain, trending on artstation",
      "Genuine film footage of the ship's crew hoisting the sails in unison, the crisp audacity of the white sails against the soft hues of the evening sky, Canon EOS, high detail, beautiful, cinematic, IMAX, film grain, direct sunlight",
      "Real movie scene capturing the tension brewing as a rival pirate ship emerges from the fog, the calm before the storm, Canon EOS, ambient lighting, detail, cinema quality, wide-angle, IMAX, cinematic, film grain",
      "Film footage of the cannon's firing, wooden splinters flying in every direction, in ther fog, dramatic and terrifying, Canon EOS, spotlights, high detail, grainy, cinematic, IMAX, ultra realistic",
      "Genuine cinematic frame of the enemy ship close up, in the fog, brilliantly illuminated by the chaotic dim light amid the darkness of the storm, Canon EOS, dramatic lighting, award winning, wide-angle, highly detailed, cinematic, IMAX, ultra high definition",
      "Real movie footage of the fierce melee onboard, swords clashing, hazy mist, shouting of men and the roar of the storm intertwining into a catastrophic symphony,Canon EOS, soft lighting, fast action, widescreen, cinematic, IMAX, trending on artstation",
      "Genuine film footage of a courageous sailor taking on many pirates, hazy mist, dynamic camera capturing the intensity and thrill, Canon EOS, ambient lighting soft, dynamic action, wide-angle, close-up shots, cinematic, IMAX, trendsetting",
      "Real film depiction of a pirate boarding the ship using ropes, hazy mist, a face-off with the ship's captain seems inevitable, Canon EOS, ambient lighting, cinematic, wide angle, high detail, IMAX",
      "Cinematic movie scene showing the hero pirate dodging sword strikes majestically at the helm, 360-camera panning emphasizing the danger and thrill dangling from the edge, Canon EOS, backlight, award winning, ultra realistic, cinematic, IMAX, remarkable composition",
      "Intriguing film footage detailed shot of a treasure map spread out on a wooden table, lamp light flickering in the wind, Canon EOS, candlelight, close-up, high details, ultra realistic, cinematic, IMAX, trending on artstation",
      "Real movie scene depicting the victorious pirates celebrating, drinking and dancing around the fire, god's rays filtered through the sails, Canon EOS, direct sunlight, cinematic, wide angle view, IMAX",
      "Film footage of the sun rising over the calm sea, a new day beckoning the pirates to set sail in search of their destinations, Canon EOS, dramatic sunlight, 4k, UHD, wide-angle, beautiful, cinema quality, cinematic, IMAX, film grain",
      "Genuine film sequence of the pirate captain steering the wheel of the ship, hazy mist, wind in his hair and purpose in his eyes, Canon EOS, backlight, ultra realistic, close up, high detail, cinematic, IMAX",
      "A film capture in the midst of a storm, gigantic waves crashing onto the ship, fear and determination etched onto the sailors' faces, Canon EOS, ultra wide-angle, high details, highly dramatic, cinematic, IMAX, grainy",
      "Real movie footage of a burly pirate looking towards the horizon with his telescope, golden hour adding to the dramatic feel, Canon EOS, ambient lighting, wide angle, high detailed skin, cinematic, IMAX, film grain, trending on artstation",
      "Film capture of crew members repairing the sail, seen from a low angle, sunlight streaming in through the tears, Canon EOS, backlight, close-up, cinematic, IMAX, highly detailed, film grain",
      "Captivating movie scene featuring an aerial shot of the ship leaving a trail in the vast ocean, sunset painting the sky, Canon EOS, ambient lighting, aerial view, cinematic, long-shot, 4k UHD, IMAX",
      "Gritty film footage of the ship's flag flying high, seen against the backdrop of the tempestuous sea and stormy skies, Canon EOS, backlight, award winning, wide-angle, high detail, cinematic, IMAX, trending on artstation",
      "Real movie capture of a swordfight on the ship's plank, edge-of-the-seat scene with dynamic camera movements, Canon EOS, ambient lighting, wide-angle, detailed strokes, cinematic, IMAX, film grain",
      "Film footage of victorious pirates uncovering a treasure chest, their faces glowing in delight, Canon EOS, ambient lighting, high detail, beautiful, cinematic, IMAX, film grain",
      "Genuine film sequence of a pirate holding a gleaming gold coin against the twilight sky, Canon EOS, backlight, cinematic, extreme close-up, detailed textures, IMAX, trending on artstation",
      "Award-winning movie scene capturing the sailship on the horizon as the day ends on the Caribbean, stunning, divine, Canon EOS, ambient lighting, epic composition, ultra wide-angle, high details, cinematic, IMAX, film grain, trending on artstation"
    ]
  },
  {
    "input": "a real movie about sportcars traveling in various environments",
    "captions": [
      "Real movie footage of a vibrant green Ferrari cruising through a lush countryside under soft lighting, with a wide-angle rotating camera view from a drone, capturing the dazzling effects of ambient lighting, IMAX, cinematic, film grain, high quality, 4k resolution, trending on artstation.",
      
      "Film sequence of a scarlet red Lamborghini speeding across a desert, caught in the golden light of the setting sun, highly detailed, cinematic, imax format, using a fast traveling camera movement for dramatic effect, studio quality, high definition, film grain.",
      
      "Cinematic movie clip of a canary yellow Porsche carving its way through a deep canyon, expertly caught on an ultra wide-angle camera, amidst an ambient light, IMAX, film grain, high detailed, stunning, high quality.",
      
      "Film capture of an iconic white Ferrari making its way on a majestic mountain bridge, illuminated in the backlight of sunset, with the traveling camera catching every detail, rich in film grain, in IMAX, high quality.",
      
      "A dramatic movie snippet of a brilliant green Lamborghini thundering through city streets, captured by low angle, rotating camera movements, under the magical haze of city lights, full of film grain and in IMAX, high quality.",
      
      "Real movie footage of a sleek red Ferrari racing over vast, deserted plains, cinematography detailed with film grain, in a breathtaking wide-angle establishing shot, using IMAX standards, with an overhead drone view and radiant backlight, high quality.",
      
      "Movie sequence of white Porsche revving up in the serene countryside with ambient lighting, cinema quality, a wide-angle lens with immersive rotating camera movement, film grain, in IMAX, 4k resolution, award-winning.",
      
      "Cinematic footage of a green Lamborghini racing with speed under the warm desert sun, caught by a follow shot camera, illuminated by ambient light, with a grainy film look, in max resolution IMAX, trending on artstation.",
      
      "A real movie clip of a yellow Ferrari moving through intricate canyon roads, a wide-angle drone aerial view, dramatic lighting effects with rich film grain, shot in IMAX, high quality, high details.",
      
      "Movie capture of a red Lamborghini advancing on a stunning mountain bridge with a low angle, dynamic following shot, cinematic quality, highly detailed with a golden hour lighting, in IMAX, award-winning.",
      
      "Film footage of a white Ferrari accelerating through the fuzzy, lamp-lit city streets, captured in detailed, realistic film grain, with a rotating camera, shot in IMAX, vibrant colors, high quality, trending on artstation.",
      
      "Cinematic clip of a green Porsche speeding on an open country road under rich ambient morning backlight, aerial drone wide-angle shot, highly detailed, imax, film grain, award-winning, vibrant.",
      
      "Real film footage of yellow Lamborghini cruising through a vast desert, wide-angle shot from traveling camera, capturing dazzling lighting effects, stunning composition, film grain, shot in IMAX, high quality.",
      
      "Movie sequence of a white Ferrari driving at high speed in a canyon, rotating drone wide-angle view perfect for cinematic look, dramatic lighting, blacklight, IMAX, grainy film look, high quality, trending on artstation.",
      
      "Film snippet of rich, red Porsche crossing a dramatically lit mountain bridge, captured by a dynamic follow camera under golden hour lighting, high details, film grain, IMAX, cinematic look.",
      
      "A cinematic footage of a white Lamborghini darting through the city night under various colorful lights, using dramatic rotating camera movements to emphasize the speed, backlit by ambient city lights, film grain, shot in IMAX, high quality.",
      
      "Movie capture of a green Ferrari racing across a sunlit countryside, cinematic style, ambient backlighting, wide-angle lens with rotating camera, in vibrant, rich film grain, shot in IMAX, high quality, 4k resolution.",
      
      "Real film sequence of a white Porsche tearing through a desert under the scorching sun, capturing every highly detailed feature under the ambient light, following shot camera, in IMAX, rich in film grain.",
      
      "High quality movie footage of a yellow Lamborghini driving through the grand canyon with ambient lighting, cinematic rotating drone aerial shot, highly detailed, IMAX, film grain, 8k UHD, award-winning.",
      
      "Cinematic clip of a red Ferrari moving across a bridge, under the beautiful setting sun, breathtaking, low angle follow shot in IMAX, high in film grain, 8k UHD, studio quality.",
      
      "Movie sequence of a green Porsche drifting through the city under the hues of neon lights, dramatic rotating camera movements, highly detailed, shot in IMAX, rich film grain, high quality definition.",
      
      "Real film footage of a white Lamborghini speeding through country roads, ambient lighting, wide-angle drone shot, dramatic rotating camera view, with cinematic, grainy, film quality, in IMAX, high quality.",
      
      "Cinematic movie capture of a red Ferrari power sliding across a desert, ambient backlighting, traveling camera, with dramatic, intense, highly detailed visuals, in IMAX, grainy film look.",
      
      "Film footage of a yellow Porsche moving swiftly through a canyon, captured by a wide-angle gyro-stabilized drone, under the warm tones of the golden hour, in IMAX, rich of film grain, high quality.",
      
      "Cinematic movie snippet of a green Lamborghini crossing a mountain bridge under the vibrant ambient lights, caught by a low angle, rotating camera, in IMAX, with grainy film texture, high quality."
    ]
  },

  {
    "input": "movie documentary, northern hemisphere animals, dramatic camera movements, golden hour light, atmospheric effects",
    "captions": [
      "Movie footage of a majestic eagle soaring over snow-capped mountains, golden hour light crossing misty peaks, aerial view, cinematic IMAX camera, high quality, trending on artstation, golden hour, film grain.",
      "Cinematic video of a pack of wolves traversing a frosty forest, filtered with a dramatic light creating silhouettes against a golden mist, wide-angle shot, movie effect, IMAX camera, golden hour, film grain.",
      "Dynamic footage of a grizzly bear catching a salmon in a rushing river, ambient lighting highlighting the splashing water, low angle, IMAX camera, 4K movie quality, golden hour, film grain.",
      "Intimate close-up of a red fox, gazing into the camera with sharp eyes, ambient lighting creating a high contrast silhouette, IMAX camera, high detail, cinematic effect, golden hour, film grain.",
      "Aerial panorama of reindeers migrating across the tundra, bathed in the soft glow of the golden hour, IMAX camera, atmospheric fog effects, film grain effects.",
      "Movie footage of a group of moose grazing in a lush meadow, rich greenery enveloped in hazy light, panoramic shot, IMAX camera, cinematic, golden hour, film grain.",
      "Cinematic video of a bobcat stalking its prey in the twilight, captured in striking detail against a misty backdrop, high contrast lighting, IMAX camera, film grain.",
      "Drone footage of a humpback whale breaching off the coast, god's rays piercing through the azure water, wide-angle shot, IMAX camera, golden hour, film grain.",
      "Cinematic close-up of a snowy owl, its feathers glimmering in the soft, golden light, focused gaze intensifying dramatic atmosphere, IMAX camera, golden hour, film grain.",
      "Movie footage of a beaver family building a dam, shot at water level against the evening light, mist flowing over the river, IMAX camera, cinematic, golden hour, film grain.",
      "Dynamic aerial shot of an Arctic fox in the snow, its fur standing out against the pristine white landscape, ambient lighting, IMAX camera, golden hour, film grain.",
      "Sweeping panorama of a bison herd thundering across the plains, golden light casting long shadows, swirling dust adding to the cinematic atmosphere, IMAX camera, golden hour, film grain.",
      "Cinematic video of a walrus herd lounging on an iceberg, the rose-gold sunset reflected in the glassy water, wide-angle shot, IMAX camera, golden hour, film grain.",
      "High contrast detail footage of a lynx prowling in the underbrush, intense eyes catching the glow of the background light, IMAX camera, cinematic, golden hour, film grain.",
      "Golden hour footage of a seals colony, their sleek forms silhouetted against a dramatic sunset, wide-angle, atmospheric fog effect, IMAX camera, film grain.",
      "Close-up footage of a red squirrel nibbling on a nut, haloed by a golden sunset, focused lighting effects, IMAX camera, cinematic, golden hour, film grain.",
      "Drone footage of a polar bear and her cubs wandering the tundra, snow glistening under the golden light, wide-angle shot, IMAX camera, golden hour, film grain.",
      "Cinematic capture of a pronghorn antelope sprinting across a plain, backlit by the fiery glow of sunset, high detail, IMAX camera, golden hour, film grain.",
      "Movie footage of a pod of killer whales coordinating a hunt, their dark forms appearing and disappearing in the sun-kissed waters, IMAX camera, golden hour, film grain.",
      "Sweeping panorama of a rocky mountain bighorn sheep perched on a crag, the vista bathed in the warm hues of sunset, IMAX camera, atmospheric fog effects, golden hour, film grain.",
      "Close-up footage of a woodpecker pecking at a tree trunk, its movements accentuated by ambient lighting, high detail, IMAX camera, cinematic, golden hour, film grain.",
      "Cinematic aerial capture of a cougar prowling in the landscape, backlit by the setting sun, high contrast, IMAX camera, golden hour, film grain.",
      "Movie capture of a herd of caribou forging a path through the snow, the sunset casting a majestic golden light, fog effects, IMAX camera, golden hour, film grain.",
      "Drone footage of a pair of bald eagles building their nest, high above the forest canopy bathed in golden light, wide-angle shot, IMAX camera, golden hour, film grain.",
      "Cinematic video of a freshwater otter, playfully sliding down a frosty hill, twinkling lights reflecting off snowy slopes, wide-angle shot, IMAX camera, golden hour, film grain."
    ]
  },
  {
    "input": "a movie documentary about various animals from Africa, savannah, dramatic camera movements, various types of herbivores and predators, various types of sun and lighting effects, close-ups, and lighting effects, mist, haze or fog effect, golden hour light, god's rays, cinematic, imax, movie, film grain",
    "captions": [
      "Film footage of a herd of elephants wading through the African savannah, golden hour light casting long shadows, foggy ambience, captured in dramatic rotational camera movement, filmed on an IMAX camera, cinematic, movie-like quality, with a visible film grain.",
      "Film capture of a pride of lions lounging under an acacia tree in the African savannah, warm golden sunlight filtering through, misty environment, aerial drone view, shot with a movie camera for IMAX cinema, film grain visible.",
      "Real world film footage of a cheetah in pursuit of a gazelle, the dramatic chase highlighted by the low-angle tracking shot, generous golden hour light giving off a movie-like aesthetic, shot on an IMAX cinema camera, viewable film grain.",
      "Cinematic film recording of a group of zebras grazing serenely in the wild, the warm hues of the setting sun illuminating the scene, eerie fog on the horizons, captured in a wide-angle shot with movie-ready IMAX camera, noticeable film grain.",
      "Movie shot of a multitude of colorful birds taking flight from the treetops of the African plains, vibrant sunset hues, foggy environment giving off a mystical aura, camera tracking their ascent, filmed on an IMAX cinema camera, film grain visible.",
      "Film recording of a grazing wildebeest being startled by a sudden movement, sunlight casting long dramatic shadows, heavy mist in the environment, captured by a rotational camera shot on an IMAX movie camera, noticeable film grain.",
      "Cinematic film footage of a group of hyenas giggling around a watering hole, lit by the descending sun creating an atmospheric golden haze, foggy environment, dramatic overhead drone shot, shot on cinema quality IMAX camera, film grain visible.",
      "Movie capture of an African buffalo standing its ground against an approaching predator, the drama heightened by the harsh, angled shadows of the golden hour light, smoky atmosphere, captured with a tracking shot on an IMAX camera with a visible film grain.",
      "Film recording of a vast herd of antelopes galloping across the African plains, backlit by the setting sun creating dramatic silhouettes, foggy ambience, panoramic view, filmed with an IMAX camera for cinema, revealed film grain texture.",
      "Cinematic film footage of a rhino playfully splashing around in a muddy waterhole, its skin glowing in the warm sunset light, environment filled with lingering mist, captured in a close-up shot with a movie quality IMAX camera, film grain visible.",
      "Movie scene of a gorilla family interacting in their natural habitat, soft golden sunlight filtering through the leaves, hazy environment, captured from an aerial drone view with a cinema standard IMAX camera, film grain texture is evident.",
      "Cinematic film clip of an African savannah landscape with groups of various animals, warm orange tones casting long shadows, misty scenery, shot in a panoramic view using an IMAX cinema camera, film grain visible.",
      "Film capture of a bushbaby leaping between treetops, the golden hour sunlight perfectly highlighting its movements, heavy fog in the environment, filmic tracking shot on an IMAX cinema camera, noticeable film grain.",
      "Cinematic film recording of a group of warthogs rummaging for food in the African bush, lit by warm, slanting sunset rays, environment filled with mist, captured with an overhead drone shot on a movie IMAX camera, film grain visible.",
      "Movie scene of a mongoose family interacting in their burrow, diffused golden light illuminating the scene, foggy ambience, captured in close-up with an IMAX cinema camera, noticeable film grain.",
      "Real world film footage of a majestic African elephant spraying itself with water, beautiful golden hour light creating specular highlights, foggy environment, captured from a low angle with a movie IMAX camera, showing a visible film grain.",
      "Cinematic film scene of a hippo yawning open-mouthed in a waterhole, its gape dramatically backlit by the setting sun, with a hazy atmosphere, captured in a close-up with an IMAX cinema camera, visible film grain.",
      "Movie capture of a dramatic stand-off between a pack of wild dogs and a leopard, filled with tension and enhanced by the slanting golden hour light, misty environment, captured in close-up with an movie-ready IMAX camera, visible film grain.",
      "Film footage of the breathtaking African savannah at dusk, the sun-kissed veld bathed in warm hues, foggy environment creating a dreamy atmosphere, wide-angle landscape shot, captured by a cinema quality IMAX camera, noticeable film grain.",
      "Real world film recording of a honey badger foraging for food, its fur glistening under the gentle golden hour light, hazy environment, overhead drone shot, captured with a movie IMAX camera, visible film grain.",
      "Cinematic film footage of a crocodile waiting patiently for its prey under a setting sun, casting dramatic shadows on the scene, foggy environment, captured in close-up with a movie-ready IMAX camera, noticeable film grain.",
      "Movie scene of stunning African birds in flight against a setting sun, their silhouettes spellbindingly backlit, with a hazy environment, captured with a movie quality IMAX camera in an extreme long-shot, noticeable film grain.",
      "Real world footage of a giraffe elegantly feeding from an acacia tree's highest branches, the warm sunset glow illuminating its form, foggy environment, captured by a tracking shot with an IMAX movie camera, noticeable film grain.",
      "Cinematic film capture of a pride of lions engaging in play, their antics contrasting with the dramatic colors of the setting sun, misty atmosphere, shot through a tracking camera lens of an IMAX camera, displaying visible film grain.",
      "Movie shot of a beautiful African sunset on the plains, the colors of the sky melting into the golden savannah, foggy environment creating a moody, dreamy scene, wide-angle shot, captured with cinematic IMAX camera, with visible film grain."
    ]
  },
  {
    "input": "a western movie, featuring herds and cattle, buffalo.. grazing in the mist, dust, cowboys going around, lot of shots of beautiful wild horses, cowboys going arounds, then groups of cowboys going in the plains, canyons, deserts, very intense and dramatic lighting, lot of dramatic camera movements (like rotations, traveling, drone etc), tons of mist, haze and fogs, but mostly in golden hour light or early evening or morning, god's rays etc. (add the keywords 'cinematic', 'imax', 'movie', 'film grain')",
    "captions": [ 
  "Film footage of a cowboy silhouetted against a dramatic sunrise, atmospheric mist, lighting reminiscent of golden hour, captured with Steadicam, exhibiting distinct film grain, imax quality",
  "Film capture of a stunning herd of wild horses galloping across a dusty plain, cinematic lens flare, shot with drone, imax footage, film grain",
  "Movie scene depicting cattle grazing serenely in a misty meadow, framed against the backdrop of the early morning sun, recorder with vintage camera, movie quality, film grain",
  "Film scene of a lone buffalo standing majestically, shrouded in a hazy mist, caught in the dusk light, shot with 35mm film for imax, cinematic and film grain is noticeable",
  "Cinematic movie shot of cowboys riding in the wind, camera pans in a dramatic manner to reveal dust particles dancing in the backlight, captured on Arriflex cameras, imax quality, with film grain",
  "Film footage of a dramatic showdown between two cowboys, a haunting sunset in the background, framed with Dutch angle, shot on 35mm film, rich in color and film grain",
  "Movie capture of cowboys camping under the stars, a lonesome fire flickers in their midst, shot with steadicam, dramatic lighting, imax quality, exhibiting film grain",
  "Film scene of a wild stallion making its way across a canyon, a breathtaking sunrise lighting its path, shot with drone, cinematic style, imax finish, noticeable film grain",
  "Cinematic movie capture of buffalo herd roaming under the desert Sun, a wide-lens aerial view, rich colors courtesy of golden hour lighting, shot on 35mm film, imax standard, patterned with film grain",
  "Film footage of a cowboy silhouetted against a stunning sunset, while riding through the plains, a subtle air of mist enhancing the visual, shot on vintage camera, imax quality, grained film",
  "Movie scene of a herd of cattle plodding along a grassy slope, bathed in the warm glow of the evening sun, shot on Arriflex cameras, imax resolution, film grain noticeable",
  "Cinematic film capture of cowboys galloping across a desert, the swell of dust around them illuminated by the hot desert sun, captured on 35mm film, imax detail, presented with film grain",
  "Movie shot of a group of cowboys traveling along a rocky canyon, shot as the sun sets beyond the horizon, dramatic lighting and colors, captured using drone, imax quality, with film grain",
  "Film footage of a cowboy gazing into the middle distance, a stunning sunrise in the background, dramatic, soft lighting, shot on vintage camera, cinematic, imax standard, film grain",
  "Movie capture of a cowboy riding off into the gold-hued sunset, the scene shrouded in a gentle mist, shot on 35mm film, cinematic style, imax finish, complete with film grain",
  "Cinematic film scene of a rodeo in full swing under the floodlights, shot with drone for sweeping visuals, intense attention to detail, imax standard, showcasing film grain",
  "Movie scene of dusty buffalo herd crossing a shallow river during sunset, shot with wide-angle lens for epic breadth, shot on 35mm film, cinematic, imax quality, film grain noticeable",
  "Film footage of cowboys congregating by a fire, the camp bathed in the soft golden glow of firelight, shot using Steadicam for smooth movement, imax detail, prominent film grain",
  "Movie capture of a cowboy and his horse silhouetted against the evening sun, framed with low angle for impressive scale, captured using vintage camera, cinematic style, imax finish, displaying film grain",
  "Cinematic film scene of a cowboy gazing into the middle distance, a breathtaking sunset lighting his path, shot with drone, imax standard, complete with film grain",
  "Movie shot of a group of cowboys travelling through a desert, dust particles dancing in the backlight, captured on Arriflex cameras, imax quality, exhibiting film grain",
  "Film footage of a buffalo herd romping under the desert Sun, captured with Dutch angle for heightened drama, rich colors, shot on 35mm film, cinematic, imax finish, grained film",
  "Movie scene of cattle grazing in a field, an atmospheric mist giving it a dreamy quality, an early morning sun lighting the scene, shot on vintage camera, imax detail, noticeable film grain",
  "Cinematic footage of cowboys galloping across a desert, the swell of dust around them captured in the hot desert sun, shot with Steadicam, imax standard, showcased with film grain",
  "Film shot of a wild stallion framed against a canyon, a breathtaking sunrise lighting its path, shot from a drone, cinematic style, imax quality, presenting with film grain" ]
  },
  {
    "input": "an animal documentary movie showing beautiful closeup shots of insects, bees, beetles, ants, foraging, going around leaves etc.. very intense and dramatic lighting, with camera close-up, with some hazy mist and bokeh in the background, at various time of the day including golden hour light or early evening or morning, god's rays etc.",
    "captions": [
      "Movie shot of a radiant butterfly resting on a leaf, abundant natural lighting reflecting off its wings, filmed in IMAX, ultra-detailed, cinematic style, award winning.",
      "Cinematic movie shot of bees energetically buzzing around a flower, sun rays illuminating the scene, captured in 4k IMAX with a soft bokeh background.",
      "Cinematic film grain of a detailed ant carrying a leaf, under the glowing golden hour light, filmed in high-resolution IMAX.",
      "Movie scene of a slow-moving caterpillar, close-up shot showcasing the creature's intricate details in high-resolution IMAX, award winning, trending on artstation.",
      "Cinematic sequence of a beetle breaking free from its cocoon, dynamic highlighting creating a dramatic aura, filmed in 4k IMAX, breathtaking, film grain overlay.",
      "Movie shot of dew drops forming on a spider's web in the early morning light, the camera captures the stunning beauty of the natural world in high-resolution IMAX, cinematic style.",
      "Cinematic close-up shot of a colony of ants carrying food, soft sunlight filtering through the leaves creating an artistic bokeh effect, captured in 4k IMAX, breathtaking detail.",
      "Film sequence of a dragonfly landing on a floating leaf, the rippling water reflecting the golden sunset light, captured in high-resolution IMAX, boasting beautiful cinema quality.",
      "Documentary movie scene of a bee extracting nectar, warm sunlight creating a magical glow, the frame is detailed with film grain, shot in 4k IMAX.",
      "Cinematic visual of fireflies lighting up a dusky forest, the bioluminescent glow caught in high detail, shot in 4k IMAX, award-winning cinema quality.",
      "Natural documentary display of a moth softly fluttering towards a flower, caught in the afterglow of sunset, filmed in high-resolution IMAX quality, cinematic style.",
      "Movie scene of the first ray of dawn lighting up a beetle's shell, displaying an array of colors, captured in 4k IMAX camera, breathtaking film quality.",
      "Cinematic sequence of ladybirds going about their life, a soft film grain overlay enhancing the intimate capture, shot in 4k IMAX, high-resolution, award-winning.",
      "Superb movie shot of a close-up on a busy bee pollinating a vibrant flower in full-bloom, intense sunset lighting accents the scene, shot in 4k IMAX, award-winning documentary style.",
      "Stunning sequence of an ant sipping dew on a leaf, colors awash in the gentle dawn light, captured on a high-resolution IMAX camera, cinematic overlay.",
      "Cinematic film grain of a spider spinning its web meticulously, the late afternoon sun casting long shadows, captured in ultra-high resolution on a 4k IMAX camera.",
      "Documentary movie scene of a butterfly emerging from its chrysalis, the dramatic lighting highlighting the moment of transformation, shot in 4k IMAX, award-winning cinematography.",
      "Film shot of a grasshopper leaping across the screen, the graceful movement caught in sharp detail, shot in 4k IMAX, high-quality, cinematic style.",
      "Natural documentary of busy bees, scene bathed in the golden light of sunset, captured in high-resolution IMAX, cinematic style.",
      "Cinematic sequence of an ant trailing along a leaf vein, a soft film grain overlay enhancing the crisp capture, high-resolution, shot in 4k IMAX.",
      "Close-up movie shot of dew sliding off a spider's web, the morning fog creating a beautiful bokeh effect, shot in 4k IMAX, high-detail cinema style.",
      "Movie scene of a fly alighting on a flower, intense sunlight creating a stunning play of shadows and light, shot in high-resolution IMAX, breathtaking, cinematic.",
      "Film shot of a butterfly in flight, the sun's glow illuminating its wings with exquisite beauty, captured with a 4k IMAX camera, cinematic, award-winning quality.",
      "Cinematic display of a close-up on ladybirds busy at work, the scene kissed with vibrant colors of the setting sun, shot in 4k IMAX, high-resolution.",
      "Documentary movie scene of a beetle scuttling across a leaf, its journey enhanced by the soft film grain overlay, captured with cinematographic IMAX camera in high-resolution."
    ]
  },
  {
    "input": "a short advert showing how a car is made by industrial robots, in a white industrial settings, then the industrial robot begins to paint the car in various colors, and a robot delivers the car to someone. At the end we see a fixed shot of the car with some slogan.", 
    "captions": [
      "Film footage of a white industrial setting, populated by precision-engineered industrial robots, busily working on constructing a car from scratch, all seen by a Canon EOS camera, with soothing ambient artificial lighting, high quality, cinematic, imax, movie, film grain.",
  
      "Movie shot of polished industrial robots, manipulating metal parts with precision, constructing the basic structure of a car, with dramatic lighting highlighting metallic surfaces, dazzlingly reflecting off parts, Canon EOS cinematography, high details, hyper realistic, award-winning, cinematic, imax, movie, film grain.",
  
      "Film scene showing extreme-close up of an industrial robot as it calibrates and starts applying primer on the constructed car body, spotlight emphasizing the paint spray, Canon EOS ultra-realistic capture, trending on artstation, high-quality, cinematic, imax, movie, film grain.",
  
      "Video footage of the car body being painted with various vibrant colors by industrial robots, a playful symphony of colors splashed against the metal under bright factory lights, as seen through the lens of a Canon EOS, highly detailed, cinematic, imax, movie, film grain.",
  
      "Film sequence depicting a pause in activity as the paint is left to dry, the drying paint under accent lighting reflecting contrasting colors, creating a beautiful spectacle through the Canon EOS lens, high quality, award-winning, cinematic, imax, movie, film grain.",
  
      "Movie footage of the final touch-ups on the car being done by precise robot arms wielding high-end tools, under direct sunlight equivalent artificial light, captured realistically by a Canon EOS, high details, hyper realistic, cinematic, imax, movie, film grain.",
  
      "Video snippet of the moment a robot gracefully rolls the newly painted car over to a delivery bay, gentle strobe lights illuminating the polished surface, shot with a Canon EOS camera, high quality, award-winning, cinematic, imax, movie, film grain.",
  
      "Fixed shot of the finished car, gleaming in soft but strong light with a catchphrase being digitally projected onto the white industrial backdrop, perfectly captured by the Canon EOS camera, high details, hyper realistic, trending on artstation, award-winning, cinematic, imax, movie, film grain."
    ]
  },
  {
    "input": "a documentary movie showing beautiful areal and drone footage of the Californian coast",
    "captions": [
      "Film Footage of a dramatic aerial view of the Californian coastline, cliffs edge bathed in golden hour sunlight, extreme wide shot, captured with a DJI Drone, cinematic, IMAX, film grain, high quality.",
      "Movie Clip of a breathtaking drone shot of tumultuous ocean waves crashing into the Californian coast during a storm, captured in dramatic lighting with a RED Epic 5K, cinematic, IMAX, movie, film grain, high details.",
      "Real world Footage of an aerial wide-angle shot of the rugged cliffs, stormy sea at sunset, striking light rays shooting through the hazy cloud, taken with a DJI Mavic Pro, cinematic, IMAX, movie, film grain, stunning visuals.",
      "Film Footage of a drone panning across the sandy Californian beaches empty due to the storm, golden hour lighting highlighting their texture, shot on a RED Raven, cinematic, IMAX, film grain, high definition, trending on Artstation.",
      "Movie Clip of the agitated sea calming down, foggy morning, aerial capture via DJI Drone, cinematic, IMAX, movie, film grain, high quality, RAW footage.",
      "Real world Footage of the sun peeking over the horizon, illuminating the calm sea and cliffs, early morning, stabilised shot on a GoPro Hero 6, cinematic, IMAX, movie, film grain, high quality.",
      "Film Footage of a race car speeding along the cliff edges, drone following, breathtaking ocean views beneath, shot on a Sony A7S, cinematic, IMAX, film grain, high definition, trending on Artstation.",
      "Documentary Capture of the race car sharply turning, drone rotates to maintain car in center, cliffs and ocean forming a stunning background, captured on a RED Weapon 8K S35, cinematic, IMAX, film grain.",
      "Movie Clip of cliff edge road, empty, calm sea against sunset lighting, after the car has passed, drone pan out, shot on a RED Epic Dragon, cinematic, IMAX, movie, film grain, high definition, breathtaking scenes.",
      "Real world Footage of sweeping drone shots of the calm sea around the Californian coast, shot during the golden hour, shot on a Phantom 4 Pro V2, cinematic, IMAX, movie, film grain, trending on Artstation.",
      "Film Footage of the Golden Gate bridge from a high aerial perspective, sea under dramatic evening light, shot with a RED Epic 5K, cinematic, IMAX, film grain, high quality, RAW footage.",
      "Movie Clip of dramatic hazy sky above the Golden Gate bridge, from a drone perspective, orange evening hue filters through the mist, filmed with a Panasonic GH5, cinematic, IMAX, film grain.",
      "Real world Footage of drone footage of the Californian bay, catching the rays of the setting sun, RED Cine-X, cinematic, IMAX, movie, film grain, high details, breathtaking view.",
      "Film Clip showing a birds eye view of the San Francisco bridge at dawn, shot with a DJI Phantom 3, cinematic, IMAX, film grain, high definition, trending on Artstation.",
      "Areal Video of DJI drone slowly revealing the cliffs and sea, hazy morning light creating a mystic look, golden sunlight, film grain, high quality, cinematic.",
      "Film snippet showing the breathtaking high-resolution aerial view of the Californian cliffs, stormy sea showing through thick fog, shot on an ALEXA Mini, film grain, IMAX, cinematic.",
      "Movie segment showing a clear morning, drone captures the reveal of the wild Californian coast line extending into the distance, shot with an Inspire 2, cinematic, IMAX, trending on Artstation.",
      "Real world Footage of the Californian bay, shores with dramatic cliff edges shown in golden dawn, drone footage shot on a Nikon D850 DSLR, film grain, cinematic.",
      "Film Footage of the drone descending to capture the crashing waves against cliffs, IMAX, cinematic, high-quality, shot with an ALEXA LF.",
      "Movie Clip of an overhead drone shot of a race car driving along the cliffs, full of action and intensity, taken with a GoPro Karma, cinematic, IMAX, film grain.",
      "Documentary Capture of a race car speeding down a Californian coastline highway, from a drone's perspective, using a DJI Mavic 2 Zoom, cinematic, IMAX, movie, film grain.",
      "Real world Footage providing an epic view of the San Francisco bridge amid a dramatic, hazy sunrise, captured on a Canon EOS C300 MKII, IMAX, cinematic, trending on Artstation.",
      "Film Footage showing a low-pass drone shot of the calm Californian bay during sunset, shot on an ALEXA Mini LF, cinematic, IMAX, movie, film grain, high quality.",
      "Movie Clip showing a stunning overhead view of the race car vanishing into the horizon, drone slowly ascending, taken with a DJI Mavic Air, cinematic, IMAX, movie, film grain.",
      "Film Footage of a smooth drone flyby of the Golden Gate Bridge, clear sky reflecting on the tranquil bay, silhouette moment during sunset, shot on a DJI Inspire 1, film grain, cinematic, IMAX, trending on Artstation."
    ]
  },
  {
    "input": "a movie (NOT a 3D render!), a feudal japan movie, showing ninjas, samurai, japanese castles, traditional japanese places, japanese ceremonies, in beautiful settings such as cherry blossom, japanese mountains, mount fuji etc. Lot of landscape shots in the mist, lot of haze, fog, light effects, sunsets, god's rays etc cherry blossom leave falling etc it is very cinematic, very japanese, very intense and dramatic lighting, with camera moving, camera rotations, with some hazy mist in most videos, at various time of the day including golden hour light or early evening or morning, god's rays etc. (note: add the keywords 'cinematic', 'imax', 'movie', 'film grain' to help the AI generator)",
    "captions": [
       "Movie footage of a Mount Fuji sunrise, intense ambient lighting reflecting on the hazy morning dew with cherry blossom leaves in motion, shot in IMAX, dramatic cinematic scene with film grain, high resolution",
       "Movie of a dramatic duel between samurais under a cherry blossom tree, intense sunlight penetrating the pink canopy creating beautiful God's rays, camera revolving around the action, cinematic IMAX, high-quality film grain",
       "Film footage of a ninja stealthily moving through a misty bamboo forest in early morning, soft lighting, high-contrast, stunning award-winning IMAX shoot with high amount of cinematic movie details and film grain",
       "Movie of a tranquil teahouse in a traditional Japanese garden, a maiko preparing tea under the gentle sunset light, the camera pans slowly revealing the serene landscape, shot in IMAX, high-quality film grain effect",
       "Cinematic IMAX movie clip of an intense samurai charge in front of a feudal Japanese castle at dawn, misty environment diffusing the sunlight, dramatic mood with high-quality film grain",
       "Footage of Japanese fishermen casting nets in a hazy lake close to Mt. Fuji during the golden hour, the camera moves with the boat, cinematic IMAX shooting, high-quality film grain effect",
       "Movie footage of a bird’s eye view of cherry blossom trees in full bloom, majestically covering the mountainside, the misty sunrise, captured in a high-quality IMAX shoot with a cinematic film grain",
       "IMAX movie of sunbeams piercing through the dense foliage in a misty Japanese forest, stunning aerial view, natural ambient lighting makes it an award-winning scene with high-quality film grain",
       "Epic IMAX movie footage of a dramatic ninja training session happening on a foggy morning close to a waterfall, beautiful sunbeams piercing the fog, with high amount of cinematic movie details",
       "Cinematic movie of a samurai walking a stone path towards a mountain temple at sunrise, engrossed in contemplation, the intense light casting long shadows, shot in IMAX with film grain effect",
       "Movie of an aerial view of rice fields in the Japanese countryside, the morning mist, the golden sun rising over the horizon, captured in an IMAX shoot, displaying cinematic film grain",
       "Showcasing film footage of a traditional Japanese festival in a village at dusk, fireworks lighting the hazy sky overhead, shot on IMAX with a unique cinematic quality and film grain effect",
       "Movie of a group of ninjas swiftly running through a misty bamboo forest in the twilight, capturing the intensity and drama in IMAX, cinematic film grain",
       "Footage of a breathtaking view of the setting sun behind Mount Fuji, the beautiful colors reflecting on a calm lake, tens of lanterns lighting the shores, IMAX shooting with a dramatic film grain",
       "Cinematic movie of a fleet of ancient Japanese trade boats sailing the foggy coast at dawn, the golden light illuminating the scene, captured in breathtaking IMAX quality with film grain",
       "Film footage of a samurai meditating under a massive cherry tree in full bloom, petals delicately falling, intense golden light in the background, in a stunning IMAX shot,  award-winning scene with film grain",
       "Movie of a traditional Japanese tea ceremony taking place in a hazy room, creaking bamboo and soft light added to the scene’s intensity, beautifully captured in an IMAX shoot, featuring high-quality film grain",
       "IMAX movie of a dramatic chase scene with ninjas maneuvering agilely over straw thatched roofs in a Japanese village under a setting sun,  capturing spectacular cinematic moments with film grain effect",
       "Showcasing film footage of a magnificent ancient Japanese castle looming in the dusk, cherry blossoms in the foreground, intense ambient lighting, filmed in IMAX, featuring dramatic film grain for a cinematic feel",
       "Movie clip of samurais traveling on horseback through a foggy mountain path at dawn, the beautiful scenery bathing in the soft sunlight, captured in IMAX, high-quality film grain effect",
       "Footage of a samurai drawing his sword in a dramatic sunset backlight, the sharp blade reflecting the intense light, a high-quality IMAX shoot with captivating film grain",
       "Cinematic movie of panoramic view of the iconic red torii gates of Fushimi Inari Shrine bathed in the moonlight, mist swirling between the structures, shot in IMAX, displaying high film grain",
       "Movie of a beautiful Japanese koi pond reflecting an overhanging cherry blossom tree at sunrise, harp music playing in the background, gentle camera zoom, capturing in IMAX quality with film grain",
       "IMAX film footage of a legendary ninja combating his foes atop a misty mountain, under the dim moonlight, beautifully shot with high level of cinematic details and award-winning film grain",
       "Dramatic movie scene showing the silhouette of a Samurai standing at the top of a hill, overlooking a softly lit Japanese village in the early morning haze, shot in IMAX quality with high detailed film grain"
    ]
  },
  {
    input: "a movie, in a city similar to new york, at night, with lot of rains, a few neon lights, with a detecting walking in various places, cars driving at night, very cinemati. The detective walks among robots, visit an industrial car factory with multiple scene showing car lines, industrial robots, then the assembly line of hummanoid robots, with a robot being assembled, and the storage area for final robots. The detective then chase a robots outside in the rain, in the streets. dramatic lighting, with camera moving, camera rotations, with some hazy mist in most videos, at various time of the day including golden hour light or early evening or morning, god's rays etc.",
    captions: [
        "Movie, of a detective navigating the rain-soaked streets of a neon-lit city similar to New York, bustling with activity, night, imax camera, cinematic, film grain.",
        "Film noir, capturing a detective silhouetted against the glow of neon signs, night, overcast and raining, dynamic camera movement, imax camera, cinematic, film grain.",
        "Cinematic clip of a detective walking amidst automated robots on the city streets, neon lighting reflecting off wet asphalt, night, dramatic lighting, dynamic improvision with camera movement, imax camera, cinematic, film grain.",
        "Movie, a detective staring pensively at a neon sign reflected in a rain puddle, night, street-level view, imax camera, cinematic, film grain.",
        "Cinematic scene of cars driving at night, rain making the city lights blur, reflected on wet roads, imax camera, cinematic, film grain.",
        "Film of a detective stepping onto an industrial car factory floor, early evening with interior lighting, imax camera, cinematic, film grain.",
        "Movie, capturing the ceaseless rhythm of robotic arms assembling cars on a production line, atmospheric factory lighting, imax camera, cinematic, film grain.",
        "Cinematic clip of a detective observing human-like robot assembly lines, unified robotic movements under harsh industrial lighting, imax camera, cinematic, film grain.",
        "Film scene showing a humanoid robot in the process of assembly, intimate detail and precision of automated crafting, imax camera, cinematic, film grain.",
        "Cinematic movie of a storage area lined with complete humanoid robots, silent and still under the dim factory lights, imax camera, cinematic, film grain.",
        "Movie showing a detective pushing through the doors to leave the factory, silhouetted against the factory light, imax camera, cinematic, film grain.",
        "Film capturing a detective in pursuit of a humanoid robot, the city's neon lights reflected in the rainy streets, imax camera, cinematic, film grain.",
        "Cinematic clip of a detective and a robot running in the rain-drenched city, their reflections distorted in the wet street, imax camera, cinematic, film grain.",
        "Movie of the detective chasing the robot through neon-lit narrow streets, fast-paced with dramatic lighting, imax camera, cinematic, film grain.",
        "Film scene of a detective lost in the labyrinth of neon-illuminated streets, a robot's silhouette disappearing in the mist, early morning, imax camera, cinematic, film grain.",
        "Movie, detective catching his breath in the dim light of dawn, city waking slowly in the background, imax camera, cinematic, film grain.",
        "Film noir of a detective in contemplation under the first rays of sun, bathed in golden light, imax camera, cinematic, film grain.",
        "Cinematic shot of the urban jungle at dawn, buildings silhouetted against a golden sun, imax camera, cinematic, film grain.",
        "Movie showing the city’s transformation in the morning light, rain evaporating from the streets, wide-angle, imax camera, cinematic, film grain.",
        "Film of a detective walking back to the industrial factory, sunlight reflected on wet streets, early morning, extreme long-shot, imax camera, cinematic, film grain.",
        "Cinematic clip inside the empty factory lit by the morning sun, silence breaking with the restart of the assembly line, imax camera, cinematic, film grain.",
        "Movie capturing the robot assembly line under the morning light, creating a contrast between warmth and cold automation, imax camera, cinematic, film grain.",
        "Film scene of the detective standing in the empty storage area, rows of humanoid robots ominously silent in the morning glow, imax camera, cinematic, film grain.",
        "Cinematic movie of the detective leaving the factory, surrounded by the industrial cacophony, early morning, street level view, imax camera, cinematic, film grain.",
        "Film noir capturing the detective walking into the city's morning rush, leaving the factory behind, imax camera, cinematic, film grain."
    ]
  },
  {
    "input": "short advert showing a busy cafe and a delicious coffee preparation",
    "captions": [
      "Real world footage, busy urban cafe, people moving, hustle and bustle, morning or afternoon light shining through windows, cinematic style, imax movie, Canon EOS, film grain, high quality, award-winning, trending on social platforms.",
      "Real world footage, long line of customers waiting at the counter, anticipation for the coffee, vibrant but cozy setting, imax movie, Canon EOS, film grain, natural lighting from the outside complemented by warm indoor lighting, award-winning, high quality.",
      "Real world footage, customer orders coffee at the counter, dialogue can be seen but not heard, casual yet stylish attire, cinematic style, imax movie, Canon EOS, film grain, high quality, trending on social platforms.",
      "Real world footage, focus shifts to barista, skilled hand movements, preparing steaming espresso machine, cinematic style, dutch angle shot, Canon EOS, film grain, high quality, beautiful, award-winning.",
      "Real world footage, close-up of coffee cup, milk being poured creating a beautiful heart, imax movie, Dutch angle shot, Canon EOS, film grain, ultra realistic, highly detailed, studio quality, high quality, trending on social platforms.",
      "Real world footage, customer receives the coffee, a smile of satisfaction, warm indoor lighting, vibrant yet cozy, cinematic style, imax movie, Canon EOS, film grain, award-winning, high quality.",
      "Real world footage, coffee package with the logo, bokeh in the background, strong branding, imax movie, close-up shot, Canon EOS, film grain, studio quality, high quality, trending on social platforms.",
      "Real world footage, closing shot: slogan of the coffee brand displayed prominently, bokeh in the background, cinematic style, imax movie, Canon EOS, film grain, RAW photo, stunning, breathtaking, high detailed skin, beautiful."
    ]
  },
  {
    "input": "a movie about new york during winter and xmas",
    "captions": [
      "Film footage of a snow-covered Central Park in New York during daylight, showcasing white winter, tall buildings around, nature's serenity, soft ambient lighting, beautiful, elegant, shot with an IMAX camera, high quality, cinematic, film grain, detailed.",
      "Movie of busy New York streets covered with snow, showcasing yellow taxis, pedestrians in winter wear, sunny daylight reflecting off the snowy streets, bokeh, shot with an IMAX camera, cinematic, film grain.",
      "Film shot of ornate Christmas decorations on New York homes, twinkling lights, vibrant colors, warm ambient lighting, daytime, wide-angle view with IMAX camera, high quality, beautiful, cinematic, film grain.",
      "Movie capture of beautifully wrapped gifts displayed in New York stores, elegant, vibrant hues, ambient store lighting, shot through store windows in daylight, bokeh, shot with IMAX camera, high quality, cinematic, film grain.",
      "Film footage of New York cityscape during winter with Christmas decorations, snow-covered buildings, daytime, wide-angle aerial view, shot with an IMAX camera, high quality, cinematic, film grain.",
      "Movie scene of a huge Christmas tree in Rockefeller center, glittering decorations, sparkling lights, daytime, detailed close-up, shot with an IMAX camera, cinematic, high quality, film grain.",
      "Film close-up of ice skaters at Rockefeller Center rink, graceful movements, festive atmosphere, afternoon sunlight, IMAX camera, cinematic, high quality, film grain.",
      "Movie scene of New York's bustling streets lined with Christmas lights, snow falling slowly, night time, wide-angle view with IMAX camera, high quality, ambient street lighting, cinematic, film grain.",
      "Film footage of beautifully decorated homes with Christmas lights in New York, colorful lights glowing against the snowy backdrop, night view, long shot, IMAX camera, cinematic, high quality, film grain.",
      "Movie scene of a massive Christmas tree adorned with twinkling lights, shot in the dark, lights reflecting off the snow, aerial view, IMAX camera, cinematic, high quality, film grain.",
      "Film scene of a snowy New York street with strolling pedestrians and yellow cabs, nighttime, wide-angle view with IMAX camera, cinematic, ambient street lighting, high quality, film grain.",
      "Movie footage of ice skaters enjoying under a night sky, Christmas tree in the background, spotlight on the skaters, close-up view, IMAX camera, cinematic, high quality, film grain.",
      "Film shot of well-decorated New York store fronts, stunning display of lights and ornaments, nighttime, ambient lighting, shot with IMAX camera, cinematic, high quality, film grain.",
      "Movie scene of snow-covered Central Park, glowing under the moonlight, tranquil, serene, night-time wide-angle aerial view, shot with an IMAX camera, cinematic, high quality, film grain.",
      "Film footage of an extravagant Christmas tree adorned with glittering decorations, under the moonlit sky, close-up shot with an IMAX camera, cinematic, heavenly, high quality, film grain.",
      "Movie of snow-kissed New York cityscape night view, twinkling lights in the buildings, ambient lighting, wide-angle shot with IMAX camera, cinematic, high quality, film grain.",
      "Film capture of ice skaters gracefully skating on the rink amidst snowfall, Rockefeller Christmas tree in the backdrop, night view, extreme long-shot with IMAX camera, cinematic, high quality, film grain.",
      "Film footage of New York streets filled with Christmas cheer, lighted decorations, snowfall, night-time, shot with IMAX camera, cinematic, high quality, film grain.",
      "Movie capture of decorated homes, radiant with festive glow, night view, long shot, ambient lighting, shot with an IMAX camera, cinematic, high quality, film grain.",
      "Film scene of brilliant display of Christmas gifts in New York store, intricate details visible, night view, shot through glass, close-up with IMAX camera, cinematic, high quality, film grain.",
      "Movie scene of a gigantic Christmas tree, sparkling against the night sky, extreme close-up shot of ornaments, shot with an IMAX camera, cinematic, high quality, film grain.",
      "Film footage of snow-kissed New York skyline, night view, aerial shot with IMAX camera, cinematic, enchanting, high quality, film grain.",
      "Movie capture of ice skaters on the rink, Christmas tree in the backdrop, snowfall, night view, shot from a distance with IMAX camera, high quality, cinematic, film grain.",
      "Film footage of aerial view of snow-covered New York city, twinkling lights, night time, wide-angle shot with an IMAX camera, high quality, breathtaking, cinematic, film grain.",
      "Aerial film shot of New York city lighting up a 'Merry Christmas' message with its building lights, massive scale, night view with IMAX camera, high quality, cinematic, film grain, stunning end to a beautiful portrayal of the city."
    ]
  },


]
