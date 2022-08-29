import connectMongo from "../../../util/dbConnection";
import jadwalModel from "../../../models/jadwalModel";

export default async function deleteJadwal(req,res) {
    try {
        await connectMongo()

        const data=await jadwalModel.deleteOne(req.body)
        
        res.json({ data })

    } catch(err) {
        console.log(err)
        res.json({ err })
    }
}