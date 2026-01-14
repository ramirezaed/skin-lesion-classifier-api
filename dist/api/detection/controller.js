"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skinLesionController = void 0;
const service_1 = require("./service");
const { analyzeFromBase64 } = service_1.skinLesionService;
class SkinLesionController {
    analyzeFromBase64(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { image } = req.body;
                if (!image) {
                    return res.status(400).json({ error: "Imagen requerida" });
                }
                const result = yield analyzeFromBase64(image);
                return res.status(200).json(result);
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.skinLesionController = new SkinLesionController();
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
