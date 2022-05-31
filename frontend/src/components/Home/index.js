import "./Home.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import gif from "../../imgs/testcase.gif";
function Home() {
  return (
    <>
      <section className="about-area" id="about">
        <div className="text-part">
          <h1>SheepNote</h1>
          <p>
            <img className="gif" src={gif} alt="loading..." /> Save 40% on
            Personal And get your plans off the ground. Ends 6/5.
          </p>
        </div>
      </section>
      <section className="port-area" id="portfolio">
        <div className="text-part">
          <h1>Portfolio Area</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid
            atque commodi dolor est nobis veniam! Eius rerum, unde. Accusamus
            corporis esse eveniet exercitationem fugiat harum pariatur sequi
            similique tenetur vitae. Aliquam amet est excepturi, exercitationem
            facere fugit ipsa laborum molestiae nemo officiis placeat quos
            repellat saepe temporibus voluptatum.
          </p>
        </div>
      </section>
      <section className="service-area" id="services">
        <div className="text-part">
          <h1>Services Area</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid
            atque commodi dolor est nobis veniam! Eius rerum, unde. Accusamus
            corporis esse eveniet exercitationem fugiat harum pariatur sequi
            similique tenetur vitae. Aliquam amet est excepturi, exercitationem
            facere fugit ipsa laborum molestiae nemo officiis placeat quos
            repellat saepe temporibus voluptatum.
          </p>
        </div>
      </section>
      <section className="contact-area" id="contact">
        <div className="text-part">
          <h1>Contact Area</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid
            atque commodi dolor est nobis veniam! Eius rerum, unde. Accusamus
            corporis esse eveniet exercitationem fugiat harum pariatur sequi
            similique tenetur vitae. Aliquam amet est excepturi, exercitationem
            facere fugit ipsa laborum molestiae nemo officiis placeat quos
            repellat saepe temporibus voluptatum.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
