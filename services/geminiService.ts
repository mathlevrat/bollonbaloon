
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateBalloonText = async (occasion: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Clé API manquante.";
  }
  
  try {
    const prompt = `Génère un message court, percutant et amusant pour un ballon personnalisé sur le thème "${occasion}". Le message doit faire 1 à 4 mots maximum et être en français. Sois créatif. Ne retourne que le texte du message, sans guillemets ni phrases supplémentaires.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    const text = response.text?.trim();

    if (!text) {
      throw new Error("La réponse de l'IA est vide.");
    }

    // Remove potential quotes from the AI response
    return text.replace(/["']/g, '');

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Impossible de générer une suggestion. Veuillez réessayer.");
  }
};
