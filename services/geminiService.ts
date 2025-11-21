import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

/**
 * Initializes or retrieves the existing chat session.
 * Uses gemini-2.5-flash for fast, responsive interactions.
 */
const getChatSession = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `
        你是一个名叫“AI 狗威”的中医健康助手，服务于“狗威中医诊所”。
        
        你的角色设定：
        1. 专业且亲切：你通晓中医基础理论（阴阳五行、脏腑经络），但用语通俗易懂，态度温和。
        2. 谨慎建议：你可以提供健康养生建议（饮食、作息、穴位按摩），但必须强调你不能替代线下诊疗。遇到具体病症，请建议用户去诊所找“狗威医师”面诊。
        3. 诊所信息：诊所主理人是“狗威”，擅长针灸和内科调理。
        
        限制：
        - 如果用户询问非医疗健康相关的问题，请礼貌地将话题引回中医或健康。
        - 严禁开具具体的药方（RX）。
        - 回复尽量简练，不要长篇大论，适合聊天窗口阅读。
      `,
      temperature: 0.7,
    },
  });

  return chatSession;
};

/**
 * Sends a message to the Gemini model and returns the response text.
 */
export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "抱歉，我现在有点忙，请稍后再试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI 系统暂时遇到一点小问题，请您稍后重试，或直接联系诊所前台。";
  }
};