import express from 'express';
import { AppResponse } from 'api-responses'

const response = new AppResponse();
const Errors = express();

export const NotFoundError = Errors.use((req, res, next) => {
  res.send(response.notFound(`Endpoint: ${req.originalUrl} was not found`));
});

export const ServerError = Errors.use((err: any, req: any, res: any, next: any) => {
  res.send(123);
});