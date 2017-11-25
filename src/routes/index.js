import { Router } from 'express';
import { IO } from '../config/server';
import Hub from '../smarthome/Hub';

const router = Router();

router.get('/', (req, res) => {
  res.send({ status: 'ok' });
});

router.get('/smart-home/:device', (req, res) => {
  const { device } = req.params;
  const result = Hub.switch(device);
  if (result.success) {
    IO.emit('home', Hub.devices);
  }
  res.send({ message: result.message, status: 'ok', devices: Hub.devices });
});

export default router;
