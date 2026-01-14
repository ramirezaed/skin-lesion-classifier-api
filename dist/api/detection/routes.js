"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
const express_1 = __importDefault(require("express"));
const skinLesionRoutes = express_1.default.Router();
const { analyzeFromBase64 } = controller_1.skinLesionController;
skinLesionRoutes.post("/", analyzeFromBase64);
exports.default = skinLesionRoutes;
