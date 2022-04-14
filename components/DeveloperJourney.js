/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6, RiNumber7, RiNumber8, RiNumber9 } from "react-icons/ri";
import { AiOutlineBars, AiFillStar } from "react-icons/ai";

const DeveloperJourney = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "rgba(0,0,0,0.7)" }} className="header_content_main">
        Your Learning Path
      </h2>

      {/* use react package: react-verticalTimeLine */}
      <VerticalTimeline layout={"1 - column - left"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#062530", color: "#fff" }}
          icon={<RiNumber1 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">HTML and CSS: Learn the Basics of Web Development</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            HTML and CSS is a match made in heaven. Learn how to create the structure for your website and to spice things up with eye-catching
            styles!
          </p>
          <div className="learning_path">
            <div>
              <img style={{ width: "100%", margin: "10px 0" }} src="https://i.ibb.co/6WL2W9v/coding-for-beginners-space-doggos.jpg" alt="" />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small className="span">TS4UNannoDegree ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 17 Lecture
                    </small>
                  </p>
                </div>
              </div>
              <h2>Introducing Coding for Beginners: an HTML and CSS Online Course</h2>
              <p className="learning_sub_title">
                <small>Introducing Coding for Beginners: an HTML and CSS Online Course</small>
              </p>
              <button className="path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#062530", color: "#fff" }}
          icon={<RiNumber2 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">Add Responsive Design to Your Web App</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            You cannot avoid mobile devices. Therefore, you need to learn the steps of making your site responsive: capable of adapting to different
            screens.
          </p>
          <div className="learning_path">
            <div>
              <img style={{ width: "100%", margin: "10px 0" }} src="https://i.ibb.co/3y7V2JY/file-371-k-ZFJTLrg-Bwudl5xb.jpg" alt="" />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small className="span">TS4UNannoDegree ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 17 Lecture
                    </small>
                  </p>
                </div>
              </div>
              <h2>A Responsive Web Design Course: Find Out How to Create a Responsive Website</h2>
              <p className="learning_sub_title">
                <small>Learn how to make website mobile friendly with a responsive web design tutorial step by step!</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#062530", color: "#fff" }}
          icon={<RiNumber3 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">Use Bootstrap for Faster Web Development</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            Bootstrap is the ultimate source, helping to expedite web development. It offers dozens of pre-written styles for HTML elements that you
            can incorporate into your code immediately.
          </p>
          <div className="learning_path">
            <div>
              <img style={{ width: "100%", margin: "10px 0" }} src="https://i.ibb.co/Htj2szh/file-377-Np14n-SLj1d-RNKd-Os.jpg" alt="" />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small className="span">TS4UNannoDegree ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 8 Lecture
                    </small>
                  </p>
                </div>
              </div>
              <h2>Bootstrap Tutorial: Learn to Create Dynamic Websites In a Pinch</h2>
              <p className="learning_sub_title">
                <small>Find out how to use Bootstrap the fun way by using an interactive Bootstrap course!</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#062530", color: "#fff" }}
          icon={<RiNumber4 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">Adding Interactivity to Your Website With JavaScript</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            Ready to add some interactivity into the mix? In the most general sense, interactivity will reassure that your website reacts to users’
            input.
          </p>
          <div className="learning_path">
            <div>
              <img style={{ width: "100%", margin: "10px 0" }} src="https://i.ibb.co/M9sBPfZ/javascript-course.jpg" alt="" />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small className="span">TS4UNannoDegree ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 94 Lecture
                    </small>
                  </p>
                </div>
              </div>
              <h2>An Interactive JavaScript Course for Beginners</h2>
              <p className="learning_sub_title">
                <small>Learn JavaScript interactively with a one-of-a-kind JavaScript online course!</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#062530", color: "#fff" }}
          icon={<RiNumber5 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">Expand Standard JavaScript With jQuery</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            In some cases, the features in the standard JavaScript library are no longer enough. jQuery is a popular source for extending the
            possibilities of JavaScript.
          </p>
          <div className="learning_path">
            <div>
              <img style={{ width: "100%", margin: "10px 0" }} src="https://i.ibb.co/VBBFXVX/jquery-tutorial.jpg" alt="" />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small className="span">TS4UNannoDegree ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 17 Lecture
                    </small>
                  </p>
                </div>
              </div>
              <h2>Interactive jQuery Tutorial: Learn jQuery Step-by-Step</h2>
              <p className="learning_sub_title">
                <small>Take an interactive jQuery training course for beginners to quickly master jQuery events, effects and more!</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#062530", color: "#fff" }}
          icon={<RiNumber6 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">
            Trying it All: The Use of HTML, CSS, Bootstrap 4, ES6 React and Node
          </h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            Get some hands-on experience with all essential tools for web development. Combine the features of HTML, CSS, Bootstrap, and JavaScript to
            get the first impression of them all working together.
          </p>
          <div className="learning_path">
            <div>
              <img style={{ width: "100%", margin: "10px 0" }} src="https://i.ibb.co/wL3YSYd/full-stack-web-development.jpg" alt="" />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small className="span">TS4UNannoDegree ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 126 Lecture
                    </small>
                  </p>
                </div>
              </div>
              <h2>Comprehensive Full Stack Web Development Course for Beginners</h2>
              <p className="learning_sub_title">
                <small>An HTML, CSS, Bootstrap 4, ES6 React and Node Web Development Tutorial</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#062530", color: "#fff" }}
          icon={<RiNumber7 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">Cover All PHP Basics Now!</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            PHP will give you power to write the logic behind the main components of the server-side. This is an introduction to basic PHP features
            such as loops, control fow, functions, arrays, and more.
          </p>
          <div className="learning_path">
            <div>
              <img style={{ width: "100%", margin: "10px 0" }} src="https://i.ibb.co/jJW8gFv/learn-php.jpg" alt="" />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small className="span">TS4UNannoDegree ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 71 Lecture
                    </small>
                  </p>
                </div>
              </div>
              <h2>Learn PHP Online: PHP Basics Explained in an Interactive and Fun Manner</h2>
              <p className="learning_sub_title">
                <small>An interactive PHP tutorial for beginners who want to master PHP basics in a non-boring way!</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#062530", color: "#fff" }}
          icon={<RiNumber8 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">Learn How to Build Blogs With PHP</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            Want to create a blog for yourself or a potential client? Explore the possibilities of doing it on your own with PHP.
          </p>
          <div className="learning_path">
            <div>
              <img style={{ width: "100%", margin: "10px 0" }} src="https://i.ibb.co/3BrL6D0/619452-ywozltwsex-create-a-blog-with-php.jpg" alt="" />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small className="span">TS4UNannoDegree ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 10 Lecture
                    </small>
                  </p>
                </div>
              </div>
              <h2>Bootstrap and PHP Blog Tutorial Step by Step</h2>
              <p className="learning_sub_title">
                <small>Easy to follow PHP blog tutorial: learn how to code a blog from scratch using PHP and Bootstrap</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#062530", color: "#fff" }}
          icon={<RiNumber9 />}
        >
          <h3 className="vertical-timeline-element-title learning_path_title">PHP and Wordpress: Creating Custom Themes</h3>
          <p className="vertical-timeline-element-subtitle learning_sub_title">
            Learn how to build custom themes for WordPress websites. Get creative and make your website stand out.
          </p>
          <div className="learning_path">
            <div>
              <img style={{ width: "100%", margin: "10px 0" }} src="https://i.ibb.co/859MCLD/wordpress-for-web-development.jpg" alt="" />{" "}
            </div>
            <div>
              <div className="learning_path_inside">
                <p className="learning_sub_title">
                  <small className="span">TS4UNannoDegree ©</small>
                </p>
                <div className="sub_path">
                  <p>
                    {" "}
                    <small>
                      {" "}
                      <AiOutlineBars className="icon_path" /> 17 Lecture
                    </small>
                  </p>
                </div>
              </div>
              <h2>Learn WordPress Development to Create Custom Themes For Yourself and Your Clients!</h2>
              <p className="learning_sub_title">
                <small>This is an in-depth Wordpress tutorial for developers to learn Wordpress development with confidence.</small>
              </p>
              <button className="custom_bg path_btn">See Your Learning Path</button>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#062530", color: "#fff" }}
          icon={<AiFillStar />}
        ></VerticalTimelineElement>
      </VerticalTimeline>
      <div className="expert_div">
        <h2 style={{ color: "rgba(0,0,0,0.5)" }} className="header_content_main">
          You will learn from these experts
        </h2>
        <div className="expert">
          <div>
            <img src="https://i.ibb.co/NrFkvNj/mark-price.jpg" alt="" />
          </div>
          <div>
            <p>Mark Price</p>
            <p>
              <small>
                Mark is obsessed with creating in-depth, very detailed online tutorials on many topics related to development. He’s a CEO of
                Devslopes, and a valuable resource in your career path.
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className="learning_system">
        <div>
          <div className="system_info">
            <div className="icon">
              <img src="https://i.ibb.co/7QW8qPx/rating.png" alt="" />
            </div>
            <div className="system">
              <h3>Best experts for your best experience</h3>
              <p>Learn from real experts in their fields who share their knowledge and practical know-how.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="system_info">
            <div className="icon">
              <img src="https://i.ibb.co/PGppyy2/testing.png" alt="" />
            </div>
            <div className="system">
              <h3>Practical tasks for real learning</h3>
              <p>Find opportunities to practice with code examples, practical tasks, learning missions, etc.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="system_info">
            <div className="icon">
              <img src="https://i.ibb.co/tCTsBv9/network.png" alt="" />
            </div>
            <div className="system">
              <h3>Tamper-proof certificates</h3>
              <p>On TS4U, you'll be able to receive a Blockchain certificate that is immune to falsification.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="system_info">
            <div className="icon">
              <img src="https://i.ibb.co/nwzjXPG/ribbon.png" alt="" />
            </div>
            <div className="system">
              <h3>Receive a course completion certificate</h3>
              <p>Prove what you’ve learned to anyone who asks, and hang sweet additions to your wall of achievements.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="system_info">
            <div className="icon">
              <img src="https://i.ibb.co/ZBt9t2N/puzzle.png" alt="" />
            </div>
            <div className="system">
              <h3>Gamified coding courses</h3>
              <p>Feel even more motivated to get skills for your career with a number of gaming elements!</p>
            </div>
          </div>
        </div>
        <div>
          <div className="system_info">
            <div className="icon">
              <img src="https://i.ibb.co/wYsm57B/briefcase.png" alt="" />
            </div>
            <div className="system">
              <h3>Get your dream job</h3>
              <p>Increase your chances to secure a job that you dream of by focusing on the skills that you actually need.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperJourney;
