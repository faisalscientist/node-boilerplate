import mongoose from "../database/connection";


const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  }
});

export default mongoose.model('User', User);