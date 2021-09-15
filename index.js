const express = require('express');
const app = express();
const {config} = require('./config/index');
var cors = require('cors')

//Rutas
const tasksApi = require('./routes/tasks.js');

app.use(express.json());
app.use(cors());

tasksApi(app);

app.listen(config.port, function(){
    console.log('Listening on Port ' + config.port);
});