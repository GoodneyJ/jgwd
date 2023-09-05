'use client'

import React, {useEffect, useState, useRef, forwardRef} from 'react'

import styles from './styles/navigation.module.css'

export default function Navigation() {
    const [scrolledFromTop, setScrollTop] = useState(false)
    const [menuInteract, setMenuInteract] = useState(true);
    const [sidebarToggle, setSidebarToggle] = useState(true);
    useEffect(()=>{
        window.addEventListener("scroll", scrollHandler);
        // the function returned from here will run on unmounting
        return function() {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, []);

    function scrollHandler(event){
        window.scrollY >= 50 ? setScrollTop(true) : setScrollTop(false);
    }

    // div menu-btn reference
    const menuRef = useRef()
  
    const sidebarRef = useRef()
    
    


    
    function handleClick() {

      if(menuInteract && sidebarToggle) {
        menuRef.current.classList.add(`${styles.open}`)
        setMenuInteract(!menuInteract);
        setSidebarToggle(!sidebarToggle);
        // sidebarRef.current.styles.display = "flex";
        sidebarRef.current.classList.add(`${styles.display}`);

        console.log()

      } else {
        menuRef.current.classList.remove(`${styles.open}`)
        setMenuInteract(!menuInteract);
        setSidebarToggle(!sidebarToggle);
        sidebarRef.current.classList.remove(`${styles.display}`);

      }

    }
     
  return (
    <div className={styles.navigationContainer}>

      {/* Navigation bar */}
      <div className={styles.navigationBar}>
        <h2 className={styles.logo}>JGWD</h2>
      
        {/* menuRef reference source */}
        <div id="menu-btn" className={styles.menuBtnContainer} ref={menuRef} onClick={handleClick}>
          <div id="menu-burger" className={styles.menuBtnBurger}>

          </div>
        </div> 
      </div>


      {/* Menu Sidebar */}
      <div className={styles.sidebar} ref={sidebarRef}>
        <nav className={styles.sidebarMenu}>
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
        </nav>

        {/* <label for="menu-control" className={styles.sidebarClose}></label> */}
      </div>

      


    </div>
  )
}
