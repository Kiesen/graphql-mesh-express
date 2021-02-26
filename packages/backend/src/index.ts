import express from 'express';

const backend = express();

backend.get('/', (req, res) => {
  return res.send({
    version: PACKAGE_VERSION,
  });
});

export backend;