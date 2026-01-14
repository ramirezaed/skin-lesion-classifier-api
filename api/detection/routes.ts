import { skinLesionController } from "./controller";
import express from "express";

const skinLesionRoutes = express.Router();

const { analyzeFromBase64 } = skinLesionController;

skinLesionRoutes.post("/", analyzeFromBase64);

export default skinLesionRoutes;
