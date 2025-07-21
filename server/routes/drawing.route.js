import express from 'express';
import auth from '../middleware/auth.middleware.js'
import { createDrawing, getDrawings } from '../controllers/drawing.controller.js';


const router = express.Router();

router.post('/', auth, createDrawing);
router.get('/:id', auth, getDrawings);

export default router;
