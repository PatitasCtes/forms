import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    getDocs,
    doc,
} from "firebase/firestore";
import { getADOP_FORM } from "../data/form-adoption.js";
import { getTRANSITO_FORM } from "../data/form-transito.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCx8GI5km0guJojFuOb9KDKNSclqFQBhLI",
    authDomain: "taskban-v1.firebaseapp.com",
    projectId: "taskban-v1",
    storageBucket: "taskban-v1.appspot.com",
    messagingSenderId: "774075443466",
    appId: "1:774075443466:web:0b1ccf90595264ef8872f3",
    measurementId: "G-1MCX6F9W86",
};

// Inicialización de Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Obtener el formulario correspondiente (adoption o transito) desde un archivo JSON.
 * @param {string} type Tipo de formulario ('adoption' o 'transito').
 * @returns {Promise<Object>} Formulario cargado desde el archivo JSON.
 */
export const getForm = (type) => {
    try {
        if (type === "adopcion") {
            return getADOP_FORM();
        } else if (type === "transito") {
            return getTRANSITO_FORM();
        } else {
            throw new Error("Tipo de formulario no válido");
        }

    } catch (error) {
        console.error("Error al obtener el formulario:", error);
        throw error;
    }
};

/**
 * Guardar un formulario con las respuestas en Firestore.
 * @param {Object} formData Datos del formulario.
 * @returns {Promise<string>} ID del documento guardado en Firestore.
 */
export const submitForm = async (formData) => {
    try {
        const docRef = await addDoc(collection(db, "forms"), formData);
        console.log("Formulario guardado con ID:", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error al guardar el formulario:", error);
        throw error;
    }
};

/**
 * Obtener un formulario por su ID desde Firestore.
 * @param {string} formId ID del formulario en Firestore.
 * @returns {Promise<Object>} Datos del formulario.
 */
export const getFormById = async (formId) => {
    try {
        const docRef = doc(db, "forms", formId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            throw new Error("Formulario no encontrado");
        }
    } catch (error) {
        console.error("Error al obtener el formulario por ID:", error);
        throw error;
    }
};

/**
 * Obtener todos los formularios almacenados en Firestore.
 * @returns {Promise<Array<Object>>} Lista de formularios.
 */
export const getAllForms = async () => {
    try {
        const formsCollection = collection(db, "forms");
        const querySnapshot = await getDocs(formsCollection);
        const forms = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return forms;
    } catch (error) {
        console.error("Error al obtener todos los formularios:", error);
        throw error;
    }
};

export default { getForm, submitForm, getFormById, getAllForms };

