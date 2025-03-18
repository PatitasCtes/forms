import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import {
    fetchForm,
    fetchFormById,
    updateFormById,
    deleteFormById,
    fetchForms,
    saveForm
} from "./controllers/formController.js";
const app = express();
app.use(cors());
app.use(express.json());
const router = express.Router();

// Rutas de formularios
router.get("/form/:formType", fetchForm); // Obtener formulario por tipo
router.get("/forms", fetchForms); // Obtener formularios
router.get("/form/id/:formId", fetchFormById); // Obtener formulario por ID
router.patch("/form/:formId", updateFormById); // Editar formulario por ID
router.delete("/form/:formId", deleteFormById); // Eliminar formulario por ID
router.post("/form", saveForm); // Guardar formulario con respuestas


// Registrar las rutas de formularios
app.use('/.netlify/functions/server', router);

export const handler = serverless(app);
