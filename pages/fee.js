/* eslint-disable @next/next/no-img-element */
import React from "react";

const Fee = () => {
  return (
    <section className="main_parent">
      <section className="fee_program_header">
        <div className="container">
          <div className="header_fee">
            <div>
              <h2>Affordable financing options for</h2>
              <h2 className="company">TS4U</h2>
              <h3>Program: CloudOps Engineer/DevOps/Aws Cloud Engineer</h3>
              <p>Powered by TS4U </p>
            </div>
            <div>
              <img src="https://i.ibb.co/f1dXWBZ/cloud-computing-2.gif" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="para_text container">
        <p>
          At Climb, we strive to only work with programs that consistently improve graduates’ earning potential andjustify the cost of tuition. We’re
          proud to offer financing for TS4U to help their students pursue life- <br /> changing educational programs.
        </p>
      </section>
      <div className="apply_row container">
        <div className="each_column">
          <div>
            <img src="https://i.ibb.co/Vm0Vnsd/tag-3.png" alt="" />
          </div>
          <p>See your offer immediately</p>
        </div>
        <div className="each_column">
          <div>
            <img src="https://i.ibb.co/RSQM8Yz/credit-card-2.png" alt="" />
          </div>
          <p>Applying does notimp your credit score.</p>
        </div>
        <div className="each_column">
          <div>
            <img src="https://i.ibb.co/JQj06wZ/business-and-finance-1.png" alt="" />
          </div>
          <p>Apply with a qualifyingco-borrwer to geta better rate.</p>
        </div>
        <div className="each_column">
          <div>
            <img src="https://i.ibb.co/xqjvgFx/chat-1.png" alt="" />
          </div>
          <p>Receive support from ourteam M-F 9am–9pm ET.</p>
        </div>
      </div>
      <div className="payment_text container">
        <h2>Sample Payment Options</h2>
        <p>Sample loan for representative purposes. Actual terms may vary based on a number of factors.</p>
      </div>

      <div className="first_plan ">
        <div className="container">
          <h2>Climb Loan</h2>
          <div className="fee_plan_row">
            <div>
              <h2>
                Loan amount <sup>2</sup>
              </h2>
              <p>$12,000</p>
            </div>
            <div>
              <h2>
                Term (months) <sup>3</sup>
              </h2>
              <p>$12,000</p>
            </div>
            <div>
              <h2>
                Loan amount <sup>4</sup>
              </h2>
              <p>$12,000</p>
            </div>
            <div>
              <h2>
                Loan amount <sup>5</sup>
              </h2>
              <p>$12,000</p>
            </div>
            <div>
              <h2>
                Loan amount <sup>6</sup>
              </h2>
              <p>$12,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fee;
