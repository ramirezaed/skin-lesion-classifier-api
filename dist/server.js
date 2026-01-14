"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Eliminamos Request y Response si no se usan aquí
const dotenv_1 = require("dotenv");
const routes_1 = __importDefault(require("./routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
(0, dotenv_1.config)();
const PORT = Number(process.env.PORT) || 5001;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ limit: "50mb", extended: true }));
app.use((0, cookie_parser_1.default)());
app.use("/api", routes_1.default);
app.post("/test-post", (req, res) => {
    res.json({ message: "Express recibió el POST correctamente" });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
