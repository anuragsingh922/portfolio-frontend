import React from 'react';
import css from './Home.module.css';
import Profile from '../../Assets/image/profile3.jpeg';

function Navbar({scrollToSection}) {
  return (
    <>
    <div className={css.home}>

      <div className={css.nav}>
        <div className={css.leftsection}>🇦 🇳 🇺 🇷 🇦 🇬</div>
        <div className={css.rightsection}>
          <ul className={css.ul}>
            <li className={css.li} ><a href="#" onClick={() => scrollToSection('projects')}> Projects</a></li>
            <li className={css.li}><a href="#" onClick={() => scrollToSection('skills')}> Skills</a></li>
            <li className={css.li}><a href="#" onClick={() => scrollToSection('blogs')}> Blogs</a></li>
          </ul>
        </div>
      </div>


      <div className={css.circle_c}>


        <div className={css.circle}>

        <a href="https://www.linkedin.com/in/anurag-singh-17674b221/"><img src={Profile} alt="image" /></a>
          
        </div>


      </div>
    </div>
    </>
  )
}

export default Navbar
