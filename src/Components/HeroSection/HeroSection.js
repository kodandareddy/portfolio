import React, { useEffect } from "react";
import "./HeroSection.scss";
import Typed from "react-typed";

const HeroSection = ({home}) => {
  const downloadResume = () => {
    fetch("resume.pdf")
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        console.log(blob)
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Kodanda_Resume.pdf";
        alink.click();
      });
  };

  return (
    <div className="hero" ref={home}>
      <div className="hero_title" data-aos="fade-right">
        <div className="text-1">Kodanda Rama Reddy Satti</div>
        <div className="text-2">
          <Typed
            typedRef={(typed) => {
              typed = typed;
            }}
            loop
            typeSpeed={100}
            backSpeed={75}
            strings={["Front End Engineer"]}
            smartBackspace
            shuffle={false}
            backDelay={1}
            fadeOut={false}
            fadeOutDelay={100}
            loopCount={0}
            showCursor
            cursorChar="|"
          />
        </div>
        <div className="text-3 ">
          I am passionate about <span className="underline">Front End</span>{" "}
          Development..
        </div>
        <a href="#" onClick={downloadResume} className="call-button">
          My Resume
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
