const { v4: uuidv4 } = require("uuid");

class Music {
  constructor(title, year, artist, album) {
    this.id = uuidv4();
    this.title = title;
    this.year = year;
    this.artist = artist;
    this.album = album;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Music;
