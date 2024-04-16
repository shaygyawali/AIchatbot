import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import appRouter from './routes/index.js';
config();
const app = express();
// GET - get data from database
// PUT - update or modify (mutate) data 
// POST - send data 
// DELETE - remove data
//middleware
app.use(express.json());
//remove this in production
app.use(morgan("dev"));
app.use("api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map