import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message" rows={5}></textarea>
          </div>
          <button type="submit" className={styles.button}>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
