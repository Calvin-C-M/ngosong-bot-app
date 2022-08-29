import { Schema,model,models } from "mongoose";

const schema=new Schema({
    matkul: { type: String, required: true },
    jam: { type: String, required: true },
    hari: { type: String, required: true },
    kelas: { type: String, required: true },
    semester: { type: Number, required: true }
})

const jadwalModel=models.jadwalModel || model("jadwalModel",schema)

export default jadwalModel;