/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";

const CloudOps = () => {
  return (
    <section className="cloudOps_section">
      <div className="main_container">
        {/* 1st step  */}
        <div className="container learningPath_main">
          <div className="col_learning1">
            <h3>1 STEP</h3>
            <h2>GET YOUR BASICS RIGHT</h2>
            <p>
              Begin your journey in DevOps and Cloud Computing by setting your basics right. These courses help you clear your basics in Linux,
              networking, applications, build and release procedures.
            </p>
            <div className="icon_scroll">
              <div className="icon_learning1">
                <a href="#step2">
                  {" "}
                  <AiOutlineArrowDown className="item_icon2" />
                </a>
              </div>
              <div>
                <p className="text_icon">
                  scroll to <span>STEP 2</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col_learning2">
            <div className="col_svg">
              <div className="svg_line">
                <img src="https://i.ibb.co/HXZ92XY/path1.png" alt="" />
              </div>

              <button type="submit" className="btn_learning_path">
                CONTAINERS
              </button>
            </div>
            <div className="item_svg3 svg_line">
              <img src="https://i.ibb.co/vvS6FWv/path2.png" alt="" />
            </div>
            <div className="item_svg4 svg_line">
              <img src="https://i.ibb.co/D1m4K1J/download.png" alt="" />
            </div>
            <button type="submit" className="btn_learning_path2">
              AUTOMATION
            </button>
            <div>
              <div className="img_main">
                <img style={{ width: "100%" }} src="https://i.ibb.co/ZBgjmkM/1641821040165-System-Engineer-removebg-preview.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col_learning3">
            <div className="col_svg2 svg_line">
              <img src="https://i.ibb.co/MBYz6Xr/path3.png" alt="" />
            </div>
            <div>
              <div className="img_main2">
                <img src="https://i.ibb.co/VjgTVjR/linux-01.png" alt="" />
              </div>
              <div className="item_desc">
                <div>
                  <p>Course</p>
                  <h2>Linux Basics</h2>
                </div>
                <div>
                  <BsArrowRightShort className="item_icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* step 2 */}
      <div id="step2" className="container second_path_learning">
        <div className="col_learning1">
          <h3>2 STEP</h3>
          <h2>BEGINNERS</h2>
          <p>Start your DevOps journey by learning the basics of popular DevOps tools along with real scenarios and practice labs.</p>
        </div>
        <div className="col_learning5">
          <div>
            <img className="img_path2" src="https://i.ibb.co/1R34hH9/Cloud-Ops-Program-Module-Card-216155-10.png" alt="" />
          </div>
          <div>
            <div className="item_path">
              <p>Course</p>
              <h4>Git for Beginners</h4>
            </div>
          </div>
          <div className="path_5 svg_line">
            <img src="https://i.ibb.co/BrRsj23/download-2.png" alt="" />
          </div>
          <div className="path_6 svg_line">
            <img src="https://i.ibb.co/SsVv7DV/download-1.png" alt="" />
          </div>
          <div className="path_7 svg_line">
            <img src="https://i.ibb.co/s9k6fhN/download-3.png" alt="" />
          </div>
          <div className="path_8 svg_line">
            <img src="https://i.ibb.co/Gcg4J4V/download-4.png" alt="" />
          </div>
        </div>
        <div className="col_learning6">
          <div>
            <img style={{ width: "100%" }} className="img_path2" src="https://i.ibb.co/mygrv0H/Cloud-Ops-Program-Module-Card-216155-12.png" alt="" />
          </div>
          <div>
            <div className="item_path">
              <p>Course</p>
              <h4>Shell Scripts for Beginners</h4>
            </div>
          </div>
        </div>
      </div>

      {/* step 3 */}
      <div className="container third_path_learning">
        <div></div>
        <div>
          {" "}
          <div className="col_learning7">
            <div>
              <img style={{ width: "100%" }} className="img_path7" src="https://i.ibb.co/9gnQLym/Docker.png" alt="" />
            </div>
            <div>
              <div className="item_path">
                <p>Course</p>
                <h4>Docker for the Absolute Beginners</h4>
              </div>
            </div>
            <div className="path_svg6 svg_line">
              <img src="https://i.ibb.co/0jh4kjh/download.png" alt="" />
            </div>
            <div className="path_svg7 svg_line">
              <img src="https://i.ibb.co/BzLp6Bx/download-3.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="col_learning8">
            <div>
              <img
                style={{ width: "100%" }}
                className="img_path8"
                src="https://i.ibb.co/bWMWVkq/Cloud-Ops-Program-Module-Card-216155-11.png"
                alt=""
              />
            </div>
            <div>
              <div className="item_path">
                <p>Course</p>
                <h4>Python for the Absolute Beginners</h4>
              </div>
            </div>
            <div className="path_svg8 svg_line">
              <img src="https://i.ibb.co/GMbRQHd/download-4.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="col_learning9">
            <div>
              <img style={{ width: "100%" }} className="img_path9" src="https://i.ibb.co/6gMbfmg/Web-Sever.png" alt="" />
            </div>
            <div>
              <div className="item_path">
                <p>Course</p>
                <h4>Web Server for the Absolute Beginners</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* step 4 */}
      <div className="container fourth_path_learning">
        <div>
          {" "}
          <div className="col_learning10">
            <div>
              <img style={{ width: "100%" }} className="img_path7" src="https://i.ibb.co/VNmN89S/Docker-Swam.png" alt="" />
            </div>
            <div>
              <div className="item_path">
                <p>Course</p>
                <h4>Docker - SWARM SERVICES STACK</h4>
              </div>
            </div>
            <div className="svg_path9 svg_line">
              <img src="https://i.ibb.co/87Yc4DV/download-2.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="col_learning11">
            <div>
              <img
                style={{ width: "100%" }}
                className="img_path7"
                src="https://i.ibb.co/BfLqGpL/GITLAB-CICD-WITH-DEPLOY-ON-S3-AND-KUBERNETES.png"
                alt=""
              />
            </div>
            <div>
              <div className="item_path">
                <p>Course</p>
                <h4>Kubernetes for the Absolute Beginners - Hands on</h4>
              </div>
            </div>
            <div className="svg_path10 svg_line">
              <img src="https://i.ibb.co/Z8WhKDY/download-5.png" alt="" />
            </div>
            <div className="svg_path11 svg_line">
              <img src="https://i.ibb.co/BzLp6Bx/download-3.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="col_learning12">
            <div>
              <img style={{ width: "100%" }} className="img_path7" src="https://i.ibb.co/PTbtx16/course-image-docker-2.png" alt="" />
            </div>
            <div>
              <div className="item_path">
                <p>Course</p>
                <h4>Puppet for the Absolute Beginners</h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="col_learning13">
            <div>
              <img style={{ width: "100%" }} className="img_path7" src="https://i.ibb.co/PTbtx16/course-image-docker-2.png" alt="" />
            </div>
            <div>
              <div className="item_path">
                <p>Course</p>
                <h4>TerraForm for the Absolute Beginners</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fifth_bg">
        <div className="container fifth_path_learning">
          <div>
            <div className="icon_scroll2">
              <div className="icon_learning2">
                <AiOutlineArrowDown className="item_icon2" />
              </div>
              <div>
                <p className="text_icon2">
                  scroll to <span>STEP 3</span>
                </p>
              </div>
            </div>
            <h3 style={{ color: "orange" }}>3 STEP</h3>
            <h2 style={{ fontSize: "32px", margin: "1em 0" }}>ADVANCED</h2>
            <p style={{ color: "#809ECC", fontSize: "18px" }}>
              Stand out among the crowd with the top certifications in the IT industry. Go in-depth with these technologies with our advanced courses
              and mock exams that help you clear your certifications.
            </p>
          </div>
          <div>
            {" "}
            <div>
              {" "}
              <div className="col_learning14">
                <div>
                  <img style={{ width: "100%" }} className="img_path7" src="https://i.ibb.co/xf4Rs0y/Kubernetes.png" alt="" />
                </div>
                <div>
                  <div className="item_path">
                    <p>Course</p>
                    <h4>Certified Kubemetes Administrator (CKA) with Practice Tests</h4>
                  </div>
                </div>
                <div className="img_path14 svg_line">
                  <img src="https://i.ibb.co/FszPn1B/download.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div>
              {" "}
              <div className="col_learning15">
                <div>
                  <img style={{ width: "100%" }} className="img_path7" src="https://i.ibb.co/gTY54rd/Self-Managed-Kubernetes.png" alt="" />
                </div>
                <div>
                  <div className="item_path">
                    <p>Course</p>
                    <h4>Certified Kubemetes Application Developer (CKAD)</h4>
                  </div>
                </div>
                <div className="img_path15 svg_line">
                  <img src="https://i.ibb.co/0s6wptX/download-7.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div className="container six_path_learning">
          <div>
            {" "}
            <div>
              {" "}
              <div className="col_learning16">
                <div>
                  <img style={{ width: "100%" }} className="img_path7" src="https://i.ibb.co/fpNG2Kw/download-7.png" alt="" />
                </div>
                <div>
                  <div className="item_path">
                    <p>Course</p>
                    <h4>Docker - SWARM SERVICES STACK</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div>
              {" "}
              <div className="col_learning17">
                <div>
                  <img style={{ width: "100%" }} className="img_path7" src="https://i.ibb.co/jkB4QJM/DNS-for-Kubernetes.png" alt="" />
                </div>
                <div>
                  <div className="item_path">
                    <p>Course</p>
                    <h4>Docker - SWARM SERVICES STACK</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div>
              {" "}
              <div className="col_learning18">
                <div>
                  <img style={{ width: "100%" }} className="img_path7" src="https://i.ibb.co/Mgwnhv6/course-image-openshift.png" alt="" />
                </div>
                <div>
                  <div className="item_path">
                    <p>Course</p>
                    <h4>Docker - SWARM SERVICES STACK</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div>
              {" "}
              <div className="col_learning19">
                <div>
                  <img style={{ width: "100%" }} className="img_path7" src="https://i.ibb.co/n3590zh/course-image-ansible-cert.png" alt="" />
                </div>
                <div>
                  <div className="item_path">
                    <p>Course</p>
                    <h4>Docker - SWARM SERVICES STACK</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* job support start */}
        <div style={{ marginTop: "100px" }} className="container six_path_learning">
          <div>
            {" "}
            <div>
              {" "}
              <div className="col_learning20">
                <div>
                  <div className="icon_scroll2">
                    <div className="icon_learning2">
                      <AiOutlineArrowDown className="item_icon2" />
                    </div>
                    <div>
                      <p className="text_icon3">
                        scroll to <span>STEP 4</span>
                      </p>
                    </div>
                  </div>
                  <h3 style={{ color: "orange" }}>4 STEP</h3>
                  <h2 style={{ fontSize: "32px", margin: "1em 0" }}>JOB SUPPORT</h2>
                  <p style={{ color: "#809ECC", fontSize: "18px" }}>
                    Stand out among the crowd with the top certifications in the IT industry. Go in-depth with these technologies with our advanced
                    courses and mock exams that help you clear your certifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div>
              {" "}
              <div className="col_learning21">
                <div>
                  <img
                    style={{ width: "100%" }}
                    className="img_path7"
                    src="https://i.ibb.co/1R34hH9/Cloud-Ops-Program-Module-Card-216155-10.png"
                    alt=""
                  />
                </div>
                <div>
                  <div className="item_path">
                    <p>Course</p>
                    <h4>Docker - SWARM SERVICES STACK</h4>
                  </div>
                </div>
                <div className="svg_path21 svg_line">
                  <img src="https://i.ibb.co/Z8WhKDY/download-5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div>
              {" "}
              <div className="col_learning22">
                <div>
                  <img
                    style={{ width: "100%" }}
                    className="img_path7"
                    src="https://i.ibb.co/bWMWVkq/Cloud-Ops-Program-Module-Card-216155-11.png"
                    alt=""
                  />
                </div>
                <div>
                  <div className="item_path">
                    <p>Course</p>
                    <h4>Docker - SWARM SERVICES STACK</h4>
                  </div>
                </div>
                <div className="svg_path22 svg_line">
                  <img src="https://i.ibb.co/923jT6W/path3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div>
              {" "}
              <div className="col_learning23">
                <div>
                  <img
                    style={{ width: "100%" }}
                    className="img_path7"
                    src="https://i.ibb.co/9vh74SN/Cloud-Ops-Program-Module-Card-216155-9.png"
                    alt=""
                  />
                </div>
                <div>
                  <div className="item_path">
                    <p>Course</p>
                    <h4>Docker - SWARM SERVICES STACK</h4>
                  </div>
                </div>
                <div className="svg_path23 svg_line">
                  <img src="https://i.ibb.co/923jT6W/path3.png" alt="" />
                </div>
                <div className="svg_path24 svg_line">
                  <img src="https://i.ibb.co/D5myrKp/download-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* job support second path line */}
        <div className="container last_path_learning">
          <div>
            <img src="https://i.ibb.co/SNZpyy3/job.png" alt="" />
          </div>
          <div></div>
          <div>
            {" "}
            <div>
              {" "}
              <div className="col_learning24">
                <div>
                  <img
                    style={{ width: "100%" }}
                    className="img_path7"
                    src="https://i.ibb.co/yV1014x/Cloud-Ops-Program-Module-Card-216155-8.png"
                    alt=""
                  />
                </div>
                <div>
                  <div className="item_path">
                    <p>Course</p>
                    <h4>Docker - SWARM SERVICES STACK</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://i.ibb.co/0CrjZKt/people-select-resume-job-vector-illustration-application-form-employment-people-select-resume-job-ve.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* request course section */}
      <div className="stand_section container">
        <div>
          <h2> STAND OUT!</h2>
          <p>
            Every course comes with a course completion certificate. Show <br /> off your skills to the community and stand out among others.
          </p>
        </div>
        <div>
          <img src="https://i.ibb.co/cTTCpZd/docker-certificate.png" alt="" />
        </div>
      </div>
      <div className="container last_section">
        <h2>CAN'T FIND WHAT YOU ARE LOOKING FOR?</h2>
        <button>REQUEST A COURSE</button>
      </div>
    </section>
  );
};

export default CloudOps;
