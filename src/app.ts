import express, { Request, Response } from 'express';

import cors from 'cors';
import { MovieRoutes } from './module/movie/movie.route';
const app = express();
// const port = 3000;

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/movies',MovieRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
