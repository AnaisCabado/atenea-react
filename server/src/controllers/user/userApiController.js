import userController from "./userController.js";
import { hash } from "../../utils/bcrypt.js";
import { createToken } from "../../utils/token.js";

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const result = await userController.controllerLogin(email, password);

    const data = {
      user_id: result.user_id
    };
    const token = createToken(data);
    res.json({ token: token, username: result.username, email: result.email, user_id: result.user_id });
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

async function getByID(req, res) {
  try {
    const id = req.params.id;
    const user = await userController.controllerGetByID(id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getByUsername(req, res) {
  try {
    const { username } = req.params;
    console.log(username);
    if (!username) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }
 
    const user = await userController.controllerGetByUsername(username);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });    
  }
}

async function getAll(req, res) {
  try {
    const user = await userController.controllerGetAll();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function create(req, res) {
  try {
    const data = req.body;
    data.password = await hash(data.password);
    console.log('file', req.file);
    data.image = req.file?.filename;
    const response = await userController.controllerCreate(data);
    console.log(response)
    
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
    const data = req.body;
    data.password = await hash(data.password);
    data.image = req.file?.filename;

    const id = req.params.id;
    const response = await userController.controllerEdit(id, data);
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
    const response = await userController.controllerRemove(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

export default {
  login,
  getAll,
  getByID,
  getByUsername,
  create,
  edit,
  remove,
};