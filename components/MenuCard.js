import Link from "next/link";

const MenuCard = ({ title,link,icon }) => {
    return (
        <Link id={"menu-card-" + title} className="menu-card" href={link}>
            <a className="flex flex-col bg-blue-800 p-1 border-2 border-black rounded-md shadow-lg">
                <div className="px-8 py-10">
                    {icon}
                </div>
                <hr />
                <span className="text-lg m-auto border-solid">
                    {title}
                </span>
            </a>
        </Link>
    );
}
 
export default MenuCard;