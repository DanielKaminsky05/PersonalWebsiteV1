"use client";
import React from 'react'

export default function Hero({styles}) {
  return (
    <header className={styles.hero}>
        <div className={styles.heroText}>
            <h1 className= {styles.h1}>Daniel Kaminsky</h1>
            <h2 className= {styles.h2}>CS @ Western University</h2>
            <div className={styles.heroSubText}>
                <p className={styles.p}>
                At the age of 10, I created my first program in the language Scratch. Since then, I have been on a continuous journey to grow as a developer. I’m particularly passionate about combining business and technology to solve real-world problems and create meaningful impact.
                </p>
                <div className={styles.socialLinks}>
                <svg onClick = {() => window.open("https://www.linkedin.com/in/danielkaminsky-/")} className={styles.Icons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.5c-1.14 0-2.06-.92-2.06-2.06S4.2 3.38 5.34 3.38s2.06.92 2.06 2.06-1.02 2.06-2.06 2.06zm15.11 12.95h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-3.56V9h3.42v1.56h.05c.48-.91 1.66-1.87 3.42-1.87 3.66 0 4.34 2.41 4.34 5.54v6.22z"/>
                </svg>
                <svg onClick = {() => window.open("https://github.com/DanielKaminsky05")} className={styles.Icons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.583 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.774.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.137 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.24 2.873.117 3.176.768.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.625-5.478 5.92.432.372.816 1.102.816 2.222 0 1.606-.015 2.898-.015 3.293 0 .324.216.7.825.58C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <div className={styles.buttonContainer}>
                  <a className={styles.resume} role="button" href="https://drive.google.com/file/d/1c3bYHKg6Ov_SWI-Ur7AqdiCvAjqGcqpV/view?usp=sharing" target="_blank">Résumé</a>
                </div>
                </div>
            </div>
        </div>
        <div>
            <div className={styles.portrait}/> 
        </div>

    </header>
  )
}
