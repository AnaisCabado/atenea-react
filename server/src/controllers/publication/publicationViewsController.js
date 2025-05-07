import publicationController from "./publicationController.js";

async function getByID(req, res) {
  try {
    const id = req.params.id;
    const publication = await publicationController.controllerGetByID(id);
    res.render("publication/show", { publication });
  } catch (error) {
    console.error(error);
    res.render("layout", { error: "Internal server error" });
  }
}

async function create(req, res) {
  try {
    const response = await publicationController.controllerCreate(req.body);
    
    res.redirect("/publication");
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.redirect("/publication/new?error=" + error.message);
    } else {
      res.redirect("/publication/new?error=Internal+server+error");
    }
  }
}

async function remove(req, res) {
  try {
    const id = req.params.id;
    const response = await publicationController.controllerRemove(id);
    res.redirect("/publication");
  } catch (error) {
    res.render("layout", { error: "Internal server error" });
  }
}

export default {
  getByID,
  create,
  remove,
};
