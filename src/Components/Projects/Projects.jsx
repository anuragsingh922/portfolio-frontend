import React, { useEffect } from "react";
import css from "./Projects.module.css";
import Voange_img from "../../Assets/image/Projects/Vonage.png";
import HealthMate_img from "../../Assets/image/Projects/HealthMate.jpeg";
import Edit_img from "../../Assets/image/Projects/Edit.png";
import Contest_img from "../../Assets/image/Projects/Contest.png";
import Weather_img from "../../Assets/image/Projects/Weather.png";
import News_img from "../../Assets/image/Projects/News.png";
import Linkedin_img from "../../Assets/image/Projects/Linkedin.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useEffect(() => {
    gsap.from(".heading", {
      duration: 2,
      opacity: 0,
      x : 1200,
      scrollTrigger: {
        trigger: ".heading",
        scroller: "body",
        start: "top 80%",
        markers: true,
        end: "+=200px",
      },
    });


    // const projects = document.querySelectorAll(".li");

    // projects.forEach((element , index) => {
    //     gsap.to(element, {
    //         duration: 2,
    //         opacity: 1,
    //         scrollTrigger: {
    //           trigger: element,
    //           scroller: "body",
    //           start: "-50px 80%",
    //           markers: true,
    //           end: "+=200px",
    //           scrub : 2,
    //         },
    //       });
    // });


    const set1 = document.querySelectorAll(".set1");

    set1.forEach(element => {
      gsap.from(element, {
        duration: 2,
        x : -700,
        scrollTrigger: {
          trigger: element,
          scroller: "body",
          start: "-50px 80%",
          end: "+=100px",
          markers: true,
          scrub : 2,
        },
      });
    });
  }, []);

  return (
    <section id="projects">
      <h3 className={`${css.heading} heading`} id="project">
        Projects
      </h3>

      <ul className={`${css.ul}`}>
        <li className={`${css.li} li set1`} id="project1">
          <a href="/" target="_blank" rel="noreferrer">
            <img src={Voange_img} alt="" />
          </a>
          <h3>Vonage</h3>
        </li>
        <li className={`${css.li} li`} id="project2">
          <a
            href="https://anuragsingh922.github.io/wecare/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={HealthMate_img} alt="" />
          </a>
          <h3>WeCare</h3>
        </li>
        <li className={`${css.li} li`} id="project3">
          <a
            href="https://anuragsingh922.github.io/edit/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Edit_img} alt="" />
          </a>
          <h3>Edit</h3>
        </li>
        <li className={`${css.li} li set1`} id="project4">
          <a
            href="https://anuragsingh922.github.io/Upcoming_Contests/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Contest_img} alt="" />
          </a>
          <h3>Upcomming Contest</h3>
        </li>
        <li className={`${css.li} li`} id="project5">
          <a
            href="https://anuragsingh922.github.io/Weather_/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Weather_img} alt="" />
          </a>
          <h3>Weather</h3>
        </li>
        <li className={`${css.li} li`} id="project6">
          <a href="/" target="_blank" rel="noreferrer">
            <img src={News_img} alt="" />
          </a>
          <h3>Newzzy</h3>
        </li>
        <li className={`${css.li} li`} id="project7">
          <a href="/" target="_blank" rel="noreferrer">
            <img src={Linkedin_img} alt="" />
          </a>
          <h3>Linkedin Scraper</h3>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
