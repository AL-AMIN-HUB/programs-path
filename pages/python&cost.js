/* eslint-disable @next/next/no-img-element */
import React from "react";

const Python = () => {
  return (
    <section className="main_parent">
      <section className="fee_program_header">
        <div className="container">
          <div className="header_fee">
            <div>
              <h2>Affordable financing options for</h2>
              <h2 className="company">TS4U</h2>
              <h3>Program: Python Software Engineer</h3>
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
          At Climb, we strive to only work with programs that consistently improve graduates’ earning potential and justify the cost of tuition. We’re
          proud to offer financing for TS4U to help their students pursue life- <span>changing their career!.</span>
        </p>
      </section>
      <h2 style={{ textAlign: "center", fontSize: "38px" }}>Apply Online In Minutes</h2>
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
          <p>Applying does not impact your credit score.</p>
        </div>
        <div className="each_column">
          <div>
            <img src="https://i.ibb.co/JQj06wZ/business-and-finance-1.png" alt="" />
          </div>
          <p>Apply with a qualifying co-borrower to get a better rate.</p>
        </div>
        <div className="each_column">
          <div>
            <img src="https://i.ibb.co/xqjvgFx/chat-1.png" alt="" />
          </div>
          <p>Receive support from our team M-F 9am–9pm ET.</p>
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
              <h3>
                Loan amount<sup>2</sup>
              </h3>

              <p>$15,000</p>
            </div>
            <div>
              <h3>
                Term (months)<sup>3</sup>
              </h3>
              <p>72</p>
            </div>
            <div>
              <h3>
                Interest rate<sup>5</sup>
              </h3>
              <p>7.99%</p>
            </div>
            <div>
              <h3>
                APR<sup>6</sup>
              </h3>
              <p>9.76%</p>
            </div>
            <div>
              <h3>Principle & Interest Payments</h3>
              <p>$276</p>
            </div>
          </div>
        </div>
      </div>
      <div className="second_plan ">
        <div className="container">
          <h2>Climb Loan With Interest-Only Period</h2>
          <div className="fee_plan_row">
            <div>
              <h3>
                Loan amount<sup>2</sup>
              </h3>

              <p>$15,000</p>
            </div>
            <div>
              <h3>
                Term (months)<sup>4</sup>
              </h3>
              <p>72</p>
            </div>
            <div>
              <h3>
                Interest rate<sup>5</sup>
              </h3>
              <p>7.99%</p>
            </div>
            <div>
              <h3>
                APR<sup>6</sup>
              </h3>
              <p>9.51%</p>
            </div>
            <div>
              <h3>Interest only payment</h3>
              <p>$105</p>
            </div>
            <div>
              <h3>Principle & Interest Payments </h3>
              <p>$333</p>
            </div>
          </div>
        </div>
      </div>
      <section className="footer">
        <div className="container">
          <h2>
            <a href="https://meetclimb.com/ts4u">Meetclimb.com/ts4u</a>
          </h2>
          <ol>
            <li>
              {" "}
              To check the rates and terms you qualify for and your eligibility, Climb conducts a soft credit pull that will not affect your credit
              score. Once a loan is accepted andfunded, we will request your full credit report from one or more consumer reporting agencies, which is
              considered a hard credit pull and may affect your credit.
            </li>
            <li>Finance up to full tuition.</li>
            <li>Sample 60-month term includes 60 months of principal and interest payments. Terms vary by program.</li>
            <li>
              {" "}
              Sample 60-month term includes 15 months of interest-only payments flilowed by 45 months of principal and interest payments. Terms vary
              by program.
            </li>
            <li>
              {" "}
              Interest rates are fixed from 5.99%; however, actual interest rates vary within this range based on a number of factors. Interest-rate
              caps may be lower in somestates due to legal requirements and may impact your eligibility to qualify for a Climb loan.
            </li>
            <li>
              {" "}
              Annual percentage rates (“APRs”) on loans range from 0.00%–26.47%. Interest rate caps may be lower in some states due to state
              requirements. APRs arecharged for borrowing and are expressed as a percentage that represents the actual yearly cost of funds over the
              term of a loan. The APR includes a 5% originationfee, where permissible.Loan approval subject to full underwriting. Loans are originated
              by Climb Investco, LLC (Registered as Climb Credit Investco, LLC in Florida). TS4U does not endorseloans originated by Climb Investco,
              LLC and Climb Investco, LLC is not affiliated with TS4U. California Finance Lender #60DBO-44527. NMLS Consumer Access(NMLS# 1240013).
            </li>
          </ol>
        </div>
      </section>
    </section>
  );
};

export default Python;
