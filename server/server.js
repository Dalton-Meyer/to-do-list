const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const taskRouter = require('./routes/tasks.router');
const pool = require('./modules/pool');
app.use(bodyParser.urlencoded({ extend: true }));
app.use(express.static('server/public'));

app.use('/tasks', taskRouter);

app.listen(PORT, () => {
    console.log('listening on port', PORT); 
});