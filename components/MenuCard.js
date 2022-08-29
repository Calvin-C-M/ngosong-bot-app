import Link from "next/link";

import { AiOutlineArrowRight } from "react-icons/ai"

const MenuCard = ({ title,link,icon,desc }) => {
    return (
        <div id={"menu-card-"+title} class="card w-96 bg-base-100 shadow-xl">
            <Link href={link} className="">
                <figure className="p-5">
                    {icon}
                </figure>
            </Link>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>{desc}</p>
                <div class="card-actions justify-end">
                <Link href={link}>
                    <button class="btn btn-primary btn-circle">
                        <AiOutlineArrowRight />
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
}
 
export default MenuCard;