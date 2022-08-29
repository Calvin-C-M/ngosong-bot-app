import jadwalModel from "../models/jadwalModel"
import connectMongo from "../util/dbConnection"

import CURRENT_SEMESTER from "../constants/currentSemester"
import KELAS from "../constants/kelas"
import HARI from "../constants/hari"

import { IoAdd } from "react-icons/io5"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"

import { useState } from "react"

const Jadwal = ({ jadwal }) => {
    // View Hooks
    const [kelasView,setKelasView]=useState("A")
    
    // Jadwal form hooks
    const [matkul,setMatkul]=useState("")
    const [hari,setHari]=useState(HARI[0])
    const [jamMulai,setJamMulai]=useState("")
    const [jamSelesai,setJamSelesai]=useState("")
    const [kelas,setKelas]=useState(KELAS[0])

    // Iterator variables
    let iteratorA=1
    let iteratorB=1

    // Filter Jadwal array
    const jadwalKelasA=jadwal.filter(jdwl => jdwl.kelas === "A")
    const jadwalKelasB=jadwal.filter(jdwl => jdwl.kelas === "B")

    const handleSubmitJadwal = async () => {
        const res=await fetch("./api/jadwal/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                matkul: matkul,
                hari: hari,
                jam: jamMulai.replace(':','.') + '-' + jamSelesai.replace(':','.'),
                kelas: kelas,
                semester: CURRENT_SEMESTER
            })
        })

        const data=await res.json()
        console.log(data)

        if(data.hasOwnProperty('data')) {
            window.location.reload()
        } else {

        }
    }

    return (
        <section id="jadwal" className="p-1">
            <h1 className="text-4xl font-bold mb-3">Jadwal Kelas</h1>
            <div className="mb-3 flex justify-between">
                <div id="add-jadwal">
                    <label for="add-jadwal-modal" className="btn btn-success">
                        <IoAdd />
                        Tambah
                    </label>
                    <input type="checkbox" id="add-jadwal-modal" className="modal-toggle" />
                    <div id="add-jadwal-box" className="modal">
                        <div className="modal-box">
                            <label for="add-jadwal-modal" className="btn btn-sm btn-circle absolute right-2 top-2">x</label>
                            <h3 className="font-bold text-lg">Tambah Jadwal</h3>
                            <div className="divider"></div>
                            <div>
                                <div className="mb-3">
                                    <label for="matkul" className="label">Mata Kuliah</label>
                                    <input 
                                        id="matkul"
                                        type="text"
                                        name="matkul"
                                        className="input input-info input-bordered w-full max-w-xs"
                                        autoComplete="off"
                                        onChange={e => setMatkul(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="hari" className="label">Hari</label>
                                    <select className="select select-info" value={hari} onChange={e => setHari(e.target.value)}>
                                        {
                                            HARI.map(hari => <option value={hari}>
                                                {hari}
                                            </option>)
                                        }
                                    </select>
                                </div>
                                <div className="mb-3 flex gap-3">
                                    <div>
                                        <label for="jam-mulai" className="label">Jam Mulai</label>
                                        <input 
                                            id="jam-mulai"
                                            type="time"
                                            name="jamMulai"
                                            className="input input-info input-bordered"
                                            onChange={e => setJamMulai(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label for="jam-keluar" className="label">Jam Keluar</label>
                                        <input 
                                            id="jam-keluar"
                                            type="time"
                                            name="jamKeluar"
                                            className="input input-info input-bordered" 
                                            onChange={e => setJamSelesai(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="kelas" className="label">Kelas</label>
                                    <select className="select select-info" value={kelas} onChange={e => setKelas(e.target.value)}>
                                        {
                                            KELAS.map(kls => <option value={kls}>
                                                {kls}
                                            </option>)
                                        }
                                    </select>
                                </div>
                                <button className="btn btn-info" onClick={handleSubmitJadwal}>Tambah</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <select className="select select-info" value={kelasView} onChange={e => setKelasView(e.target.value)}>
                        {
                            KELAS.map(kelas => <option value={kelas}>
                                {kelas}
                            </option>)
                        }
                    </select>
                </div>
            </div>
            {
                (kelasView === "A") ? <table id="kelas-a" className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Mata Kuliah</th>
                            <th>Hari</th>
                            <th>Jam</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jadwalKelasA.map(jdwl => <tr key={jdwl.id}>
                                <td>{iteratorA++}</td>
                                <td>{jdwl.matkul}</td>
                                <td>{jdwl.hari}</td>
                                <td>{jdwl.jam}</td>
                                <td className="flex gap-3">
                                    <button className="btn btn-warning">
                                        <AiOutlineEdit />
                                    </button>
                                    <button className="btn btn-error">
                                        <AiOutlineDelete />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                : <table id="kelas-b" className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Mata Kuliah</th>
                            <th>Hari</th>
                            <th>Jam</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jadwalKelasB.map(jdwl => <tr key={jdwl.id}>
                                <td>{iteratorB++}</td>
                                <td>{jdwl.matkul}</td>
                                <td>{jdwl.hari}</td>
                                <td>{jdwl.jam}</td>
                                <td className="flex gap-3">
                                    <button className="btn btn-warning">
                                        <AiOutlineEdit />
                                    </button>
                                    <button className="btn btn-error">
                                        <AiOutlineDelete />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </section>
    );
}

export const getServerSideProps = async () => {
    try {
        await connectMongo()

        const res=await jadwalModel.find({ semester: CURRENT_SEMESTER })

        return {
            props: {
                jadwal: JSON.parse(JSON.stringify(res))
            }
        }

    } catch(err) {
        console.log(err)
        return {
            notFound: true
        }
    }
}
 
export default Jadwal;