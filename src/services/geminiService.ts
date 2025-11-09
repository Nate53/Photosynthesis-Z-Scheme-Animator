
import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is configured in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generateImage(prompt: string): Promise<string> {
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: `A beautiful, high-quality image for a biology textbook: ${prompt}`,
            config: {
              numberOfImages: 1,
              outputMimeType: 'image/jpeg',
              aspectRatio: '1:1',
            },
        });

        if (response.generatedImages && response.generatedImages.length > 0) {
            const image = response.generatedImages[0];
            if (image.image?.imageBytes) {
                return image.image.imageBytes;
            }
        }
        throw new Error("No image data received from API.");

    } catch (error) {
        console.error("Error generating image with Gemini:", error);
        throw new Error("Failed to generate image.");
    }
}