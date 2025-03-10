export const getTRANSITO_FORM = () => {
  return {
    "preguntas": [
      {
        "id": 1,
        "pregunta": "Nombre y Apellido",
        "tipo": "texto"
      },
      {
        "id": 2,
        "pregunta": "Número de contacto",
        "tipo": "texto"
      },
      {
        "id": 3,
        "pregunta": "Edad",
        "tipo": "numero"
      },
      {
        "id": 4,
        "pregunta": "Dirección",
        "tipo": "texto"
      },
      {
        "id": 5,
        "pregunta": "¿Primera vez que transita?",
        "tipo": "opcion_unica",
        "opciones": ["Sí", "No"]
      },
      {
        "id": 6,
        "pregunta": "Si transitó antes, ¿Para qué grupo fue?",
        "tipo": "opcion_unica",
        "opciones": [
          "Patitas Callejeras",
          "Red de rescatistas",
          "Pequeños peludos",
          "Otros",
          "Para ningún grupo"
        ]
      },
      {
        "id": 7,
        "pregunta": "¿Cuánto tiempo puede transitar?",
        "tipo": "opcion_unica",
        "opciones": [
          "1 semana",
          "2 semanas",
          "3 semanas",
          "1 mes",
          "Fin de semana (viernes a domingo)",
          "1 día"
        ]
      },
      {
        "id": 8,
        "pregunta": "¿Tiene animales?",
        "tipo": "opcion_unica",
        "opciones": ["Sí", "No"]
      },
      {
        "id": 9,
        "pregunta": "Si respondió que sí, ¿Cuántos y qué especie (gato o perro)?",
        "tipo": "texto"
      },
      {
        "id": 10,
        "pregunta": "¿Puede colaborar con gastos del animal que transita?",
        "tipo": "opcion_unica",
        "opciones": ["Sí", "No", "Solo alimento"]
      },
      {
        "id": 11,
        "pregunta": "¿Puede acompañar al animal a sus controles veterinarios?",
        "tipo": "opcion_unica",
        "opciones": ["Sí", "No", "Depende del tiempo y la distancia"]
      },
      {
        "id": 12,
        "pregunta": "¿Está interesado en adoptar?",
        "tipo": "opcion_unica",
        "opciones": ["Sí", "No", "Depende si me encariño"]
      },
      {
        "id": 13,
        "pregunta": "Puedo transitar...",
        "tipo": "opcion_multiple",
        "opciones": [
          "Perro/a adulto",
          "Cachorros de perros",
          "Gato/a adulto",
          "Cachorro de gatos",
          "Animales tamaño chico",
          "Animales tranquilos",
          "Viejitos",
          "Perras o gatas con crías",
          "No tengo preferencia"
        ]
      }
    ]
  }
}
