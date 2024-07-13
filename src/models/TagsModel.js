const validators = require("../utils/validators");
const PlaylistModel = require("./PlaylistModel");

const TagsModel = {
  // Criando uma tag para uma playlist
  createTag: (idplaylist, tagName) => {
    // Verificando se a tagname existe e se é uma string
    const tag = validators.validateVariableType(
      tagName,
      "string",
      "A tag deve ser do tipo string."
    );
    if (!tag.status) {
      return tag;
    }

    // Buscando e verificando se a playlist passada existe
    const playlist = PlaylistModel.getPlaylistById(idplaylist);
    if (!playlist.status) {
      return playlist;
    }

    // Verificando se o tagName existe no banco de dados
    if (playlist.data.tags.includes(tagName)) {
      return {
        status: false,
        error: `A tag ${tagName} já existe na playlist.`,
        code: 409,
      };
    }

    // Salvando a tag na playlist
    playlist.data.tags.unshift(tagName);

    return {
      status: true,
      data: {
        playlist: playlist.data.name,
        tags: playlist.data.tags,
      },
    };
  },

  // Atualizando o array de tags de uma playlist
  updateTags: (idplaylist, tagsArray) => {
    // Verificando se o tags existe e se ele é um array de strings
    const tags = validators.validateArrayElementsType(tagsArray, "string");
    if (!tags.status) {
      return tags;
    }

    // Buscando e verificando se a playlist passada existe
    const playlist = PlaylistModel.getPlaylistById(idplaylist);
    if (!playlist.status) {
      return playlist;
    }

    // Atualizando o array de tags da playlist
    playlist.data.tags = tagsArray;

    return {
      status: true,
      data: {
        playlist: playlist.data.name,
        tags: playlist.data.tags,
      },
    };
  },

  // Deletando uma tag de uma playlist
  deleteTag: (idplaylist, tagName) => {
    // Buscando e verificando se a playlist passada existe
    const playlist = PlaylistModel.getPlaylistById(idplaylist);
    if (!playlist.status) {
      return playlist;
    }

    // Verificando se a tagname existe e se é uma string
    const tag = validators.validateVariableType(
      tagName,
      "string",
      "A tag deve ser do tipo string."
    );
    if (!tag.status) {
      return tag;
    }

    // Verificando se o tagName existe no banco de dados
    if (!playlist.data.tags.includes(tagName)) {
      return {
        status: false,
        error: `A tag ${tagName} não existe na playlist.`,
        code: 404,
      };
    }

    // Deletando a tag da playlist
    const newTags = playlist.data.tags.filter((tag) => tag !== tagName);
    playlist.data.tags = newTags;

    return {
      status: true,
      data: {
        playlist: playlist.data.name,
        tags: playlist.data.tags,
      },
    };
  },
};

module.exports = TagsModel;
