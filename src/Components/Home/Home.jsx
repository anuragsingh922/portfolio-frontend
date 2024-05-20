import React from 'react';
import css from './Home.module.css';
import Profile from '../../Assets/image/profile3.jpeg';
import Whatsapp_Img from '../../Assets/image/Links/whatsapp.png';
import Insta_Img from '../../Assets/image/Links/instagram.png';
import Linkedin_Img from '../../Assets/image/Links/linkedin.png';

function Navbar({scrollToSection}) {
  return (
    <>
    <div className={css.home}>

      <div className={css.nav}>
        <div className={css.leftsection}>
          <a href="/"><p>🇦 🇳 🇺 🇷 🇦 🇬</p></a>
          </div>
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

        <div className={css.links}>
          <div className={css.link}>
            <a href="https://wa.me/9896424841" target='_blank'><img src={Whatsapp_Img} alt="" srcset="" /></a>
          </div>
          <div className={css.link}>
            <a href="https://www.instagram.com/anuragsingh922/" target='_blank'><img src={Insta_Img} alt="" srcset="" /></a>
          </div>
          <div className={css.link}>
            <a href="https://www.linkedin.com/in/anurag-singh-17674b221/" target='_blank'><img src={Linkedin_Img} alt="" srcset="" /></a>
          </div>
        </div>


      </div>
    </div>
    </>
  )
}

export default Navbar
