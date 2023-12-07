const pool = require('../../db');
const queries = require('./queries');

const getFriends = (req, res) => {
    pool.query(queries.getFriends, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getFriendsById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getFriendsById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}


const getFreeFriends = (req, res) => {
    const date = req.body.date
    console.log("Received date:", date);
    pool.query(queries.getFreeFriends, [date], 
        (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);}
        )
}



const addFriend = (req, res) => {
    const { name, phone } = req.body;
    pool.query(queries.checkFriendExist, [name, phone], (error, results) => {
        if(results.rows.length) {
            res.send("Friend already exist.")
        }

        pool.query(queries.addFriend, [name, phone], (error, results) => {
            if(error) throw error;
            res.status(201).send("Student created successfully");
        })
    });
}


module.exports = {
    getFriends,
    getFriendsById,
    addFriend, 
    getFreeFriends,
};