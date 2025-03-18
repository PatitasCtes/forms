import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import {
  fetchForm,
  fetchFormById,
  updateFormById,
  deleteFormById,
  saveForm,
  fetchForms
} from "./controllers/formController.js";

const app = express();
const router = express.Router();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas de formularios
router.get("/form/:formType", fetchForm); // Obtener formulario por tipo
router.get("/forms", fetchForms); // Obtener formularios
router.get("/form/id/:formId", fetchFormById); // Obtener formulario por ID
router.patch("/form/:formId", updateFormById); // Editar formulario por ID
router.delete("/form/:formId", deleteFormById); // Eliminar formulario por ID
router.post("/form", saveForm); // Guardar formulario con respuestas


// Registrar rutas
app.use("/api", router);

// Configuración del servidor local
const port = process.env.PORT || 4006;
app.listen(port, () => {
  console.log(`Forms Service is running on http://localhost:${port}`);
});

// Exportar para serverless (si lo necesitas)
export const handler = serverless(app);


//--> node ./functions/localServer.js
/* 
===========================================
Pruebas de API
===========================================

http://localhost:4007/api/form/adoption
http://localhost:4007/api/form/1

*/

