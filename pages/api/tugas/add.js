import connectMongo from "../../../util/dbConnection";
import tugasModel from "../../../models/tugasModel";

export default async function addTugas(req,res) {
    try {
        // console.log('Connecting to the database')
        await connectMongo()
        // console.log('Connected to the database!')

        // console.log('Fetching data')
        const data=await tugasModel.create(req.body)
        // console.log('Data has been fetched')

        res.json({ data })
    } catch(err) {
        console.log(err)
        res.json({ err })
    }
}