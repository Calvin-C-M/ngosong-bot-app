const Tugas = () => {
    const testData=[
        { id: 1, title: "test1", matkul: "test1", deadline: "2020-02-02" },
        { id: 2, title: "test2", matkul: "test2", deadline: "2022-03-03" },
    ]

    const iterator=1

    const style={
        thead: "py-1 px-5",
        tbody: "bg-gray-700 border-b"
    }

    return (
        <section id="tugas" className="">
            <h1 className="text-4xl font-bold mb-3">List Tugas</h1>
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
                    { testData.map(data => <tr key={data.id} className={style.tbody}>
                        <td>{iterator++}</td>
                        <td>{data.title}</td>
                        <td>{data.matkul}</td>
                        <td>{data.deadline}</td>
                    </tr>) }
                </tbody>
            </table>
        </section>
    );
}
 
export default Tugas;