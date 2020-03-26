const express = require('express')
const port = process.env.PORT_SERVER

const userRouter = require('./routers/user')
const perfilRouter = require('./routers/perfil');


require('./db/db')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(perfilRouter)


app.listen(port, () => {
    console.log(`Server corriendo en el puerto: ${port}`)
})