import express from 'express'
import { createOneTask, findAll } from '../controllers/tasks.controllers'
import dotenv from 'dotenv'

dotenv.config()
const tasksRouter = express.Router()

const url = `${process.env.API_BASE_URL}/tasks`

/**
 * @swagger
 *  components:
 *    schemas:
 *      estado:
 *        type: object
 *        required:
 *          - key
 *          - descripcion
 *        properties:
 *          key:
 *            type: integer
 *            minimun: 0
 *            maximum: 4
 *          descripcion:
 *            type: string
 *            enum: [ completada, urgente, en proceso, suspendida, pendiente]
 *      task:
 *        type: object
 *        required:
 *          - titulo
 *          - descripcion
 *          - estado
 *        properties:
 *          id:
 *            type: string
 *            format: objectId
 *            description: MongoDB ID
 *            readOnly: true
 *          titulo:
 *            type: string
 *          descripcion:
 *            type: string
 *          estado:
 *            $ref: '#/components/schemas/estado'
 *          createdAt:
 *            type: string
 *            format: date-time
 *            readOnly: true
 *          updatedAt:
 *            type: string
 *            format: date-time
 *            readOnly: true
 *      tasksPaginadas:
 *          type: object
 *          properties:
 *              docs:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/task'
 *              totalDocs:
 *                  type: integer
 *              limit:
 *                  type: integer
 *              hasPrevPage:
 *                  type: boolean
 *              hasNextPage:
 *                  type: boolean
 *              page:
 *                  type: integer
 *              totalPages:
 *                  type: integer
 *              offset:
 *                  type: integer
 *              prevPage:
 *                  type: integer
 *              nextPage:
 *                  type: integer
 *              PagingCounter:
 *                  type: integer
 * */

/**
 * @swagger
 *  tags:
 *    name: Tasks
 *    description: API para manejar las Tasks
 * */

/**
 * @swagger
 *  paths:
 *   /tasks:
 *     get:
 *      summary: Devuele hasta 20 Tasks paginadas
 *      tags: [Tasks]
 *      responses:
 *          '200':
 *              description: Ok
 *              content:
 *                   application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/tasksPaginadas'
 *
 * */
tasksRouter.get(url, findAll)

/**
 * @swagger
 *  paths:
 *      /tasks:
 *          post:
 *              summary: Crea una neuva task
 *              tags: [Tasks]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/task'
 *                          example:
 *                              titulo: Hacer las compras en el super
 *                              descripcion: Comprar huevos, leche  y fideos
 *                              estado: { key: 4, descripcion: pendiente }
 *
 *              responses:
 *                  '201':
 *                      description: Task created
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/task'
 *                              example:
 *                                  titulo: Hacer las compras en el super
 *                                  descripcion: Comprar huevos, leche  y fideos
 *                                  estado: { key: 4, descripcion: pendiente }
 *
 * */
tasksRouter.post(url, createOneTask)

export { tasksRouter }
