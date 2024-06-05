import React from "react";
import css from "./Skills.module.css";
import React_img from "../../Assets/image/skills/react.png";
import Express_img from "../../Assets/image/skills/express.png";
import MongoDB_img from "../../Assets/image/skills/mongodb.png";
import Node_img from "../../Assets/image/skills/node.png";
import Sql_img from "../../Assets/image/skills/sql.png";
import Vonage_img from "../../Assets/image/skills/Vonage.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Skills() {
  useGSAP(() => {
    // Select the button element from the document
    const skills = document.querySelectorAll(".all_skills");

    skills.forEach((button) => {
      // Get the button's bounding rectangle dimensions and position

      // Add an event listener to the window to update the bounding rectangle dimensions
      // when the window is resized
      window.addEventListener("resize", () => {
        let boundingRect = button.getBoundingClientRect();
        boundingRect = button.getBoundingClientRect();
      });

      // Add an event listener for mouse movement over the button
      button.addEventListener("mousemove", (e) => {
        let boundingRect = button.getBoundingClientRect();
        // Calculate mouse position relative to the button
        const mousePosX = e.x - boundingRect.left; // X position
        const mousePosY = e.y - boundingRect.top; // Y position

        console.log("X : " , mousePosX);
        console.log("Y : " , mousePosY);

        // Use GSAP (GreenSock Animation Platform) to animate the button
        // This creates a 'magnetic' effect where the button moves towards the mouse
        gsap.to(button, {
          x: (mousePosX - boundingRect.width / 2) * 0.4, // Move horizontally towards mouse
          y: (mousePosY - boundingRect.height / 2) * 0.4, // Move vertically towards mouse
          duration: 0.8, // Duration of the animation
          ease: "power3.out", // Easing function for smooth animation
        });
      });

      // Add an event listener for when the mouse leaves the button area
      button.addEventListener("mouseleave", () => {
        // Animate the button back to its original position
        gsap.to(button, {
          x: 0, // Reset horizontal position
          y: 0, // Reset vertical position
          duration: 0.8, // Duration of the animation
          ease: "elastic.out(1,0.3)", // Easing function for a 'springy' return
        });
      });
    });


    gsap.from(".headingg", {
      duration: 1,
      opacity: 0,
      x: 1200,
      scrollTrigger: {
        trigger: ".headingg",
        scroller: "body",
        start: "top 100%",
        end: "+=200px",
        scrub : 2,
      },
    });


  });
  return (
    <section id="skills" className={css.section}>
      <h3 className={`${css.heading} headingg`}>Skills</h3>

      <ul className={css.ul}>
        <li className={`${css.li} all_skills`}>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={React_img} alt="" />
          </a>
          <h3>React.js</h3>
        </li>
        <li className={`${css.li} all_skills`}>
          <a
            href="https://nodejs.org/docs/latest/api/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Node_img} alt="" />
          </a>
          <h3>Node.js</h3>
        </li>
        <li className={`${css.li} all_skills`}>
          <a
            href="https://expressjs.com/en/5x/api.html"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Express_img} alt="" />
          </a>
          <h3>Express.js</h3>
        </li>
        <li className={`${css.li} all_skills`}>
          <a
            href="https://www.mongodb.com/docs/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={MongoDB_img} alt="" />
          </a>
          <h3>MongoDB</h3>
        </li>
        <li className={`${css.li} all_skills`}>
          <a href="https://dev.mysql.com/doc/" target="_blank" rel="noreferrer">
            <img src={Sql_img} alt="" />
          </a>
          <h3>SQL</h3>
        </li>
        <li className={`${css.li} all_skills`}>
          <a
            href="https://developer.vonage.com/en/getting-started/overview?source=voice"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Vonage_img} alt="" />
          </a>
          <h3>Vonage</h3>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
