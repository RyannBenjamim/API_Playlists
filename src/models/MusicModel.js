const PlaylistModel = require("./PlaylistModel");
const validators = require("../utils/validators");
const Music = require("./entities/Music");

const MusicModel = {
  // Retorna todas as músicas de uma playlist
  getAllMusics: (idplaylist) => {
    // Buscando e verificando se a playlist passada existe
    const playlist = PlaylistModel.getPlaylistById(idplaylist);
    if (!playlist.status) {
      return playlist;
    }

    return {
      status: true,
      data: {
        playlist: playlist.data.name,
        musics: playlist.data.musics,
      },
    };
  },

  // retorna uma música em específico
  getMusicById: (idplaylist, idmusic) => {
    // Buscando e verificando se a playlist passada existe
    const playlist = PlaylistModel.getPlaylistById(idplaylist);
    if (!playlist.status) {
      return playlist;
    }

    // Buscando o index e verificando se a música passada existe
    const indexMusic = validators.getIndexById(
      idmusic,
      playlist.data.musics,
      `A playlist ${playlist.data.name} não possui essa música`
    );
    if (!indexMusic.status) {
      return indexMusic;
    }

    return {
      status: true,
      data: {
        playlist: playlist.data.name,
        music: playlist.data.musics[indexMusic.index],
      },
    };
  },

  // Cria uma música dentro de uma playlist
  createMusic: (idplaylist, { title, year, artist, album }) => {
    // Verificando se o title existe e se é uma string
    const titleValidation = validators.validateVariableType(
      title,
      "string",
      "O título da música deve ser do tipo string"
    );
    if (!titleValidation.status) {
      return titleValidation;
    }

    // Verificando se o year existe e se é um number
    const yearValidation = validators.validateVariableType(
      year,
      "number",
      "O ano da música deve ser do tipo number."
    );
    if (!yearValidation.status) {
      return yearValidation;
    }

    // Verificando se o artist existe e se é uma string
    const artistValidation = validators.validateVariableType(
      artist,
      "string",
      "O artista da música deve ser do tipo string"
    );
    if (!artistValidation.status) {
      return artistValidation;
    }

    // Verificando se o album existe e se é uma string
    const albumValidation = validators.validateVariableType(
      album,
      "string",
      "O album da música deve ser do tipo string"
    );
    if (!albumValidation.status) {
      return albumValidation;
    }

    // Criando uma instância de Music e salvando na playlist
    const music = new Music(title, year, artist, album);

    const playlist = PlaylistModel.getPlaylistById(idplaylist);
    if (!playlist.status) {
      return playlist;
    }

    playlist.data.musics.unshift(music);

    return {
      status: true,
      data: {
        playlist: playlist.data.name,
        musics: playlist.data.musics,
      },
    };
  },

  // Atualiza uma música de dentro de uma playlist
  updateMusic: (idplaylist, idmusic, { title, year, artist, album }) => {
    // Verificando se o title existe e se é uma string
    const titleValidation = validators.validateVariableType(
      title,
      "string",
      "O título da música deve ser do tipo string"
    );
    if (!titleValidation.status) {
      return titleValidation;
    }

    // Verificando se o year existe e se é um number
    const yearValidation = validators.validateVariableType(
      year,
      "number",
      "O ano da música deve ser do tipo number."
    );
    if (!yearValidation.status) {
      return yearValidation;
    }

    // Verificando se o artist existe e se é uma string
    const artistValidation = validators.validateVariableType(
      artist,
      "string",
      "O artista da música deve ser do tipo string"
    );
    if (!artistValidation.status) {
      return artistValidation;
    }

    // Verificando se o album existe e se é uma string
    const albumValidation = validators.validateVariableType(
      album,
      "string",
      "O album da música deve ser do tipo string"
    );
    if (!albumValidation.status) {
      return albumValidation;
    }

    // Buscando e verificando se a playlist passada existe
    const playlist = PlaylistModel.getPlaylistById(idplaylist);
    if (!playlist.status) {
      return playlist;
    }

    // Buscando e verificando se a musica existe
    const musicIndex = validators.getIndexById(
      idmusic,
      playlist.data.musics,
      "Música não encontrada."
    );
    if (!musicIndex.status) {
      return musicIndex;
    }

    // Atualizando a música
    playlist.data.musics[musicIndex.index] = {
      ...playlist.data.musics[musicIndex.index],
      ...{ title, year, artist, album },
      updatedAt: new Date(),
    };

    return {
      status: true,
      data: {
        playlist: playlist.data.name,
        music: playlist.data.musics[musicIndex.index],
      },
    };
  },

  // Deletando uma música de dentro de uma playlist
  deleteMusic: (idplaylist, idmusic) => {
    // Buscando e verificando se a playlist passada existe
    const playlist = PlaylistModel.getPlaylistById(idplaylist);
    if (!playlist.status) {
      return playlist;
    }

    // Buscando o index e verificando se a música passada existe
    const indexMusic = validators.getIndexById(
      idmusic,
      playlist.data.musics,
      `A playlist ${playlist.data.name} não possui essa música`
    );
    if (!indexMusic.status) {
      return indexMusic;
    }

    // Deletando a música
    playlist.data.musics.splice(indexMusic, 1);

    return {
      status: true,
      message: "Música deletada com sucesso.",
    };
  },
};

module.exports = MusicModel;
