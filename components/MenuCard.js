import Link from "next/link";

import { AiOutlineArrowRight } from "react-icons/ai"

const MenuCard = ({ title,link,icon,desc }) => {
    return (
        <div id={"menu-card-"+title} className="card w-96 bg-base-100 shadow-xl">
            <Link href={link} className="">
                <figure className="p-5">
                    {icon}
                </figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                <Link href={link}>
                    <button className="btn btn-primary btn-circle">
                        <AiOutlineArrowRight />
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
}
 
export default MenuCard;