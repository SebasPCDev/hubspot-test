import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validateBody = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
