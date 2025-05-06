import React from 'react'

export default function Hero({styles}) {
  return (
    <header className={styles.hero}>
        <div className={styles.heroText}>
            <h1 className= {styles.h1}>Daniel Kaminsky</h1>
            <div style={{width: "80%"}}>
                <h2 className= {styles.h2}>CS + Ivey @ Western University</h2>
                <p className={styles.p}>
                In Grade 6 I created my first ever program in the simple langauge of Scratch. 
                Since then I have been on a continual journey to grow as a developer. 
                I’m particularly passionate about combining business and technology to solve real-world problems and create meaningful impact.
                </p>
            </div>
        </div>
        <div>
            <div className={styles.portrait}> 
            </div>
        </div>

    </header>
  )
}
