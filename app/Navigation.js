'use client'

import React, {useEffect, useState, useRef, forwardRef} from 'react'
import { IconContext } from "react-icons";
import { HiMiniMoon } from 'react-icons/hi2'

import styles from './styles/navigation.module.css'

export default function Navigation() {
    const [scrolledFromTop, setScrollFromTop] = useState(false)
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
        window.scrollY >= 50 ? setScrollFromTop(true) : setScrollFromTop(false);

        //setScrollFromTop ? navRef.current.classList.add(`${styles.sticky}`) : navRef.current.classList.remove(`${styles.sticky}`)
    }

    // div menu-btn reference
    const menuRef = useRef()
  
    const sidebarRef = useRef()
    
    const navRef = useRef()


    
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
      <div className={styles.navigationBar} ref={navRef}>
        <h2 className={styles.logo}>JGWD</h2>
      
        {/* menuRef reference source */}
          <div className={styles.spacer}>
            <HiMiniMoon className={styles.navIcon}/>
            <div id="menu-btn" className={styles.menuBtnContainer} ref={menuRef} onClick={handleClick}>
              <div id="menu-burger" className={styles.menuBtnBurger}>

              </div>
            </div> 
        </div>
      </div>


      {/* Menu Sidebar */}
      <div className={styles.sidebar} ref={sidebarRef}>
        <nav className={styles.sidebarMenu}>
            <h4>MENU</h4>
            <a href="#HOME">HOME</a>
            <a href="#ABOUT">ABOUT</a>
            <a href="#CONTACT">CONTACT</a>
        </nav>

        {/* <label for="menu-control" className={styles.sidebarClose}></label> */}
      </div>

      


    </div>
  )
}
