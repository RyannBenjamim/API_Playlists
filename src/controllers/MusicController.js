const MusicModel = require("../models/MusicModel");

const MusicController = {
  // GET /playlists/:id/musics
  index: (req, res) => {
    const { id } = req.params;

    const musics = MusicModel.getAllMusics(id);

    if (!musics.status) {
      return res.status(musics.code).json({ error: musics.error });
    }

    res.json({ data: musics.data });
  },

  // GET /playlists/:id/musics/:idmusic
  show: (req, res) => {
    const { id, idmusic } = req.params;

    const music = MusicModel.getMusicById(id, idmusic);

    if (!music.status) {
      return res.status(music.code).json({ error: music.error });
    }

    res.json({ data: music.data });
  },

  // POST /playlists/:id/musics
  create: (req, res) => {
    const { id } = req.params;
    const { title, year, artist, album } = req.body;

    const music = MusicModel.createMusic(id, { title, year, artist, album });

    if (!music.status) {
      return res.status(music.code).json({ error: music.error });
    }

    res.status(201).json({ data: music.data });
  },

  // PUT /playlists/:id/musics/:idmusic
  update: (req, res) => {
    const { id, idmusic } = req.params;
    const { title, year, artist, album } = req.body;

    const updatedMusic = MusicModel.updateMusic(id, idmusic, {
      title,
      year,
      artist,
      album,
    });

    if (!updatedMusic.status) {
      return res.status(updatedMusic.code).json({ error: updatedMusic.error });
    }

    res.json({ data: updatedMusic.data });
  },

  // DELETE /playlists/:id/musics/:idmusic
  delete: (req, res) => {
    const { id, idmusic } = req.params;

    const deletedMusic = MusicModel.deleteMusic(id, idmusic);

    if (!deletedMusic.status) {
      return res.status(deletedMusic.code).json({ error: deletedMusic.error });
    }

    res.status(204).end();
  },
};

module.exports = MusicController;
