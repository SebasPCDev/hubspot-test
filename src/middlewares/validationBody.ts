import { Request, Response, NextFunction } from "express";
import { body, validationResult, check } from "express-validator";

export const validateBodyContact = [
  check("firstname")
    .isString()
    .withMessage("Nombre no puede ser un número")
    .exists()
    .withMessage("Debe ingresar un nombre")
    .notEmpty()
    .withMessage("Debe ingresar un nombre"),
  check("email")
    .exists()
    .withMessage("El email es requerido")
    .isEmail()
    .withMessage("Debe ingresar un email válido")
    .notEmpty()
    .withMessage("Debe ingresar un email"),
  check("phone")
    .exists()
    .withMessage("Debe ingresar un teléfono")
    .notEmpty()
    .withMessage("Debe ingresar un teléfono"),
  check("lastname")
    .exists()
    .withMessage("Debe ingresar un apellido")
    .notEmpty()
    .withMessage("Debe ingresar un apellido")
    .isString()
    .withMessage("Apellido no puede ser un número"),

  (req: Request, res: Response, next: NextFunction) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (error: any) {
      return res.status(400).json({ message: error.errors });
    }
  },
];
