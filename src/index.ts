import express from 'express';
import config from 'config';

import registerCommonMiddleware from './middlewares/commons';
import connectToMongoDB from './utils/database';
import { User } from './models';

connectToMongoDB()
  .then(() => {
    const app = express();
    registerCommonMiddleware(app);

    const PORT = config.get('port');

    app.get('/', async (req, res) => {
      const users = await User.find({});
      return res.send(users);
    });

    app.listen(PORT, () => console.info(`Express server listening at port ${PORT}`));
  })
  .catch(e => {
    console.error('Fail to conenct to mongodb', e);
  });
