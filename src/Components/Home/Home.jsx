import React, { useEffect } from "react";
import css from "./Home.module.css";
import Profile from "../../Assets/image/profile5.png";
import Whatsapp_Img from "../../Assets/image/Links/whatsapp.png";
import Insta_Img from "../../Assets/image/Links/instagram.png";
import Linkedin_Img from "../../Assets/image/Links/linkedin.png";
import React_img from "../../Assets/image/skills/react.png";
import Express_img from "../../Assets/image/skills/express.png";
import MongoDB_img from "../../Assets/image/skills/mongodb1.png";
import Node_img from "../../Assets/image/skills/node.png";
import Sql_img from "../../Assets/image/skills/sql.png";
import Vonage_img from "../../Assets/image/skills/Vonage.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Navbar({ scrollToSection }) {
  useEffect(() => {
    // const panels = document.querySelectorAll("#link");

    // panels.forEach((panel, i) => {
    //   gsap.to(panel, {
    //     scrollTrigger: {
    //       trigger: panel,
    //       start: "400px 80%",
    //       end : "+=300",
    //       markers: true,
    //       scrub: true,
    //     },
    //     top : 0,
    //     opacity : 0.3,
    //   });
    // });

    gsap.to("#link", {
      y: -200,
      duration: 2,
      delay: 0.5,
    });

    gsap.to("#name", {
      opacity: 1,
      duration: 2,
      delay: 0.5,
      stagger: 0.2,
    });

    gsap.to(".home_li", {
      opacity: 1,
      duration: 2,
      delay: 0.5,
      stagger: -0.5,
    });

    gsap.to("#img", {
      opacity: 1,
      duration: 2,
      delay: 0.5,
      stagger: -0.5,
      scale: 1,
    });

    gsap.to(".skill1", {
      opacity: 1,
      duration: 2,
      delay: 0.5,
      stagger: 0.5,
      scale: 1,
    });

    gsap.to(".skill2", {
      opacity: 1,
      duration: 2,
      delay: 0.5,
      stagger: 0.5,
      scale: 1,
    });

    gsap.to(".skills_1", {
      duration: 2,
      delay: 0.5,
      skewX: 20,
    });

    gsap.to(".skills_2", {
      duration: 2,
      delay: 0.5,
      skewY: 20,
      yoyo: 1,
    });
  }, []);

  return (
    <>
      <div className={css.home} id="main">
        <div className={css.nav}>
          <div className={css.leftsection}>
            <a href="/">
              <p id="name">🇦 </p>
              <p id="name">🇳 </p>
              <p id="name">🇺 </p>
              <p id="name">🇷 </p>
              <p id="name">🇦 </p>
              <p id="name">🇬</p>
            </a>
          </div>
          <div className={css.rightsection} id="rightsection">
            <ul className={css.ul}>
              <li className={`${css.li} home_li`}>
                <a href="/" onClick={() => scrollToSection("projects")}>
                  {" "}
                  Projects
                </a>
              </li>
              <li className={`${css.li} home_li`}>
                <a href="/" onClick={() => scrollToSection("skills")}>
                  {" "}
                  Skills
                </a>
              </li>
              <li className={`${css.li} home_li`}>
                <a href="/" onClick={() => scrollToSection("blogs")}>
                  {" "}
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.circle_c}>
          <div className={css.circle}>
            <img src={Profile} alt="imagee" id="img" />
          </div>

          <div className={`${css.skills} skills_1`}>
            <li className={`${css.skills_li} skill ${css.express}`}>
              <img src={Express_img} alt="" />
            </li>
            <li className={`${css.skills_li} skill1`} id="skill1">
              <img src={Node_img} alt="" />
            </li>
          </div>

          <div className={`${css.skills} skills_2`}>
            <li className={`${css.skills_li_2} skill2`} id="skill2">
              <img src={MongoDB_img} alt="" />
            </li>
            <li className={`${css.skills_li_2} skill2`} id="skill2">
              <img src={Sql_img} alt="" />
            </li>
            <li className={`${css.skills_li_2} skill2`} id="skill2">
              <img src={Vonage_img} alt="" />
            </li>
          </div>

          <div className={css.links} id="link">
            <div className={css.link} id="linkk">
              <a href="https://wa.me/9896424841" target="_blank">
                <img src={Whatsapp_Img} alt="" srcset="" />
              </a>
            </div>
            <div className={css.link} id="linkk">
              <a
                href="https://www.instagram.com/anuragsingh922/"
                target="_blank"
              >
                <img src={Insta_Img} alt="" srcset="" />
              </a>
            </div>
            <div className={css.link} id="linkk">
              <a
                href="https://www.linkedin.com/in/anurag-singh-17674b221/"
                target="_blank"
              >
                <img src={Linkedin_Img} alt="" srcset="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
