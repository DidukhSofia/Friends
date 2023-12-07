const pool = require('../../db');
const queries = require('./queries');

const getEvents = (req, res) => {
    pool.query(queries.getEvents, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getEventsById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getEventsById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addEvent = (req, res) => {
    const { name, date } = req.body;
    pool.query(queries.checkEventExist, [name, date], (error, results) => {
        if(results.rows.length) {
            res.send("Event already exist.")
        }

        pool.query(queries.addEvent, [name, date], (error, results) => {
            if(error) throw error;
            res.status(201).send("Client created successfully");
        })
    });
}


module.exports = {
    getEvents,
    getEventsById,
    addEvent,
};