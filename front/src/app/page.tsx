import React from "react"
import styles from "./Page.module.css"
import CardList from "./components/Card/CardList"

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