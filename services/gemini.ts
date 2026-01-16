
import { GoogleGenAI } from "@google/genai";
import { products } from "../data/products";

/**
 * Obtiene una recomendación de productos basada en la consulta del usuario.
 * @param userQuery La pregunta del usuario.
 * @returns La respuesta generada por la IA.
 */
export async function getProductRecommendation(userQuery: string): Promise<string> {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return "Lo siento ocurrió un problema. Por favor, contactanos por WhatsApp para un asesoramiento inmediato.";
  }

  // Inicializamos el cliente siguiendo las guías de @google/genai
  const ai = new GoogleGenAI({ apiKey });
  
  const systemInstruction = `Eres un experto vendedor de "Zinguería Mercedes". Tu misión es asesorar a los clientes sobre estufas Tromen, Lepen y trabajos de zinguería.
  
  PRODUCTOS DISPONIBLES:
  ${products.map(p => `- ${p.name} (${p.brand})} - Precio: $${p.price}`).join('\n')}
  
  DIRECTRICES DE COMPORTAMIENTO:
  1. Sé amable, experto y usa un tono respetuoso.
  2. Si preguntan por calefacción y no especifican m2, preguntá amablemente el tamaño del ambiente para recomendar la potencia adecuada.
  3. Recomienda solo productos que estén en la lista anterior.
  4. Sé conciso y directo, no des respuestas extremadamente largas. Usa negritas para destacar nombres de productos.
  5. Menciona que somos distribuidores oficiales y especialistas en zinguería a medida si el usuario consulta por techos o terminaciones.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      },
    });

    // Acceso directo a la propiedad .text del objeto GenerateContentResponse
    const text = response.text;
    
    if (!text) {
      throw new Error("No se obtuvo texto de la respuesta.");
    }

    return text;
  } catch (error) {
    console.error("Error detallado en Gemini Service:", error);
    return "Disculpame, pero tuve un pequeño inconveniente técnico al procesar tu consulta. ¿Podrías intentar de nuevo o mandarme un WhatsApp directamente?";
  }
}
