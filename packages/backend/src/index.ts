/* istanbul ignore file */
import 'isomorphic-fetch';
import * as http from 'http';
import { app } from './app';

const publicServer = http.createServer(app);
publicServer.timeout = 30 * 60 * 1000; // increases default timeout to 30 minutes

publicServer.listen(4848, () => {
  console.log('Server started on port 4848');
});
