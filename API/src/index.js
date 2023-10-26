import app from "./app.js";
import { PORT } from "./config.js";

// Iniciar servidor
app.listen(PORT);
console.log("Server on port ", { PORT });
