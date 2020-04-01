const mongoose = require('mongoose')

const { MONGODB_HOST, MONGODB_USER, MONGODB_PASS, MONGODB_CLUSTER, MONGODB_DATABASE, MONGODB_SECURITY,  MONGODB_PORT } = process.env;
const MONGODB_URI = `${MONGODB_HOST}${MONGODB_USER}:${MONGODB_PASS}${MONGODB_CLUSTER}${MONGODB_DATABASE}${MONGODB_SECURITY}`;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}).then(db => console.log("DB is connected "))
.catch(err => console.error(err));