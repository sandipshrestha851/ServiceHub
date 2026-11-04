const { body, validationResult, matchedData } = require("express-validator")
const db = require("../db/queries")
const bcrypt = require("bcrypt")

const signupValidator = [
    // Name validation
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required.")
        .bail()
        .isLength({ min: 3, max: 100 })
        .withMessage("Name must be between 3 and 100 characters.")
        .bail()
        .matches(/^[a-zA-Z]+(?:[ '-][a-zA-Z]+)*$/)
        .withMessage("Name can only contain letters, spaces, hyphens and apostrophes."),

    // Email validation
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required.")
        .bail()
        .isEmail()
        .withMessage("Enter a valid email address.")
        .bail()
        .normalizeEmail(),

    // Password validation
    body("password")
        .notEmpty()
        .withMessage("Password is required.")
        .bail()
        .isLength({ min: 8, max: 72 })
        .withMessage("Password must be between 8 and 72 characters.")
        .bail()
        .matches(/[a-z]/)
        .withMessage("Password must contain a lowercase letter.")
        .bail()
        .matches(/[A-Z]/)
        .withMessage("Password must contain an uppercase letter.")
        .bail()
        .matches(/[0-9]/)
        .withMessage("Password must contain a number.")
        .bail()
        .matches(/[^A-Za-z0-9]/)
        .withMessage("Password must contain a special character."),

    // Confirm password validation
    body("confirmPassword")
        .notEmpty()
        .withMessage("Please confirm your password.")
        .bail()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Passwords do not match.");
            }
            return true;
        })
];

exports.signupPost = [
    signupValidator,
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            //error display code
        }
        try {
            const { name, email, password, confirmPassword } = matchedData(req)
            const hashedPassword = await bcrypt.hash(password,12)
            await db.registerUser(name, email, hashedPassword)
        } catch (error) {
            throw error
        }
    }
]