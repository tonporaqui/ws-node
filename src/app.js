const express = require('express')
const port = process.env.PORT_SERVER

const indexRouter = require('./routers/index')
const userRouter = require('./routers/user')
const perfilRouter = require('./routers/perfil');
const oficioRouter = require('./routers/oficio');

require('./db/db')

const app = express()

app.use(express.json())
app.use(indexRouter)
app.use(userRouter)
app.use(perfilRouter)
app.use(oficioRouter)


app.listen(port, () => {
    console.log(`Server corriendo en el puerto: ${port}`)
})