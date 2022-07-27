import Link from "next/link";

const ListNavbar = ({ name,link }) => {
    return (<li className="rounded-md p-1 hover:bg-blue-300 hover:text-blue-900 hover:cursor-pointer">
        <Link href={link}>
            <a className="block text-lg">
                {name}
            </a>
        </Link>
    </li>);
}
 
export default ListNavbar;