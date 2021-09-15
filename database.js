const mongoose = require('mongoose');
const {config}  = require('./config/index');

mongoose.connect(config.dburi,{
    useNewUrlParser: true
})
.then(db => console.log("Database is connected"))
.catch(err => console.log(err));

