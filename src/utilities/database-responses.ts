import { AppResponse } from 'api-responses'

const response = new AppResponse();

export const dbResponse = (error: any) => {
  switch(error.code){
    case 11000:
      const key = Object.keys(error.keyValue)[0];
      const validationData = {[key] : 'Already exists'};
      return response.validationError(error.message, validationData);
  }
}