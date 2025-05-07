import eventController from "./eventController.js";

async function getAll(req, res) {
    try {
      const events = await eventController.controllerGetAllEvents();
      res.json(events);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }

  async function getByDate(req, res) {
    try {
      const { date } = req.params;
      if (!date) {
        return res.status(400).json({ error: "No hay eventos para esta fecha" });
      }
  
      const events = await eventController.controllerGetByDate(date);
      res.json(events);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
  

export default {
  getAll,
  getByDate,
};
