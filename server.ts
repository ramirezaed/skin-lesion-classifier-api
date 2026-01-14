import express from "express"; // Eliminamos Request y Response si no se usan aquí
import { config } from "dotenv";
import routes from "./routes";
import cookieParser from "cookie-parser";
import cors from "cors";

config();
const PORT = Number(process.env.PORT) || 5001;
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cookieParser());

app.use("/api", routes);

app.post("/test-post", (req, res) => {
  res.json({ message: "Express recibió el POST correctamente" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
