const { check } = require("express-validator");

module.exports = [
    check("title")
    .notEmpty()
    .withMessage("El título de la película es obligatorio"),
    
    check("rating")
    .notEmpty()
    .withMessage("El rating es obligatorio")
    .isNumeric()
    .withMessage("El rating debe ser numérico"),

    check("awards")
    .notEmpty()
    .withMessage("Los premios son obligatorio")
    .isNumeric()
    .withMessage("Los premios deben ser un número válido"),

    check("release_date")
    .notEmpty()
    .withMessage("La fecha de lanzamiento es obligatoria"),

    check("length")
    .notEmpty()
    .withMessage("La duración es obligatoria")
    .isNumeric()
    .withMessage("La duración debe ser un número válido"),
]