const mongoose = require('mongoose')

const { MONGODB_HOST, MONGODB_PORT, MONGODB_DATABASE } = process.env;

const MONGODB_URI = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}).then(db => console.log("DB is connected "))
.catch(err => console.error(err));