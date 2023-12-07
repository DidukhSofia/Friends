const getEvents = "SELECT * FROM events";
const getEventsById = "SELECT * FROM events WHERE event_id = $1";
const checkEventExist = "SELECT * FROM events WHERE name = $1 AND date = $2";
const addEvent = "INSERT INTO clients (name, date) VALUES ($1, $2)";


module.exports = {
    getEvents,
    getEventsById,
    checkEventExist,
    addEvent
};