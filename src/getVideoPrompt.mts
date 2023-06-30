/*
import { HfInference } from '@huggingface/inference'

const hf = new HfInference(process.env.WEBTV_HF_API_TOKEN)

const model = 'OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5'

export const getVideoPrompt = async (seed: string) => {
  const inputs = `<|prompter|>Can you propose a caption for a new video, that we could display after the first one? Here's the caption for the first video: "${seed}"<|endoftext|><|assistant|>The best caption would be:`

  const { generated_text } = await hf.textGeneration({
    model,
    inputs,
    parameters: {
      max_new_tokens: 50,
      return_full_text: false,
      // temperature: 0.3,
    }
  })
  
  return generated_text.split(/[#\[\]]/)[0].replace('"', '')
}

*/
