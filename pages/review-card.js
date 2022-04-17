/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  /* useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1500,
      easing: "ease",
    });
  }, []); */
  return (
    <div style={{ background: "#062530" }}>
      <section className="review_card container">
        <div className="review_main">
          <div className="parent">
            <div>
              <h2>
                <i>
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, hic! Numquam aspernatur, iste ad pariatur enim unde
                  exercitationem aut accusamus?"
                </i>
                <img className="rating" src="https://i.ibb.co/rxZ2mCS/animation-200-l22xtjgl.gif" alt="" />
              </h2>
            </div>
            <div>
              <img style={{ borderRadius: "5%" }} src="https://i.ibb.co/HFbZkbD/1649525102751-demo.png" alt="" />
              <h1>Al Amin</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
