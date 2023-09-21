import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>Footer......</div>
            <div className={styles.social}>
                <Image src="/1.png" height={15} width={15} alt="" className={styles.icon} />
                <Image src="/2.png" height={15} width={15} alt="" className={styles.icon} />
                <Image src="/3.png" height={15} width={15} alt="" className={styles.icon} />
                <Image src="/4.png" height={15} width={15} alt="" className={styles.icon} />
            </div>
        </div>
    );
};

export default Footer;
