const db = require('../data/dbConfig');
const Songs = require('./songs-model');

describe('songs model', () => {
   beforeEach( async () => {
       await db('songs').truncate();
   });
   describe('addSong function', () => {
       it('inserts songs into the db', async () => {
           let songNumber;
           songNumber = await db('songs');
           expect(songNumber).toHaveLength(0);
           await Songs.addSong({ song_name: 'test', artist_name: 'test'});
            songNumber = await db('songs');
            expect(songNumber).toHaveLength(1);
       });
       it('inserts the provided song into the db', async () => {
           let song = await Songs.addSong({ song_name: 'test', artist_name:'test' });
           expect(song.song_name).toBe('test')
       })
       })
   })