import React from "react";
import Dice from '/assets/About/DiceSymbol.png';
import Cursor from '/assets/About/pointer.png';
import Server from '/assets/About/server.png';
import Webpage from '/assets/About/webpage.png';

import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}><img src={Dice} alt="Dice Logo" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={Cursor} alt="Cursor Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Computer Scientist</h3>
                        <p>
                            I'm a recent computer science graduate from the University of Ottawa!
                            I have experience in many different programming concepts and languages and am always excited and eager to learn new and more things!
                            I have experience in multiple research environments; including Artificial Intelligence Labs, and Cyber Security Labs!
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={Server} alt="Server Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Student</h3>
                        <p>
                            I'm currently pursing a masters program, and have recently applied to many schools, mostly within Canada, but also internationally! 
                            I hope to continue building my academic and professional skillsets.
                            Currently I'm working on several projects which can be seen below!
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={Webpage} alt="Webpage Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Hobbyist</h3>
                        <p>
                            I'm not just school focused though! Outside of the classroom I'm an avid gamer; Especially a PC gamer!
                            I also am a executive member of the University of Ottawa ESports club where I run events related to the magic the gathering TCG!
                            Finally, and most importantly, I am a DnD player. While I am a forever DM I always find ways to come up with new and creative worlds for my players to play in!
                        </p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
    );
};