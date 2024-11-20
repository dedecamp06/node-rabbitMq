import { Router } from 'express';
import { QueueController } from './controller/queue.controller';

const routes = Router();
const queueController = new QueueController();

const prefix = '/api';
routes.post(`${prefix}/queue`, queueController.post);


export { routes };
