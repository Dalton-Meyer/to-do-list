//grab the pool
const pool = require('../modules/pool.js');
//set up express
const express = require('express');
//access the router function
const taskRouter = express.Router();

const moment = require('moment');

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
    const sDate = moment();
    const eDate = todo.eDate;
    const task = todo.task;
    const done = todo.done;

    if ((sDate !== undefined) || (eDate !== null) || (task !== undefined)) {
        const queryText = `INSERT INTO to_do (date_start, date_end, task)
        VALUES ($1, $2, $3)`
        pool.query(queryText , [sDate, eDate, task]).then(() => { res.sendStatus(201)}).catch(() => {res.sendStatus(500)});
    }else{ res.sendStatus(400)};
});

taskRouter.put('/:id', (req, res) => {
    let id = req.params.id;
    console.log(`updating task with id of ${id}`);
    const queryText = "UPDATE to_do SET done = 'Finished' WHERE id = $1"
    pool.query(queryText, [id]).then(() => {res.sendStatus(202)}).catch(() => {res.sendStatus(500)});
});

taskRouter.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log(`Deleting task with id of ${id}`);
    const queryText = "DELETE from to_do WHERE id=$1"
    pool.query(queryText, [id]).then(() => {res.sendStatus (204)}).catch(() => {res.sendStatus(500)});
});


module.exports = taskRouter;