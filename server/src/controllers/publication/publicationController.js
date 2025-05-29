import SavedPublication from "../../models/savedPublicationModel.js";
import publicationModel from "../../models/publicationModel.js";
import eventModel from "../../models/eventModel.js";
import User from "../../models/userModel.js";

async function controllerGetByID(id) {
  const publication = await publicationModel.findByPk(id);
  return publication;
}

async function controllerGetAll() {
  const publications = await publicationModel.findAll({
    order: [["created_at", "DESC"]]
  });
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
  try {
    const result = await publicationModel.create(data);
    return result;
  } catch (error) {
    console.error('Error en controllerCreate:', error);
    throw error;
  }
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

async function controllerSavePublication(publicationId, userId) {
  try {
    // Crear una entrada en SavedPublication si no existe ya
    const [saved, created] = await SavedPublication.findOrCreate({
      where: { publication_id: publicationId, user_id: userId }
    });

    return { message: created ? 'Guardada correctamente' : 'Ya estaba guardada' };
  } catch (error) {
    console.error('Error en controllerSavePublication:', error);
    throw error;
  }
}

async function controllerUnsavePublication(req, res) {
  const { publicationId } = req.params;
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "Falta el userId" });
  }

  try {
    const deletedCount = await SavedPublication.destroy({
      where: {
        publication_id: publicationId,
        user_id: userId
      }
    });

    if (deletedCount === 0) {
      return res.status(404).json({ error: "No se encontró la publicación guardada para eliminar" });
    }

    return res.json({ message: "Publicación desguardada correctamente" });
  } catch (error) {
    console.error("Error al desguardar publicación:", error);
    return res.status(500).json({ error: "Error al desguardar publicación" });
  }
}

async function controllerGetSavedPublications(userId) {
  try {
    // Busca todos los registros de publicaciones guardadas por userId, incluyendo la info de la publicación
    const savedRecords = await SavedPublication.findAll({
      where: { user_id: userId },
      include: [{
        model: publicationModel,
        as: 'publication', // Cambia si tienes otro alias
        attributes: ['publication_id', 'title', 'text', 'category', 'created_at', 'user_id'] // Campos que quieres retornar
      }]
    });

    // Mapea para devolver solo las publicaciones
    const publications = savedRecords.map(record => record.publication);

    return publications;
  } catch (error) {
    console.error('Error en controllerGetSavedPublications:', error);
    throw error;
  }
}


export default {
  controllerGetByID,
  controllerGetAll,
  controllerGetByUser,
  controllerCreate,
  controllerEdit,
  controllerRemove,
  controllerSavePublication,
  controllerUnsavePublication,
  controllerGetSavedPublications
};
