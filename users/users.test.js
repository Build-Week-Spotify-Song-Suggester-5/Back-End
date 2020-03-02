const request = require('supertest');
const server = require('../api/server');

const db = require('../data/dbConfig');
const Users = require('./users-model');

describe('users router', function() {
    it('should run the tests', function() {
        expect(true).toBe(true);
    });
});
