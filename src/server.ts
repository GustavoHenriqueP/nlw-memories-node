import fastify from 'fastify';
import cors from '@fastify/cors';
import { memoriesRoutes } from './routes/memories';

const app = fastify();

app.register(cors, {
  //* Apenas as URLs especificadas teoricamente poderão acessar a API
  // origin: ['http://localhost:3000', 'http://rocketseat.com.br/'],
  //* Qualquer URL pode acessar a API
  origin: true,
});
app.register(memoriesRoutes);

const serverPort = Number(process.env.PORT ?? 3333);
app
  .listen({
    port: serverPort,
  })
  .then(() => {
    console.log('\x1b[1;34m%s\x1b[0m', `HTTP server running on http://localhost:${serverPort}`);
  });
