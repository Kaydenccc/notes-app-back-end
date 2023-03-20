const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5928,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`server running on ${server.info.uri}`);
};

init();