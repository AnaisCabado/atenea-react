import postModel from "../../models/postModel.js";
import publicationModel from '../../models/publicationModel.js';

async function controllerGetAllposts() {
    const posts = await publicationModel.findAll({
      where: {
        category: "post"
      },
      order: [["created_at", "DESC"]]
    });
    return posts;
  }  

async function controllerCreate(data) { 
  const result = await postModel.create(data);
  return result;
}

async function controllerRemove(id) {
  const result = await postModel.destroy({
    where: {
      post_id: id,
    },
  });
  return result;
}

export default {
  controllerGetAllposts,
  controllerCreate,
  controllerRemove,
};
