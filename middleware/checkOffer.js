
const { check, validationResult } = require('express-validator');
checkingOffer = [
    check('investor').notEmpty(),
    check('investor').isString(),
    check('amount').notEmpty(),
    check('amount').isNumeric(),
    check('equity').notEmpty(),
    check('equity').isNumeric(),
    check('comment').notEmpty(),
    check('comment').isString(),
    check('pitchID').notEmpty()
]