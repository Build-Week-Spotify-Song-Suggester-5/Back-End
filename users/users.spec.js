const db = require('../data/dbConfig');
const Users = require('./users-model');

describe('users router', function() {
    it('should run the tests', function() {
        expect(true).toBe(true);
    });
});

describe('users model', () => {
   beforeEach( async () => {
       await db('users').truncate();
   });
   describe('addUser function', () => {
       it('inserts users into the db', async () => {
           let userNumber;
           userNumber = await db('users');
           expect(userNumber).toHaveLength(0);
           await Users.add({ username: 'test', password: 'test'});
            userNumber = await db('users');
            expect(userNumber).toHaveLength(1);
       });
       it('inserts the provided user into the db', async () => {
           let user = await Users.add({ username: 'test', password:'test' });
           expect(user.username).toBe('test')
       })
   })
   })