/* eslint no-console: "off" */
import serverApp from './server-app';

require('dotenv').config();

const server = serverApp.listen(process.env.SERVER_PORT, err => {
  if (err) {
    console.log(err);
  }

  console.log(`Server running on port ${process.env.SERVER_PORT}`);
});

export default server;
