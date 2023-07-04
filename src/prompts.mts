
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

export const moonshot2 = [
  {
    "input": "an anime movie in the style of Studio Ghibli and Miyazaki, showing a magical panda becoming friend with a black cat. The panda can transform into various people and objects. Set in feudal japan, they go on adventures in beautiful japanese landscape. We can see leaves of cherry blossom, beautify japanese mountains, plains, rivers, traditional japanese settings. In nearly all scenes we should have dynamic camera effects (eg. rotating around the scene), as well as mist, haze or fog effect. To add to the mystic, each some scenes should have dramatic light effects, such as golden hour, god's ray.",
    "captions": [
      "hand drawn color animation > Magical panda and black cat making friends in a picturesque Japanese landscape, Studio Ghibli style > Cinematic, picturesque composition > IMAX camera panning around the scene > Award-winning, high quality, trending on Artstation, cinematic, movie, dramatic lighting, golden hour, god's rays, film grain",
      "hand drawn color animation > Magical panda transforming into a young feudal Japanese boy, black cat watches in awe, Studio Ghibli style > Cinematic, high detail composition > IMAX camera zooming in > Award-winning, high quality, trending on Artstation, cinematic, movie, mist effect, film grain",
      "hand drawn color animation > Black cat and transformed panda venturing into cherry blossom forest, Studio Ghibli style > Cinematic, evocative composition > IMAX camera rotating around scene > Award-winning, high quality, dynamic camera effects, trending on Artstation, cinematic, movie, dramatic lighting, god's rays, film grain",
      "hand drawn color animation > Panda transforming into samurai warrior, black cat looks on, Studio Ghibli style > Cinematic, high detail composition > IMAX camera zooming out > Award-winning, high quality, trending on Artstation, cinematic, movie, dramatic lighting, mist effect, film grain",
      "hand drawn color animation > Samurai panda and black cat heroically standing on hilltop, overlooking misty Japanese plains, Studio Ghibli style > Epic composition > IMAX camera panning > High quality, cinematic, IMAX, movie, god's rays, film grain, trending on Artstation",
      "hand drawn color animation > Samurai panda returning to original form, cherry blossom petals fall, Studio Ghibli style > Cinematic, elegant composition > IMAX camera rotating > High quality, dynamic camera effects, cinematic, IMAX, movie, dramatic light, film grain",
      "hand drawn color animation > Panda and black cat navigating down the flowing river in a small boat, Studio Ghibli style > Cinematic, beautiful composition > IMAX camera panning following the boat > High quality, cinematic, movie, mist effect, film grain, trending on Artstation",
      "hand drawn color animation > Magical panda transforms into a protective dragon, black cat sits on dragon's head, Studio Ghibli style > Epic, detailed composition > IMAX camera zooming in and out > High quality, dynamic camera effects, cinematic, IMAX, movie, dramatic light, mist, film grain",
      "hand drawn color animation > Dragon panda flying over majestic Mountain Fuji, Studio Ghibli style > Grand scale composition > IMAX camera panning across landscape > High quality, IMAX, movie, golden hour lighting, god's rays, film grain, trending on Artstation",
      "hand drawn color animation > Dragon panda and black cat arriving in traditional Japanese village, Studio Ghibli style > Detailed, cinematic composition > IMAX camera tracking in on village > High quality, dynamic camera effects, cinematic, IMAX, movie, dramatic light, film grain",
      "hand drawn color animation > Panda changing back from dragon to his original form, village people stunned, Studio Ghibli style > Cinematic, picturesque composition > IMAX camera rotating around scene > High quality, cinematic, IMAX, fog effect, movie, dramatic light, film grain",
      "hand drawn color animation > Panda and black cat being welcomed warmly by the village, beautiful cherry blossoms decorate scene, Studio Ghibli style > Evocative, detailed composition > IMAX camera zooming in and out > High quality, cinematic, IMAX, movie, god's rays effect, film grain",
      "hand drawn color animation > Panda and black cat sharing a meal with the villagers, under a cherry blossom tree, Studio Ghibli style > Warm, detailed composition > IMAX camera moving side to side > High quality, cinematic, dynamic camera effects, IMAX, movie, ambient lighting, film grain",
      "hand drawn color animation > Night falling, panda and black cat roasting marshmallows by the fire, villagers watch, Studio Ghibli style > Captivating composition > IMAX camera panning across scene > High quality, cinematic, IMAX, movie, fire light effect, film grain",
      "hand drawn color animation > Panda transforming into a gigantic lantern tower lighting up the village, Studio Ghibli style > Mystical composition > IMAX camera zooming out to show glowing village > High quality, dynamic camera effects, cinematic, IMAX, movie, dramatic lighting, film grain",
      "hand drawn color animation > Panda returning to his original form, villagers cheering, black cat proudly watching, Studio Ghibli style > Joyful, warm composition > IMAX camera tracking in > High quality, cinematic, IMAX, movie, spotlight effect, film grain",
      "hand drawn color animation > Panda and black cat lying under the star-filled sky, villagers asleep, Studio Ghibli style > Cinematic composition > IMAX camera slowly panning across starry sky >  High quality, cinematic, IMAX, movie, ambient lighting, film grain",
      "hand drawn color animation > Sunrise, panda and black cat leaving the villagers, heading towards a new adventure, Studio Ghibli style > Cinematic, picturesque composition > IMAX camera panning watching as they leave > High quality, dynamic camera effects, cinematic, IMAX, movie, golden hour lighting, film grain",
      "hand drawn color animation > Panda and black cat riding on a cloud, overlooking beautiful Japanese landscapes, Studio Ghibli style > Epic scale composition > IMAX camera rotating around >  High quality, cinematic, IMAX, movie, god's rays, film grain",
      "hand drawn color animation > Cloud with panda and cat entering a misty forest, Studio Ghibli style > Mysterious, detailed composition > IMAX camera tracking from below >  High quality, dynamic camera effects, cinematic, IMAX, movie, fog effect, film grain",
      "hand drawn color animation > Panda transforming into a large umbrella, shielding black cat from rain, Studio Ghibli style > Charming, cinematic composition > IMAX camera zooming in >  High quality, cinematic, IMAX, movie, rain effects, film grain",
      "hand drawn color animation > Panda umbrella and black cat observing a distant castle, Studio Ghibli style > Anticipating composition > IMAX camera panning towards the castle > High quality, dynamic camera effects, cinematic, IMAX, movie, dramatic light, film grain",
      "hand drawn color animation > Panda transforming from umbrella into a humble knight, black cat by his side, Studio Ghibli style > Cinematic, high detail composition > IMAX camera rotating >  High quality, cinematic, IMAX, movie, dramatic lighting, film grain",
      "hand drawn color animation > Knight panda and black cat bravely approaching the castle, Studio Ghibli style > Adventurous, grand scale composition > IMAX camera tracking them > High quality, dynamic camera effects, cinematic, IMAX, movie, spotlight effect, film grain",
      "hand drawn color animation > Final scene: Knight panda and black cat standing before the castle gates, ready for their next adventure, Studio Ghibli style > Climactic composition > IMAX camera zooming out > High quality, cinematic, IMAX, movie, god's rays, film grain"
    ]
  },
  {
    "input": "a movie shot in a Michael Bay style, about an alien ship destroying Los Angeles",
    "captions": [
      "cinematic shot of the misty streets of Los Angeles during the early morning, drone camera, ambient lighting, foggy, wide-angle, film grain, Michael Bay style, cinematic, imax, movie, high quality",
    
      "cinematic wide-angle drone shot of an airplane taking off in the misty sunrise Los Angeles, ambient lighting, film grain, Michael Bay style, cinematic, imax, movie, high quality",
    
      "graphic 3D render of a multi-kilometer wide alien spaceship hovering over Los Angeles at dawn, ultra wide-angle, detailed fog effect, dramatic lighting, cinematic, imax, movie, Michael Bay style, film grain",
     
      "graphical 3D rendered extreme long shot of a light beam shooting down from the alien ship impacting Los Angeles, ambient lighting, foggy, Michael Bay style, cinematic, imax, movie, film grain",
     
      "an atmospheric 3D cinematic shot of a colossal explosion in Los Angeles caused by the alien ship's light beam, Michael Bay style, ambient lighting, wide-angle, film grain, cinematic, imax, movie, high quality",
     
      "dramatic 3D render of cars and debris being launched into the air amid the alien chaos in Los Angeles, ultra wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "3D rendered shot of terrified citizens of Los Angeles running from destruction, ambient lighting, foggy, ultra wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "graphical video of military leaders strategizing a response, ambient lighting, close-up, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "graphical 3D video of an armada of jets departing to engage the alien ship attack, late morning light, ambient lighting, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "graphical 3D video of the jet planes ascending towards the floating alien ship, ambient lighting, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "3D rendered video of a jet squadron maneuvering in formation, ambient lighting, extreme long-shot, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "graphical 3D video of a dynamic chase between the jet planes and the alien ship over LA, noon sunlight, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "3D animated video of a jet plane narrowly avoiding alien fire in a dramatic canyon chase, ambient lighting, extreme close-up, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "3D render of a jet plane taking a daring shot at the alien ship, intense sunlight, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "graphic video of the alien ship starting to fall apart under the onslaught of the jet planes, direct sunlight, extreme long-shot, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "3D rendered video of the alien mothership exploding brilliantly in the Los Angeles atmosphere, ambient lighting, extreme long-shot, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "graphical 3D video of the jet planes flying away from the explosion, dramatic lighting, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "3D rendered close-up of a jet pilot celebrating the victory against the alien ship, ambient lighting, Michael Bay style, cinematic, imax, movie, film grain",
     
      "graphical video of the citizens of Los Angeles cheering as the jet planes fly over the city during the golden hour, ambient lighting, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "3D animated video of the joyous celebration in Los Angeles, with American flags waving in the golden sunset, God's rays, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "amazing 3D rendered celebration scene of 4th of July in Los Angeles, firework lights, ambient lighting, wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "3D rendered dramatic shot of the jubilant crowds under the fireworks in Los Angeles, ambient lighting, extreme long-shot, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "graphical video of a jet plane doing a victory flyover with smoke trails and fireworks lighting up the evening sky, Michael Bay style, ambient lighting, extreme long-shot, film grain, cinematic, imax, movie, high quality",
     
      "3D rendered video of a jet plane landing with a golden sunset in the background, ambient lighting, close-up, film grain, cinematic, imax, movie, Michael Bay style, high quality",
     
      "cinematic drone video of the calm after the storm in Los Angeles at dusk, ambient lighting, ultra wide-angle, film grain, cinematic, imax, movie, Michael Bay style, high quality"
    ]
  },
  
]

export const moonshot = [
  {
    "input": "Blade Runner style movie with a detective exploring a cyberpunk city",
    "captions": [
      "cinematic 3D render of an aerial view of a futuristic cyberpunk city during the day, flying cars moving, japanese and chinese characters on neon signs, a high volume of pedestrians and droids, constant dreary rain, Blade Runner style architecture, IMAX quality, high resolution, panoramic lens, film grain",
      "cinematic 3D render of a curious detective exploring the bustling cyberpunk city streets under daylight, with neon signs in chinese and japanese, rain continuously pouring down, in Blade Runner style, IMAX quality, high resolution, street-level view, film grain",
      "film-quality 3D render of the cyberpunk city under daylight, focusing on a Japanese style noodle stall with the detective ordering food, rainy condition persisting, bathed in the glow of a sea of neon signs, Blade Runner vibes, IMAX quality, high resolution, close-up view of the detective, film grain",
      "cinematic 3D render of a detective entering a high tech corporate building in the cyberpunk city, vertical neon signs in chinese and japanese, during the day, constant rain presence, fluent Blade Runner aesthetic, IMAX spectacle, high resolution, isotropic pattern, film grain",
      "IMAX worthy 3D rendering of a neon lit cyberpunk cityscape at night, flying cars hovering, skyscrapers adorned with chinese and japanese holographic projections, ceaseless rain adding reflections on the ground, in a Blade Runner style narrative, high resolution, aerial view, film grain",
      "cinematic 3D rendering of the detective entering a techno club with multi-coloured neon lights at night, the rain still pouring outside, surrounded by robots performing maintenance, Blade Runner aesthetic all around, IMAX feature film quality, high resolution, wide-angle, film grain",
      "cinematic 3D render of a detective gazing at a massive neon billboard featuring a japanese pop star on a rainy night in the cyberpunk city, skyscrapers towering overhead, Blade Runner influences prominent, IMAX film quality, high resolution, low angle shot, film grain",
      "film-quality 3D rendering of a detective boarding a flying car amidst the labyrinth of neon-lit towers in the cyberpunk city, filled with the glow of chinese and japanese inscriptions, the rain has no rest, clear Blade Runner fantasy, IMAX sensation, high resolution, panoramic view, film grain",
      "Movie scene of a gloomy detective in a trench coat walking amidst the buzzing neon lights of a cyberpunk city under constant rain captured in brilliant IMAX quality showcasing intricate details from Canon EOS",
      "Film sequence of the detective running after a suspicious figure in a labyrinthine alleyway under neon signs in Kanji, captured in cinematic glory with precise film grain texture",
      "Movie footage of the detective entering an eatery lit with fluorescent lights with patrons including humans and robots, the chatter of people and synth music filling the air, brought alive in ultra-realistic IMAX quality",
      "Cinematic scene of the detective engaged in a tense conversation with a humanoid robot waitress, the reflective sheen on her metallic face captured beautifully under neon lighting with real-time film grain effects",
      "Movie still of the detective descending into a subway as glowing neon lights reflect off the rain-soaked pavement, the mood set with ambient lighting, the scene shot in stunning IMAX quality with cinematic film grain",
      "Cinematic sequence of the detective chasing a suspect through a crowded subway train, the details of the handshake and animated advertising holograms around them rendered in high-definition with a Canon EOS",
      "Movie scene of the detective looking out of a high rise at the skyline of the cyberpunk city, neon lit skyscrapers piercing the misty rainy scene, shot in breathtaking IMAX quality, with film grain for the vintage touch",
      "Film footage of the detective, back in his apartment, pondering the clues while looking at futuristic computer screens showing 3D data, the room bathed in ambient neon light, scene captured in cinematic IMAX with generous film grain",
      "Cinematic footage of a cyberpunk city, filled with towering skyscrapers and endless neon signs, Chinese and Japanese influences visible in the architecture and signage, bustling with flying cars, under a perpetual rain, reflecting the city lights. Shot in the style of a film noir documentary, spotlight accent lighting, wide-angle view, with IMAX film grain",

      "Shot of animated humanoid robots and human citizens bustling through the rain-slick streets of the city. Fragrant, smoky street food stalls adding to the ambient fog and neon light effects. Noir movie style, low angle view, hyper-realistic, IMAX, digital, cinematic",
  
      "Shot of the labyrinthine back-alleys of the city, filled with mysteries and shadowy figures. The narrow alleyways are lit by a surplus of neon signs, producing a hypnotic color page, rain pouring down in heavy sheets, creating a surreal watercolor effect. Mysterious and ominous in a Noir film style, aerial view, IMAX, cinematic",
  
      "Time lapse shot of day transitioning into night in the cyberpunk city. The sun sets behind the towering skyscrapers and neon lights start to dominate the landscape. Rain keeps falling, creating shiny surfaces and mirror-like reflections filling the frame. Straight out of Blade Runner, panoramic, IMAX, cinematic, film grain",
  
      "Aerial footage of the city at night, a breathtaking spectacle of neon light and rain-swept streets. Flying cars dart in between glowing skyscrapers under a thick layer of fog and mist. Filmed in a documentary style but heavily reminiscent of science-fiction movies, ultra wide-angle shot, IMAX, cinematic",
  
      "Close-up shot of a humanoid robot submerged in the rain, its metallic surface reflecting the neon lights from the surroundings. Its robotic eyes show a mixture of humanlike emotion and cold, mechanical calculation. Noir movie influence, depth of field view, IMAX, ultra-realistic, cinematic, film grain",
  
      "A stunning shot of a large city square, filled with massive electronic billboards broadcasting colorful advertisements. Thousands of citizens, both humans and robots, throng the space despite the rain. Evocative of classic film noir but with a cyberpunk twist, wide-angle view, IMAX, cinematic",
  
      "Final shot of a noir-inspire, panoramic view of the sprawling, rain-soaked city from a high vista point. The cityscape stretches out towards a horizon filled with sprawling factories and dark rain clouds. Bright, neon lights slice through the fog and mist, hyperrealistic, ultra wide-angle, IMAX, cinematic, film grain"
    ]
  },
  {
    "input": "a feudal japan movie, showing ninjas, samurai, in beautiful settings such as cherry blossom, japanese mountains. Lot of landscape shots in the mist, lot of haze, fog, light effects, sunsets, god's rays etc cherry blossom leave falling etc it is very cinematic",
    "captions": [
      "Film footage of a mysterious samurai standing alone among cherry blossom trees, pink petals softly falling, golden sunset light diffusing through the fog, in a serene Japanese mountain scenery, cinematic movie, on IMAX camera, wide-angle, high detail, ambient lighting, in 4k, trending on artstation.",
      "Film footage of ninjas stealthily moving through the thick fog in a dense bamboo forest, swift yet unseen, shrouded in mystery and suspense, on a cool dusk in feudal Japan, cinematic movie, shot on IMAX camera, ultra-wide-angle view, high detailed with film grain effects, enhanced ambient lighting, in 4K, trending on artstation.",
      "Film footage showing an aerial view of the rugged landscape of Japanese mountains veiled by mist, the golden sunlight piercing through and creating crepuscular rays, cinematic movie, seen through IMAX camera, ultra-realistic, high details, with film grain effects, soft ambient lighting, rendered in 4K, trending on artstation.",
      "Film footage of a bloody samurai duel under the falling cherry blossom, their swords clashing and sparking beneath the crimson sunset, in a quiet temple courtyard, set in feudal Japan, cinematic movie, IMAX camera, in ultra-wide-angle, ambient lighting focus, highly detailed with film grain, in 4K, trending on artstation.",
      "Film footage of an intense ninja training sequence, in a serene water garden framed by a mountainous backdrop, during the golden hour, filled with mist and god's rays, part of a cinematic movie, captured on IMAX camera, using wide-angle view, high detail, ambient lighting, adding film grain effects, in 4k resolution, trending on artstation.",
      "Film footage of a samurai walking a lonely path leading to a majestic Japanese castle, lit under the haunting glow of a full moon amidst an ocean of mist, cinematic movie, filmed on IMAX camera, ultra-wide-angle, high detailed, bathed in soft moonlit ambient lighting, 4k resolution, film grain effect, trending on artstation.",
      "Film footage showcasing a dramatic sunset over a cherry blossom covered mountain range in feudal Japan, a samurai silhouetted against the fiery skies, from a cinematic movie, on IMAX camera, wide-angle, superbly detailed, ambient lighting, 4k resolution, film grain effects, trending on artstation.",
      "Film footage of ninjas and samurais clashing on an ancient, weather-beaten stone bridge over a raging river, amidst a torrential downpour, from a cinematic movie, filmed on IMAX camera, ultra-wide angle view, high detailed rainfall, ambient stormy lighting, 4k, film grain effects, trending on artstation."
    ]
  },
  {
    "input": "documentary footage of bandits riding horses in the desert, very cinematic, they go past desert mountains, cactus, canyons, it is very cinematic, with sunsets, light effets, mist, fog etc",
    "captions": [
      "Real-world footage of bandits guiding their horses over a vast desert terrain under the blazing sun, film grain style, grand sweeping aerial view, capturing the contrast between the riders and the open desert, captured with IMAX camera, cinematic, movie quality, high details.",
      "Documentary footage of a group of bandits riding swiftly through a field of cacti, a testament to their daredevil spirit, in the orange glow of a spectacular sunset, shot on an IMAX camera, featuring film grain, wide-angle, and high quality details.",
      "Movie-like footage, bandits navigating near huge desert mountains, the backdrop lit in magical crepuscular rays, maintaining cinematic, film grain style, landscape composition, shot with an IMAX camera, maintaining high quality and detail.",
      "Cinematic real-world footage of bandits riding the edges of a vast canyon, the setting sun casting long, dramatic shadows, captured in film grain style, landscape orientation, shot with IMAX camera, high quality, with movie-like rendering.",
      "Documentary style cinematic footage of a pack of bandits, silhouetted by the fading light, riding against the panoramic view of a rosy-hued sunset over the desert mountains, captured in film grain style, shot with an IMAX camera, displaying high detail, movie quality.",
      "Real-world footage of bandits, looking minuscule against the grandeur of the desert, riding under a sky streaked with colours of the sunset, imbued with a cinematic feel, film grain style, wide-angle shot on an IMAX camera, maintaining high quality and movie-like aesthetics.",
      "Cinematic documentary footage of bandits on horseback, swallowed up by a mysterious fog enveloping the desert, heightening the tension, film grain style, aerial view captured with IMAX camera, cinematic, maintaining a movie-like feel, and high quality.",
      "Real-world footage, bandits journeying through the desert at twilight, their path lit by a soft glow through the fog and mist, encapsulating an ethereal beauty, cinematic, film grain style, panoramic capture with an IMAX camera, high quality, movie-like detailing."
    ]
  },
  {
    "input": "documentary footage of bandits riding horses in the desert, very cinematic, then attacking a train by having their horses running after the train, we can see them going after the train, jumping on it, the camera showing various shots and orientation, the bandings gets on top of the train, they fights with the sheriff, then final they escape in the locomotive, by cutting the rest of the train loose",
    "captions": [
      "movie footage of a gang of bandits, riding horses in desert at high noon, in a sweeping panoramic shot, captured in sharp details with IMAX camera, with added film grain, high-quality, trending on artstation",
      "movie footage of bandits charging on their horses towards a moving train in the middle of a desert, captured in an epic aerial shot with IMAX camera, cinematic, realistic details, high resolution",
      "movie close-up shot of horse hooves kicking up dust while chasing a train, natural lighting highlighting muscle movement and sand particles in the air, captured with IMAX camera, very detailed, high-definition, cinematic, subtle film grain",
      "realistic movie footage of bandits, in silhouette against the setting sun, launching themselves from their horses onto the moving train, movie-like action sequence captured with IMAX camera, added film grain, very detailed, high-definition, ultra wide-angle view",
      "movie footage of dramatic action as bandits pulling themselves up onto the top of the speeding train, with desert scenery rushing by, captured in high-resolution with an IMAX camera, sunset lighting, sharp details and with film grain for a vintage look",
      "cinematic movie footage of a thrilling fight scene between bandits and a sheriff on top of a moving train, shot from a low-angle with an IMAX camera, enhanced effect with film grain, high quality, lit by setting sun, trending on artstation",
      "movie footage of defeated sheriff left behind on the train, close-up shot of his reaction, sunset reflecting on his face, perfect dof with IMAX camera, crystal clear, film grain, high detail, high-quality",
      "movie footage of triumphant bandits, slowing motion, expressive faces as they celebrate their victory, backlit by setting sun, shot with ultra wide-angle IMAX camera with film grain for a vintage ambience, very cinematic and detailed, 8K UHD",
      "movie footage of one of the bandits cutting the locomotive loose, a shot from birds-eye view, captured in high-resolution with IMAX camera showcasing the isolated locomotive chugging ahead, added film grain, very detailed, high-definition",
      "movie footage of a birds-eye view of the rest of the train slowing down in the middle of the sandy desert, high-res IMAX footage, film grain, creating a cinematic, vintage look, rich in detail, realistic, featured on Pixiv",
      "movie footage of bandits escaping in locomotive with high-speed motion blur, capturing the rush of the moment, backlit by setting sun, shot with an IMAX camera, ultra details, film grain effect, high-definition, featured on Pixiv",
      "final movie footage of bandits disappearing into the sunset with the stolen locomotive, a super wide shot of a desert engulfing the disappearing train, captured in high-resolution filmic quality with an IMAX camera, film grain, stunning colors of sunset, ultra detailed, high quality, studio quality"
    ]
  },
  {
    "input": "documentary footage of a car making factory, featuring various industrial robots. We then see humanoid robots being assembled, then working on a construction site. We also see 4-legged robots.",
    "captions": [
      "Documentary film footage of a bustling car factory, filled with dynamic industrial robots. Resplendent daylight ambient lighting, wide-angle composition, shot with an Imax camera, extracting an air of cinematic appearance, movie quality with a fine film grain.",
      "Continuation of the car assembly line documentary shoot, with robots delicately welding car bodies. Ambient lighting producing metallic glow on robots, grand scale view, film shot using an Imax camera, cinematic ambience with rich film grain.",
      "Documentary film, shifting focus onto a fully automated robotic arm, skillfully installing a car engine. Direct sunlight illuminating the scene, close-shot for higher detail, captured on Imax, delivering a cinematic feel with subtle film grain.",
      "Continuation of the documentary film in the same factory, now showcasing swift robots spraying paint evenly onto car bodies. Backlight highlighting the sprays, wide-angle shot on Imax camera, maintaining cinematic vibe with noticeable film grain.",
      "Documentary footage, transitioning the scene to the final inspection of a completed car by precise robotic arms. Ambient lighting, long shot capturing the size of the assembly line, on an Imax camera, with film grain to achieve a cinematic aura.",
      "A new scene in the same documentary, introducing humanoid robots being methodically assembled by other industrial robots. Warm indoor lighting, long shot perspective on Imax, maintaining the cinematic aura with detailed film grain texture.",
      "Continuation of documentary film, providing close-ups of humanoid robots' intricate mechanisms and processes. Direct light highlighting finite details, extreme close shot on an Imax camera, upholding the cinematic tone with clear film grain.",
      "Documentary footage now showing humanoid robots performing functional tests, conveyed through agile movements. Soft ambient light scenario, featuring a clean wide-angle shot using Imax camera, cinematic veneer accentuated by observable film grain.",
      "In the movie, changing the scene to a construction site where the humanoid robots are diligently working. Afternoon sunlight, landscape shot using Imax, movie-like production quality enriched with a tangible film grain touch.",
      "Documentary film, showing a humanoid robot operating heavy machinery with precision. Backlight creating silhouette, close-up shot on Imax, with the prominent cinematic ambiance and the characteristic film grain.",
      "Footage in the same documentary introducing a 4-legged robot moving deftly across the construction site. Dusk lighting casting long shadows, wide-angle shot from an Imax camera, cinematic look and grainy film texture.",
      "Finale of the documentary movie, a powerful shot of a team of 4-legged robots working in symmetry, lifting heavy loads in the twilight. Spotlighted by the site lamps, long shot from Imax camera, capturing cinematic vibrancy with a strong film grain finish."
    ]
  },
  {
    "input": "anime movie about a cat making friend with a magic panda, in the style of Studio Ghibli, in feudal japan era. The panda can transform in various type of animals, and accompanies the cat in various places.",
    "captions": [
      "Content: Anime Movie - A curious black and white cat meeting a magical panda in a lush bamboo forest of feudal Japan. Style: Studio Ghibli aesthetics, vibrant colors and detailed art. Composition: Wide-angle panoramic view capturing full scene. Camera: Imax. Additional Keywords: Cinematic, evocative, film grain, featured on anime weekly magazine.",
      "Content: Anime Movie - The mystical panda revealing its ability to transform into a regal phoenix with fiery wings captive the cat's attention. Style: Studio Ghibli-style, intricate art. Composition: Close-up on characters' expressions. Camera: Imax. Additional Keywords: Cinematic, expressive, film grain, trending on anime conventions",
      "Content: Anime Movie - An awe-struck cat and the transformed phoenix soaring above the ancient Japanese village, villagers spectating in wonder. Style: Studio Ghibli, vibrant colors, detailed background. Composition: Aerial view landscape. Camera: Imax. Additional Keywords: Cinematic, exhilarating, film grain, award-winning animation.",
      "Content: Anime Movie - The phoenix reverts back into panda and they continue their journey, lush Japanese landscape in the background. Studio Ghibli signature style. Composition: Long shot of the travelers. Camera: Imax. Additional Keywords: Cinematic, epic transition, film grain, masterpiece.",
      "Content: Anime Movie - Cat and panda resting near a waterfall, bonding over fish caught by the cat. Style: Studio Ghibli's soft and detailed art. Composition: Close-up showing expression and action. Camera: Imax. Additional Keywords: Cinematic, heartwarming, film grain, fan favorite animation.",
      "Content: Anime Movie - The panda turns into a powerful tiger engaging in playful mischief with the cat. Studio Ghibli art, focusing on movement and playful interaction. Composition: Close shot of the two characters. Camera: Imax. Additional Keywords: Cinematic, dynamic action, film grain, popular on anime festival.",
      "Content: Anime Movie - The cat, riding on the back of tiger-transformed panda, forging through the vibrant and mystical forest. Studio Ghibli, attention to detailed background. Composition: Wide-angle shot capturing expansive forest. Camera: Imax. Additional Keywords: Cinematic, exciting ride, film grain, trending on anime networks.",
      "Content: Anime Movie - The panda, now formed into majestic dragon, the cat holding on to its back, as they fly overs moonlit feudal Japan. Studio Ghibli's mesmerizing and imaginative style. Composition: Aerial view of moonlit landscape. Camera: Imax. Additional Keywords: Cinematic, enchanting flight, film grain, award winning anime.",
      "Content: Anime Movie - The night journey ends, as the dragon shape-shifts back into the panda, they rest near a serene lake under the starlit sky. Studio Ghibli, emphasis on tranquil scenery and camaraderie. Composition: Long shot capturing peaceful scene. Camera: Imax. Additional Keywords: Cinematic, emotional bonding, film grain, anime masterpiece.",
      "Content: Anime Movie - Sunrise illuminates the pair as the panda resumes its journey, with the cat playfully following behind. Studio Ghibli, displaying morning glow and animated characters. Composition: Wide-angle shot of the advancing day. Camera: Imax. Additional Keywords: Cinematic, new beginnings, film grain, fan favorite anime.",
      "Content: Anime Movie - An exciting chase as the panda turns into a swift cheetah, the cat keeping up, through fields and over rooftops. Studio Ghibli, dynamic action scene. Composition: Close-up on the playful chase. Camera: Imax. Additional Keywords: Cinematic, lively pursuit, film grain, trending on anime shows.",
      "Content: Anime Movie - As dusk descends, the cat and magic panda overlook the silhouette of the cascade of lights in the city below. Studio Ghibli's detailed shadow and light play. Composition: Panoramic view of the cityscape. Camera: Imax. Additional Keywords: Cinematic, tranquil scene, film grain, top rated anime."
    ]
  },
  {
    "input": "documentary footage of dinosaurs running in the nature among visitors of a dinosaur park, on an island, featuring 6 different sorts of dinosaurs, predators or not etc, going to water places, hunting other dinosaurs. The settings if beautiful and marvelous, like a tropical island, but there are also rivers, mountains, night scene with rain etc with a big trex. To give an intense atmosphere, all the scenes should have fog or mist, an various light tricks such as gods ray, shadows etc (note: add the keywords 'cinematic', 'imax', 'movie', 'film grain' to help the AI generator)",
    "captions": [
      "Cinematic IMAX footage of assorted dinosaurs moving dynamically in a dense tropical forest, shot in a documentary style, with the hazy sunlight breaking through the canopy, creating fascinating shadows and god's rays. Filmed with ARRI Alexa camera emphasizing the film grain texture and the movie-like atmosphere.",
      "Cinematic IMAX footage of a pack of velociraptors stalking through the tall grass of the dinosaur park, hunting prey in a synergistic manner, under the natural, tropical daylight. Filmed with ARRI Alexa camera to capture the fine film grain details and the movie-like atmosphere.",
      "Cinematic IMAX footage of visitors observing Brachiosaurus at the riverside of the dinosaur park, enormous creatures peacefully eating foliage in a tropical setting contrasting with the potential dangers of predators. Captured with ARRI Alexa camera, showing the realistic film grain details and creating a suspenseful, movie-like atmosphere.",
      "Cinematic IMAX footage of a rugged mountainside depicting a herd of Triceratops grazing, under the scattered lighting caused by the cloudy skies, shot in a documentary style. Filmed with the ARRI Alexa camera enhancing the realistic film grain aesthetic.",
      "Cinematic IMAX footage showing the intense scene of Pterodactyls flying high above the island, basking in the fading sunlight. Taken with ARRI Alexa camera highlighting the delicate film grain texture and completing the movie narrative with a splendid bird's eye view shot.",
      "Beautiful night scene filmed in cinematic IMAX of the dinosaur park amid light rain, creating an eerie but fascinating atmosphere through the misty jungle. Captured with ARRI Alexa camera to enhance the film grain texture.",
      "Cinematic IMAX snippet of a T-Rex making its terrifying appearance in the misty night, eyes glowing, reflecting the fear of unseen visitors. Filmed using the ARRI Alexa camera to emphasize movie-like atmosphere and capture detailed grain texture.",
      "Cinematic IMAX capture of a pack of Gallimimus wildly running past the visitors amidst the foggy morning, creating captivating dynamics. Filmed with an ARRI Alexa camera capturing the film grain detail to enhance the movie-like atmosphere.",
      "Cinematic IMAX footage of visitors marveling at the sight of Parasaurolophus feeding by the riverside amidst a tropical backdrop. Filmed with ARRI Alexa camera, achieving a stunning film grain texture and a narrative documentary style.",
      "An emotionally charged scene in cinematic IMAX of a Triceratops defending its young against a pack of Velociraptors under the intensity of tropical sunlight. Filmed using ARRI Alexa camera, capturing high detail and film grain texture that evokes a movie-like atmosphere.",
      "Cinical IMAX scene of the trepid visitors witnessing a herd of Brachiosaurus moving slowly beyond the foggy horizon, shot with an ARRI Alexa camera to achieve a stunning film grain texture and a compelling atmosphere.",
      "The iconic, suspense-filled scene filmed in cinematic IMAX of a T-Rex silhouette appearing amid the mist, leaving footprints in the mud as it approaches visitors. Captured with ARRI Alexa camera, celebrating the film grain and creating a movie-like climactic moment."
    ]
  },
  {
    "input": "documentary footage of dinosaurs running in the nature among visitors of a dinosaur park, on an island, featuring 6 different sorts of dinosaurs, predators or not etc, going to water places, hunting other dinosaurs. The settings if beautiful and marvelous, like a tropical island, but there are also rivers, mountains, night scene with rain etc with a big trex",
    "captions": [
      "IMAX film footage of a pack of Gallimimus running swiftly through a lush, tropical forest on a mesmerizing island, daylight, Canon EOS camera, film grain, high details, award-winning, ultra-wide angle, panoramic, trending on ArtStation, cinematographic quality.",
      "Cinematic documentary video of Triceratops drinking peacefully from a purling stream amidst verdant vegetation, daylight, Canon EOS, high quality, incredible depth of field, trending on ArtStation, soft ambient lighting creating serene mood, film grain.",
      "High definition IMAX footage of a Velociraptor in its natural habitat, stalking keenly among the dense undergrowth, daylight, Canon EOS, hyper-realistic, high detail, depth of field, soft lighting from afternoon sun, film grain.",
      "Stunning cinematic film of a majestic Brachiosaurus strolling along the banks of a sprawling river, casting a long shadow in the sunset, Canon EOS, award-winning, ambient lighting, ultra-wide angle, hyper-realistic, high detail, film grain.",
      "Breathtaking night scene of a T-Rex hunting in the rain, thunder lighting up the dramatic scene, Canon EOS film footage, imax quality, soft backlighting creating stunning silhouette, high detail, film grain, trending on ArtStation.",
      "Documentary film footage of a herd of Parasaurolophus grazing peacefully under the gentle rays of the morning sun, Canon EOS, imax quality, high detail with soft ambient lighting, ultra-realistic, film grain, trending on ArtStation.",
      "Immersive IMAX footage of visitors exploring the dinosaur park, wide-eyed at the sight of the marvelous creatures in a vibrant tropical setting, Canon EOS, high detail, depth of field, trending on ArtStation, film grain.",
      "Ultra-realistic high definition film footage documenting the feeding habits of a Carnotaurus at dusk, Canon EOS, imax quality, incredible depth of field, accent lighting highlighting the dinosaur's raw power, film grain.",
      "Cinematic scene of a Diplodocus raising its long neck to feast on the tree tops, captured in the warm afternoon golden hour, Canon EOS, high detail, ultra-realistic, ambient lighting, film grain, trending on ArtStation.",
      "Late night footage of a pack of Velociraptors working together to bring down a larger prey in the pouring rain, Canon EOS, imax quality, film grain, intense backlight creating striking contrast, high detail, trending on ArtStation.",
      "Aerial view of the dinosaur park showing the extent of the tropical island with diverse settings, from mountains to rivers and dense forests, captured in IMAX quality, Canon EOS, high detail, film grain, trending on ArtStation.",
      "Dramatic closure footage of a mighty T-Rex claiming its territory among the lesser beings, against the setting sun, Canon EOS, imax quality, stunning backlighting, high detail, ultra-realistic, film grain, trending on ArtStation."
    ]
  },
  /*
  {
    "input": "documentary footage of an intense race on a race track, with the camera posted on various places (fixed, drone, onboard, showing the pilot, or the race, moving etc), showing the F1 cars racing, some accidents, smoke, people in acclaim, and the final celebration",
    "captions": [
        "Documentary footage of racing F1 cars at breakneck speed on a racetrack, capturing the intensity and thrill of the competition, cinematic style, shot from a fixed, high angle view, filmed with IMAX cameras with a touch of film grain for that classic documentary feel, high details, studio quality, high definition, 4k resolution.",
        "Real world footage of a sudden accident on the track, suspenseful and dramatic, capturing the unexpected twists of racing, cinematic style, shot from a medium leveling zooming in to the accident, using IMAX cameras with subtle film grain details, high details, studio quality, high resolution, 4k.",
        "Documentary footage of a pilot reacting swiftly to the accident, capturing raw emotions and quick thinking, cinematic style, extreme close-up shot inside the cockpit, using IMAX cameras, with film grain added for an intense, movie-like feel, high details, studio quality, RAW photo, 4k resolution.",
        "Movie-like documentary of a F1 car skidding, trails of smoke billowing behind, adding to the drama and excitement of the race, cinematic style, wide-angle, shot from a drone, using IMAX cameras, with an element of film grain for a raw and gritty effect, high details, studio quality, 4k resolution.",
        "Documentary film of thousands of fans watching the race with bated breath, capturing the shared tension and anticipation, cinematic style, long shot, filmed from an aerial drone, using IMAX cameras, with a touch of film grain for a vintage documentary feel, high details, studio quality, RAW photo, 4k resolution.",
        "Footage of a F1 car racing towards the finish line, showing the determination and high speed adrenaline rush, cinematic style, filmed from a high-speed following drone, using IMAX cameras, with a film grain filter for a cinematic feel, high details, studio quality, RAW photo, 4k resolution.",
        "Documentary shot of the winning F1 car crossing the finish line, capturing the climactic moment of ultimate victory, cinematic style, extreme long-shot, shot from a stable fixed point, using IMAX cameras, with visible film grain for a vintage movie effect, high details, studio quality, RAW photo, 4k resolution.",
        "Cinematic documentary footage of the winner's joyous celebration, capturing the ecstasy of victory, cinematic style, close-up shot of the pilot, filmed with IMAX cameras, with film grain for an authentic documentary feel, high details, studio quality, RAW photo, 4k resolution.",
        "Film footage of an emotional pilot raising the trophy, capturing sheer joy and victory, cinematic style, low angle, shot using IMAX cameras, with subtle film grain added for a more authentic and dramatic feel, high details, studio quality, RAW photo, 4k resolution.",
        "Documentary footage of the crowning ceremony, capturing the euphoria and pride of the winner, cinematic style, long shot, filmed from a wide angle with IMAX cameras, with a sprinkle of film grain for a sweepingly cinematic effect, high details, studio quality, RAW photo, 4k resolution.",
        "Film footage of cheering crowd applauding the victor, capturing the contagious excitement and team spirit, cinematic style, shot overhead from a drone, using IMAX cameras, and a film grain filter for a raw documentary vibe, high details, studio quality, RAW photo, 4k resolution.",
        "Cinematic and emotional documentary footage of victorious team hugging and celebrating, capturing the essence of triumph and unity, cinematic style, close-up shot, filmed using IMAX cameras, with visible film grain for an authentic feel, high details, studio quality, RAW photo, 4k resolution."
    ]
  }, 
  */
 {
    "input": "documentary footage of aquatic life, featuring squids of various size and color, dolphines, whales, orca, and sharks",
    "captions": [
        "cinematic footage of a colossal squid dashing through the deep-sea, in an elegant dance, surrounded by an army of neon-colored fish, in the depth of pristine ocean, filmed with IMAX camera, high granularity, added film grain effect, high quality widescreen composition, winner of multiple awards",
        "high-quality IMAX film capturing a pod of playful dolphins, dashing through azure clear water, near the surface, accentuated by natural sunlight filtering through water, shot in landscape, maintaining the film grain consistency, cinematic composition, engulfed in the richness of marine life",
        "captivating movie footage, a curious orca inspecting a deep-sea explorer vehicle, in dark water illuminated only by the submarine's lights, reflection playing off the whale's skin, gritty texture, film grain effect, captured on IMAX, showcasing the cinematic aspect of marine exploration",
        "beautiful scene of a shark in the soft twilight of dusk, depicting its powerful elegance, patrolling near a coral reef, evocative lighting, adding depth to the visual narrative, shot on IMAX, dramatic cinematic texture, retaining film grain technique throughout",
        "cinematic exploration of a deep-sea squid courtship ritual, vibrant with hues, captured in the alien-like landscape of the ocean floor, filmed with enhanced light to highlight the bioluminescent spectacle, on IMAX, accentuated with a film grain effect for vintage aesthetic",
        "panoramic IMAX capture of a school of dolphins doing aquabatics, high contrast against the midday sun, immersion in natural world, with subtle film grain effect, timeless cinema aesthetic, 4k, maintaining the visual consistency across the series",
        "lush video rendering of a pod of orcas hunting in coordination, stunning visuals accompanied by dramatic, natural lighting of the setting sun, maintaining the IMAX film grain, showcasing the fast-paced drama inherent in nature's theatre, truly cinematic",
        "awesome movie of millions of neon colored squids migrating, shot at twilight, with a backdrop of the sun setting, creating a silhouette effect, enhancing the film's cinematic appeal, IMAX screen, consistent film grain, award-winning quality",
        "cinematic capture of a humpback whale breaching, bright sunlight adding a sense of majesty, awe-inspiring raw power of the ocean's giant, filmed using IMAX, with customary film grain effect, wide-angle shot, breathtaking detail that elevates the quality of the footage",
        "film footage of mysterious shadows from a shiver of sharks passing overhead, as seen from the deep-sea floor, IMAX panoramic view utilizing natural lighting contrasts unique to marine environments, consistent film grain style, contributing a more cinematic, intimate look into marine life",
        "IMAX epic scale film of rare blue whale and its calf, graceful despite their enormous size, leaving a trail of bioluminescent algae in their wake, sunrise ambiance lighting, film grain technique applied consistently",
        "immersive footage of an orca leaping out of water against a blazing sunset, frozen in mid-air, a moment that epitomizes the wild, free spirit of marine life, shot with IMAX, grainy film texture, consistent with prior captures, culminating this series of nature's wonders"
    ]
},
  {
    "input": "cinematic scenes from a movie about knights, with beautiful scene from various medieval scenes, in the forest, abbey, with an attack of a castle featuring various castle assault techniques and machines, horse fighting, sword fighting, knights in armor",
    "captions": [
      "Film sequence of a company of armored knights riding through an enchanted ancient forest. Lighting is ambient with dappled sunlight filtering through the towering trees. Filmed with an IMAX camera, cinematic style, high quality movie CGI, highly detailed, trending on artstation.",
    
      "Film footage of an ancient abbey nestled amidst the verdant forest. Features details like towering spires, stained glass windows, with monks going about their day in the soft morning light. Captured with an IMAX camera, emphasizing the film grain, ultra wide-angle view, raw photo, high detailed structure.",
  
      "Film sequence of knights engaged in conversation in the abbey's courtyard, debating strategies for impending battle. Ambient lighting with a dramatic undercurrent, shot with an IMAX camera in a realistic CGI medieval setting, movie style, detailed armor design, cinematic.",
  
      "Film shot of knights in shining armor practicing sword fighting in an open field, with lush grass and vibrant sunset. Captured in 4k with an IMAX camera, featuring cinematic style, film grain, detailed, realistic CGI, trending on artstation.",
  
      "Cinematic frame of an imposing castle at dusk, with detail highlighted in the last rays of sunlight. Shot with IMAX camera, panoramic view, medieval CGI setting, with a sensation of impending action, high detailed, trending on artstation, cinematic.",
  
      "Film footage of preparing for the castle assault, featuring various medieval war machines like trebuchets, battering rams, and ballistae. Richly detailed with IMAX camera, dusk lighting, cinematic CGI, trending on artstation, high quality.",
  
      "Film sequence of the castle under siege, the air filled with flaming arrows. Night scene lit by firelight with IMAX camera, capturing the gritty reality of medieval warfare, high quality CGI, cinematic, film grain, stunning battlefield detail, trending on artstation.",
  
      "Film footage of a brave knight leading the charge into the castle, the clashing swords and the chaos of battle. Night lighting, high detailed armor, filmed with an IMAX camera, capturing the raw essence of a medieval battle, CGI, cinematic.",
  
      "Film shot of a powerful warhorse in the heat of the battle, with a knight poised for attack. The frame is filled with the realism of a horse charge, captured with an IMAX camera, moonlight casting long shadows, cinematic, CGI, film grain, trending on artstation.",
  
      "Film sequence of a heroic knight in a one-on-one duel under the moonlight, swinging his sword with raw power. Shot with an IMAX camera, focus on the knight, cinematic, high quality CGI, close-up action, dramatic lighting, film grain, trending on artstation.",
  
      "Film shot of the aftermath of the battle, featuring the destroyed castle at dawn. Captured in 4k with an IMAX camera, showcasing the beautiful wreckage, ambient sunrise lighting, film grain, cinematic, highly detailed, medieval CGI, trending on artstation.",
  
      "Ending film sequence of victorious knights standing amidst the ruins, the sun rising in the background casting a golden hue. Shot with an IMAX camera, panoramic view, stunning battlefield detail, film grain, CGI, high quality, cinematic, trending on artstation."
    ]
  },
  {
    "input": "cinematic scenes from an end of the world movie, with meteors hitting san francisco, seen from a plane, a massive los angeles earthquake which breaks bridges, the sea rising creating a giant tsunami, new york under a massive storm and ice storm, las vegas with a big sandstorm etc",
    "captions": [
      "Cinematic real-life footage of meteors streaking across the sky, descending towards San Francisco, shot from a bird's eye view perspective in an airplane, dusk lighting, IMAX, film grain, 4k, high detail, high quality, wide-angle camera, trending on artstation.",
      "Cinematic real-life footage of the impact and resulting fiery explosion as meteors hit San Francisco, heavily dramatized, dusk lighting, IMAX, film grain, 8K UHD, direct sunlight lighting, wide-angle lens, trending on artstation, high quality, award winning.", 
      "Cinematic real-life footage of the San Francisco skyline changing drastically as buildings crumble under meteor impacts, dusk lighting, IMAX, film grain, 4K, wide-angle lens, detailed destruction, high quality, trending on artstation.", 
      "Cinematic real-life footage of a violent earthquake breaking Los Angeles' bridges, ambient lighting, focusing on a bridge as it trembles and finally collapses, IMAX, film grain, 8K UHD, ultra wide-angle view, trending on artstation, award winning, studio quality.",
      "Cinematic real-life footage, showcasing a massive sea level rise, poised to create a giant tsunami. Los Angeles in the background, late evening lighting, IMAX, film grain, 8K UHD, ultra wide-angle view, trending on artstation, high detailed skin, award winning.",
      "Cinematic real-life footage of a huge tsunami wave cresting, about to engulf the Los Angeles coastline, twilight lighting, IMAX, film grain, 4K, wide-angle view, detailed water dynamics, high quality, trending on artstation.",
      "Cinematic real-life footage of New York under a massive storm seen from a helicopter. Dark lighting with occasional flashes of lightning, IMAX, film grain, 8K UHD, wide-angle view, ultra-realistic rain effect, high quality, trending on artstation.",
      "Cinematic real-life footage of sideways heavy rain brought by a storm in New York, midday, blinding light by street lamps reflected on drenched structures, IMAX, film grain, 4k, wide-angle, high detail, high quality, trending on artstation.",
      "Cinematic real-life footage depicting an ice storm swiftly enveloping New York, severely reducing visibility, under a pale light, IMAX, film grain, 8k UHD, ultra wide-angle, highly detailed, high quality, trending on artstation, surreal.",
      "Cinematic real-life footage of Las Vegas caught in a massive sandstorm, restricting visibility and covering everything in a curtain of dust, late afternoon ambient lighting, IMAX, film grain, 4k, ultra-wide angle view, dust particle effects, high quality, trending on artstation.",
      "Cinematic footage of sand piling up on the Las Vegas strip due to a sandstorm, engulfing iconic landmarks, late afternoon lighting, IMAX, film grain, 8k UHD, ultra wide-angle, highly detailed, high quality, trending on artstation, award-winning.",
      "Cinematic real-life footage of a drone shot of Las Vegas' transformation under the mighty sandstorm. Golden light of the setting sun peeking through the storm, IMAX, film grain, 8k UHD, wide-angle lens, high detailed skin, trending on artstation, award winning."
    ]
  },
  {
    "input": "Animal documentary about the Savanna, showing various video snippets of animals such as hippo, elephants, tigers, eating, drinking, hunting, running etc.. in various places",
    "captions": [
      "Video footage of a large, majestic elephant, grazing in the long, golden grass of the savanna, bathed in the warm light of the late afternoon sun, filmed with a Sony PXW-FS7, in 4k, ultra realistic, depth of field view, ambient lighting, highly detailed, award-winning",
      "RAW video of a slow-moving hippo, submerging in the murky waters of a savanna waterhole, dust motes dancing in the ambient light, shot with a Canon EOS C300 Mark II, in 4k, studio quality, detailed texture of the hippo skin, direct sunlight, trending on artstation",
      "Video clip of a group of tigers, lounging under the shade of acacia trees, detailed texture of the tiger stripes and fur glistening under the soft light, captured with a Panasonic AG-DVX200, high quality, realistic, ultra wide-angle view, soft lighting, breathtaking",
      "High-quality video of a herd of elephants, moving majestically across the savanna plain, caught in the golden light of dusk, shot on RED Epic Dragon, 6k, wide-angle, ultra-realistic, backlight, award-winning",
      "RAW video footage of a lone cheetah, crouched in the tall grass, deeply focused on its hunt, sun rays highlighting its intricate coat pattern, filmed with Sony Alpha A7S, 4k ultra HD, close up shot, detailed texture of the cheetah’s skin, direct sunlight, highly detailed, stunning",
      "Video sequence of a lively group of meerkats, scurrying around their burrow dug into the dry, cracked ground of the savanna, captured on film using Canon C200 Cinema Camera, 4k resolution, realistic, ambient lighting, close-up, highly detailed, breathtaking",
      "Video capture of a leaping gazelle, mid-air, with the vast savanna spreading in the backdrop, caught on a RED Weapon 8k S35, ultra realistic, 8k UHD, ambient lighting, wide-angle view, captivating wildlife moment, trending on artstation",
      "RAW video footage of a lioness, stalking her prey in the shadowy savanna undergrowth, filmed with a Panasonic AU-EVA1, 5.7k, high quality, backlight creating a dramatic contrast, close-up, highly detailed, high dynamic color range, stunning",
      "Video snippet of a circling group of vultures, silhouetted against the fading orange of the evening sky, taken with a Canon XF705, 4k UHD, aerial view, detailed texture of the birds, direct sunlight, ambient lighting, highly detailed, championship winning shot",
      "Video capture of an epic scene of stampeding wildebeest, in a cloud of dust across the plain at dusk, captured on a Sony FX9 XDCAM 6K, massive scale, high quality, direct sunlight, ambient lighting, highly detailed, award winning"
    ]
  },
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
  /*
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
  */
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
},/*

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
*/
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
/*
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
*/
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
