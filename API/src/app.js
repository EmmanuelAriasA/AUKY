import express from "express";
import lugaresRoutes from "./routes/lugares.routes.js";
import handleErrors from "./middleware/handleErrors.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use(lugaresRoutes);

app.use((error, res) => {
  handleErrors(res, error);
});

export default app;
