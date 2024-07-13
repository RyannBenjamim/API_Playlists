const express = require("express");
const PlaylistController = require("./controllers/PlaylistController");
const MusicController = require("./controllers/MusicController");
const TagsController = require("./controllers/TagsController");

const routes = express.Router();

// Rotas para playlists
routes.get("/playlists", PlaylistController.index);
routes.get("/playlists/:id", PlaylistController.show);
routes.post("/playlists", PlaylistController.create);
routes.put("/playlists/:id", PlaylistController.update);
routes.patch("/playlists/:id/name", PlaylistController.updateName);
routes.delete("/playlists/:id", PlaylistController.delete);

// Rotas para musics
routes.get("/playlists/:id/musics", MusicController.index);
routes.get("/playlists/:id/musics/:idmusic", MusicController.show);
routes.post("/playlists/:id/musics", MusicController.create);
routes.put("/playlists/:id/musics/:idmusic", MusicController.update);
routes.delete("/playlists/:id/musics/:idmusic", MusicController.delete);

// Rotas para tags
routes.post("/playlists/:id/tags", TagsController.create);
routes.put("/playlists/:id/tags", TagsController.update);
routes.delete("/playlists/:id/tags", TagsController.delete);

module.exports = routes;
