import { Estado } from './estado.entity'

export interface Task {
  _id?: String
  titulo: String
  descripcion: String
  estado: Estado
  createdAt?: Date
  updatedAt?: Date
}
