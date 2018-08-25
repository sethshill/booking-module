const path = require('path');

module.exports = {
  client: 'mysql',
  connection: {
    user: 'root',
    password: '',
    database: 'project_nomad_booking',
  },
  migrations: { directory: path.join(__dirname, '/db/migrations') },
  seeds: { directory: path.join(__dirname, '/db/seeds') },
};
