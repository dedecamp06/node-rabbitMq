import amqp from 'amqplib';

export async function rabbitConsumer () {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    console.log('Connecting to RabbitMQ');
    const queue = 'test_queue';

    await channel.assertQueue(queue, {
      durable: false
    });

    channel.consume(queue, (msg) => {
      if (msg !== null) {
        console.log(`Message receive: ${msg.content.toString()}`);
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error('Error connecting to RabbitMQ:', error);
    throw error;
  }
}
