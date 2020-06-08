const express = require('express');
const moment = require('moment');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const taskRouter = require('./routes/tasks.router');
const pool = require('./modules/pool');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

app.use('/tasks', taskRouter);

app.listen(PORT, () => {
    console.log('listening on port', PORT); 
});
// app.get("/dbtest", (req, res) => {
//     // very simple DB test, just to make sure
//     // that our database is connected correctly
//     // GET http://localhost:5000/dbtest
//     pool
//          .query("Select 1;")
//          .then(() => res.send("Database Connected Successfully!"))
//          .catch((error) => res.send(`Error Connecting to Database: ${error}`));
// });