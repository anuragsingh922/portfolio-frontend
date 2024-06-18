import React, { useEffect, useReducer, useRef } from "react";
import css from "./Projects.module.css";
import Portfolio_img from "../../Assets/image/Projects/portfolio.png";
import HealthMate_img from "../../Assets/image/Projects/HealthMate.jpeg";
import Edit_img from "../../Assets/image/Projects/Edit.png";
import Contest_img from "../../Assets/image/Projects/Contest.png";
import Weather_img from "../../Assets/image/Projects/Weather.png";
import News_img from "../../Assets/image/Projects/News.png";
import Linkedin_img from "../../Assets/image/Projects/Linkedin.png";
import AI_img from "../../Assets/image/Projects/whisper.jpg";
import Vision_img from "../../Assets/image/Projects/ai2.jpg";
import Darwin_img from "../../Assets/image/Projects/darwin.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const container = useRef();
  useGSAP(
    () => {
      gsap.from(".heading", {
        duration: 1,
        opacity: 0,
        x: 1200,
        scrollTrigger: {
          trigger: ".heading",
          scroller: "body",
          start: "top 80%",
          end: "+=200px",
          scrub : 2,
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

      set1.forEach((element) => {
        gsap.from(element, {
          duration: 2,
          x: -700,
          scrollTrigger: {
            trigger: element,
            scroller: "body",
            start: "top 80%",
            end: "+=200px",
            scrub: 2,
          },
        } , "anim1");
      });

      const set3 = document.querySelectorAll(".set3");

      set3.forEach((element) => {
        gsap.from(element, {
          duration: 2,
          x: 700,
          scrollTrigger: {
            trigger: element,
            scroller: "body",
            start: "top 80%",
            end: "+=200px",
            scrub: 2,
          },
        } , "anim1");
      });

      const set2 = document.querySelectorAll(".set2");

      set2.forEach((element) => {
        gsap.to(element, {
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            scroller: "body",
            start: "90px 80%",
            end: "+=100px",
            scrub: 2,
          },
        });
      });
      let finalpath = "M 10 50 Q 500 50 990 50";

      const string = document.querySelector("#string");

      
      string.addEventListener("mousemove", (e)=> {
        let boundingRect = string.getBoundingClientRect();

        const mousePosX = e.x - boundingRect.left; // X position
        const mousePosY = e.y - boundingRect.top; // Y position

        console.log("X : " , mousePosX);
        console.log("Y : " , mousePosY);
        let path = `M 10 50 Q 500 ${mousePosY} 990 50`;

        console.log("Path  : ", path);

        gsap.to("svg path", {
          attr: { d: path },
          duration: 0.3,
          ease: "power3.out",
        });
      });

      string.addEventListener("mouseleave", function () {
        gsap.to("svg path", {
          attr: { d: finalpath },
          duration: 1.5,
          ease: "elastic.out(1,0.2)",
        });
      });
    }
  );

  return (
    <>
      <section id="projects" className={`${css.section}`} >
        <h3 className={`${css.heading} heading`} id="project">
          Projects
        </h3>

        <ul className={`${css.ul}`}>


          <li className={`${css.li} li set1`} id="project1">
            <a href="https://github.com/Cognation/darwin" target="_blank" rel="noreferrer">
              <img src={Darwin_img} alt="" />
            </a>
            <h3>Darwin</h3>
          </li>


        <li className={`${css.li} ${css.set2} li set2`} id="project1">
            <a href="https://vision-ivy.netlify.app/" target="_blank" rel="noreferrer">
              <img src={Vision_img} alt="" />
            </a>
            <h3>Vision</h3>
          </li>



          <li className={`${css.li} li set3`} id="project1">
            <a href="https://stream-whisper.netlify.app/" target="_blank" rel="noreferrer">
              <img src={AI_img} alt="" />
            </a>
            <h3>Whisper</h3>
          </li>







          

          <li className={`${css.li} li set1`} id="project3">
            <a
              href="https://anuragsingh922.github.io/edit/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Edit_img} alt="" />
            </a>
            <h3>Edit</h3>
          </li>

          <li className={`${css.set2} ${css.li} li set2`} id="project2">
            <a
              href="https://anuragsingh922.github.io/wecare/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={HealthMate_img} alt="" />
            </a>
            <h3>WeCare</h3>
          </li>
          <li className={`${css.li} li set3`} id="project4">
            <a
              href="https://anuragsingh922.github.io/Upcoming_Contests/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Contest_img} alt="" />
            </a>
            <h3>Upcomming Contest</h3>
          </li>

          <li className={`${css.li} li set1`} id="project7">
            <a href="https://linkedin-scraper.netlify.app/" target="_blank" rel="noreferrer">
              <img src={Linkedin_img} alt="" />
            </a>
            <h3>Linkedin Scraper</h3>
          </li>


          

          

          <li className={`${css.set2} ${css.li} li set2`} id="project5">
            <a
              href="https://anuragsingh922.github.io/Weather_/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Weather_img} alt="" />
            </a>
            <h3>Weather</h3>
          </li>

          <li className={`${css.li} li set3`} id="project6">
            <a href="/" target="_blank" rel="noreferrer">
              <img src={News_img} alt="" />
            </a>
            <h3>Newzzy</h3>
          </li>


        </ul>
      </section>
      <div className={`${css.svg}`} id="string" ref={container}>
        <svg width="1000px" height="100">
          <path d="M 10 50 Q 500 50 990 50" stroke="black" fill="transparent" />
        </svg>
      </div>
    </>
  );
}

export default Projects;
