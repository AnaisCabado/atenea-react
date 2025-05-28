import publicationController from "./publicationController.js";


async function getByID(req, res) {
  try {
    const id = req.params.id;
    const publication = await publicationController.controllerGetByID(id);
    res.json(publication);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getAll(req, res) {
  try {
    const publications = await publicationController.controllerGetAll();
    res.json(publications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

async function getByUser(req, res) {
  try {
    const { username } = req.params;
    console.log(username);
    if (!username) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }

    const publications = await publicationController.controllerGetByUser(username);
    res.json(publications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });    
  }
}

async function getSavedPublications(req, res) {
  try {
    const { userId } = req.params;
    const publications = await publicationController.controllerGetSavedPublications(userId);
    res.json(publications);
  } catch (error) {
    console.error('Error getting saved publications:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

async function create(req, res) {
  try {
    const response = await publicationController.controllerCreate(req.body);
    
    res.json(response);
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
}

async function edit(req, res) {
  try {
    const id = req.params.id;
    const response = await publicationController.controllerEdit(id, req.body);
    res.json(response);
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
}

async function remove(req, res) {
  try {
    const id = req.params.id;
    const response = await publicationController.controllerRemove(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function savePublication(req, res) {
  try {
    const publicationId = req.params.id;
    const userId = req.user?.user_id || req.body.user_id; // Dependiendo de cómo manejes auth
    
    if (!userId) {
      return res.status(401).json({ error: 'User authentication required' });
    }
    
    const response = await publicationController.controllerSavePublication(publicationId, userId);
    res.json(response);
  } catch (error) {
    console.error('Error saving publication:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

async function unsavePublication(req, res) {
  try {
    const { id: publicationId } = req.params;
    const { user_id } = req.body;

    const deleted = await SavedPublication.destroy({
      where: { publication_id: publicationId, user_id }
    });

    if (deleted === 0) return res.status(404).json({ error: 'No estaba guardada' });

    res.json({ message: 'Desguardada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al desguardar publicación' });
  }
};


export default {
  getAll,
  getByID,
  getByUser,
  create,
  edit,
  remove,
  savePublication,
  unsavePublication,
  getSavedPublications
};
