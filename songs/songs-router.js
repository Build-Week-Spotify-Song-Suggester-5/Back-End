const db = require("./songs-model");
const router = require('express').Router();

router.get("/",  async (req, res, next) => {
    try {
        const songs = await db.getSongs()
        res.status(200).json(songs)
    }
    catch (error){
        next(error)
    }
})

router.post('/', async (req, res) => {
  try {
        return res.status(201).json(await db.addSong(req.body))
    }
    catch{
        res.status(500).json({ message: `Failed to add a song` })
    }
  });

  router.put('/:id', async (req, res) => {
      try{
          await db.updateSong(req.params.id, { ...req.body, id: req.params.id})
          const newSong = await db.getById(req.params.id)
          res.status(200).json(newSong)
      }
      catch {
          res.status(201).json({  message: "Song Updated"})
      }


  })

  router.delete('/:id', async (req, res) => {
      try {
          const result = await db.deleteSong(req.params.id)
          res.status(200).json({ status: `Song has been deleted`})
      }
      catch {
          res.status(500).json({ error: "500 Error, could not delete."})
      }
  })


module.exports = router