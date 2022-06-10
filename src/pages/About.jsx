import React from "react";
import Navbar from "../components/Navbar";
import FooterVertical from "../components/FooterVertical";
const About = () => {
  return (
    <div>
      <div className="about-bgImg-container">
        <Navbar />
        <div className="about__bio-image">
          <h2>BIO</h2>
          <p>
            Hi! Ich bin Mustafa, geboren und aufgewachsen in der Türkei . 2013
            habe ich mein Studium zum Jura abgeschlossen. Danach habe ich vier
            Jahre bei Verteidigungsministerium gearbeitet. Im Jahr 2018 bin ich
            nach Deutschland gekommen. Nun habe ich eine C1 Hochschule
            Sertifikate und Im September 2021 habe meine 9- monatige
            Weiterbildung “Web-Entwicklung Full stack” in einen Intensivkurs bei
            Firma Clarusway angefangen. Innerhalb kürzester Zeit konnte ich
            Kenntnisse in HTML5, CSS3, SASS, Javascript, JS-Libraries (React)
            und Python (Django) erwerben und anwenden. Ich habe selbstständig
            und im Team praktische IT-Projekte geplant und umgesetzt. Darüber
            hinaus arbeite ich gerne im Team.
          </p>
        </div>
      </div>
      <main className="about">
        <div className="about__container">
          <div className="about__job">
            <h2 className="text-secondary">2021 - 2022</h2>
            <h3>CLARUSWAY</h3>
            <h6>Full Stack Developer</h6>
            <p>
              Clarusway ist ein AZAV zertifizierter Bildunsträger. Sie sind auch
              in Deutschland seit Februar 2021 tätig und bieten berufliche
              Weiterbildungen in den Bereichen Full Stack Development, AWS Cloud
              Engineering, DevOps Engineering, Data Analysis, Machine/Deep
              Learning, Cyber Security an. Clarusway ist ein in Deutschland
              anerkannter AZAV zertifizierter Bildunsträger.
            </p>
          </div>
          <div className="about__job">
            <h2 className="text-secondary">2013 - 2017</h2>
            <h3>türkische Marine</h3>
            <p>Jurist</p>
          </div>
          <div className="about__job">
            <h2 className="text-secondary">2009 - 2013</h2>
            <h3>Istanbul Universität</h3>
            <h6>Jura</h6>
            <p>
              Ich habe in der Türkei Jura studiert und habe bis meine Ankunft
              nach Deutschland als Juris gearbeitet.
            </p>
          </div>
        </div>
      </main>
      <FooterVertical />
    </div>
  );
};

export default About;
