import React from 'react'
import ParticlesComponent from './components/particles'
import styles from "./page.module.css"
import Hero from './components/Hero'
import ExperienceSection from './components/ExperienceSection'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function page() {

  return (
    <div>
      <ParticlesComponent/>
      <div className={styles.container}>
        <div className={styles.limit}>
          <Hero styles = {styles}/>
          <ExperienceSection styles = {styles}/>
          <Skills styles={styles}/>
          <Projects styles = {styles}/>
          <Contact styles = {styles}/>
          <p className={styles.p} style={{marginTop: "50px"}}>© 2025 Daniel Kaminsky. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
