import 'isomorphic-fetch';
import * as http from 'http';

import { app } from '@src/app';

const server = http.createServer(app);
// Increases default timeout to 30 minutes
server.timeout = 30 * 60 * 1000;

server.listen(4848, () => {
  console.log('Server started on port 4848');
});
