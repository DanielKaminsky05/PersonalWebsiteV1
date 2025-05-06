import React from 'react'
import ParticlesComponent from './components/particles'
import styles from "./page.module.css"
import Hero from './components/Hero'
import ExperienceSection from './components/ExperienceSection'
import Skills from './components/Skills'
export default function page() {

  return (
    <div style={{paddingBottom: "600px"}}>
      <ParticlesComponent/>
      <div className={styles.container}>
        <div className={styles.limit}>
          <Hero styles = {styles}/>
          <ExperienceSection styles = {styles}/>
          <Skills styles={styles}/>
          <h3 style = {{marginTop: "30px"}} className={styles.h3}>Projects</h3>
        </div>
      </div>
    </div>
  )
}
