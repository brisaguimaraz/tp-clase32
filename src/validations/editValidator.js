const { body } = require("express-validator");

module.exports = [
    body("title")
    .notEmpty()
    .withMessage("El título de la película es obligatorio"),
    
    body("rating")
    .notEmpty()
    .withMessage("El rating es obligatorio")
    .isNumeric()
    .withMessage("El rating debe ser numérico"),

    body("awards")
    .notEmpty()
    .withMessage("Los premios son obligatorio")
    .isNumeric()
    .withMessage("Los premios deben ser un número válido"),

    body("release_date")
    .notEmpty()
    .withMessage("La fecha de lanzamiento es obligatoria"),

    body("length")
    .notEmpty()
    .withMessage("La duración es obligatoria")
    .isNumeric()
    .withMessage("La duración debe ser un número válido"),
]