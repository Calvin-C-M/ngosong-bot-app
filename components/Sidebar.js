import Link from "next/link";

const Sidebar = () => {
    const menuList=[
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Jadwal", link: "/jadwal" },
        { id: 3, name: "Tugas", link: "/tugas" },
        { id: 4, name: "Settings", link: "/settings" },
    ]
    
    return ( 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                <h1 className="text-2xl">Ngosong Bot App</h1>
                <div className="divider"></div>
                {
                    menuList.map(menu => <li key={menu.id}>
                        <Link href={menu.link}>
                            <a>{menu.name}</a>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
}
 
export default Sidebar;