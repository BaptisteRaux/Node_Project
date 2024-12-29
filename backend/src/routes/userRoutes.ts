import { Router } from 'express';
import * as userController from '../../../../../Documents/GitHub/Node_Project/backend/src/userController';

const router = Router();

// Routes pour récupérer tous les utilisateurs et un utilisateur par ID
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);

// Routes pour créer, mettre à jour et supprimer des utilisateurs
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
