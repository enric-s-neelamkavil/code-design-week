import React from "react";
import "./team.css";
import headTeam from "../../assets/team-header-img.svg";
import enric from "../../assets/team/enric.png";
import amalcp from "../../assets/team/amalcp.png";
import ajay from "../../assets/team/ajayvishnu.png";
import noah from "../../assets/team/Noah .png";
import pranav from "../../assets/team/pranav.svg";
import jaivin from "../../assets/team/jaivin.png";
import jasrin from "../../assets/team/jasrin.png";
import theresa from "../../assets/team/theresa.png";
import varsha from "../../assets/team/varsha.png";
import talksession from "../../assets/talksession.svg";
import expo from "../../assets/expo.svg";
import handsonworkshop from "../../assets/handsonworkshop.svg";
import games from "../../assets/games.svg";
import quizes from "../../assets/quizes.svg";

const team = () => {
  return (
    <section id="team">
      <div className="team-wrapper">
        <div className="event-header transition-div-t">
          <p>OUR TEAM</p>
          <img src={headTeam} alt="" />
        </div>
        <div class="container-team">
          <div class="box">
            <img src={enric} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Enric S Neelamkavil</p>{" "}
                <p className="position-team-membere">President, CODe</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={amalcp} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Amal C P</p>{" "}
                <p className="position-team-membere">Lead Organizer</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={ajay} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Ajay Vishnu E</p>{" "}
                <p className="position-team-membere">Event Head</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={noah} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Noah Johny</p>{" "}
                <p className="position-team-membere">Graphic Designer</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={pranav} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Pranav Madhu</p>
                <p className="position-team-membere">Technical Lead</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={varsha} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Varsha Babu Akkara</p>
                <p className="position-team-membere">Sponsorship Lead</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={jasrin} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Muhammad Jasrin</p>
                <p className="position-team-membere">Content Lead</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={theresa} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Theresa T S</p>{" "}
                <p className="position-team-membere">Outreach Lead</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={jaivin} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Jaivin Joseph</p>{" "}
                <p className="position-team-membere">Decoration Lead</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cd-team-wrapper">
          <div className="cd-left-team">
            <p className="cd-left-team-one">
              WE <span className="text-color">CREATE</span> AND DESIGN.
            </p>
            <p className="cd-left-team-two">
              Design is everywhere. A good design is something that has a
              pleasant impact on one's life.
            </p>
          </div>
          <div className="cd-right-team">
            <a className="right-cd-div">
              <img src={talksession} alt="" />
              <p>TALK SESSIONS</p>
            </a>
            <a className="right-cd-div">
              <img src={expo} alt="" />
              <p>EXPO</p>
            </a>
            <a className="right-cd-div">
              <img src={handsonworkshop} alt="" />
              <p>HANDS-ON WORKSHOPS</p>
            </a>
            <a className="right-cd-div">
              <img src={games} alt="" />
              <p>GAMES</p>
            </a>
            <a className="right-cd-div">
              <img src={quizes} alt="" />
              <p>QUIZES</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default team;
