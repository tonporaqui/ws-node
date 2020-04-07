const express = require('express')
const router = express.Router()

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const port = process.env.PORT_SERVER
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "API Mundopituto",
            description: "Descripcion",
            contact: {
                name: "Gaston Sepulveda",
            },
            //servers: [`http://localhost:${port}`]
        }
    },
    apis: ["./src/routers/user.js"]
}
const swaggerDocument = swaggerJsDoc(swaggerOptions)

// console.log(swaggerOptions)

// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// module.exports = router

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}
