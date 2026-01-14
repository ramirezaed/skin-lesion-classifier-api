import { config } from "dotenv";
config();

class SkinLesionService {
  async analyzeFromBase64(base64Image: string) {
    const cleanBase64 = base64Image.replace(/^data:image\/\w+;base64,/, "");

    const response = await fetch(
      `https://serverless.roboflow.com/skin-cancer-rf9os/1?api_key=${process.env.ROBOFLOW_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: cleanBase64,
      }
    );

    if (!response.ok) {
      throw new Error("Error al llamar a Roboflow");
    }

    return await response.json();
  }
}
export const skinLesionService = new SkinLesionService();
