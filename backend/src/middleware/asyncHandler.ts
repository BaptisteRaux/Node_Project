import { Request, Response, NextFunction } from 'express';

// Middleware pour gérer les fonctions asynchrones
const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
