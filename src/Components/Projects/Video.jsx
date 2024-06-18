import React, { useEffect, useState } from "react";
import styles from "./Video.module.css";
import { gsap } from "gsap";

function Video() {
  const [playing, setplaying] = useState(false);
  useEffect(() => {
    const video_play_button = document.querySelector("#play_btn");
    const container = document.querySelectorAll("#vid");

    container.forEach((element) => {
      element.addEventListener("click", function () {
        if (!playing) {
          console.log("Played");
          element.play();
          setTimeout(() => {
            element.controls = true;
          }, 1000);
          gsap.to(video_play_button, {
            scale: 0,
            opacity: 0,
          });
          setplaying(true);
        } else {
          console.log("Pause");
          element.pause();
          element.controls = false;
          gsap.to(video_play_button, {
            scale: 0,
            opacity: 0,
          });
          setplaying(false);
        }
      });

      element.addEventListener("mouseenter", function () {
        if (!element.controls) {
          gsap.to(video_play_button, {
            scale: 1,
            opacity: 1,
          });
        }
      });

      element.addEventListener("mouseleave", function () {
        if (!element.controls) {
          gsap.to(video_play_button, {
            scale: 0,
            opacity: 0,
          });
        }
      });

      element.addEventListener("mousemove", function (dets) {
        if (!element.controls) {
          gsap.to(video_play_button, {
            left: dets.x - 30,
            top: dets.y - 30,
          });
        }
      });
    });
  }, []);

  return (
    <div className={styles.main} id="main">
      <div
        className={styles.btn}
        id="play_btn"
        onClick={() => {
          console.log("CLicked");
        }}
      >
        Play
      </div>
      <video id="vid" src="http://localhost:8081/video/first.mp4"></video>
      <video id="vid" src="http://localhost:8081/video/issue.mp4"></video>
    </div>
  );
}

export default Video;
