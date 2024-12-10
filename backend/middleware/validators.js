const { body, validationResult } = require("express-validator");

const validateTaskInput = [
  body("title")
    .isString()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ max: 100 })
    .withMessage("Title must be at most 100 characters long"),
  body("status")
    .optional()
    .isIn(["TODO", "IN_PROGRESS", "COMPLETED"])
    .withMessage("Status must be one of TODO, IN_PROGRESS, or COMPLETED"),
  body("priority")
    .optional()
    .isIn(["LOW", "MEDIUM", "HIGH"])
    .withMessage("Priority must be one of LOW, MEDIUM, or HIGH"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateTaskInput };
console.log("Validator is ready to use");
