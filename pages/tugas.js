import { useState } from "react"

import connectMongo from "../util/dbConnection"
import tugasModel from "../models/tugasModel"

import AddTugasModal from "../components/addTugasModal"

import { IoAdd } from "react-icons/io5"

const Tugas = ({ tugas }) => {
    const [showTugasModal,setShowTugasModal]=useState(false)

    let iterator=1

    const style={
        thead: "py-1 px-5",
        tbody: "bg-gray-700 border-b",
    }

    const toggleTugasModal = () => setShowTugasModal(!showTugasModal)

    return (
        <section id="tugas" className="">
            <h1 className="text-4xl font-bold mb-3">List Tugas</h1>
            <button className="bg-blue-500 flex justify-content-center items-center p-2 rounded-md" onClick={toggleTugasModal}>
                <IoAdd size={20} />
                Tugas
            </button>
            {/* {
                (showTugasModal) ? <AddTugasModal /> : ""

            } */}
            <AddTugasModal />
            <table className="table-auto text-center">
                <thead className="uppercase text-gray-700 bg-gray-50">
                    <tr>
                        <th scope="col" className={style.thead}>No</th>
                        <th scope="col" className={style.thead}>Judul</th>
                        <th scope="col" className={style.thead}>Matkul</th>
                        <th scope="col" className={style.thead}>Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    { tugas.map(data => <tr key={data.id} className={style.tbody}>
                        <td>{iterator++}</td>
                        <td>{data.judul}</td>
                        <td>{data.matkul}</td>
                        <td>{data.deadline.toString().substring(0,10)}</td>
                    </tr>) }
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