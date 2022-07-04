import pkg from 'mongoose'
const { Schema, model } = pkg

const roleSchema = new Schema({
    name: String
},{
    versionKey: false
})

export default model('Role', roleSchema)