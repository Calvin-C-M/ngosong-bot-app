import { useState } from "react"

import connectMongo from "../util/dbConnection"
import tugasModel from "../models/tugasModel"

import { IoAdd } from "react-icons/io5"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import TugasFormModal from "../components/TugasFormModal"

const Tugas = ({ tugas }) => {
    const TANGGAL={
        MIN: 1,
        MAX: 31,
        array: []
    }

    const BULAN={
        MIN: 1,
        MAX: 12,
        array: []
    }

    const TAHUN={
        MIN: 2020,
        MAX: 2030,
        array: []
    }

    const KELAS=[
        "A","B"
    ]

    for(let i=TANGGAL.MIN; i<=TANGGAL.MAX; i++) TANGGAL.array.push(i)
    for(let i=BULAN.MIN; i<=BULAN.MAX; i++) BULAN.array.push(i)
    for(let i=TAHUN.MIN; i<=TAHUN.MAX; i++) TAHUN.array.push(i)

    const [judul,setJudul]=useState("")
    const [matkul,setMatkul]=useState("")
    const [kelas,setKelas]=useState("A")
    const [tanggal,setTanggal]=useState(1)
    const [bulan,setBulan]=useState(1)
    const [tahun,setTahun]=useState(2022)

    const handleSubmitTugas = async () => {
        const deadline = new Date()
        deadline.setDate(tanggal)
        deadline.setMonth(bulan-1)
        deadline.setYear(tahun)

        const res=await fetch('./api/tugas/add', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                judul: judul,
                matkul: matkul,
                kelas: kelas,
                deadline: deadline.toISOString().substring(0,10)
            })
        })
        
        const data=await res.json()
        console.log(data)

        if(data.hasOwnProperty('data')) {
            window.location.reload()
        } else {

        }
    }

    const handleDeleteTugas = async (jdl,mtkl,kls) => {
        const res=await fetch('./api/tugas/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                judul: jdl,
                matkul: mtkl,
                kelas: kls
            })
        })

        const data=await res.json()
        console.log(data)

        if(data.hasOwnProperty('data')) {
            window.location.reload()
        } else {

        }
    }

    let iterator=1

    const sizes={
        tugasButton: 20
    }

    return (
        <section id="tugas" className="">
            <h1 className="text-4xl font-bold mb-3">List Tugas</h1>
            <label for="add-tugas-modal" className="btn btn-success modal-button mb-3">
                <p className="flex gap-1">
                    <IoAdd />
                    Tugas
                </p>
            </label>
            <input type="checkbox" id="add-tugas-modal" className="modal-toggle" />
            <div id="add-tugas" className="modal">
                <div className="modal-box">
                    <label for="add-tugas-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Tambah Tugas</h3>
                    <div className="divider"></div>
                    <div>
                        <div className="mb-3">
                            <label for="judul" className="label">Judul</label>
                            <input 
                                id="judul"
                                type="text"
                                name="judul"
                                className="input input-info input-bordered w-full max-w-xs"
                                autoComplete="off"
                                onChange={e => setJudul(e.target.value)}
                            />
                        </div>
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
                            <label for="kelas" className="label">Kelas</label>
                            <select className="select select-info" value={kelas} onChange={e => setKelas(e.target.value)}>
                                {
                                    KELAS.map(kls => <option value={kls}>
                                        {kls}
                                    </option>)
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="deadline" className="label">Deadline</label>
                            <div id="options" className="flex gap-5">
                                <select className="select select-info" value={tanggal} onChange={e => setTanggal(e.target.value)}>
                                    {
                                        TANGGAL.array.map(tgl => <option value={tgl}>
                                            {tgl}
                                        </option>)
                                    }
                                </select>
                                <select className="select select-info" value={bulan} onChange={e => setBulan(e.target.value)}>
                                    {
                                        BULAN.array.map(bln => <option value={bln}>
                                            {bln}
                                        </option>)
                                    }
                                </select>
                                <select className="select select-info" value={tahun} onChange={e => setTahun(e.target.value)}>
                                    {
                                        TAHUN.array.map(thn => <option value={thn}>
                                            {thn}
                                        </option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <button className="btn btn-outline btn-info" onClick={handleSubmitTugas}>Tambah</button>
                    </div>
                </div>
            </div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Matkul</th>
                        <th>Kelas</th>
                        <th>Deadline</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tugas.map(data => <tr key={data.id}>
                            <td>{iterator++}</td>
                            <td>{data.judul}</td>
                            <td>{data.matkul}</td>
                            <td>{data.kelas}</td>
                            <td>{data.deadline.toString().substring(0,10)}</td>
                            <td className="flex gap-3">
                                <label for={"add-tugas-"+ data.judul +"-modal"} className="btn btn-success modal-button mb-3">
                                    <p className="flex gap-1">
                                        <AiOutlineEdit />
                                    </p>
                                </label>
                                <input type="checkbox" id={"edit-tugas-"+ data.judul +"-modal"} className="modal-toggle" />
                                <button className="delete-tugas btn btn-error" onClick={() => handleDeleteTugas(data.judul,data.matkul,data.kelas)}>
                                    <AiOutlineDelete size={sizes.tugasButton} />
                                </button>
                            </td>
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