import { getForm, updateForm, deleteForm, submitForm, getFormById, getAllForms, updateAllForms, deleteAllForms, searchForms  } from "../models/formModel.js";

export const fetchForm = async (req, res) => {
    const { formType } = req.params;

    if (!formType) {
        return res.status(400).json({ message: "Type is required" });
    }

    try {
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
    const formData = req.body;

    try {
        const formId = await submitForm(formData);
        console.log(`Formulario guardado con éxito. ID: ${formId}`);
        res.status(201).json({ message: "Formulario guardado con éxito", formId });
    } catch (error) {
        console.error("Error al guardar el formulario:", error);
        res.status(500).json({ message: "Error al guardar el formulario" });
    }
};


export const fetchFormById = async (req, res) => {
    const { formId } = req.params;

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
        const { status, PetId, score, tipo , archivados} = req.query;
        console.log('archivados',archivados);
        
        const filters = {
            ...(status && { status }),
            ...(PetId && { PetId }),
            ...(score && { score: parseInt(score) }),
            ...(tipo && { tipo }),
            ...(archivados && { archivados }),
        };

        const forms = await getAllForms(filters);
        res.json(forms);
    } catch (error) {
        console.error(`Error al obtener formularios:`, error);
        res.status(500).json({ message: "Error al obtener formularios" });
    }
};

export const deleteForms = async (req, res) => {
    try {
        const { status, PetId, score, tipo } = req.query;

        const filters = {
            ...(status && { status }),
            ...(PetId && { PetId }),
            ...(score && { score: parseInt(score) }),
            ...(tipo && { tipo }),
        };

        await deleteAllForms(filters);
        res.status(200).json({ message: "Formularios eliminados correctamente" });
    } catch (error) {
        console.error(`Error al eliminar formularios:`, error);
        res.status(500).json({ message: "Error al eliminar formularios" });
    }
};

export const updateForms = async (req, res) => {
    try {
        const updatedData = req.body;
        const { status, PetId, score, tipo } = req.query;

        if (!updatedData) {
            return res.status(400).json({ message: "Datos actualizados son requeridos" });
        }

        const filters = {
            ...(status && { status }),
            ...(PetId && { PetId }),
            ...(score && { score: parseInt(score) }),
            ...(tipo && { tipo }),
        };

        await updateAllForms(filters, updatedData);
        res.status(200).json({ message: "Formularios actualizados correctamente" });
    } catch (error) {
        console.error(`Error al actualizar formularios:`, error);
        res.status(500).json({ message: "Error al actualizar formularios" });
    }
};

export const searchFormsController = async (req, res) => {
    try {
        const { searchString, archivados } = req.query;
        if (!searchString) {
            return res.status(400).json({ message: "Search string is required" });
        }
        const forms = await searchForms(searchString,archivados);
        res.json(forms);
    } catch (error) {
        console.error("Error searching forms:", error);
        res.status(500).json({ message: "Error searching forms" });
    }
};