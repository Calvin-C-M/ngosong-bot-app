import { Schema,model,models } from "mongoose";

const schema=new Schema({
    judul: { type: String, required: true },
    matkul: { type: String, required: true },
    kelas: { type: String, required: true },
    deadline: { type: Date, required: true },
})

const tugasModel=models.tugasModel || model('tugasModel',schema)

export default tugasModel;