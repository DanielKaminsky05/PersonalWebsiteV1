import React from 'react'
import Experience from './Experience'
export default function ExperienceSection({styles}) {
  return (
    <div>
        <h3 className={styles.h3}>Experience</h3>
        <div className={styles.experienceGrid}>

            <Experience 
              styles={styles} 
              company={"Entree Capital"} 
              logo={"/EntreeLogo.png"} 
              role1={"Software Engineer"} 
              date1={"June 2025 - Aug 2025"} 
              description1a={"Built a dashboard with Next.js and PostgreSQL to streamline founder evaluation and improve investment decision-making"} 
            />

            <Experience 
              styles={styles} 
              company={"Royal Bank of Canada"} 
              logo={"/RBCLogo.png"} 
              role1={"Design Thinking Fellow"} 
              date1={"Sept 2025 - Present"} 
              description1a={"Collaborated in RBC’s Design Thinking Program to design user-focused solutions for real business challenges"} 
            />
            <Experience styles = {styles} company = {"Data Annotation"} logo = {"/dataLogo.png"} role1 = {"AI Trainer"} date1 = {"June 2024 - Present"} description1a = {"Evaluating the performance of AI models on tasks related to programming"} description1b = {"Demonstrated strong independent working skills"}/>
            <Experience styles={styles} company = {"Western Cyber Society"} logo = {"/WCSLogo.png"} role1 = {"Developer"} date1 = {"Sep 2024 - Apr 2025"} description1a = {"Developed Secureframe, a tool that utilizes computer vision + AES encryption to secure privacy in real time. Won first place at the Toronto Tech Expo in Cybersecurity"}/>
            <Experience styles={styles} company = {"Western Computer Science Undergraduate Society"} logo = {"/CSUSLogo.png"} role1 = {"VP Finance"} date1 = {"May 2025 - Present"} role2 = {"Academic Director"} date2 = {"Sept 2024 - April 2025"} description2a={"Helped hundreds of computer science students succeed by leading exam preparation sessions"}/> 
            <Experience styles = {styles} company = {"Western Developer Society"} logo = {"/WDSLogo.png"} role1 = {"Developer"} date1 = {"June 2024 - Present"} description1a = {"Utilized nextjs to redesign the website of London’s 13th ward Councillor David Ferreira"} description1b = {"Performed testing on different devices to ensure website was fully responsive"}/>
        </div>
    </div>
  )
}
