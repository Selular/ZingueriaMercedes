
import { GoogleGenAI } from "@google/genai";
import { products } from "../data/products";

export async function getProductRecommendation(userQuery: string): Promise<string> {
  // Inicializamos el cliente dentro de la función para mayor robustez
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';

  const systemInstruction = `Eres un experto vendedor de "Zinguería Mercedes". Tu misión es asesorar a los clientes sobre estufas Tromen, Lepen y trabajos de zinguería.
  
  PRODUCTOS DISPONIBLES:
  ${products.map(p => `- ${p.name} (${p.brand}): ${p.description.substring(0, 150)}`).join('\n')}
  
  DIRECTRICES:
  1. Sé amable, experto y usa un tono argentino (voseo: "fijate", "vení", "che").
  2. Si preguntan por calefacción y no especifican m2, preguntá amablemente el tamaño del ambiente.
  3. Recomienda solo productos que estén en la lista anterior.
  4. Sé conciso y directo, no des respuestas extremadamente largas.
  5. Menciona que somos distribuidores oficiales y especialistas en zinguería a medida.`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    if (!response || !response.text) {
      throw new Error("Respuesta vacía del modelo");
    }

    return response.text;
  } catch (error) {
    console.error("Error detallado de Gemini:", error);
    // Retornamos un mensaje de error más descriptivo pero amigable
    return "Disculpá, tuve un pequeño inconveniente técnico al procesar tu consulta. Por favor, intentá escribirme de nuevo o contactanos directamente por WhatsApp para un asesoramiento inmediato.";
  }
}
