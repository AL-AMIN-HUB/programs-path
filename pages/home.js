/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1500,
      easing: "ease",
    });
  }, []);
  return (
    <>
      <div className="home_container">
        <section className="container">
          <div className="home">
            <div>
              <h3>TS4U</h3>
              <h2 data-aos="zoom-in-right">
                Get the best route <br /> in real time with <br /> help from yellow <br /> drivers
              </h2>
              <div data-aos="fade-up">
                <button className="button1">Download</button>
                <button className="button2">Learn More</button>
              </div>
            </div>
            <div className="header_img">
              <img src="https://i.ibb.co/wQRpR0f/rsz-1pct20-pct2010pct20greenestpct20citiespct20inpct20americapct20inpct202017.jpg" alt="" />
            </div>
          </div>
        </section>
      </div>
      <section className="container">
        {/* second slide */}
        <div className="home2">
          <div data-aos="zoom-in" className="header_img">
            <img src="https://i.ibb.co/wKnN2h8/rsz-11211306812-h.png" alt="" />
          </div>
          <div>
            <h3>TS4U</h3>
            <h2 data-aos="zoom-in-right">
              Save time & money <br /> by riding together
            </h2>
            <div data-aos="fade-up">
              <button className="button2">Learn More</button>
              <button className="button1">Download</button>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" className="chat_wrapper">
        <div className="chat"></div>
        <div className="chat_content container">
          <h2 data-aos="fade-up">Join Our Live Chat</h2>
          <button data-aos="zoom-in-up">Join Our Chat Here</button>
        </div>
      </section>
      <section className="container">
        <div className="home">
          <div>
            <h3>TS4U</h3>
            <h2 data-aos="zoom-in-right" style={{ margin: "0 10px" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis neque molestias vel quam ut?
            </h2>
          </div>
          <div data-aos="fade-up" className="header_img">
            <img src="https://i.ibb.co/wQRpR0f/rsz-1pct20-pct2010pct20greenestpct20citiespct20inpct20americapct20inpct202017.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="container app_section">
        <div className="app_main">
          <div data-aos="flip-up" className="app1">
            <div className="first_app">
              <img src="https://i.ibb.co/rwGrHk4/logo.png" alt="" />
              <h2>TS4U Platform</h2>
              <div className="app_store">
                <img data-aos="fade-up" src="https://i.ibb.co/jJpCmLm/1-2.png" alt="" />
                <img data-aos="fade-up" src="https://i.ibb.co/pXkb4BT/1-1.png" alt="" />
              </div>
            </div>
          </div>
          <div data-aos="flip-up" className="app1 app2">
            <div className="first_app">
              <img src="https://i.ibb.co/rwGrHk4/logo.png" alt="" />
              <h2>TS4U Platform</h2>
              <div className="app_store">
                <img data-aos="fade-up" src="https://i.ibb.co/jJpCmLm/1-2.png" alt="" />
                <img data-aos="fade-up" src="https://i.ibb.co/pXkb4BT/1-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
