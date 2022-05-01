const { check, validationResult } = require('express-validator');
checkingPitch = [
    check('entrepreneur').notEmpty(),
    check('entrepreneur').isString(),
    check('pitchTitle').notEmpty(),
    check('pitchTitle').isString(),
    check('pitchIdea').notEmpty(),
    check('pitchIdea').isString(),
    check('askAmount').notEmpty(),
    check('askAmount').isNumeric(),
    check('equity').notEmpty(),
    check('equity').isNumeric()
]