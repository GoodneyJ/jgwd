import React from 'react'

import styles from './styles/footer.module.scss'

export default function Footer() {
  return (
    <div id="CONTACT" className={styles.footerContainer}>
        <form>
          <div className={styles.footerRow}>
            <input name='name' placeholder='John Smith' type='text'/>
            <input name='email' placeholder='JohnSmith@email.com' type='text'/>
          </div>
          <div className={styles.footerRow}>
            <input name='budget' placeholder='$1500' type="text" />
            <input name='phone-number' placeholder='(123)-456-7890' type='text'/>
          </div>

          <textarea placeholder={`In a few words tell me a about you and your business, things you'd like to see on your site. Ex. Color pallette, Night Mode, etc `}/>
          <input type="button" value="Submit" className={styles.formSubmit}/>
        </form>
        
    </div>
  )
}
