import React, { useEffect } from "react";
import Failure from "../Toast/Failure";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import styles from "./Main.module.css";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Main = ({ scrollToSection }) => {
  useEffect(() => {

    // const panels = document.querySelectorAll(".com");

    // panels.forEach((panel, index) => {
    //   console.log("Index : ", index);
    //   gsap.to(panel, {
    //     scrollTrigger: {
    //       trigger: panel,
    //       markers: true,
    //       start: "top 80%",
    //       end: "+=500",
    //       scrub: true,
    //     },
    //     opacity: 1,
    //   });
    // });
  }, []);
  return (
    <div className={styles.main}>
      <div id="home" className="com">
        <Home
          className={`${styles.section} component`}
          scrollToSection={scrollToSection}
        />
      </div>
      <div id="project" className="com">
        <Projects
          className={`${styles.section} component`}
          scrollToSection={scrollToSection}
        />
      </div>
      <div id="skills" className="com">
        <Skills
          className={`${styles.section} component`}
          scrollToSection={scrollToSection}
        />
      </div>
      <Footer
        id="footer"
        className={`${styles.section} component`}
        scrollToSection={scrollToSection}
      />
    </div>
  );
};

export default Main;
