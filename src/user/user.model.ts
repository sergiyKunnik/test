import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
      type:string,
      require: true,
      unique: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: {
      type:string,
      require: true
  },
  balance: {
    type: number,
    require: false,
    default: 0.0
  }
});

export const UserModel = mongoose.model('User', UserSchema);