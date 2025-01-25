import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel Free to Contact Me!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src = "/assets/Contact/email.png" alt ="My Email" />
                <a href= "mailto:shaun.akash@gmail.com">shaun.akash@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src = "/assets/Contact/git.png" alt ="My GitHub" />
                <a href= "https://github.com/Psideryman">Psideryman</a>
            </li>
            <li className={styles.link}>
                <img src = "/assets/Contact/resumetwo.png" alt ="My Resume" />
                <a href= "https://uottawa-my.sharepoint.com/personal/sfran112_uottawa_ca/_layouts/15/guestaccess.aspx?share=EYI-PmELhk9IowoHQqqZ8rsBCtQI2fDOy9EXyLLeuAFYNQ&e=brkmlT">My Resume</a>
            </li>
            <li className={styles.link}>
                <img src = "/assets/Contact/linkedIn.png" alt ="My LinkedIn" />
                <a href= "https://www.linkedin.com/in/shaun-francis-555822228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">Shaun Francis</a>
            </li>
        </ul>
    </footer>;
};