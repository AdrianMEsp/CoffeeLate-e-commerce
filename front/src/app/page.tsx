import React from "react"
import styles from "./Page.module.css"
import CardList from "./components/Card/CardList"


import img from "../assets/bolsaCafe (3).png"
import img2 from "../assets/bolsaCafe (5).png"


import Image from "next/image"


export default function Home() {

    return (
        <main>
            <h1 className={styles.text}>Lista de productos</h1>
            <div>
                <CardList/>
                {/* <Image src={img} alt="imagen"></Image>
                <Image src={img2} alt="imagen"></Image> */}
            </div>
        </main>
    )
}