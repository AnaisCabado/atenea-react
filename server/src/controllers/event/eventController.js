import eventModel from "../../models/eventModel.js";
import publicationModel from '../../models/publicationModel.js';
import { Op } from "sequelize";

// CALENDAR
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';

dayjs.extend(utc);
dayjs.extend(timezone);

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
  try {
    console.log("Fecha recibida:", date);

    const events = await eventModel.findAll({
      where: {
        date_time: {
          [Op.gte]: start,
          [Op.lte]: end,
        },
      },
      order: [["date_time", "ASC"]],
    });

    return events;
  } catch (error) {
    console.error("Error en controllerGetByDate:", error);
    throw error;
  }
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
