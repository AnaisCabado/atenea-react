// import { UserNameNotProvided, UserRoleIncorrect } from "../../utils/errors.js";
import { where } from "sequelize";

import { compare } from "../../utils/bcrypt.js";
import userModel from "../../models/userModel.js";


async function controllerLogin(email, password) {
  if (!email) {
    throw new Error("Email is not correct");
  }
  if (!password) {
    throw new Error("Password is not correct");
  }
  const user = await userModel.findOne({
    where: {
      email: email,
    },
  });
  if (!user) {
    throw new UserInvalidCredentials();
  }
  const isSamePassword = await compare(password, user.password);
  if (isSamePassword) {
    // si la contraseña es correcta
    return user;
  } else {
    throw new Error("Password is not correct");
  }
}

async function controllerGetByID(id) {
  const user = await userModel.findByPk(id);
  return user;
}

async function controllerGetAll() {
  const user = await userModel.findAll();
  return user;
}

async function controllerGetByUsername(username) {
  const user = await userModel.findOne({
    where: { username: username },
  });
  return user;
}

async function controllerCreate(data) { 
  const result = await userModel.create(data);
  return result;
}

async function controllerEdit(id, data) {
  const result = await userModel.update(data, {
    where: {
      user_id: id,
    },
    order: [["created_at", "DESC"]]
  });
  const updatedUser = await userModel.findByPk(id);
  return updatedUser;
}

async function controllerRemove(id) {
  const result = await userModel.destroy({
    where: {
      user_id: id,
    },
  });
  return result;
}

export default {
  controllerLogin,
  controllerGetByID,
  controllerGetByUsername,
  controllerGetAll,
  controllerCreate,
  controllerEdit,
  controllerRemove,
};
