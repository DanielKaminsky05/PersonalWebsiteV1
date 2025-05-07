import React from 'react'

export default function Tag({styles , tag}) {
  return (
    <div className={styles.slideTag}>
      {tag}
    </div>
  )
}
