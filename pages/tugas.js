import connectMongo from "../util/dbConnection"
import tugasModel from "../models/tugasModel"

import AddTugasModal from "../components/addTugasModal"

import { IoAdd } from "react-icons/io5"

const Tugas = ({ tugas }) => {
    let iterator=1

    const style={
        thead: "py-1 px-5",
        tbody: "bg-gray-700 border-b",
    }

    return (
        <section id="tugas" className="">
            <h1 className="text-4xl font-bold mb-3">List Tugas</h1>
            <label for="my-modal-3" class="btn modal-button">open modal</label>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <AddTugasModal />
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Matkul</th>
                        <th>Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tugas.map(data => <tr key={data.id}>
                            <td>{iterator++}</td>
                            <td>{data.judul}</td>
                            <td>{data.matkul}</td>
                            <td>{data.deadline.toString().substring(0,10)}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </section>
    );
}

export const getServerSideProps = async () => {
    try {
        await connectMongo()

        const today=new Date()

        const data=await tugasModel.find({ deadline: { $gte: today } })

        return {
            props: {
                tugas: JSON.parse(JSON.stringify(data))
            }
        }
    } catch(err) {
        console.log(err)
        return {
            notFound: true
        }
    }
}
 
export default Tugas;