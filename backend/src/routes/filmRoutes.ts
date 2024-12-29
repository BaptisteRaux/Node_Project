import { Router } from 'express';
import * as movieController from '../../../../../Documents/GitHub/Node_Project/backend/src/filmController';

const router = Router();

// Routes pour récupérer tous les films et un film par ID
router.get('/', movieController.getMovies);
router.get('/:id', movieController.getMovieById);

// Routes pour créer, mettre à jour et supprimer des films
router.post('/', movieController.createMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

export default router;
