import connectMongo from "../../../util/dbConnection";
import jadwalModel from "../../../models/jadwalModel";

export default async function addJadwal(req,res) {
    try {
        await connectMongo()

        const data=await jadwalModel.create(req.body)
        
        res.json({ data })

    } catch(err) {
        console.log(err)
        res.json({ err })
    }
}