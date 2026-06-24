import express from 'express';
import routes from './routes/index.routes';

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/", routes); // Use the routes defined in routes.ts

  

// mongoose client