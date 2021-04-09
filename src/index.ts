import express from 'express';
import router from './routes/api';
import AuthorizationMiddeware from './middlewares/Authorization';
import { NotFoundError, ServerError } from './middlewares/Errors';
import { appConfig } from './config/app';

const app = express();

// Body Parse
app.use(express.json());
// API Authorization middleware
app.use(AuthorizationMiddeware);
// Routers
app.use(router); 
// 404 Error Handler Middleware
app.use(NotFoundError);
// 500 Error Handler Middleware
app.use(ServerError);

const PORT = appConfig.port || 3000;

app.listen(PORT, () => {
  return console.log(`Started On Port: ${PORT}`);
});