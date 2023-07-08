const { v4 } = require('uuid')
const raw ={
  "input": "3D animation, blender renderings, simulations showcasing a variety of different effects",
  "captions": [
  
    "stunning 3D video of rippling water waves, reflected on hovering metal beads in an underwater setting. Rendered in Blender with subtle, whaling ambient light, captured in 8K UHD.",
  
    "high-quality 3D animation of a cloth-like structure falling in a windless room, displaying the realistic physics of fabric movement. Rendered in ultra-detailed Blender, shot in 4K Cinema4D.",
  
    "splendid video showing the fluid simulation of liquids as they interact with static and moving objects, set in a minimalistic, clean environment. Captured with 4K Cinema4D, showcases Blender render.",
  
    "detailed 3D animation of cellular automata, using simple elements to create complex patterns in a uniform space. Exhibits award-winning lighting techniques and Blender rendering, shot in Cinema4D studio quality.",
  
    "fabulous Blender rendering of a high-speed camera capture of metal beads impacting a flat surface, displaying brilliant n-body collision physics. Captured at a ripe evening with Cinema4D.",
    
    "breathtakingly crisp 3D animation featuring a fluid mechanism, where treacle-thick liquid pours into a large vat. Beautifully lit by diffused, soft light. Rendered in Blender, captured at 8K UHD with Cinema4D.",
  
    "surreal yet hyper-realistic 3D animation of cloth simulation, showcasing the realism of Blender's material simulation capabilities. With studio lighting illuminating the scene, shot at close-up with Cinema4D.",
  
    "contemporary fine-art 3D animation showcasing the stunning interaction between thousands of metal beads under n-body simulation. Rendered with precision in Blender and captured at a high detail with Cinema4D.",
  
    "Blender-rendered 3D animation of a glass cube falling into a pool of liquid, captured to showcase fluid dynamics and refraction of light effects. Caught under a soft diffused light with Cinema4D.",
  
    "impressive 3D animation, of cellular automata, forming fascinating patterns in a confined environment. The geometrically exact elements are rendered with Blender. Shot at dusk, in crisp 8K UHD with Cinema4D."
  ]
}
const result = {
    "sequenceId": v4(),
    "skip": false,
    "lastGenerationAt": "",
    "videoPrompt": raw.input,
    "audioPrompt": "electronic goal music from the 90s",
    "tags": [
      "trailer",
      "cgi"
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