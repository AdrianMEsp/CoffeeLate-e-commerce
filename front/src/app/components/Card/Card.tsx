/* eslint-disable @next/next/no-img-element */
// src/components/Card/Card.tsx
import React from "react"
import { IProduct } from "../../../types"
import styles from "./Card.module.css"
import Image from "next/image"

const Card: React.FC<IProduct> = ({ name, image, price, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.text}>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>${price}</span>
            </div>
            <div>
                <img src={image} alt={name} className={styles.image} />
            </div>
        </div>
    )
}

export default Card
