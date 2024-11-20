import { connectRabbitMQ } from '../application/infra/rabbitMq';
import { badRequestResponse, errorResponse, successResponse } from './shared/https';
import { PresentationInterface } from './shared/presentation';
import { Buffer } from 'buffer';

class SendQueueRabbitMq implements PresentationInterface {
  async handle (params: { message: string }): Promise<any> {
    try {
      if(!params.message){
        return badRequestResponse('Message is required!');
      }
      const {channel, connection} = (await connectRabbitMQ());

      const queue = 'test_queue';

      await channel.assertQueue(queue, {
        durable: false
      });

      const message = params.message;
      channel.sendToQueue(queue, Buffer.from(message));

      setTimeout(() => {
        connection.close();
      }, 500);
      return successResponse({ info: 'Message sent to queue!', message });
    } catch (error) {
      return errorResponse('Error connecting to RabbitMQ:' + error);

    }
  }
}

export const sendQueueRabbitMq = new SendQueueRabbitMq();
