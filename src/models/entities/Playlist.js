const { v4: uuidv4 } = require("uuid");

class Playlist {
  constructor(name, tags, musics) {
    this.id = uuidv4();
    this.name = name;
    this.tags = tags;
    this.musics = musics;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Playlist;
