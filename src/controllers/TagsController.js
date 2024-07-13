const TagsModel = require("../models/TagsModel");

const TagsController = {
  // POST /playlists/:id/tags
  create: (req, res) => {
    const { id } = req.params;
    const { tag } = req.body;

    const newTag = TagsModel.createTag(id, tag);

    if (!newTag.status) {
      return res.status(newTag.code).json({ error: newTag.error });
    }

    res.status(201).json({ data: newTag.data });
  },

  // PUT /playlists/:id/tags
  update: (req, res) => {
    const { id } = req.params;
    const { tags } = req.body;

    const updateTag = TagsModel.updateTags(id, tags);

    if (!updateTag.status) {
      return res.status(updateTag.code).json({ error: updateTag.error });
    }

    res.status(201).json({ data: updateTag.data });
  },

  // DELETE /playlists/:id/tags
  delete: (req, res) => {
    const { id } = req.params;
    const { tag } = req.body;

    const deleteTag = TagsModel.deleteTag(id, tag);

    if (!deleteTag.status) {
      return res.status(deleteTag.code).json({ error: deleteTag.error });
    }

    res.status(201).json({ data: deleteTag.data });
  },
};

module.exports = TagsController;
