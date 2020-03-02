const db = require("../data/dbConfig")

module.exports = {
    getSongs,
    addSong,
    updateSong,
    deleteSong,
    
}

function getSongs(){
    return db("songs")
}

async function addSong(reqBody){
  const [ id ] = await db("songs").insert(reqBody)
    return db("songs").where("id", id).first()
}

function updateSong(id, changes) {
    return db("songs")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function deleteSong(id) {
    return db("songs")
    .where("id", id)
    .del();
}