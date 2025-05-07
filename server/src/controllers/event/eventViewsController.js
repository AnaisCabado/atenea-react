import eventController from "./eventController.js";

async function getByID(req, res) {
  try {
    const id = req.params.id;
    const event = await eventController.controllerGetByID(id);
    res.render("event/show", { event });
  } catch (error) {
    console.error(error);
    res.render("layout", { error: "Internal server error" });
  }
}

async function create(req, res) {
  try {
    const response = await eventController.controllerCreate(req.body);
    
    res.redirect("/event");
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.redirect("/event/new?error=" + error.message);
    } else {
      res.redirect("/event/new?error=Internal+server+error");
    }
  }
}

async function remove(req, res) {
  try {
    const id = req.params.id;
    const response = await eventController.controllerRemove(id);
    res.redirect("/event");
  } catch (error) {
    res.render("layout", { error: "Internal server error" });
  }
}

export default {
  getByID,
  create,
  remove,
};
