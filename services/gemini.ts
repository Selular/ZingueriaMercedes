
import { GoogleGenAI } from "@google/genai";
import { products } from "../data/products";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getProductRecommendation(userQuery: string): Promise<string> {
  const model = "gemini-3-flash-preview";
  
  const systemInstruction = `
    Eres un experto en ventas de "Zinguería Mercedes". Tu objetivo es asesorar a los clientes sobre qué estufa Tromen o Lepen elegir, o qué productos de zinguería necesitan.
    
    Catálogo de productos:
    ${JSON.stringify(products, null, 2)}
    
    Reglas:
    1. Sé cordial y profesional.
    2. Si el usuario pregunta por calefacción, pregúntale los m2 del ambiente si no los dio.
    3. Recomienda productos específicos del catálogo.
    4. Menciona que somos distribuidores oficiales.
    5. No inventes productos que no están en la lista.
    6. Usa un tono argentino ("Vení", "Che", "Fijate").
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Lo siento, no pude procesar tu consulta. Por favor, intentá de nuevo o contactanos por WhatsApp.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ups, algo salió mal. ¿Te puedo ayudar con algo más?";
  }
}
