import "./Home.css";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <section className="about-area" id="about">
        <div className="text-part">
          <h1>About Area</h1>
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
