// Inicia el servidor
import app from "./src/app.js"
const PORT = process.env.PORT || 3000;


// Iniciar servidor
app.listen(PORT, () => {
    console.log(PORT);
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
