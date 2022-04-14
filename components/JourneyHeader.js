/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { ImTree } from "react-icons/im";
import { GiDeathZone } from "react-icons/gi";
import { BsBagPlus } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const JourneyHeader = () => {
  return (
    <div>
      <header>
        <div className="main_header container">
          <div>
            <h2 className="header_content_main">Web Developer</h2>
            <p className="header_desc">We've created a learning path so you can spend time learning instead of searching.</p>
            <a href="#start_journey">
              <button className="custom_bg header_btn">See Your Learning Path</button>
            </a>
          </div>
          <div className="header_img">
            <img style={{ width: "100%", height: "" }} src="https://i.ibb.co/HpwcPss/undraw-Teaching-re-g7e3.png" alt="" />
          </div>
        </div>
      </header>
      <main style={{ background: "#f8f8f8" }}>
        <div className="container row">
          <div className="first_column">
            <h2 className="row_title">Why and How to Become a Web Developer?</h2>
            <p className="large">
              Web development is always scouting for new talents. Basically, you have three options: a career in front-end or back-end. What is the
              third? The final option means that you become a true mastermind in both of these fields. However, let’s walk before we run.
              <br />
              <br />
              Front-end developers are responsible for building the user interface. They decide on the colors, fonts, sizes, and all other visual
              elements. They work hand-in-hand with web designers or are capable of being both: front-end specialists and web designers. This field is
              preferred by many because your work leads to a clear-cut visual image.
              <br />
              <br />
              For back-end developers, the situation is a little different. They work under-the-hood, reassuring that the website functions correctly,
              connects to databases, and performs other critical tasks. Therefore, their work is invisible to the naked eye since visitors are more
              inclined to react to visual elements (at least initially).
              <br />
              <br />
              In this learning path, you will be introduced to the main programming and scripting languages for web development. You will have the
              chance to learn from professionals about HTML, CSS, JavaScript, PHP, and the most widely used frameworks/libraries.
            </p>
          </div>
          <div className="second_column">
            <h2 className="row_title">Benefits for you</h2>
            <div className="benefits_items">
              <div className="items_icon">
                <ImTree />
              </div>
              <div>
                <h3 className="item_title">A structured course tree</h3>
                <p className="small_content">
                  A carefully tailored list of courses for best experience developing your skills, including only the essentials and skipping the
                  usual college surpluses.
                </p>
              </div>
            </div>
            <div className="benefits_items">
              <div className="items_icon">
                <GiDeathZone />
              </div>
              <div>
                <h3 className="item_title">Learn from experienced teachers</h3>
                <p className="small_content">Improve your skill set with proven tools, and take opportunities to practice with realistic tasks.</p>
              </div>
            </div>
            <div className="benefits_items">
              <div className="items_icon">
                <BsBagPlus />
              </div>
              <div>
                <h3 className="item_title">Get a dream job</h3>
                <p className="small_content">
                  Make additions to your resume to secure your dream job with high pay. Send applications anywhere in the world!
                </p>
              </div>
            </div>
            <div className="benefits_items">
              <div className="items_icon">
                <BsStar />
              </div>
              <div>
                <h3 className="item_title">Get skills for life</h3>
                <p className="small_content">
                  Even if you choose to stop midway, you’ll have acquired skills that you’ll be able to use in many other fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JourneyHeader;
