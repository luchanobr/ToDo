import { tasksModel } from '../models/tasks.model'
import { Task } from '../models/tasks.entity'

const findAllTasks = async () => {
  try {
    let paginateTasks = await tasksModel.paginate(
      {},
      { lean: true, sort: { createdAt: 1 } },
    )
    let parseDocs = paginateTasks.docs.map((task) => {
      delete task._id
      delete task.__v
      delete task.estado._id
      return task
    })
    let parseTasks = {
      ...paginateTasks,
      docs: parseDocs,
    }

    return parseTasks
  } catch (error) {
    throw error
  }
}

const createTask = async (task: Task) => {
  try {
    let newTask = await tasksModel.create(task)
    return newTask
  } catch (error) {
    throw error
  }
}

export { findAllTasks, createTask }
