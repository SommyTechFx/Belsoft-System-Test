import React from "react";
import "../Styles/Offer.css";
import purple_dot from "../../Assets/Ellipse 308.png";
import plus from "../../Assets/plus 1.png";
const Offer = () => {
  return (
    <section className="total-what-we-do">
      <div className="do-title">
        <h1>What We Offer</h1>
      </div>
      <div className="total-do-section">
        <div className="do-section">
          <img src={purple_dot} alt="" className="dot-img" />
          <h1>Monthly Meetups</h1>
          <p>
            Our cornerstone event, held on the last Friday of every month,
            featuring keynote speakers, panel discussions, and ample networking
            opportunities.
          </p>
          <img src={plus} alt="" className="plus-img" />
        </div>
        <div className="do-section">
          <img src={purple_dot} alt="" className="dot-img" />
          <h1>Monthly Meetups</h1>
          <p>
            Our cornerstone event, held on the last Friday of every month,
            featuring keynote speakers, panel discussions, and ample networking
            opportunities.
          </p>
          <img src={plus} alt="" className="plus-img" />
        </div>
        <div className="do-section">
          <img src={purple_dot} alt="" className="dot-img" />
          <h1>Monthly Meetups</h1>
          <p>
            Our cornerstone event, held on the last Friday of every month,
            featuring keynote speakers, panel discussions, and ample networking
            opportunities.
          </p>
          <img src={plus} alt="" className="plus-img" />
        </div>
        <div className="do-section">
          <img src={purple_dot} alt="" className="dot-img" />
          <h1>Monthly Meetups</h1>
          <p>
            Our cornerstone event, held on the last Friday of every month,
            featuring keynote speakers, panel discussions, and ample networking
            opportunities.
          </p>
          <img src={plus} alt="" className="plus-img" />
        </div>
        <div className="do-section">
          <img src={purple_dot} alt="" className="dot-img" />
          <h1>Monthly Meetups</h1>
          <p>
            Our cornerstone event, held on the last Friday of every month,
            featuring keynote speakers, panel discussions, and ample networking
            opportunities.
          </p>
          <img src={plus} alt="" className="plus-img" />
        </div>
      </div>
    </section>
  );
};

export default Offer;
