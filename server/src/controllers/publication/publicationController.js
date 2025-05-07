import publicationModel from "../../models/publicationModel.js";
import User from "../../models/userModel.js";

async function controllerGetByID(id) {
  const publication = await publicationModel.findByPk(id);
  return publication;
}

async function controllerGetAll() {
  const publications = await publicationModel.findAll();
  return publications;
}

async function controllerGetByUser(username) {
  const publications = await publicationModel.findAll({
    include: [{
      model: User,
      where: { username: username },
      attributes: []
    }],
    order: [["created_at", "DESC"]]
  });
  return publications;
}

async function controllerCreate(data) { 
  const result = await publicationModel.create(data);
  return result;
}

async function controllerEdit(id, data) {
  const result = await publicationModel.update(data, {
    where: {
      publication_id: id,
    },
    order: [["created_at", "DESC"]]
  });
  const updatedUser = await publicationModel.findByPk(id);
  return updatedUser;
}

async function controllerRemove(id) {
  const result = await publicationModel.destroy({
    where: {
      publication_id: id,
    },
  });
  return result;
}

export default {
  controllerGetByID,
  controllerGetAll,
  controllerGetByUser,
  controllerCreate,
  controllerEdit,
  controllerRemove,
};
