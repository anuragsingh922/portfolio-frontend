import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Linkedin_img from "../../Assets/image/Projects/Linkedin.png";
gsap.registerPlugin(ScrollTrigger);

function Check() {
    useGSAP(() => {
    gsap.to("#box1", {
      scrollTrigger: {
        trigger: "#box1",
        toggleActions: "restart none none reverse",
        id: "pin",
        markers: true,
        pin: true,
        start : "top top",
        end: "bottom 0%",
        pinSpacing : false,
      },
      zIndex : -1,
    });
  });
  return (
    <div>
      <div
        style={{ backgroundColor: "red", width: "100%", height: "600px" , zIndex:"-1" }}
        id="box1"
        className="parent"
      >
        <img
          src={Linkedin_img}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{ backgroundColor: "green", width: "100%", height: "600px" }}
        id="box2"
      >
        <img
          src={Linkedin_img}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{ backgroundColor: "blue", width: "100%", height: "600px" }}
        id="box3"
      >
        <img
          src={Linkedin_img}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default Check;
