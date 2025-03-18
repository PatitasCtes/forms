import { getForm, updateForm, deleteForm, submitForm, getFormById, getAllForms } from "../models/formModel.js";

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

/**
 * Actualizar un formulario por ID.
 */
export const updateFormById = async (req, res) => {
    const { formId } = req.params;
    const updatedData = req.body;

    if (!formId || !updatedData) {
        return res.status(400).json({ message: "Form ID y datos son requeridos" });
    }

    try {
        await updateForm(formId, updatedData);
        res.status(200).json({ message: `Formulario con ID ${formId} actualizado correctamente.` });
    } catch (error) {
        console.error(`Error al actualizar el formulario con ID ${formId}:`, error);
        res.status(500).json({ message: "Error al actualizar el formulario" });
    }
};

/**
 * Eliminar un formulario por ID.
 */
export const deleteFormById = async (req, res) => {
    const { formId } = req.params;

    if (!formId) {
        return res.status(400).json({ message: "Form ID es requerido" });
    }

    try {
        await deleteForm(formId);
        res.status(200).json({ message: `Formulario con ID ${formId} eliminado correctamente.` });
    } catch (error) {
        console.error(`Error al eliminar el formulario con ID ${formId}:`, error);
        res.status(500).json({ message: "Error al eliminar el formulario" });
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

export const fetchForms = async (req, res) => {
    try {
        // Obtener filtros de los parámetros de consulta
        const { status, PetId, score, tipo } = req.query;

        // Construir un objeto con los filtros
        const filters = {
            ...(status && { status }),
            ...(PetId && { PetId }),
            ...(score && { score: parseInt(score) }), // Convertir a número si es necesario
            ...(tipo && { tipo }),
        };

        // Llamar al modelo con los filtros
        const forms = await getAllForms(filters);

        // Responder con los formularios
        res.json(forms);
    } catch (error) {
        console.error(`Error al obtener formularios:`, error);
        res.status(500).json({ message: "Error al obtener formularios" });
    }
};


