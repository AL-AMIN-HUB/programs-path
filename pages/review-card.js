/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import AOS from "aos";

const Review = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1500,
      easing: "ease",
    });
  }, []);
  return (
    <section className="review_card container">
      <div className="review_main">
        <div className="parent">
          <div>
            <h2>
              <i>
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, hic! Numquam aspernatur, iste ad pariatur enim unde
                exercitationem aut accusamus?"
              </i>
            </h2>
          </div>
          <div>
            <img style={{ borderRadius: "5%" }} src="https://i.ibb.co/HFbZkbD/1649525102751-demo.png" alt="" />
            <h1>Al Amin</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
