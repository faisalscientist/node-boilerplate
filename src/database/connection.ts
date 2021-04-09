import mongoose from 'mongoose';
import { dbConfig } from '../config/db';

mongoose.connect(`mongodb+srv://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}/${dbConfig.database}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,   })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(`Could Not Connect To MongoDB: ${err}`));;

export default mongoose;