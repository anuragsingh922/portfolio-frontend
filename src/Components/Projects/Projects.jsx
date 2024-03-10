import React from 'react';
import css from './Projects.module.css';
import Voange_img from '../../Assets/image/Projects/Vonage.png';
import HealthMate_img from '../../Assets/image/Projects/HealthMate.jpeg';
import Edit_img from '../../Assets/image/Projects/Edit.png';
import Contest_img from '../../Assets/image/Projects/Contest.png';
import Weather_img from '../../Assets/image/Projects/Weather.png';
import News_img from '../../Assets/image/Projects/News.png';
import Linkedin_img from '../../Assets/image/Projects/Linkedin.png';

function Projects() {
  return (
    <section id='projects'>
      <h3 className={css.heading}>Projects</h3>

    <ul className={css.ul}>
        <li className={css.li}>
            <a href="#" target='_blank' rel="noreferrer"><img src={Voange_img} alt="" /></a>
            <h3>Vonage</h3>
        </li>
        <li className={css.li}>
        <a href="https://anuragsingh922.github.io/wecare/" target='_blank' rel="noreferrer"><img src={HealthMate_img} alt="" /></a>
            <h3>WeCare</h3>
        </li>
        <li className={css.li}>
        <a href="https://anuragsingh922.github.io/edit/" target='_blank' rel="noreferrer"><img src={Edit_img} alt="" /></a>
            <h3>Edit</h3>
        </li>
        <li className={css.li}>
        <a href="https://anuragsingh922.github.io/Upcoming_Contests/" target='_blank' rel="noreferrer"><img src={Contest_img} alt="" /></a>
            <h3>Upcomming Contest</h3>
        </li>
        <li className={css.li}>
        <a href="https://anuragsingh922.github.io/Weather_/" target='_blank' rel="noreferrer"><img src={Weather_img} alt="" /></a>
            <h3>Weather</h3>
        </li>
        <li className={css.li}>
        <a href="#" target='_blank' rel="noreferrer"><img src={News_img} alt="" /></a>
            <h3>Newzzy</h3>
        </li>
        <li className={css.li}>
        <a href="#" target='_blank' rel="noreferrer"><img src={Linkedin_img} alt="" /></a>
            <h3>Linkedin Scraper</h3>
        </li>
    </ul>
    </section>
  )
}

export default Projects
