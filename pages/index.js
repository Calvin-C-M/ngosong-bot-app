import Head from 'next/head'
import Image from 'next/image'
import MenuCard from '../components/MenuCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  const cardMenu=[
    { title: "", link: "" }
  ]

  return (
    <div id="home" className="text-3xl font-bold underline">
      <div id="menus" className="">
        <MenuCard title="Test" link="/" />
      </div>
    </div>
  )
}
