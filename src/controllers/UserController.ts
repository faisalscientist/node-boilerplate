import User from '../models/User.model';
import { AppResponse } from 'api-responses'
import { dbResponse } from '../utilities/database-responses';
import { Log } from 'app-logging'

const log = new Log();
const response = new AppResponse();

export const UserController = {
  index: async (req: any, res: any) => {
    const users = await User.find();
    res.send(response.success('Users Fetched', users));
  },

  create: async (req: any, res: any) => {
    try {
      const model = new User(req.body);
      const user = await model.save();
      res.send(response.success('User Created', user));
    } catch (error) {
      log.error(error.message, error);
      res.send(dbResponse(error));
    }
  },

  show: async (req: any, res: any) => {
    try {
      const user = await User.findById(req.params.id);
      res.send(response.success('User Fetched', user));
    } catch (error) {
      log.error(error.message, error);
      res.send(response.notFound('User Not Found', null));
    }
  },

  update: async (req: any, res: any) => {
    try {
      const {id} = req.params;
      await User.findOneAndUpdate({_id: id}, req.body, {useFindAndModify: false});
      const user = await User.findById(id);
      res.send(response.success('User Updated', user));
    } catch (error) {
      log.error(error.message, error);
      res.send(dbResponse(error));
    }
  },

  delete: async (req: any, res: any) => {
    try {
      const user = await User.findOneAndRemove({_id: req.params.id}, {useFindAndModify: false});
      if(user){
        res.send(response.success('User Removed', user));
      }
      res.send(response.notFound('User Not Found', null));
    } catch (error) {
      log.error(error.message, error);
      res.send(response.notFound('User Not Found', null));
    }
  },
}