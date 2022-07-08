import express from 'express'
import {restaurantRoutes} from './routes/index.js'

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(restaurantRoutes)

api.get('/api', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

export default api;