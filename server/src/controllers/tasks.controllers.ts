import { NextFunction, Request, Response } from 'express'
import { createTask, findAllTasks } from '../services/tasks.services'

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await findAllTasks()
    res.status(200).json(tasks)
  } catch (error) {
    next(error)
  }
}

const createOneTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let task = req.body
    const newTask = await createTask(task)
    res.status(201).json(newTask)
  } catch (error) {
    next(error)
  }
}

export { findAll, createOneTask }
