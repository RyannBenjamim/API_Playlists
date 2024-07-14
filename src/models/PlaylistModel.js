const playlistsDB = require("../db");
const Playlist = require("./entities/Playlist");
const Music = require("./entities/Music");
const validators = require("../utils/validators");

const PlaylistModel = {
  // Retorna todas as playlists
  getAllPlaylists: () => {
    return playlistsDB;
  },

  // Retorna uma playlist em específico
  getPlaylistById: (id) => {
    // Buscando e verificando se a playlist passada existe
    const playlistIndex = validators.getIndexById(
      id,
      playlistsDB,
      "Playlist não encontrada"
    );
    if (!playlistIndex.status) {
      return playlistIndex;
    }

    return {
      status: true,
      data: playlistsDB[playlistIndex.index],
    };
  },

  // Cria uma playlist
  createPlaylist: ({ name, tags, musics }) => {
    // Verificando se o name existe e se é uma string
    const nameValidation = validators.validateVariableType(
      name,
      "string",
      "o nome da música precisa ser uma string"
    );
    if (!nameValidation.status) {
      return nameValidation;
    }

    // Verificando se o tags existe e se é um array de strings
    const tagsValidation = validators.validateArrayElementsType(
      tags,
      "string",
      "0 array tags precisa ser composto apenas por strings"
    );
    if (!tagsValidation.status) {
      return tagsValidation;
    }

    // Verificando se o musics existe e se é um array de instâncias da classe Music
    const musicsValidation = validators.validateArrayInstancesOfClass(
      musics,
      Music,
      "O array musics precisa ser composto apenas por instâncias da classe Music"
    );
    if (!musicsValidation.status) {
      return musicsValidation;
    }

    // Criando uma instância de playlist e salvando no banco de dados
    const playlist = new Playlist(name, tags, musics);
    playlistsDB.unshift(playlist);

    return {
      status: true,
      data: playlist,
    };
  },

  // Atualiza os dados de uma playlist
  updatePlaylist: (id, { name, tags, musics }) => {
    // Verificando se o name existe e se é uma string
    const nameValidation = validators.validateVariableType(
      name,
      "string",
      "o nome da música precisa ser uma string"
    );
    if (!nameValidation.status) {
      return nameValidation;
    }

    // Verificando se o tags existe e se é um array de strings
    const tagsValidation = validators.validateArrayElementsType(
      tags,
      "string",
      "0 array tags precisa ser composto apenas por strings"
    );
    if (!tagsValidation.status) {
      return tagsValidation;
    }

    // Verificando se o musics existe e se é um array de instâncias da classe Music
    const musicsValidation = validators.validateArrayInstancesOfClass(
      musics,
      Music,
      "O array musics precisa ser composto apenas por instâncias da classe Music"
    );
    if (!musicsValidation.status) {
      return musicsValidation;
    }

    // Buscando o index e verificando se a playlist passada existe
    const playlist = validators.getIndexById(
      id,
      playlistsDB,
      "Playlist não encontrada."
    );
    if (!playlist.status) {
      return playlist;
    }

    // Atualizando os dados da playlist
    playlistsDB[playlist.index] = {
      ...playlistsDB[playlist.index],
      ...{ name, tags, musics },
      updatedAt: new Date(),
    };

    return {
      status: true,
      data: playlistsDB[playlist.index],
    };
  },

  updatePlaylistName: (id, name) => {
    // Verificando se o name existe e se é uma string
    const nameValidation = validators.validateVariableType(
      name,
      "string",
      "o nome da música precisa ser uma string"
    );
    if (!nameValidation.status) {
      return nameValidation;
    }

    // Buscando e verificando se a playlist passada existe
    const playlist = validators.getIndexById(
      id,
      playlistsDB,
      "Playlist não encontrada."
    );
    if (!playlist.status) {
      return playlist;
    }

    // Atualizando o nome e a data de atualização
    playlist.data.name = name;
    playlist.data.updatedAt = new Date();

    return {
      status: true,
      data: playlist.data,
    };
  },

  deletePlaylist: (id) => {
    // Buscando e verificando se a playlist passada existe
    const playlist = PlaylistModel.getPlaylistById(id);
    if (!playlist.status) {
      return playlist;
    }

    // Deletando a playlist
    playlistsDB.splice(playlist.index, 1);

    return {
      status: true,
      message: "Playlist deletada com sucesso.",
    };
  },
};

module.exports = PlaylistModel;
