import app from './app.js'
import './database.js'
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'

app.listen(4000)

console.log('server listen on port',4000)

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'RL match tracker API',
            description: 'A REST API build with express, mongoose and mongodb with jwt auth and password encryption'
        }
    },
    apis: ['src/routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))