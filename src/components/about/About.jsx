import React,{useState} from "react";
import "./about.css";
import strip from "../../assets/dual-color-strip.svg";
import arrow from '../../assets/about-arrow.png'
import logo from "../../assets/cdw-logo.svg";


const About = () => {
  const [rotatecard, setrotatecard] = useState(false);
  function rotateCard(){
    console.log(!rotatecard);
    setrotatecard(!rotatecard)
  }

  return (
    <section id="about">
      <div className="about-wrapper">
        <div className="about-wrapper-heads">
          <p className="text-color-main">
            ARE YOU <span className="text-color">PASSIONATE</span> ABOUT DESIGN?
            CODe WILL <span className="text-color">RAISE YOU</span> UP
            <span className="text-color">.</span>
          </p>
        </div>
    
        <div className="about-info">
          <div className="card">
            <div
              // style={{ rotate: rotatecard ? "180deg" : "0deg" }}
              className={
                rotatecard
                  ? "about-arrow-rotate-rev card-front"
                  : "about-arrow-rotate-zero card-back"
              }
            >
              <img className="cdw-logo-about" src={logo} alt="" />
            </div>
            <div className="about-arrow" onClick={rotateCard}>
              <img
                style={{ rotate: rotatecard ? "90deg" : "" }}
                src={arrow}
                alt=""
              />
            </div>
            {rotatecard && (
              <div
                // style={{ rotate: rotatecard ? "0deg" : "180deg" }}
                className={
                  rotatecard
                    ? "about-arrow-rotate-zero card-back "
                    : "about-arrow-rotate-rev card-front"
                }
              >
                <p>
                  CODe Design Week is a week completely dedicated to design,
                  hosted by Community Of Developers (CODe), Department of
                  Computer Science & Engineering, Christ College of Engineering,
                  Irinjalakuda.The event will help you exploring the
                  possibilities, opportunities & finding the passion in design.
                  There will be workshops, talk sessions, expos, games and
                  quizzes.
                </p>
              </div>
            )}
          </div>
          <div className="about-info-data">
            <div>
              <h3>07</h3>
              <p>DESIGNING DAYS</p>
            </div>
            <div>
              <h3>10+</h3>
              <p>SKILLED MENTORS</p>
            </div>
            <div>
              <h3>20+</h3>
              <p>LIVE EVENTS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
