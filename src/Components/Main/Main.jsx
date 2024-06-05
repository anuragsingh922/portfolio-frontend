import React, { useEffect } from "react";
import Failure from "../Toast/Failure";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import styles from "./Main.module.css";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";

const Main = ({ scrollToSection }) => {
  return (
    <div className={styles.main}>
      <div id="box1" className="com">
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
    </div>
  );
};

export default Main;
