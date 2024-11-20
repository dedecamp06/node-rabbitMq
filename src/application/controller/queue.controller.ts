import { Request, Response } from 'express';
import { sendQueueRabbitMq } from '../../presentation/sendQueue';

export class QueueController {
  async post (req: Request, res: Response) {
    const body = req.body;
    const result = await sendQueueRabbitMq.handle(body);
    return res.status(result.status).json(result);
  }
}
