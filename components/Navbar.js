import ListNavbar from "./ListNavbar";

const Navbar = () => {
    const menuList=[
        { name: "Home", link: "/" },
        { name: "Jadwal", link: "/jadwal" },
        { name: "Tugas", link: "/tugas" },
        { name: "Settings", link: "/settings" },
    ]

    return (<nav id="navbar" className="flex flex-col min-h-screen bg-blue-900 p-5">
        <section id="head">
            <h1 className="text-2xl">Ngosong Bot App</h1>
        </section>
        <hr className="my-5" />
        <ul className="flex flex-col gap-2">
            { menuList.map(menu => <ListNavbar name={menu.name} link={menu.link} />) }
        </ul>
    </nav>);
}
 
export default Navbar;