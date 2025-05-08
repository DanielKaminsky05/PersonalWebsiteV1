"use client";
import React, { useState } from 'react'



export default function Contact({styles}) {

    const [formData, setFormData] = useState({
        email: "",
        message: ""
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div className={styles.contactContainer}>
        <h3 className={styles.h3}> Contact Me </h3>
        <form  action="https://formspree.io/f/mqaqboar" method="POST">
            <div>
                <h4 className={styles.formHeader}>Email</h4>
                <input className={styles.emailInput}  name = "email" value={formData.email} onChange={handleChange} placeholder='email@domain.com'/>
                <h4 className={styles.formHeader} >Message</h4>
                <textarea className={styles.messageInput} name = "message" value = {formData.message} onChange={handleChange} rows = "5" col = "50" placeholder='Hey Daniel...'/>
            </div>
            <button className={styles.submitButton} type = "submit">Submit</button>

        </form>
    </div>

  )
}
