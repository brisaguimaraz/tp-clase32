const {body, check} = require('express-validator')

module.exports = [
    check('title')
    .notEmpty().withMessage('Debe ingresa el nombre'),

    check('rating')
    .notEmpty().withMessage('Debe ingresar el rating de la película'),

    check('awards')
    .notEmpty().withMessage('Debe ingresar los premios de la película'),

    check('release_date')
    .notEmpty().withMessage('Dene ingresar la fecha de estreno'),

    check('length')
    .notEmpty().withMessage('Debe ingresar la duración de la película').bail()
    .isNumeric().withMessage('Solo se permiten caracteres numéricos'),

]