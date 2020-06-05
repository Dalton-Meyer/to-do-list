//grab the pool
const pool = require('../modules/pool.js');
//set up express
const express = require('express');
//access the router function
const taskRouter = express.Router();

taskRouter.get('/', (req, res) => {
    let queryText = "SELECT * FROM to_do"
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error making query: ${queryText}`);
        res.sendStatus(500);
    });
});

taskRouter.post('/', (req, res) => {
    const todo = req.body;
    const sDate = todo.date_start;
    const eDate = todo.date_end;
    const task = todo.task;
    const done = todo.done;

    if ((sDate !== undefined) || (eDate !== undefined) || (task !== undefined)) {
        const queryText = `INSERT INTO to_do (date_start, date_end, task)
        VALUES ($1, $2, $3)`
        pool.query(queryText , [sDate, eDate, task]).then(() => { res.sendStatus(201)}).catch(() => {res.sendStatus(500)});
    }else{ res.sendStatus(400)};
});

module.exports = taskRouter;