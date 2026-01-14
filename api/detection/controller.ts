import { skinLesionService } from "./service";
import { Request, Response } from "express";

const { analyzeFromBase64 } = skinLesionService;

class SkinLesionController {
  async analyzeFromBase64(req: Request, res: Response) {
    try {
      const { image } = req.body;

      if (!image) {
        return res.status(400).json({ error: "Imagen requerida" });
      }

      const result = await analyzeFromBase64(image);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
}

export const skinLesionController = new SkinLesionController();

// // controller.ts
// import { skinLesionService } from "./service";
// import { Request, Response } from "express";

// class SkinLesionController {
//   async analyzeFromBase64(req: Request, res: Response) {
//     try {
//       const { image } = req.body;

//       if (!image) {
//         return res.status(400).json({ error: "Imagen requerida" });
//       }

//       // CAMBIO AQUÍ: Llama al servicio desde la instancia
//       const result = await skinLesionService.analyzeFromBase64(image);
//       return res.status(200).json(result);
//     } catch (error) {
//       return res.status(400).json({ error: (error as Error).message });
//     }
//   }
// }

// export const skinLesionController = new SkinLesionController();
