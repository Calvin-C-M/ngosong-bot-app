import connectMongo from "../../../util/dbConnection";
import tugasModel from "../../../models/tugasModel";

export default async function deleteTugas(req,res) {
    try {
        await connectMongo()

        const data = await tugasModel.deleteOne(req.body)

        res.json({ data })

    } catch(err) {
        console.log(err)
        res.json({ err })
    }
}