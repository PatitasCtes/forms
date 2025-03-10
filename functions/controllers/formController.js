import { getForm, submitForm, getFormById } from "../models/formModel.js";

export const fetchForm = async (req, res) => {
    const { formType } = req.params;

    if (!formType) {
        return res.status(400).json({ message: "Type is required" });
    }

    try {
        // const pet = await getPetById(petId);
        const form = getForm(formType);
        if (form) {
            res.json(form);
        } else {
            res.status(404).json({ message: "Form not found" });
        }
    } catch (error) {
        console.error("Error fetching form:", error);
        res.status(500).json({ message: "Error fetching form" });
    }
};

export const saveForm = async (req, res) => {
    const formData = req.body;  // Ahora estamos extrayendo los datos del cuerpo de la solicitud.

    try {
        const formId = await submitForm(formData);
        console.log(`Formulario guardado con éxito. ID: ${formId}`);
        res.status(201).json({ message: "Formulario guardado con éxito", formId });  // Responder con el ID
    } catch (error) {
        console.error("Error al guardar el formulario:", error);
        res.status(500).json({ message: "Error al guardar el formulario" });
    }
};


export const fetchFormById = async (req, res) => {
    const { formId } = req.params; // Cambié de req.query a req.params

    if (!formId) {
        return res.status(400).json({ message: "Form ID is required" });
    }

    try {
        const form = await getFormById(formId);
        console.log(`Formulario con ID ${formId} obtenido correctamente.`);
        res.json(form);
    } catch (error) {
        console.error(`Error al obtener el formulario con ID ${formId}:`, error);
        res.status(500).json({ message: "Error al obtener el formulario" });
    }
};


