const PlaylistModel = require("../models/PlaylistModel");

const PlaylistController = {
  // GET /playlists
  index: (req, res) => {
    const playlists = PlaylistModel.getAllPlaylists();

    res.json({ data: playlists });
  },

  // GET /playlists/:id
  show: (req, res) => {
    const { id } = req.params;

    const playlist = PlaylistModel.getPlaylistById(id);

    if (!playlist.status) {
      return res.status(playlist.code).json({ error: playlist.error });
    }

    res.json({ data: playlist.data });
  },

  // POST /playlists
  create: (req, res) => {
    const { name, tags, musics } = req.body;

    const playlist = PlaylistModel.createPlaylist({ name, tags, musics });

    if (!playlist.status) {
      return res.status(playlist.code).json({ error: playlist.error });
    }

    res.status(201).json({ data: playlist.data });
  },

  // PUT /playlists/:id
  update: (req, res) => {
    const { id } = req.params;
    const { name, tags, musics } = req.body;

    const updatedPlaylist = PlaylistModel.updatePlaylist(id, {
      name,
      tags,
      musics,
    });

    if (!updatedPlaylist.status) {
      return res
        .status(updatedPlaylist.code)
        .json({ error: updatedPlaylist.error });
    }

    res.json({ data: updatedPlaylist.data });
  },

  // PATCH /playlists/:id/name
  updateName: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const updatedName = PlaylistModel.updatePlaylistName(id, name);

    if (!updatedName.status) {
      return res.status(updatedName.code).json({ error: updatedName.error });
    }

    res.json({ data: updatedName.data });
  },

  // DELETE /playlists/:id
  delete: (req, res) => {
    const { id } = req.params;

    const deletedPlaylist = PlaylistModel.deletePlaylist(id);

    if (!deletedPlaylist.status) {
      return res
        .status(deletedPlaylist.code)
        .json({ error: deletedPlaylist.error });
    }

    res.status(204).end();
  },
};

module.exports = PlaylistController;
