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
exports.skinLesionService = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
class SkinLesionService {
    analyzeFromBase64(base64Image) {
        return __awaiter(this, void 0, void 0, function* () {
            const cleanBase64 = base64Image.replace(/^data:image\/\w+;base64,/, "");
            const response = yield fetch(`https://serverless.roboflow.com/skin-cancer-rf9os/1?api_key=${process.env.ROBOFLOW_API_KEY}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: cleanBase64,
            });
            if (!response.ok) {
                throw new Error("Error al llamar a Roboflow");
            }
            return yield response.json();
        });
    }
}
exports.skinLesionService = new SkinLesionService();
