import express from "express";
import skinLesionRoutes from "../api/detection/routes";
const routes = express.Router();

routes.use("/skin", skinLesionRoutes);
export default routes;
