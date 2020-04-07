const express = require('express')

const port = process.env.PORT_SERVER

const indexRouter = require('./routers/index')
const swaggerDocs = require('../swagger')
const userRouter = require('./routers/user')
const perfilRouter = require('./routers/perfil');
const oficioRouter = require('./routers/oficio');

require('./db/db')

const app = express()

swaggerDocs(app)
app.use(express.json())
app.use(indexRouter)
app.use(userRouter)
app.use(perfilRouter)
app.use(oficioRouter)


app.listen(port, () => {
    console.log(`Server corriendo en el puerto: ${port}`)
})