import postController from "./postController.js";

async function getAll(req, res) {
    try {
      const posts = await postController.controllerGetAllposts();
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
  

export default {
  getAll,
};
