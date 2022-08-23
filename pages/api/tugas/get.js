import connectMongo from "../../../util/dbConnection";
import tugasModel from "../../../models/tugasModel";

export default async function getTugas(req,res) {
    try {
        // console.log('Connecting to the database')
        await connectMongo()
        // console.log('Connected to the database!')

        // console.log('Fetching data')
        const data=await tugasModel.find({})
        // console.log('Data has been fetched')

        res.json({ data })
    } catch(err) {
        console.log(err)
        res.json({ err })
    }
}