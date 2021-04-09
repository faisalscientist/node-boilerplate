import express from 'express';
import { appConfig } from '../config/app';
import { AppResponse } from 'api-responses'

const response = new AppResponse();
const AuthorizationMiddeware = express();

AuthorizationMiddeware.use((req, res, next) => {
  if(appConfig.apiKey){
    if(appConfig.apiKey === req.headers['api-key']){
      return next();
    }
  } 
  res.send(response.unauthorized('Unauthorized. Access Denied'));
});

export default AuthorizationMiddeware;