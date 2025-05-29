import eventController from "./eventController.js";

async function getAll(req, res) {
  try {
    const events = await eventController.controllerGetAllEvents();
    res.json(events);
  } catch (error) {
    console.error('Error en getAll:', error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getByDate(req, res) {
  try {
    const { date } = req.params;
    
    console.log('Fecha recibida:', date);
    
    if (!date) {
      return res.status(400).json({ error: "Fecha requerida" });
    }
    
    // Validar formato de fecha
    if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return res.status(400).json({ error: "Formato de fecha inválido. Use YYYY-MM-DD" });
    }
    
    const events = await eventController.controllerGetByDate(date);
    console.log('Eventos encontrados:', events?.length || 0);
    
    if (!events || events.length === 0) {
      return res.json([]); // Devolver array vacío en lugar de error
    }
    
    // OPCIÓN A: Devolver eventos completos (recomendado)
    res.json(events);
    
    // OPCIÓN B: Si necesitas las publicaciones, devolverlas pero con referencia al evento
    // res.json(events.map(event => ({
    //   ...event.publication,
    //   event_id: event.id,
    //   event_date: event.date
    // })));
    
  } catch (error) {
    console.error('Error en getByDate:', error);
    console.error('Stack:', error.stack);
    res.status(500).json({ 
      error: "Server error",
      message: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

export default {
  getAll,
  getByDate,
};