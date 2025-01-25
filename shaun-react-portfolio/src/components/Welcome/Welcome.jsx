import React from "react";
import Icon from '/assets/welcome/Shaun Logo.png';

import styles from "./Welcome.module.css";

export const Welcome = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Shaun Francis</h1>
            <p className={styles.description}>I'm a recent Computer Science graduate who loves to code! Please reach out if you'd like to learn more!</p>
            <a href="mailto:shaun.akash@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={Icon} alt="My Logo" className={styles.iconimg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    );
};