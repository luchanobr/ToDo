import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const { Schema } = mongoose

mongoosePaginate.paginate.options = {
  lean: true,
  limit: 20,
}
const estadoSchema = new Schema({ key: Number, descripcion: String })

const tasksSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    estado: {
      type: estadoSchema,
      required: true,
    },
  },
  { timestamps: true, toObject: {} },
)

tasksSchema.plugin(mongoosePaginate)

const tasksModel = mongoose.model('tasks', tasksSchema)

export { tasksModel }
