import express, { Express } from 'express';
import { routes } from './routes';
import { rabbitConsumer } from './infra/rabbitConsumer';

const app: Express = express();

app.use(express.json());
app.use(routes);

(async () => {
  await rabbitConsumer();
})();

export { app };
