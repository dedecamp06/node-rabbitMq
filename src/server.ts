import { app } from './application/app';

const port: number =  3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
