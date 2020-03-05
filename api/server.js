const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const songsRouter = require('../songs/songs-router.js');
const restricted = require('../auth/restricted-middleware');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);
server.use('/api/songs', songsRouter);

server.get('/', (req, res) => {
    res.send("Welcome to Spotify Song Suggester");
  });

module.exports = server;