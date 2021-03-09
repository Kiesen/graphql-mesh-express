/* istanbul ignore file */
import 'isomorphic-fetch';
import * as http from 'http';
import { app } from './app';

const server = http.createServer(app);
server.timeout = 30 * 60 * 1000; // increases default timeout to 30 minutes

server.listen(4848, () => {
  console.log('Server started on port 4848');
});
