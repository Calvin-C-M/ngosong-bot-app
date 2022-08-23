import ListNavbar from "./ListNavbar";

const Sidebar = () => {
    const menuList=[
        { name: "Home", link: "/" },
        { name: "Jadwal", link: "/jadwal" },
        { name: "Tugas", link: "/tugas" },
        { name: "Settings", link: "/settings" },
    ]
    
    return ( 
        <div className="drawer-side">
            <label for="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
            </ul>
        </div>
    );
}
 
export default Sidebar;