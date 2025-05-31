const HF_API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn";
const API_KEY = "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";

export async function summarizeText(text) {
  const response = await fetch(HF_API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: text,
      parameters: {
        max_length: 130,
        min_length: 30,
        do_sample: false,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data[0].summary_text;
}
