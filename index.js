const server = require('./server.js');
const accountsRoutes = require('./accountsRoutes.js');

const PORT = process.env.PORT || 4000;

server.use('/accounts', accountsRoutes);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
