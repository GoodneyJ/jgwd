import React from 'react'

import styles from './styles/footer.module.scss'

export default function Footer() {
  return (
    <div id="CONTACT" className={styles.footerContainer}>
        <form>
          <div className={styles.footerRow}>
            <input name='name' type='text' placeholder=''/>
            <input name='email' type='text' placeholder=''/>
          </div>
          <div className={styles.footerRow}>
            <input name='budget' type="number" />
            <input name='phone-number' type='text'/>
          </div>
          <div className={styles.footerRow}>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
          </div>
          <textarea />
          <input type="button" value="Submit" className={styles.formSubmit}/>
        </form>
        
    </div>
  )
}
