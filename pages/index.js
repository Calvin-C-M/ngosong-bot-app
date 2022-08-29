import Head from 'next/head'
import Image from 'next/image'
import MenuCard from '../components/MenuCard'
// import styles from '../styles/Home.module.css'

import { BiTask } from 'react-icons/bi'
import { AiOutlineSetting, AiOutlineSchedule } from 'react-icons/ai'

export default function Home() {
  const iconClass="m-auto text-7xl"

  const cardMenu=[
    { title: "Jadwal", link: "/jadwal", icon: <AiOutlineSchedule className={iconClass} />, desc: "Mau ngeliat jadwal sekarang?" },
    { title: "Tugas", link: "/tugas", icon: <BiTask className={iconClass} />, desc: "Lupa tugasnya yang mana? Yuk liat sini" },
    { title: "Settings", link: "/settings", icon: <AiOutlineSetting className={iconClass} />, desc: "Kita setting discord ngosong bot" }
  ]

  return (
    <div id="home" className="flex flex-col">
      <h1 className='text-4xl font-bold'>Halo Sobat Ngosong!</h1>
      <div id="menus" className='flex flex-col gap-3 mt-3'>
        <h2 className='text-3xl font-bold'>Menu List</h2>
        <div id="menulist" className="grid grid-cols-3 gap-4">
          { cardMenu.map(card => <MenuCard title={card.title} link={card.link} icon={card.icon} desc={card.desc} />) }
        </div>
      </div>
    </div>
  )
}
