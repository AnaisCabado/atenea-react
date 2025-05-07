import eventModel from "../../models/eventModel.js";
import publicationModel from '../../models/publicationModel.js';
import { Op } from "sequelize";

async function controllerGetAllEvents() {
    const events = await publicationModel.findAll({
      where: {
        category: "event"
      },
      order: [["created_at", "DESC"]]
    });
    return events;
  }
  
async function controllerGetByDate(date) {
  const events = await eventModel.findAll({
    where: {
      date_time: {
        [Op.gte]: new Date(`${date}T00:00:00.000Z`),
        [Op.lt]: new Date(`${date}T23:59:59.999Z`)
      }
    },
    order: [["date_time", "ASC"]]
  });
  return events;
}
  

async function controllerCreate(data) { 
  const result = await eventModel.create(data);
  return result;
}

async function controllerRemove(id) {
  const result = await eventModel.destroy({
    where: {
      event_id: id,
    },
  });
  return result;
}

export default {
  controllerGetAllEvents,
  controllerGetByDate,
  controllerCreate,
  controllerRemove,
};
