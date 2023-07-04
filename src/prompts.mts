
export interface Scene {
  id?: string // TODO: make it mandatory
  input: string
  audio?: string // TODO: make it mandatory
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
- I need: 25 shots captions
- Input: ${input} (note: add the keywords "cinematic", "imax", "movie", "film grain" to help the AI generator)`

/*
# Parameters
- I need: 25 shot captions
- Input: a movie about a police car chase in Los Angeles (NOT a 3D render!), in term of total timeline film starts at golden hour, then sunset, then night. There is a light rain, the ground is wet. We can see a police car going at speed after a red lambo (to help the AI generator, you must mention police car and the rend lambo in ALL videos shots!). The police car has its lights on, reflecting on the wet ground. The police chase the lambo across all los angeles, including some iconic places. More police cars should join the chase, and even a helicopter at some point. We should see the light of the helicopter ont he ground, like in movies. Everything should be enveloped in a mist, haze, fog, wet ground. The camera should alternate between point of view to give it an intense, fast paced style (drone shots, helicopter shot etc). Please always mention (for each video) the time era and period, clothes of the characters, colors and textures, background, camera positions (note: add the keywords "cinematic", "imax", "movie", "film grain" to help the AI generator)
*/

export const demoPrompts: Scene[] = [
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
    "input": "a movie about an island featuring real live dinosaurs with people in safari-like situation",
    "captions": [
      "Real-life movie scene of a long drone shot starting with a view of a dense forest on a mysterious island, sturdy trees of deep green hue standing tall, filtering the sunlight to create god's rays with an air thick with mist, haze, and the occasional mystery bird flying past, foggy, dramatic lighting, using cinematic 4k, imax, aesthetically color-graded, movie, film grain.",
      
      "Movie footage of a rugged safari jeep getting ready to embark, parked amidst the dew-drenched, verdant foliage; people, adventurous yet cautious, dressed in typical safari gear, khaki clothing and wide-rimmed hats and sunglasses. Camera flying by, breathtaking high quality, detailed, 4k imax, highly dramatic, movie-like vibe, film grain.",
  
      "Cinematic, 4k wide-angle view of the safari jeep entering the dense jungle, its path lit by the shafts of sunlight piercing through the gaps of towering tree canopy, laced with fog and mystery. The excited faces of the people become visible, spotlighting fear-cum-excitivity, imax, atmospheric, movie, film grain.",
  
      "Movie footage of a large herd of Triceratops casually grazing in the plains, they look majestic with vivid skin tones and large horns, under ambient sunlight, people in jeep watching in awe, foggy, dramatic lighting, 4k, cinematic, imax, high-quality movie, film grain.",
  
      "Film shot of Diplodocus eating among tree tops, their long necks stretching around giant trees, their scales, ancient and detailed in greenish tan, glistening under the sun rays, a picture of calm in the primal wild. Movie, film grain, stunning imax, 4k, hyperrealistic, foggy, dramatic lighting.",
  
      "In the movie, a close-up for the first human-dinosaur interaction, a young woman extends her hand cautiously to touch a baby Triceratops. The baby dinosaur's skin, rough yet enchanting. Image is clear, full of delight, 4k, enhanced by imax, rich color grading, movie, film grain.",
  
      "Bird-eye movie view of a gigantic Raptor walking leisurely past the safari jeep, its eyes, sharp and scary. The reflection on its skin is vivid, showing rough textures, charged up with fear and exhilaration. Dynamic god rays, cinematic, trendy, high details, imax, 4k, movie, film grain.",
  
      "Cinematic shot of people hiding behind a big dinosaur, tactfully keeping silent as they hear the heavy steps of another predator nearby, with soft tension-enhancing light from a setting sun, they move carefully. Surroundings dimly lit, enhanced misty, high-quality movie scene, film grain.",
  
      "Movie depiction of sudden chaos as they are chased by a T-Rex. The jeep accelerates, bumping on the uneven jungle terrain, a close call with the massive, roaring predator; the camera following, dramatic, high adrenaline, gritty, richly color-graded, cinematic, 4k, imax, stylish movie, film grain.",
  
      "In the movie, a close-up of T-Rex roaring in frustration as the folks escape, its reptilian skin glistening with sweat, sunlit smoggy air filling the frame, the perfect scary dinosaur, dynamic storytelling, foggy, breathtaking, stunning, trendy, cinematic, 4k, imax.",
  
      "Movie shot of the relief washed across faces in the jeep as they escape the T-Rex; backlit by the subtle, warm glow of a setting sun peeking through the dense jungle leaves; high-quality, 4k, imax, foggy movie footage enhanced by dramatic lighting and film grain.",
  
      "Film scene showing a pack of colorful Parasaurolophus, ambling by a lake, their head crests distinct and shimmering in the golden evening light; the observers in the jeep watching in wonder, high quality details, foggy weather, dramatic lighting, cinematic, 4k, imax, movie, film grain.",
  
      "Cinematic movie view of the Safari jeep driving towards the horizon under a breathtaking sunset, the sky splashed with warm hues, silhouetting the gigantic Brachiosaurus feeding on tall trees, magnificently detailed, perfect end-of-day lighting, stunning movie finale, with imax, 4k resolution, film grain."
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
    "input": "a movie documentary with drone footage of various american landscapes",
    "captions": [
      "Real world footage of a breathtaking aerial view over the vibrant green forests of Yosemite Park, dappled with early morning mist. Shadows and light play across the scene in a dramatic manner, captured in a cinematic style with a GoPro Hero 9 Black, highlighting surreal textures and colors against the soft morning haze. Film grain, cinematic, imax, movie",
      
      "Film shot of a captivating flight above the Grand Canyon, ledges and plateaus etched in orange and red. Deep shadows contrast with the fiery landscape under the midday sun, shot with DJI Phantom 4 Pro. The camera rotates to capture the vastness, textures and colors, in imax quality. Film grain, cinematic, movie",
      
      "In-motion shot of the melancholic Death Valley, a desolated landscape under the relentless heat. The drone grazes the golden sand dunes, capturing every grain and texture with high detailed skin, with a Canon EOS 5D Mark IV. Cinematic style, imax, film grain, movie",
  
      "Dynamic drone footage of the calm and reflective surface of a lake in the midst of a lush forest in Lassen Volcanic Park at sunset. The drone dips low, almost touching the water, with lights and colors from the setting sun illuminating the breathtaking landscape. Shot with Sony A7 III, with soft light creating a cinematic atmosphere. Film grain, imax, movie",
  
      "Aerial shot of a serene morning in the open fields of California coast, as the drone glides over the rolling green hills under the first light. Flowers pepper the scene as the dew reflects the morning sun. Captured in a breathtaking cinematic style with DJI Mavic Pro 2, the vibrant colors and gentle textures of nature spring to life. Film grain, imax, movie",
  
      "Cinematic capture of the sprawling cityscape of New York in the evening, with the drone roaming above the rivers and between the towering skyscrapers, captured in a dramatic style with GoPro Hero 9 Black. Night view with city lights illuminating the building textures and colors, creating a striking contrast with the dark sky. Film grain, imax, movie",
  
      "Documentary-style shot of the Yosemite Park waterfall during peak flow, with mist and rainbow playing around the cascade. Captured with drama and detail using DJI Phantom 4 Pro, a cinematic masterpiece. The camera spins for a dynamic composition, against the vibrant colors of the undisturbed nature. Film grain, imax, movie",
  
      "Aerial footage of the frozen peaks of the San Francisco mountains, draped in snow. Under the dull grey sky, the stark white snow brings out finer details and textures. Shot with a DJI Inspire 2 for a cinematic and dramatic representation of winter in full display", "Film grain, imax, movie",
  
      "A strong dramatic shot of the silhouette of a lone Joshua tree against the fiery sunset in the Death Valley. The stark contrast and spectacular colors make for a surreal scene, shot with Canon EOS 5D Mark IV. The grains of sand catch the light, adding a textural depth to the scene. Film grain, cinematic, imax, movie",
  
      "Cinematic shot of the rocky terrains and clear blue lakes of the National Parks in California, amplified by the sunlight that dapples through the trees. Captured in stunning quality with a GoPro Hero 9 Black. The play of light and shadow adds character to the landscape, with colors and textures beautifully presented. Film grain, imax, movie",
      
      "Drone footage of the ominous storm brewing over the Grand Canyon, with dark clouds casting dramatic shadows over the terrain. Captured in awe-inspiring detail with a DJI Mavic Pro 2, the strong contrast of colors and textures makes the scene almost surreal. Film grain, imax, movie",
  
      "In-motion shot of the serene Californian farmlands, bathed in the warm glow of the setting sun, with golden wheat fields. Filmed with a Canon EOS 5D Mark IV for breathtaking high-definition quality, showcasing nature's vivid colors and textures. Film grain, cinematic, imax, movie",
  
      "Aerial footage of a quiet morning at the coast of California, with waves gently crashing against the rocky shore. A startling sunrise illuminates the coast with vibrant colors, captured beautifully with a DJI Phantom 4 Pro. Colors and textures of the landscape come alive under the soft morning light. Film grain, cinematic, imax, movie",
  
      "Crisp footage of a winter sunrise in the Sierra Nevada mountains, filmed with a GoPro Hero 9 Black. A palette of cool hues paints the snowy landscape, with the sun peeking through the mountains adding a warm glow. The camera executes a slow pan to capture the dramatic lighting and textures. Film grain, imax, movie",
  
      "Documentary-style capture of a foggy morning in Lassen Volcanic Park, with the drone gliding close to the ground, capturing fine details of the misty environment with a Sony A7 III. The composition carries a mystic allure, with textures, shadows and colors beautifully highlighted in cinematic style. Film grain, imax, movie"
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
  {
    "input": "first transatlantic flight vintage yellow biplane movie",
    "captions": [
      "movie shot of highly detailed plans and blueprints on a worktable, discussing the construction of a vintage yellow biplane under ambient lighting, wide-angle shot, Canon EOS, cinematic, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
      
      "cinematic movie shot of skilled workers meticulously crafting wooden parts for a vintage, yellow biplane under warm workshop lighting, close-up view, shot with Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
      
      "movie shot of assembling the wooden wings and body of vintage yellow biplane, under contrast and spotlight work lights, mid-shot composition, shot with Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
      
      "film shot of vintage yellow biplane under a final inspection before its test flight, under direct sunlight, wide-angle shot, Canon EOS, Cinematic, IMAX quality, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
      
      "movie shot of the first test flight of a vintage yellow biplane, with blue sky as background, sunset light, aerial view, shot with Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
      
      "cinematic shot of a yellow vintage biplane spinning out of control mid-air, dramatic backlight, aerial view, shot with Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
      
      "movie shot of a panicked pilot trying to control the vintage yellow biplane during crash landing, under dramatic lighting, close-up view, shot with Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
      
      "film shot of a vintage yellow biplane crash landing in a barren field, under sunset, wide-angle shot, Canon EOS, Movie, IMAX quality, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
      
      "movie shot showcasing repair and maintenance on the crashed vintage yellow biplane, in a workshop with soft lighting, close-up view, shot with Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
  
      "cinematic movie shot of the modified vintage yellow biplane's second test flight, over a lake, under beautiful sunset light, aerial view, shot with Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
      
      "film shot of the pilot briefing his team before the yellow biplane's transatlantic flight, under ambient lighting, mid-shot composition, Canon EOS, cinematic, IMAX quality, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
  
      "movie shot of the vintage yellow biplane starting its engine, at sunrise, in a wide-angle shot, cloud of dust and smoke, shot with Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
     
      "cinematic shot of a yellow vintage biplane taking off for its transatlantic flight, under warm morning light, wide-angle view, shot with Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
      
      "movie shot of a vintage yellow biplane cruising mid-air above the ocean, under direct sunlight, aerial shot, Canon EOS, Cinematic, IMAX quality, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
  
      "cinematic movie shot of the pilot navigating the vintage yellow biplane, under warm cockpit lighting, close-up view, shot with Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
  
      "film shot of a vintage yellow biplane flying above clouds at sunset, wide-angle shot, shot with Canon EOS, Movie, IMAX quality, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
  
      "movie shot showing the vintage yellow biplane against a starry night sky, moonlight, aerial view, Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
  
      "cinematic shot of the sunrise illuminating the wings of the vintage yellow biplane mid-flight, aerial shot, shot with Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
  
      "movie shot of the vintage yellow biplane navigating through thick fog, early morning light, aerial view, shot with Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
  
      "film shot of a breathtaking view from the cockpit of vintage yellow biplane flying low over the ocean, dawn lighting, Canon EOS, Movie, IMAX quality, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
  
      "cinematic movie shot from the ground, watching as the yellow biplane starts its landing, sunset backdrop, wide-angle view, shot with Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
  
      "movie shot of the wheels of vintage yellow biplane touching down the runway near the coast, under warm sunset light, close-up view, shot with Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
  
      "cinematic shot of the pilot waving from the grounded vintage yellow biplane, under fading sunlight, mid shot, Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
  
      "film shot of a massive crowd rushing towards the landed yellow biplane, cheering and applauding, under ambient outdoor light, wide-angle shot, Canon EOS, Movie, IMAX quality, award-winning, high quality, photorealistic, high details, hyper realistic, film grain",
  
      "movie shot fading to black, finale shot, vintage yellow biplane surrounded by the crowd against a stunning sunset, wide-angle, Canon EOS, award-winning, high quality, photorealistic, high details, hyper realistic, film grain"
    ]
  },
  {
    "input": "a movie, a passenger boeing at the airport, view of the crew preparing, then it takes of at sunrise, the we see beautiful shorts of the boeing crossing the cloud ceiling, flying in the sky during golden hour, cloud, over the water etc. The video should have a very atmospheric lighting, with fog, haze, mist to add to the ambiance, with various shots at sunset, sunrise etc, flying over the coasts, islands etc and the final landing should be beautifully seen within the busy control tower and tarmac",
    "captions": [
      "Movie of a massive passenger boeing ready at the airport, ground crew bustling around, dusk ambient lighting, wide angle camera view, shot on IMAX, cinematic, film grain, high definition.",
      "Film of ground crewmembers preparing the passenger boeing for flight at the airport, under the soft lighting of dusk, wide-angle, shot on IMAX, cinematic appearance, with a film grain effect.",
      "Footage of crew members doing the pre-flight check on the passenger boeing at the airport, dusky ambient lighting, wide-angle view using IMAX, stylistic cinematic touch, enhanced with film grain.",
      "Movie scene of the passenger boeing's massive engines starting up, low-light ambiance, wide-angle cinematic shot taken with IMAX camera, rich in film grain texture.",
      "Moving picture of the pilot in the cockpit, turning on the system, illuminated by subtle ambient lighting, filmed from a wide-angle perspective with IMAX, oozing cinematic film grain vibes.",
      "Getting an IMAX, cinematic film grain shot of the massive passenger boeing taking off against the stunning sunrise, finishing the airport scene.",
      "Shot of the passenger boeing taking off, ascending into the golden dawn, accent lighting, wide-angle view, Studio quality IMAX shot, cinematic and movie-style, with noticeable film grain.",
      "Footage of the passenger boeing gracefully taking flight, filling the sky with a silhouette against the rising sun, distinct accent lighting, filmed on an IMAX, cinematic style with film grain.",
      "Movie-style shot of boeing ascending higher, rays of the sunrise spill over the aircraft, providing backlight, wide-angle view, IMAX, imbued with cinematic drama and film grain texture.",
      "Higher and higher, the boeing now among early morning mist and fog, shot using backlight from the sun, wide-angle, IMAX, cinematic with film grain.",
      "Film of the passenger boeing bursting through the cloud ceiling, painted by the golden-hour sunlight, retro wide-angle view, shot on IMAX, cinematic with film grain.",
      "Capturing the sunrise silhouette of the boeing cruising in the sky, with ambient morning lighting and misty clouds in background, ultra-wide-angle IMAX shot, cinematic and enriched with film grain.",
      "Movie magic of passenger boeing flying commandingly over the ocean during sunrise with crepuscular rays in the background, filmed with beachscape in view, captured with IMAX, cinematic and film grain added.",
      "Boeing flying under the golden hour sunlight, backdrop of water reflecting the fiery sky, captured in high definition and wide-angle, IMAX shot, cinematic quality with film grain.",
      "Long-shot film of the passenger boeing flying over an island coast, captured beautifully with morning hue in the sky, IMAX, cinematic and embraced with film grain.",
      "Movie showing the Boeing soaring over the ocean, dramatic backlight from setting sun, captured in extreme long-shot, IMAX, cinematic style with film grain texture.",
      "Footage of the passenger boeing descending as the sunsets, ambient lighting reflecting on ocean water, shot on IMAX, cinematic appearance with film grain effect.",
      "Boeing approaching the landing strip with setting sun in the backdrop, overhead aerial view shot on IMAX, cinematic experience rich in film grain texture.",
      "Footage of busy control tower against the backdrop of the twilight sky watching the approaching aircraft, ambient lighting, wide-angle view, filmed with IMAX, in a cinematic style, with film grain effect.",
      "Control tower scene, worker signaling the passenger boeing for landing, evening ambient light, wide-angle shot on IMAX, cinematic with film grain.",
      "Movie of bustling tarmac preparing for the boeing's landing, in the evening under ambient lights, wide-angle view on IMAX, cinematic with rich film grain details.",
      "Film of the passenger Boeing smoothly landing on the runway, evening ambient lighting, wide-angle, captured on IMAX, high definition cinematic appearance with noticeable film grain.",
      "Finishing movie sequence of the Boeing slowing down on the runway under the moonlight, crews ready for post-landing procedure, wide-angle IMAX shot, cinematic touch, with film grain effect.",
      "Final shot of boeing at rest, end of the journey, spotlight on the aircraft against the night sky, shot on IMAX, cinematic end credits style, with noticeable film grain."
    ]
  },
  {
    "input": "movie documentary, dramatic lighting, luxury homes, cinematic shots, characters, time period, colors, textures, background, camera positions, cinematic, imax, movie, film grain",
    "captions": [
      "Real footage of a drone hovering over a stunning old-world estate in New York, capturing the gothic architecture in dramatic lighting with an IMAX camera, adding film grain for a cinematic feel.",
      "Cinematic movie of a 2000s period penthouse with minimalistic interiors shot from a drone using an IMAX camera in stunning monochrome colors with film grain.",
      "A drone-shot video capture of a retro 1970s New York townhouse, with an intricate brick facade, white snow dressing the rooftop and sidewalks, all in soft sepia tones under an early morning light, shot using an IMAX camera, with added film grain.",
      "Real movie footage of an IMAX camera capturing sunset over a large contemporary estate with floor-to-ceiling windows in dramatic lighting, creating an enchanting scenic view with film grain effect.",
      "Drone footage of a conservatively designed New York mansion, seen in the mysterious late-night light, casting strong patterns and shades, filmed with an IMAX camera adding a cinematic film grain.",
      "Bird's eye view real footage of a series of luxury homes along the coastline, taken during the golden hour, showcasing a play of vibrant colors, shot using an IMAX camera with a film grain effect for a movie-like feel.",
      "A low evening sunlight casting large dramatic shadows over a New York penthouse, captured in an aerial drone shot with a cinematic IMAX camera technique and a stately film grain.",
      "A flyover shot of a cluster of luxury houses on a New York hillside, with fall colors adding vibrance to the scene, captured with stunning clarity by an IMAX camera and presented with artistic film grain.",
      "Drone footage showcasing a modernist architectural marvel of a home in New York, under a dramatic moonlit night, captured through an IMAX camera and adding film grain for a unique cinematic experience.",
      "Video of a sun-drenched penthouse with art deco styling, captured in the glory of a New York summer day, filmed using an IMAX camera with film grain for a true cinematic look.",
      "An aerial shot of an estate nestled in a lush, manicured garden, filmed in a documentary style with dramatic lighting, using an IMAX camera, boasting colors and clear textures, and presented with an authentic film grain.",
      "Drone footage of a luxurious New York penthouse in the heart of the city, featuring floor-to-ceiling windows and a rooftop garden, captured in twilight with dramatic lighting from an IMAX camera and added film grain to enhance cinematic quality.",
      "Night time shot of majestic townhouses, shining under the city lights, shot from a bird's eye view with an IMAX camera, capturing rich textures and sprinkling film grain to create a movie effect.",
      "Video capture of an extravagant mansion with beautifully landscaped grounds, in the rich glow of a New York sunset, shot using a high-quality IMAX camera and manipulated for a film grain appearance for a cinematic mood.",
      "A real movie documenting the majesty of a brownstone New York mansion at dawn, caught by a drone camera in cool blue tones with slight film grain, enhancing the cinematic ambiance.",
      "Footage from a slowly moving drone over the rooftop swimming pool of an ultra-modern penthouse under the midday sun, shot using an IMAX camera, capturing the place's texture and colors, sprinkled with film grain for a cinematic touch.",
      "An extreme long-shot of a sprawling estate in New York during autumn, showcasing radiant fall colors, captured in all its glory with an IMAX camera with added film grain for a movie-like experience.",
      "A bird's eye view of the architectural diversity of luxury homes in New York, shot during a cloudy day with stark shadows and dramatic contrast by an IMAX camera, supplemented with film grain for a cinematic feel.",
      "Rotating drone footage of a tiered penthouse in the evening twilight, showcasing a silhouette against the city skyline, filmed on an IMAX camera with added film grain for a cinematic look.",
      "Captivating footage of a New York beach house at sunset, showcasing a perfect blend of colors and textures, filmed with dramatic lighting using an IMAX camera and layered with film grain for a movie effect.",
      "An aerial shot documenting a neoclassical mansion at daybreak . The rolling morning fog, dew-laden garden, and majestic structure all lit in soft, diffused light captured with an IMAX camera with film grain giving a storybook feel.",
      "A panoramic shot of a string of multi-storey luxury homes at dusk in New York, a cinematic showcase of modern and traditional architecture in dimly lit settings, all filmed using an IMAX camera and presented with film grain.",
      "Drone footage of a lavish brownstone townhouse amid a snowy day, the white covering contrasting the rich brown of the architecture, shot using an IMAX camera, enhancing the chill in the air, sprinkled with film grain for a cinematic effect.",
      "A monochrome capture of a breathtaking penthouse during an overcast day, the somber mood established by the cloud-filled sky casting dramatic shadows, shot with an IMAX camera with added film grain for an old-world cinematic feel.",
      "A video snippet of a drone descending towards a lit-up mansion during a starry night, transforming the scene into an illuminating spectacle captured through an IMAX camera in high detail with film grain overlaid for the cinematic finale."
    ]
  },
  {
    "input": "a movie about a dancing llama touring the world in iconic locations.",
    "captions": [
      "Film footage of a quirky llama with traditional Peruvian attire dancing energetically on ancient Inca ruins in Peru, mountains and blue sky in the background, shot during noon, Canon cinema EOS camera, dynamic high angle, mist clinging to the stones, cinematic, imax, movie, film grain.",
      "Film sequence showcasing a charming llama gracefully leaping onto a large, aged rock against a dramatic sunset in Mexico, surrounded by ancient Aztec columns, warm golden light illuminates the scene, backlight, Canon cinema EOS camera with wide-angle lens, full of mist, cinematic, imax, movie, film grain.",
      "Fascinating shot of a lively llama dancing, twirling flag with Mexico's colors on the streets of Mexico City, shot at noon with overhead sunlight, surrounded by rustic colored buildings and local bystanders, Canon cinema EOS camera, frame filled with vibrant sights and details, cinematic, imax, movie, film grain.",
      "Footage of an adorable llama dancing under the Parisian sky near the Sacré-Coeur, shot during a breathtaking sunrise, full of soft ambient lighting, Canon Cinema EOS camera, shot from a low angle capturing the grandeur of the monument, cinematic, imax, movie, film grain.",
      "Wide-angle movie shot with the Canon cinema EOS camera of a whimsical llama boogieing along the streets of San Francisco at golden hour, vibrant Victorian houses in the background, atmospheric haze giving it a retro aesthetic, cinematic, imax, movie, film grain.",
      "Film footage capturing a playful llama dancing on an icy plane in Antarctica, shot under the glow of a colorful twilight sky, icy winds spreading high detail snowflakes sparkle in the foreground, shot using Canon cinema EOS camera, ultra realistic, cinematic, imax, movie, film grain.",
      "Cinematic shot of a joyous llama frolicking over a calm, sandy beach under a violet sunset, accent lighting highlighting its silhouette, Canon Cinema EOS camera, high detail on the flowing sands, cinematic, imax, movie, film grain.",
      "Film sequence of a cheerful llama doing a tango dance, framed by vast Greek ruins, golden sunlight casting dramatic long shadows, Canon Cinema EOS camera, cinematic, imax, movie, film grain.",
      "Panoramic movie shot of a lively dancing llama in the midst of untouched Siberian tundra, the setting sun paints the snow in warm hues, Canon cinema EOS camera, the frame is detailed with cold blue ice crystals, cinematic, imax, movie, film grain.",
      "Footage of a vibrant llama performing a jig on the streets of Tokyo under blazing neon lights, ambient lighting reflecting on wet asphalt, shot using a Canon cinema EOS camera, showcasing futuristic city life details, cinematic, imax, movie, film grain.",
      "4K film of an enthusiastic llama dancing on the Great Wall of China, against backdrop of an orange tinged dusk sky and sprawling green valley, Canon cinema EOS camera, capturing the antique bricks and ivy in high detail, cinematic, imax, movie, film grain.",
      "Low angle movie shot of a dancing llama on the edge of the Grand Canyon at high noon, clear sky deepening the canyon’s red color, Canon Cinema EOS camera, capturing the texture of the layered rocks, cinematic, imax, movie, film grain.",
      "Film footage of a spirited llama dancing at the forefront of a sunflower field in Tuscany, golden hour light painting the scene in ethereal shades, Canon cinema EOS camera, sunflower petals captured in high detail, cinematic, imax, movie, film grain.",
      "Footage of a llama, stylishly dancing in the opulent halls of the Palace of Versailles, chandeliers casting dramatic shadows, shot during noon with Canon Cinema EOS camera, intricate gold ornaments caught in high detail, cinematically shot in breathtaking imax movie quality with film grain effect.",
      "Ultra-wide movie shot of a spirited llama dancing in front of the Eiffel tower during a rainy afternoon, lighting conditions create a moody atmosphere, Canon Cinema EOS camera, capturing rain patterns and metallic textures in extreme detail, cinematic, imax, movie, film grain.",
      "Film sequence of a lively llama dancing in the bustling, colorful market streets of Marrakech at high noon, the Canon Cinema EOS camera capturing the depth of exotic ornaments, fabrics and textures, cinematic, imax, movie, film grain.",
      "Cinematic shot of a llama performing a traditional Spanish dance at Barcelona's Casa Batlló, surrounded by vibrant tiles and mosaics,shot during a cloudy morning, Canon Cinema EOS camera, stunningly detailed architecture, cinematic, imax, movie, film grain.",
      "Fascinating film footage of a vibrant llama rhythmically moving on the cobblestone streets of Edinburgh, with the castle in the high distance, captured at sunset with Canon Cinema EOS camera, a dramatic shot focusing on old world charm, cinematic, imax, movie, film grain.",
      "Film clip of an exuberant llama dancing in front of the Statue of Liberty, shot during a hazy sunrise, Canon cinema EOS camera highlighting the liberty flame details, cinematic, imax, movie, film grain.",
      "4K footage of a whimsical llama performing a joyful dance amidst the Sydney Opera House sails under an overcast sunset, captured with Canon Cinema EOS camera, a perfect blend of modernity and authenticity, cinematic, imax, movie, film grain.",
      "Low angle film footage of a lively llama dancing spiritedly in front of the towering Taj Mahal, the marble glowing with dawn's first light, Canon Cinema EOS camera, showcasing intricate Mughal architectural details in high-definition, cinematic, imax, movie, film grain.",
      "Intriguing film footage of a charming llama showcasing a tribal dance at the base of Kilimanjaro under radiant midday sun, captured with Canon Cinema EOS camera, straight from Africa’s savannah plains, capturing raw and authentic, cinematic, imax, movie, film grain detail.",
      "Footage of a jubilant llama performing an elaborate dance in front of a spectacular waterfall in Iguazu National Park, argentian side, misty rainbows in the background, shot during a radiant afternoon, Canon cinema EOS camera, creating a dazzling spectacle, cinematic, imax, movie, film grain.",
      "Film clip of a burly llama tap dancing on the high cliffs of Moher, caught amidst foggy surroundings and crashing waves below, shot during the golden hour with Canon Cinema EOS camera, amplifying the drama and beautify of the rugged landscape, cinematic, imax, movie, film grain.",
      "Cinematic shot of a prancing llama making its final dance in front of the breathtaking backdrop of the Northern Lights in Iceland, the spectacle of colors captured in high detail with Canon Cinema EOS camera, concluding in a truly ethereal panorama, cinematic, imax, movie, film grain."
    ]
  },
  {
    "input": "a movie about gladiators in an arena, the gladiators are fighting against each other, they are very victorious, the emperor watches them and the crowd cheer",
    "captions": [
      "Footage of an epic gladiator fight in an ancient roman arena, full of courageous warriors clashing with each other in intense battles, with the emperor intensely watching, the Rome era clothing and worn stone textures omnipresent, during golden hour, taken with IMAX camera, with cinematic grading, atmospheric lighting, and touch of film grain, trending on artstation.",
      "Clip of the triumphant gladiator standing victorious over his adversary, weapons shining in golden hour light on ancient Roman sand arena, viewed through Canon EOS, with cinematic quality, atmospheric effects, and film grain.",
      "Movie shot of the zealous crowd wildly cheering, a sea of Rome era clothed spectators, resonating with anticipation and excitement, sun dipping down in the backdrop, with cinematic quality, touched with film grain shot on an IMAX camera.",
      "Cinematic aerial view of the overwhelmingly large Colosseum, the grandeur of a past epoch, sun casting long shadows on rugged stone structures and Rome era people, with cinematic landscape view, film grain and atmospheric lighting, taken with cinematic Canon EOS camera.",
      "Footage of a tense horse carriage race, four strong horses majestically galloping and their wheels almost touching, the dusty streets enhancing the fierce atmosphere, in Rome era setting, during the golden hour, shot with IMAX camera with cinematic quality and a touch of film grain.",
      "Video of the leader jockey pushing his horses to the limit, fiercely jostling in this Rome era race, the crowd cheering deafeningly in background, shot during golden hour, captured on IMAX with cinematic grading, atmospheric lighting, and film grain.",
      "Movie shot of the carriage wheels, a breathtaking close up, the rough texture and dust whipped up by the race, the Rome era apparent in every frame, shot during golden hour, with cinematic Canon EOS, film grain and atmospheric lighting.",
      "Footage of the ecstatic victor of the carriage race being showered with cheers, a true reflection of Rome era glory in his attire, the golden hour bringing out his invincibility, shot on IMAX camera, with cinematic grading, atmospheric lighting, and film grain.",
      "Clip of a dramatic boat race, gladiators manning the vessels in full Rome era warrior attire, simulating a famous roman naval battle in the arena, during the golden hour, shot with a cinematic Canon EOS, with film grain and atmospheric lighting.",
      "Video of a fiery arrow slicing the hazy atmosphere, fired by a Rome era dressed gladiator from one of the battling boats, the threatening ocean waves adding drama to the scene, golden hour light, shot with IMAX, with cinematic quality, atmospheric lighting, and film grain.",
      "Footage of intense fight among gladiators on the boats, close quarters combat showcasing the struggle for survival in the Rome era, during the golden hour, bringing to life the textures and colors of their attire and weapons, shot with Canon EOS, with cinematic grading, atmospheric lighting, and film grain.",
      "Movie shot of the crowd uproariously cheering, the intense boat confrontations exciting them beyond limits, the Rome era enthusiasm evident in their cheers, shot during golden hour, captured on IMAX with cinematic grading, atmospheric lighting, and film grain.",   
      "Cinematic wide-angle shot of the almighty Colosseum, a stage for such grand spectacles of the Rome era, during golden hour, long shadows adding mystery to the ancient structure, shot on Canon EOS with cinematic quality, atmospheric lighting and film grain.",
      "Footage of a victorious gladiator on the boat, triumphant against all odds, his Rome era outfit soaked and majestic, shot during golden hour, captured on IMAX with cinematic grading, atmospheric lighting, and film grain.",
      "Movie shot of a cinematic close-up of the emperor, his gaze overlooking the victorious scene, his Rome era attire adding regality, shot during golden hour, captured on IMAX with cinematic grading, atmospheric lighting, and film grain."
    ]
  },
  {
    "input": "an advert for a dog food brand", 
    "captions": [
      "Film footage of a golden retriever playing in a grassy garden, surrounded by brick walls covered with ivy, during a sunny afternoon. The dog gleefully chases a wooden stick thrown by a man dressed in 90's attire. The scene is filmed in widescreen cinematic style, with rich green and warm tones. Imax, movie, film grain.",
  
      "Film scene focusing on the golden retriever catching the wooden stick mid-air, its fur dusted with the warm sunlight. The surroundings are highlighted by the unique cinema style colorful palette of the late 90s. The texture of the film has a high level of film grain. Filming with an IMAX camera.", 
  
      "Movie scene of the happy dog racing back through the garden, wooden stick in mouth and tail wagging furiously. The environment is reminiscent of late 90's aesthetics. The image color scheme comprises of a rich palette of greens and warm neutral tones. Filmed using an IMAX camera adding a sense of cinematic drama. Film grain effect added for texture.", 
  
      "Cinematic wide-angle shot of the golden retriever joyously bounding towards the house, backgrounded by a beautifully sunlit late 90's style house. The rich colors give an film aesthetic of nostalgia. Filmed in IMAX, with touches of grain to provide an authentic film texture.", 
  
      "Film sequence of the golden retriever reaching the house, energetically wagging its tail, and the owner, a woman in 90s attire, appearing in the olive green painted wooden door frame. The shot maintains continuity in terms of era, style, and color tones. High-quality IMAX footage with added cinematic film grain.", 
  
      "Cinematic movie shot capturing the anticipation of the dog as the owner opens a can of the dog food. Close up of the can, label clearly visible, with brightly colored imagery and 90s style typography. This vibrant scene maintains the authenticity of the era with the vintage colorist approach. Captured with an IMAX camera and enhanced with film grain for a raw cinematic impression.",
  
      "Movie scene showing the golden retriever happily devouring the dog food, with its tail wagging in the 90's style decorated kitchen. The shot maintains the film's color scheme and era representation. Imax footage with enriched film grain texture.", 
  
      "Cinematic close-up of the dog food label, featuring the slogan in bold, 90's styled typography. The final shot retains the visual continuity with the prior scenes in colors, mood, and style. Shot in high quality with an IMAX camera, displaying a visually pleasing film grain texture."
    ]
  },
  {
    "input": "a 3D film similar to Pixar movies, with a rat in New York",
    "captions": [
      "Rendered 3D animation above a bustling rat city deep underground the New York subway system, colorful, vibrant, lively, with miniaturized human items repurposed as buildings and structures, dramatic god's rays filtering from the ceiling, cinematic crane shot, imax, movie, film grain, stunning, high quality",
      "Cinematic 3D animation of a rat jazz band playing in the corner of bustling rat city, fluffy rats playing contrabass and saxophone made from scavenged human items, dramatic lighting adding depth, rotating camera, imax, movie, film grain, trending on artstation, high details",
      "Hyperrealistic 3D animation of market stalls lining rat city streets, made from tiny repurposed human items, beautiful textures of various objects, rats bustling about their business, god's rays providing ambient lighting, wide-angle, imax, movie, film grain, award-winning quality",
      "3D animation of a protagonist rat snatching a slice of pizza from a subway platform, dramatic lighting casting long shadows, distant screeching of the subway train, camera panning around rat, imax, movie, film grain, highly detailed fur",
      "Hyperrealistic 3D animation showcasing the rat’s resourcefulness as it navigates through New York's subway system, vivid colors, fur details, close-up shot focusing on rat with pizza slice, god's rays adding dynamism, imax, movie, film grain, trending on artstation",
      "3D animation of protagonist rat dodging a subway car, dramatic camera pan showing the hustle of the subway, ambient lighting from subway station, vivid textures of train metal and rat fur, imax, movie, film grain, high details",
      "Cinematic pan of 3D animated rat city, ambient lighting illuminating buildings made out of old tin cans and discarded human items, beautiful textures on rusty cans and wood, god's rays peeking through, imax, movie, Film grain, Ultra realistic, high details",
      "Stunning wide-angle 3D close-up of protagonist rat savoring a pizza slice, amber subway light accentuating the contrast, highly detailed fur textures and pizza cheese, imax, movie, Film grain, Ultra realistic",
      "3D animation of protagonist rat entering a warm and cozy den inside rat city, dramatic lighting from small fire in the corner, visible fluff on rat, intricate details of household items repurposed for rat use, imax, movie, film grain, trending on artstation",
      "Hyperrealistic 3D animation of protagonist rat narrating the day to other friendly rats, filled with emotions, warm ambient light casting long shadows, close up on rat faces showing fur and whisker details, imax, movie, film grain, stunning",
      "Heartwarming 3D animation of rat friends laughing, ambient lighting from a small fire dancing on rats, extreme close up shot on laughing faces, showcase of fur texture and rat features, imax, movie, film grain, award-winning quality",
      "3D animation of the next day, rat protagonist prepping for another pizza heist, detailed textures on rat’s coat and gear made from scavenged items, indirect sunlight creating a dramatic effect, wide-angle shot, imax, movie, film grain, trending on artstation",
      "Dramatic 3D animation of the protagonist rat scaling walls of a human building in search of pizza, ambient lighting from streetlights casting elongated shadows, close up on rat’s determined face featuring realistic fur, imax, movie, film grain, stunning",
      "3D animation of the protagonist rat spotting a coveted cheese pizza, vivid colors of melting cheese, ambient lighting adds suspense, dramatic depth of field with rat in focus, imax, movie, film grain, award-winning quality",
      "Hyperrealistic 3D animation of rat nabbing pizza, heroic aura around the rat intensified by the moody indirect light, close up on rat's triumphant face, highly detailed coat, imax, movie, film grain, trending on artstation",
      "3D animation of rat protagonist avoiding a chasing waiter, dramatic backlight intensifying this cinematic chase sequence, moving camera following the rat carrying the pizza slice, showing intricate details and vivid colors of the environment, imax, movie, film grain, stunning",
      "Captivating 3D animation of rat protagonist narrowly escaping a grasping hand, harsh spotlight on rat adding suspense, camera panning around the rat, imax, movie, film grain, trending on artstation",
      "Cinematic 3D animation of rat disappearing into the maze of the subway system, with pizza slice, Ambient subway lighting illuminating the scene, camera doing an extreme long shot to give overall view, imax, movie, film grain, award-winning quality",
      "3D animation of rat returning triumphant to rat city, ambience is cheerful and high spirited, beautiful god's ray lighting provides a majestic feel, cinematic wide-angle shot, imax, cinematic, film grain, trending on artstation",
      "Hyper-realistic 3D animation of the rat friends celebrating, vivid colors, high attention to detail from rat’s fur to the textures of the underground city, shot surrounding the celebrating crowd, god's rays filtering from above casting dynamic shadows, imax, movie, film grain, stunning",
      "3D animation of protagonist rat sharing its victorious tale, warm candlelight glow illuminating the faces, depth of field focusing on the rat's happy face, imax, movie, film grain, high details",
      "Heartwarming 3D animation of rat city sleeping under ambient moonlight filtering from above, shot showing a calm rat city with everyone asleep, beautiful textures on rat furs and recycled structures highlighted, imax, movie, film grain, award-winning quality",
      "3D render of protagonist rat dreaming about another pizza heist, soft ambient lighting providing a dreamy effect, focusing on the sleepy face of rat, imax, movie, film grain, stunning, trending on artstation",
      "3D animation of dawn in rat city, first ray of sun glowing over the city, depth of field approach focusing on the waking city, imax, cinematic, film grain, highly detailed rat city and fur of waking rats, award-winning quality",
      "Beautiful 3D animation of the protagonist rat, ready for another day of adventures, dramatic lighting from rising sun casting long shadows, close-up on the rat's optimistic face, imax, movie, film grain, trending on artstation"
    ]
  },
  {
    "input": "a photorealistic movie about a heist movie, happening at night in a museum",
    "captions": [
      "Movie footage of an aerial view of Le Louvre at night, in high definition, with the full moon illuminating the Pyramide du Louvre, glowing with ambient lighting in the distance, shot with IMAX camera, award-winning, high quality film grain.",
      "Cinematic video of the Paris skyline with focus on illuminated Eiffel Tower, seen from a distance, shot using IMAX camera, with a dark sky background, high quality, trending on film festivals.",
      "Film footage of a sewer entrance, wet cobblestone and grating reflecting the city lights vividly, traced by a mysterious character dressed in dark clothing, shot with detailed film grain using IMAX camera, movie style.",
      "Video footage of the character slowly opening sewer hatch, hands shown in close-up, showing the aged texture of the metal and the grit under his fingernails, subtle ambient light, shot using IMAX camera with high details, cinematic.",
      "Movie shot of narrow, circular sewer tunnels with water reflecting the subtle light from above, character silhouette against the light, shot in high quality with IMAX camera in film grain style, dramatic atmosphere.",
      "Cinematic footage of a museum interior, shadows dancing on the walls with complex network of red laser beams, character's reflection visible in a Renaissance painting's glass protection, shot using IMAX camera with high details and film grain.",
      "Film footage of a thief deploying a rope from a dark ceiling spot and carefully descending, avoiding laser beams, shot using an IMAX camera, award-winning, high quality, cinematic, film grain.",
      "Close-up movie shot of a gloved hand disarming a laser system, subtle light reflecting on the leather and wires, captured in a ponderous slow-motion, shot using IMAX camera with high details, dramatic movie style with film grain.",
      "Cinematic shot of the thief gently lifting 'La Joconde' off her suspension, her enigmatic smile caught in the flashlight, her eyes following the movements, shot using IMAX camera, high details, film grain.",
      "Movie footage of the thief's silhouette against the museum's high window, alarm lights blinking in the background, mid-jump in the dramatic lighting, shot in high quality with IMAX camera in film grain style.",
      "Cinematic video shot of multiple security officers entering the museum, their torches revealing the empty space on the wall where 'La Joconde' used to be, dramatic scene shot using IMAX camera, high details, film grain.",
      "Film footage of the protagonist scaling the roofs of Paris under a moonlit sky, the old city textures captured with hyper-realistic details, shot with high quality using an IMAX camera in a cinematic style with film grain.",
      "High resolution movie footage of an officer chasing the thief across a roof, the dramatic pursuit illuminated by the city lights below, captured using an IMAX camera, award-winning, high quality, film grain.",
      "Cinematic video of intense parkour chase scene, the characters jumping across gaps between rooftops, their silhouettes set against the moon, shot using IMAX camera, high quality, dramatic, film grain.",
      "Film shot of the thief performing acrobatic moves to avoid pursuit, the intensity reflected in his sweat-glossed face, shot using an IMAX camera, award-winning, high details, cinematic, film grain.",
      "Full frame movie capture of the thief reaching Eiffel Tower, the wrought iron lattice in close up, the cityscape stretching beneath him, shot using IMAX camera with high details, award-winning, film grain.",
      "Cinematic footage of intense confrontation atop Eiffel Tower, the thief and the officers under the spotlights of circling police helicopters, breath-taking high angle shot using IMAX, film grain.",
      "Slow-motion video of the thief taking a daring leap off the Eiffel Tower, diving towards the cityscape below, dramatic shadows on his face captured in high quality, IMAX camera, cinematic effect, film grain.",
      "Movie shot of chase ending with the thief releasing a parachute with 'La joconde' printed, the image elegantly floating above the Parisian cityscape, shot using IMAX camera, high quality, cinematic, film grain.",
      "Cinematic video of the thief activating his wingsuit, soaring over the cityscape with the Eiffel Tower glowing against the night sky in the background, captured using IMAX camera, high details, film grain.",
      "Film footage of the thief gliding through the air, the iconic Parisian skyline below him illuminated by night, the sensation of freedom palpable, shot using IMAX camera with high details, movie style, film grain.",
      "Cinematic movie shot of a hazy morning sun rising over Paris, the nocturnal cityscape gradually lightening, IMAX camera on a helicopter, high quality, film grain.",
      "Close-up movie footage of the thief landing on a deserted Parisian street, rolling on the cobblestones, la Joconde safe in his grip, shot using IMAX, high quality, film grain.",
      "Contrasting video shot of police officers arriving too late at the deserted location, their frustration evident in their expressions, shot using IMAX camera, high details, cinematic, film grain.",
      "Movie capture of the thief hailing a passing vintage taxi, the car's headlights cutting the dawn fog, 'La joconde' safe in a briefcase by his side, high-quality footage shot using IMAX camera, cinematic effect, film grain.."
    ]
  },
  {
    "input": "a movie about a police car chase in Los Angeles",
    "captions": [
      "Film footage of a sunset-lit Los Angeles traffic, with a red Lamborghini recklessly driving and a police car chasing behind with lights flashing, reflecting on the wet, misty ground.",
      "Movie shot of the golden hour in Los Angeles with a high-speed chase involving a red Lamborghini and a police car, cinematically framed with hazy fog and wet ground, IMAX wide angle.",
      "Cinematic helicopter shot from above, as we see a red lambo and police car weaving through heavy LA traffic at sunset, their lights reflecting off the wet asphalt, lights of the city turning on, film grain.",
      "Close-up shot of the police car's flashing blue and red lights in pursuit of the red Lamborghini, gloomy rain-soaked Los Angeles streets at sunset in the background, movie quality, IMAX.",
      "Film footage at dusk, shot using IMAX, features police helicopter joining the chase, its searchlight sweeping over the wet, misty streets of Los Angeles, illuminating the red Lambo and the chasing police car.",
      "Low angle drone shot following Lamborghini and police car racing along the Los Angeles coast at dusk, long beams of headlights reflecting on the wet and misty road surface, cinematic and IMAX quality",
      "Extreme long-shot revealing the city of Los Angeles under the sunset, the flashing red and blue lights of the chasing police cars are seen against the city backdrop, filmed with IMAX and with movie quality.",
      "An IMAX view from the police car's backseat, capturing the intense pursuit of the red Lambo through rainy Los Angeles, with wet windshield and flashing lights reflecting on the wet, foggy streets in movie quality.",
      "Film footage of a streaking red Lamborghini escaping, with reflection of police car flashing lights on its glossy red surface, as they pass Los Angeles landmarks under rain and mist, in cinematic IMAX",
      "Cinematic drone shot of the red lamborghini and police car driving at high speed through the misty Chinatown district at night, neon lights reflected on the wet streets, film grain, and IMAX quality.",
      "IMAX wide-angle shot from a pedestrian's perspective; a red Lambo and a swarm of police cars speed pass on the rainy, neon-lit LA street at night, soaked in cinematic haze and movie quality film grain.",
      "Night-time, handheld camera shot from the inside of the Lamborghini looking back, showing the reflection of the police lights on the rear window and wet streets of LA in the background, IMAX quality film with grain.",
      "A cinematic shot of the intense expression of a police officer, red and blue lights flashing on his face, wet streets of LA at night in the rear view, captured in IMAX with movie-quality film grain.",
      "Film footage of the police helicopter spotlight illuminating the red Lambo and police cars below, tearing through the wet, glistening streets of LA at night, captured in IMAX with movie grain.",
      "Cinematic IMAX shot of the red Lamborghini and police cars racing through a tunnel, their lights dancing on the wet surface, creating a trail of blurred colors in the foggy LA night, film grain.",
      "Rooftop view in IMAX, featuring a sweeping perspective of night-time LA, the red lambo's taillights and flashing police lights blending with the city lights, reflecting on the foggy, wet streets, cinematic film grain.",
      "Aerial drone shot following the chase from above, the police car's flashing lights and the red Lambo trails piercing through the foggy LA night as rain drops hit the camera, cinematic and IMAX quality.",
      "An intense, IMAX quality shot of a police officer handling a radio, the urgency mirrored by the flickering lights reflecting onto the wet, foggy LA streets beyond, cinematic and movie quality grain.",
      "Cinematic shot from pedestrian viewpoint, tilted up to show the red Lamborghini and police cars zoom past, wet LA cityscape illuminated by neon lights reflected on the damp streets, filmed in IMAX",
      "Night-time close-up shot of the police car's flashing lights reflecting on the wet streets of LA, with the elusive red Lamborghini disappearing into the dense fog, IMAX quality with film grain.",
      "IMAX-quality film footage of the red Lambo swerving towards the LA freeway, multiple police cars and a helicopter in hot pursuit, their lights adding drama in the foggy, rainy night, cinematic movie grain.",
      "Long shot of red Lamborghini and police cars driving parallel to a moving train in the outskirts of LA, wet surfaces under the flashlights and city light in the background, cinematic IMAX quality film grain.",
      "A high-speed drone shot films the red Lamborghini and police cars racing under street lamps and neon signs of rainy LA, with reflections and flares adding to the high-stakes chase, in IMAX and with movie grain.",
      "Extreme aerial shot, capturing a bird's eye view of the chase through saturated streets reflecting city lights and police car beacons, Lamborghini darting into the horizon, cinematic and IMAX quality film grain.",
      "Slow-motion, cinematic close-up of spinning police car's wheel in pursuit, splashing through puddles, the flashing lights and glistening wet LA street captured in IMAX quality, movie grain."
    ]
  },
  {
    "input": "a movie documentary about marine life",
    "audio": "background music for a documentary about underwater, marine exploration",
    "captions": [
      "Film footage of a kaleidoscopic array of clownfish darting around vibrant, hued corals, with sunlight streaking through the crystal-clear water. Cinematic IMAX style with film grain. Focus on triadic colour scheme, ambient lighting, highly detailed.",
      "Movie clip of emperor angelfish gliding serenely among waving sea anemone fronds, capturing their vibrant pigments and unique patterns. Ambient sunlight filters through overhead, enhancing brilliant colours, lending a cinematic look. Captured in IMAX, high quality with adherence to film grain and ultra wide-angle view.",
      "Film capture of a curious sea turtle inspecting corals, poetically capturing the essential harmony of marine life. Captures in IMAX, with ambient underwater lighting enhancing turtle's intricate designs and coral's vivid hues. Film grain and ultra realistic.",
      "Film footage of a gigantic blue whale dispersing a school of small fishes as it majestically traverses the blue abyss. Taken in cinematic IMAX style, capturing the enormity and the mesmerizing shadows playing over its skin. Film grain, high detail, massive scale.",
      "Movie clip showcasing a dolphin pod playfully leaping out of the iridescent ocean surface against setting sun, a masterstroke in visual storytelling. Captured in hi-res IMAX, with backlit lighting, film grain, and wide-angle view.",
      "Film footage of a mesmerizing display of cuttlefish changing pigmentation rapidly, the hues dancing over their bodies in a hypnotic pattern. Shot in IMAX for cinematic feel, artful composition with ambient lighting and film grain.",
      "Short movie clip of electric eels amidst murky aquatic foliage, their bodies glowing eerily. Shot in crisp IMAX detail, film grain used artistically to establish tension, ambient lighting highlighting bodies' natural luminescence.",
      "Natural filmic sequence of a school of sardines forming a swirling, silver cyclone providing a surreal spectacle. The precision of their coordinated patterns mirrored in the sparkling underwater sunlight. Captured in 4k IMAX, with wide-angle view and film grain.",
      "Movie shot capturing herd of sea otters floating lazily on the glittering surface, their fur beautifully glossy in the sunlight. Filmed in IMAX, ambient light lending an air of tranquility, complemented by film grain and ultra-realistic detailing.",
      "Film capture of a sea slug gliding over a rock, intriguing textures and vibrant colours highlighted beautifully against the rock's rough contrast. Shot in cinematic IMAX, high-definition, detail focused with ambient lighting.",
      "Movie shot capturing a moray eel emerging ominously from coral crevices, lending a sense of foreboding despite the tranquil surroundings. Filmed in IMAX, cinematic, detail focused with film grain, accent lighting on eel.",
      "Film footage of playful seals cavorting amid floating ice chunks in blue waters, provides a touching spectacle against stark white. Captured in cinematic IMAX, ultra-realistic, studio quality, accentuating contrast between subjects.",
      "Short movie shot of an orca pod gracefully weaving through icy depths. Filmed in IMAX, ambient lighting, with a focus on orcas' glossy black skins and ice blue waters. Cinematic flair with a touch of film grain.",
      "Majestic film sequence of a lone hammerhead shark patrolling the eerie silence of the deeper oceans. IMAX, ambient lighting, ultra-wide shot to enforce solitude, high detailed shark and ocean floor detail.",
      "Film capture of a symphony of jellyfishes gently pulsating through mild currents, mirrored light reflecting off their gelatinous bodies. Cinematic IMAX, ultra-realistic, ambient backlighting enhancing hues, consciously applied film grain.",
      "Short movie sequence showcasing stingrays brushing against ocean floor, stirring up trails of fine sand - a poetic capture of aquatic life. Filmed in IMAX, detail focused, ambient lighting to establish mood, cinematic feel with film grain.",
      "Film footage of an ethereal octopus swimming against a backdrop of vibrant coral reef, its flexible movements capturing attention. Captured in cinematic IMAX, high-definition detail, ambient backlit lighting creating intricate shadow play, applied film grain.",
      "Small school of lionfish roaming near rocky outcrop, their dazzling array of colours contrasted against gloomy surroundings. IMAX, ambient underwater light to bring out their intricate patterns, cinematic with film grain.",
      "Recording of hunting tiger sharks, their sleek bodies gliding in perfect harmony with the waters, nature's hunters in their full glory. Shot in cinematic IMAX, high-definition detail, enhanced by ambient lighting and film grain.",
      "Short sequence showcasing underwater, vibrant colours of starfish against a rugged seabed lends a tactile realism to the scene. Filmed in cinematic IMAX, ambient lighting, ultra high-def resolution with film grain.",
      "Cinematic panorama of vast shoal of countless marine species exhibiting the mesmerising, unscripted choreography of marine life. Shot in IMAX, high quality, studio detailing, and ambient lighting with film grain.",
      "Short footage of a pufferfish navigating the undersea maze of coral reefs, its curious eyes surveilling the surroundings. Filmed in cinematic IMAX, finely detailed pufferfish, ambient lighting to highlight colours, with film grain to retain natural aesthetic.",
      "Prismatic spectrum of reef life, captured in a single, sweeping cinematic shot. An underwater rainbow of creatures of every shape and colour. Shot in IMAX, illuminated by ambient underwater light, ultra-high resolution and film grain.",
      "Movie clip of a humpback whales swimming through god's rays towards the surface, a stunning symphony of the monumental and the minute. Filmed in breathtaking IMAX clarity, ultra-detailed, ambient lighting, and film grain.",
      "Cinematic film capture of the sun setting on the ocean horizon, casting a golden sheen on the sprawling water surface, symbolising end of the marvelous odyssey. Shot in IMAX, ambient light, focused clarity and film grain."
    ]
  },
  {
    "input": "a movie documentary about house construction",
    "captions": [
      "Film footage of architect working on blueprints of a house with pencil. Style is black and white vintage, focus on the architect. Camera is Canon EOS 7D, grainy and high details. Keywords include cinematic, imax, movie, film grain, award-winning, high quality.",
      "Drone footage of an empty piece of land at dawn with a measuring tape and stakes. Skies are purple with the early morning light. Camera DJI Phantom 4 Pro using wide angle, trending on artstation.",
      "Film footage of land surveyors, using theodolite and other topography equipment under direct sunlight, captured with Canon EOS 7D in a mid-shot, providing high details of the characters in action. Keywords are cinematic, imax, movie, film grain.",
      "Film of time-lapse showing construction workers excavating and flattening the site, under strong, direct sunlight. Camera is Canon EOS 7D with high details. Keywords are cinematic, imax, movie, film grain and work in progress.",
      "Drone mid-air shot of a team of builders pouring the house foundations in clear day. Camera DJI Phantom 4 Pro, wide angle, crisp and clear, with high details. Keywords include cinematic, imax, movie, documentary, film grain.",
      "Film of time-lapse focus on a concrete mixer and workers pouring concrete into the foundation ditch, under ambient lighting. Camera Canon EOS 7D in a close-up shot, showcasing the texture and color of the concrete mixture. The additional keywords are award-winning, high quality, cinematic, imax, movie, film grain.",
      "Aerial view of completed house foundation with Canon EOS 7D DSLR. Crisp quality with triadic color scheme showcasing the raw foundation. Additional keywords include cinematic, imax, movie, film grain, trending on artstation.",
      "Film using Canon EOS 7D showing construction workers building walls, with incredible attention to textures and colors of the bricks and mortar under natural lighting. Key terms are cinematic, imax, movie, film grain, high details.",
      "Drone footage of builders installing the roof under a clear blue sky, showing a comprehensive aerial view of the construction site. Camera DJI Phantom 4 Pro uses wide angle lens to capture this scene, with keywords such as cinematic, imax, and movie.",
      "Close-up film footage of an electrician installing wiring, Canon EOS 7D captures high details of color-coded wires and hand movements in strong light. Keywords include cinematic, imax, movie, film grain, documentary, award-winning.",
      "Film of a plumber at work installing pipes under natural lighting, focuses on the character's expressions and hand movements, Canon EOS 7D, with addition of cinematic, imax, movie, film grain keywords.",
      "Aerial drone footage of a completed house frame at sunset, with coppery lighting bathing the scene. DJI Phantom 4 Pro captures this golden hour moment in the progressing construction scene. Keywords include cinematic, imax, movie, documentary, film grain, and stunning.",
      "Film footage showing the process of painting the house white, under soft artificial lighting. Canon EOS 7D captures the transformation of the walls, with keywords including cinematic, imax, movie, film grain, documentary.",
      "Film footage at a close-up angle of texture being added to the walls under ambient construction-site lighting. Captured with Canon EOS 7D, showcasing the depth and texture of the material. The keywords include cinematic, imax, movie, film grain, and documentary.",
      "Drone footage of the construction site at dusk, covered in a soft purple and orange hue, showcasing the progress of the house build. Captured by DJI Phantom 4 Pro in a sweeping shot, with high details, keywords are cinematic, imax, movie, film grain, documentary, and beautiful.",
      "Film footage of kitchen installation, focusing on detailed carpentry work under soft ambient lamp, shot with Canon EOS 7D. Additional keywords are cinematic, imax, movie, film grain, award-winning, high quality.",
      "Close-up film footage of designer choosing materials for the interior, Canon EOS 7D captures the array of wood and fabric samples. Under ambient lighting, with keywords cinematic, imax, movie, film grain, high end furnishing.",
      "Film footage of the interior decorator placing rugs, furniture, and other items in the house. Canon EOS 7D, ambient lighting, static shot. Keywords: cinematic, imax, movie, film grain, high quality materials and furniture.",
      "Drone footage of the completely built house from various angles under a soft afternoon glow. Captured in DJI Phantom 4 Pro, 360-degree sweep, high details, with keyword cinematic, imax, movie, film grain, architecture.",
      "Film of close-ups revealing details of the finished interior under ambient lighting, Canon EOS 7D. Each shot showcases the rich details of the woodwork, the textures on the fabrics, and the elegant fixtures. Keywords: cinematic, imax, movie, film grain, high-end interior.",
      "Drone footage of the completed house from a high vantage point showing the surrounding terrain under the setting sun. Camera is DJI Phantom 4 Pro, highlighting the house's lush garden and driveway. Additional keywords found in cinematic, imax, movie, film grain, award-winning.",
      "Film of the architect reviewing and approving the work inside the finished house. Canon EOS 7D captures the moment under ambient lighting, middle shot, focusing on the architect's satisfied expression. Additional keywords used include cinematic, imax, movie, film grain, award-winning.",
      "Film footage of a happy family visiting their completed home for the first time. Canon EOS 7D captures the heartwarming scene, soft lighting envelops this new chapter in their lives. Keywords include cinematic, imax, movie, film grain, high quality, trending on Artstation.",
      "Drone footage of the newly built house with the family in the garden, captured under the soft twilight glow. The DJI Phantom 4 Pro films a wide-angle shot of the house and its surroundings. Additional keywords include cinematic, imax, movie, film grain, award-winning.",
      "Film footage of the house lit up at night, seen from various angles, Canon EOS 7D captures the tranquil scene in its high-quality, bokeh, night lights, and adds the cinematic touch to the documentary. Keywords include cinematic, imax, movie, film grain, award-winning, beautiful, trending on Artstation."
    ]
  },
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
    "input": "Slow-mo footage of various objects falling and exploding or being hit by bullets. Very colorful, dramatic lighting, mesmerizing.",
    "captions": [
      "Real world movie footage of a red watermelon falling into sharp spikes, slow motion, exploding into small pieces, surrounded by dramatic lighting and haze, IMAX 8k uhd, high detail, trending on artstation.",
      "Film video of a blue balloon filled with yellow paint, being hit by a bullet, slow motion explosion, colorful splatter, dramatic lighting with god's rays illuminating the scene, cinematic style, high detailed, filmed with IMAX camera.",
      "Movie showing a green pumpkin falling into a bed of nails, slow-mo explosion with chunks flying all over, ambient fog adding to the dramatic lighting, filmed with IMAX camera, 8k ultra high dhefinition, high quality, trending on artstation.",
      "Film capture of close-up of bullet hitting green glass bottle filled with red wine, slow-motion explosion with shards and liquid flying, dramatic backlighting, shot from a low angle with IMAX camera, high cinematic quality, with film grain effect.",
      "Video of a pink paint powder bag falling, bullet impact causing a slow-mo explosion of particles, beautiful chaos, dramatic lighting with strobe effects, shot with IMAX camera, high detailed, 8k uhd, cinematic grain, popular on artstation.",
      "Real-time movie of a white ceramic vase falling onto concrete, slow-mo explosion of fragments, dust cloud, dynamic lighting creating protruding shadows, IMAX camera capture, 8k uhd, film grain, trending on Artstation.",
      "Colorful slow-mo film capture of bright orange basketball falling into sharp blades, tearing and cracking, dramatic lighting with sharp edge lighting, shot using IMAX camera, high quality with added film grain, 8k uhd.",
      "Movie shot of champagne bottle falling and hitting a corner, slow-mo explosion creates a storm of bubbles and glass, enchanted by dramatic ambient light, shot in high definition with IMAX camera, film grain effect added, ultra high resolution.",
      "Cinematic video capture of an electronic TV falling from height, slow-mo explosion as it hits the ground releasing a cloud of sparks and fragments, surrounded by moody backlighting, IMAX camera shot, 8k uhd resolution, film grain texture.",
      "Slow-mo movie of a jelly-filled donut shot by a bullet, dough and sweet filling flies out, vibrant colors against dark background lighting, captured by an IMAX camera, ultra high resolution, film grain effect.",
      "Video of a plastic water bottle filled with ink, bullet hitting causes a slow-mo explosion, ink splatter creates a beautiful pattern, dramatic lighting with spotlight, ultra high definition IMAX footage, film grain effect.",
      "Film of a tin can falling onto a bed of nails, slow motion explosion as it punctures and twists, backlit by dramatic lighting for contrast, captured with an IMAX camera, 8k uhd resolution, film grain texture.",
      "Movie footage of a halloween pumpkin hit by bullet in slow motion, exploding into fragments, ambient fog enhancing the dramatic lighting, shot from a low angle with an IMAX camera with film grain added, high quality details.",
      "Real world video capture of slow-motion bullet hitting a glass cube, chaotic explosion of glass shards in dazzling array of light, showing cinematic dramatic lighting, filmed with IMAX camera, high definition with film grain effect.",
      "Slow-mo movie clip of a ripe tomato falling onto an array of sharp blades, spray of juice and seeds, dramatic lighting from below, shot in high definition on IMAX camera, trending on Artstation, film grain effect.",
      "Film capture of a can of paint falling, bullet impact causing beautiful slow-mo explosion of droplets, enhanced drama by backlighting, shot with an IMAX camera, ultra high definition, film grain effect.",
      "Cinematic footage of a globe-shaped glass lamp falling, bullet impact crushing into a slow-motion explosion of tiny bright shards, dramatic ambient lighting, IMAX camera capture, high detail with film grain effect.",
      "High resolution video of a bunch of grapes falling onto a bunch of nails, slow-mo explosion of juice droplets, dramatic backlighting for contrast, captured by IMAX camera, 8k uhd resolution, film grain texture.",
      "Filmed video of ripe papaya bullet-hit in stunning slow-motion, rich color spray and seeds dance in the air, enhanced by dramatic side lighting, shot in ultra high definition using IMAX camera with film grain effect.",
      "Real-life movie of beer bottle explosion in slow-mo as it is hit by a bullet, foam and shards flying, dramatic lighting emphasizing the chaos, filmed with IMAX camera, 8k uhd, high detail, film grain, trending on Artstation.",
      "Slow-mo film capture of a yellow balloon filled with red paint hit by bullet creating a beautiful splatter, lit dramatically by god's rays, captured with an IMAX camera, high definition, film grain effect.",
      "Movie shot of a crystal owl figurine fallen and exploded into thousands of slow-mo flying shards, dancing in dramatic ambient light, captured with IMAX camera, high resolution, film grain effect.",
      "Footage of a bullet hitting a soda can in slow motion, wild explosion of fizz, dramatic top light creating god's rays, filmed by an IMAX camera, film grain effect.",
      "Video of bullet piercing an apple in slow-mo, spray of juice and pieces, low dramatic light highlighting the explosion, shot with IMAX camera, ultra high definition, film grain, trending on Artstation.",
      "Film sequence of a clock falling, hitting the ground in slow-motion, exploding into mechanical pieces, splashes of dramatic side light, captured using IMAX camera, high definition with film grain effect."
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
]
