import React, { useState } from "react";
import "../../styles/team.css";

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useState(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=4");
        const data = await response.json();
        const results = data.results;
        const teamMembers = results.map((member, index) => ({
          imgUrl: member.picture.large,
          name: member.name.first + " " + member.name.last,
          position:
            index === 0
              ? "Product Developer"
              : index === 1
              ? "Front-End Developer"
              : index === 2
              ? "Product Designer"
              : "CEO & Sr Developer",
        }));
        setTeamData(teamMembers);
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    };

    fetchData();
  }, []); // empty dependency array to ensure effect runs only once

  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet with <span className="highlight">our team</span>
          </h2>
        </div>

        <div className="team__wrapper">
          {teamData.map((member, index) => (
            <div className="team__item" key={index}>
              <div className="team__img">
                <img src={member.imgUrl} alt={member.name} />
              </div>
              <div className="team__details">
                <h4>{member.name}</h4>
                <p className="description">{member.position}</p>

                <div className="team__member-social">
                  <span>
                    <i className="ri-linkedin-line"></i>
                  </span>
                  <span>
                    <i className="ri-twitter-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
