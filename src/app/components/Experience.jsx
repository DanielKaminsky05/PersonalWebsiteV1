import React from 'react'
import Image from 'next/image'
export default function Experience({styles, company, logo, role1, date1, description1a, description1b, role2, date2, description2a, description2b}) {
  return (
        <div className={styles.experienceContainer}>
            <div className = {styles.experienceTitle}>
                <h4 className={styles.h4}>{company}</h4>
                <Image alt = "dataLogo" className={styles.logoImage} style = {{marginLeft: "20px"}} src = {logo} width={80} height={80}></Image>
            </div>
            <div className={styles.experienceInfo}>
                <h5 className={styles.jobTitle}>{role1}</h5>
                <p className = {styles.jobDates}>{date1}</p>
                {description1a ? <p className = {styles.jobDescription}>{description1a}</p> : "" }
                {description1b ? <p className = {styles.jobDescription}>{description1b}</p> : "" }
                {role2 ? <h5 className={styles.jobTitle}>{role2}</h5> : ""}
                {date2 ? <p className = {styles.jobDates}>{date2}</p> : ""}
                {description2a ? <p className = {styles.jobDescription}>{description2a}</p> : "" }
                {description2b ? <p className = {styles.jobDescription}>{description2b}</p> : "" }

            </div>
        </div>
  )
}
