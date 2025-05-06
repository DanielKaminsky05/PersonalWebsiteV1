import React from 'react'

export default function Skills({styles}) {
  return (
    <>
        <h3 style = {{marginTop: "40px", marginBottom: "0px"}} className={styles.h3}>My Skills</h3>
        <h4 className={styles.skillHeaders}>Frontend:</h4>
        <p className={styles.skills}>React,  Nextjs, Bootstrap, CSS, HTML, Figma</p>
        <h4 className={styles.skillHeaders}>Backend:</h4>
        <p className={styles.skills}>Express, Node, Flask, PostgreSQL, Supabase</p>
        <h4 className={styles.skillHeaders}>Languages:</h4>
        <p className={styles.skills}>Python, Java, C, Javascript, Typescript, Prolog</p>
    
    </>
  )
}
