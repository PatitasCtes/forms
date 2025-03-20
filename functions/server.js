import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import {
    fetchForm,
    fetchFormById,
    updateFormById,
    deleteFormById,
    fetchForms,
    saveForm,
    updateForms,
    deleteForms,
    searchFormsController, // Asegúrate de importar searchFormsController
} from "./controllers/formController.js";

const app = express();
app.use(cors());
app.use(express.json());
const router = express.Router();

// Rutas de formularios
router.get("/form/:formType", fetchForm); // Obtener formulario por tipo
router.get("/forms", fetchForms); // Obtener formularios
router.patch("/forms", updateForms); // Actualizar formularios
router.delete("/forms", deleteForms); // Eliminar formularios
router.get("/form/id/:formId", fetchFormById); // Obtener formulario por ID
router.patch("/form/:formId", updateFormById); // Editar formulario por ID
router.delete("/form/:formId", deleteFormById); // Eliminar formulario por ID
router.post("/form", saveForm); // Guardar formulario con respuestas
router.get("/forms/search", searchFormsController); // Busca coincidencias en formularios

// Registrar las rutas de formularios
app.use('/.netlify/functions/server', router);

// Función de controlador personalizada para configurar CORS
const handler = serverless(app, {
    request: function (request, event, context) {
        request.event = event;
        request.context = context;
    },
    response: function (response, event, context) {
        response.headers = {
            ...response.headers, // Mantener los headers existentes
            "Access-Control-Allow-Origin": "*", //https://patitascallejeras.com.ar  Reemplaza con tu origen permitido
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, PATCH",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        };
    },
});

export { handler };