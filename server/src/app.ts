import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { tasksRouter } from './routes/tasks.routes'
import swaggerJSdoc, { SwaggerDefinition } from 'swagger-jsdoc'
import swaggerUI, { SwaggerOptions } from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

const swaggerDefinition = {
  definition: {
    openapi: '3.0.0.',
    info: {
      title: 'ToDo Api',
      version: '1.0.0',
      description: 'Api para ToDo app.',
    },

    servers: [{ url: 'http://172.28.247.51:4000/api/v1' }],
  },
  apis: ['dist/routes/tasks.routes.js'],
}

const swaggerSpecs = swaggerJSDoc(swaggerDefinition)
const app = express()

//MIDDLEWARES

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

//ROUTES
app.use(
  '/api/v1/docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerSpecs, { explorer: true }),
)
app.use(tasksRouter)

export default app
