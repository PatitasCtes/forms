export const getADOP_FORM = () => {
  return {
    "preguntas": [
      {
        "id": 1,
        "pregunta": "Correo electrónico",
        "tipo": "texto",
        "obligatoria": false
      },
      {
        "id": 2,
        "pregunta": "El perro/gato, ¿Es para su familia o para otra persona?",
        "tipo": "opcion_unica",
        "opciones": ["Para mi familia", "Para mi pareja", "Para un familiar"],
        "obligatoria": true
      },
      {
        "id": 3,
        "pregunta": "Nombre y Apellido",
        "tipo": "texto",
        "obligatoria": true
      },
      {
        "id": 4,
        "pregunta": "DNI",
        "tipo": "numero",
        "obligatoria": true
      },
      {
        "id": 5,
        "pregunta": "¿Tiene Instagram o Facebook? ¿Cuál es el link?",
        "tipo": "texto",
        "obligatoria": false
      },
      {
        "id": 6,
        "pregunta": "Edad",
        "tipo": "numero",
        "obligatoria": true
      },
      {
        "id": 7,
        "pregunta": "Dirección",
        "tipo": "texto",
        "obligatoria": true
      },
      {
        "id": 8,
        "pregunta": "Número de celular",
        "tipo": "texto",
        "obligatoria": true
      },
      {
        "id": 9,
        "pregunta": "Si sos estudiante, colocar el número de contacto de alguno de tus padres",
        "tipo": "texto",
        "obligatoria": false
      },
      {
        "id": 10,
        "pregunta": "Ocupación",
        "tipo": "opcion_multiple",
        "opciones": ["Estudiante", "Independiente", "En relación de dependencia"],
        "obligatoria": true
      },
      {
        "id": 11,
        "pregunta": "En mi casa viven",
        "tipo": "opcion_multiple",
        "opciones": [
          "Pareja",
          "Hijos mayores de 12 años",
          "Hijos mayores de 18 años",
          "Niños menores de 12 años",
          "Parientes (tíos, primos, etc.)",
          "Abuelo/a",
          "Vivo solo",
          "Con mis padres"
        ],
        "obligatoria": true
      },
      {
        "id": 12,
        "pregunta": "En la vivienda, ¿hay animales?",
        "tipo": "opcion_multiple",
        "opciones": ["Perros", "Gatos", "No", "Otros"],
        "obligatoria": true
      },
      {
        "id": 13,
        "pregunta": "Otro número de teléfono (Especifique de quién es)",
        "tipo": "texto",
        "obligatoria": false
      },
      {
        "id": 14,
        "pregunta": "Si tiene vivienda, ¿Tiene patio cerrado?",
        "tipo": "opcion_unica",
        "opciones": ["Sí", "No"],
        "obligatoria": true
      },
      {
        "id": 15,
        "pregunta": "La vivienda, casa o departamento es",
        "tipo": "opcion_unica",
        "opciones": ["Alquiler", "Propio", "De parientes"],
        "obligatoria": true
      },
      {
        "id": 16,
        "pregunta": "Seleccione qué actividades puede realizar con el animal que adopte",
        "tipo": "opcion_multiple",
        "opciones": [
          "Paseos",
          "Educar y enseñar",
          "Viajes",
          "Dormir en la cama",
          "Llevar al veterinario",
          "Jugar"
        ],
        "obligatoria": true
      },
      {
        "id": 17,
        "pregunta": "¿Dónde dormiría el animal?",
        "tipo": "opcion_unica",
        "opciones": [
          "Patio, en una casita",
          "Galería cerrada",
          "Adentro, en una cucha",
          "Adentro, donde quiera",
          "En la cama"
        ],
        "obligatoria": true
      },
      {
        "id": 18,
        "pregunta": "¿Cuántos animales tiene actualmente? Incluye gatos y perros",
        "tipo": "numero",
        "obligatoria": true
      },
      {
        "id": 19,
        "pregunta": "Si tiene que viajar, ¿Con quién dejaría al animal?",
        "tipo": "texto",
        "obligatoria": true
      },
      {
        "id": 20,
        "pregunta": "A sus animales, ¿Le coloca algo para evitar garrapatas y pulgas?",
        "tipo": "opcion_unica",
        "opciones": ["Sí", "No", "No sabía"],
        "obligatoria": true
      },
      {
        "id": 21,
        "pregunta": "Si su respuesta es Sí, ¿Qué utiliza para control de pulgas y garrapatas?",
        "tipo": "texto",
        "obligatoria": false
      },
      {
        "id": 22,
        "pregunta": "Si tiene animales actualmente, ¿Qué alimento comen?",
        "tipo": "texto",
        "obligatoria": false
      },
      {
        "id": 23,
        "pregunta": "Castración: ¿Está de acuerdo?",
        "tipo": "opcion_unica",
        "opciones": ["Sí", "No", "Depende del veterinario", "Desconozco"],
        "obligatoria": true
      },
      {
        "id": 24,
        "pregunta": "La castración, ¿Dónde la realizaría?",
        "tipo": "opcion_multiple",
        "opciones": [
          "Veterinario particular",
          "Jornada a bajo costo",
          "Donde me sugieran",
          "No castraría"
        ],
        "obligatoria": true
      },
      {
        "id": 25,
        "pregunta": "En caso de aceptar la castración, ¿Cuándo la haría?",
        "tipo": "opcion_unica",
        "opciones": [
          "5 a 6 meses",
          "6 a 8 meses",
          "1 año",
          "Después del primer celo",
          "Después de tener crías",
          "No lo haría"
        ],
        "obligatoria": true
      },
      {
        "id": 26,
        "pregunta": "¿A qué se dedica? Trabajo",
        "tipo": "texto",
        "obligatoria": true
      },
      {
        "id": 27,
        "pregunta": "Nombre del lugar donde trabaja/dirección",
        "tipo": "texto",
        "obligatoria": false
      },
      {
        "id": 28,
        "pregunta": "¿Está interesado en algún animal específico? Puede especificar nombre o link de Instagram",
        "tipo": "texto",
        "obligatoria": false
      },
      {
        "id": 29,
        "pregunta": "Observaciones: ¿Por qué te gustaría adoptar y qué condiciones de vida le darías al animal?",
        "tipo": "texto",
        "obligatoria": false
      },
      {
        "id": 30,
        "pregunta": "Para continuar con el proceso, confirma que aceptas el uso de tus datos personales conforme a lo indicado",
        "tipo": "opcion_unica",
        "opciones": ["Sí", "No"],
        "obligatoria": true
      }
    ]
  }
}
