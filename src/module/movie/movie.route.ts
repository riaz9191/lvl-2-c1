import express, { Request, Response } from 'express';
import { Movie } from './movie.model';
import { MovieController } from './movie.controller';

const router = express.Router();

router.post('/', MovieController.createMovie)

export const MovieRoutes = router;
