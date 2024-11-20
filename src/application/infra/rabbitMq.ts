import amqp from 'amqplib';

export async function connectRabbitMQ () {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    console.log('Connecting to RabbitMQ');
    return { connection, channel };
  } catch (error) {
    console.error('Error connecting to RabbitMQ:', error);
    throw error;
  }
}
