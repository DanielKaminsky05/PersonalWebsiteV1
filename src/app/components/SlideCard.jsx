import React from 'react'
import Tag from './Tag'

export default function SlideCard({styles, video, projectName, projectDescription, tags, image}) {
  return (
    <div className={styles.slideCard}>
    <div className={styles.videoContainer}>
        {video ? (
            <video
              className={styles.video}
              src={video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img className = {styles.video} src = {image}/>
          )}
    <div className={styles.videoOverlay}></div>
    </div>
    <div className={styles.slideText}>
        <h3 className={styles.projectHeading}>{projectName}</h3>
        <p className={styles.projectDescription}>
          {projectDescription}
        </p>
        <div className={styles.tagContainer}>

        
        {
          tags.map((tag,index) => {
            return (

            <Tag key = {index} styles={styles} tag = {tag} id = {index}/>

            )
            
          })
        }
        
      </div>
    </div>
  </div>
  )
}
