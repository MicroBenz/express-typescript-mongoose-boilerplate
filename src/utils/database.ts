import mongoose from 'mongoose';
import config from 'config';

export default function connectMongoDB() {
  (mongoose as any).Promise = global.Promise;

  return mongoose.connect(
    `${config.get('mongodb.url')}${config.get('mongodb.dbName')}`,
    {
      useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,
    },
  );
}
