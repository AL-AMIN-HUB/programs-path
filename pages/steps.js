/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";

const Steps = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [thirdModal, setThirdModal] = useState(false);
  const [fourModal, setFourModal] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const second = () => {
    setSecondModal(true);
  };
  const third = () => {
    setThirdModal(true);
  };
  const four = () => {
    setFourModal(true);
  };

  // ok
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleOk2 = () => {
    setSecondModal(false);
  };
  const handleOk3 = () => {
    setThirdModal(false);
  };
  const handleOk4 = () => {
    setFourModal(false);
  };

  // cancel
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCancel2 = () => {
    setSecondModal(false);
  };

  const handleCancel3 = () => {
    setThirdModal(false);
  };
  const handleCancel4 = () => {
    setFourModal(false);
  };

  return (
    <section className="container steps_area">
      <div>
        <h2 className="main_head">
          Get Job Or <span>100% Money Refund</span>
        </h2>
      </div>
      <div className="modal">
        <button className="button" style={{ background: "#062530", color: "#fff" }} onClick={showModal}>
          <span>Step-1</span>
          <div className="liquid"></div>
        </button>
        <img src="https://i.ibb.co/HG0xzn1/arrow.png" alt="" />
        <button className="button" style={{ background: "#062530", color: "#fff" }} onClick={second}>
          <span>Step-2</span>
          <div className="liquid"></div>
        </button>
      </div>
      <div className="modal">
        <button className="button" style={{ background: "#062530", color: "#fff" }} onClick={third}>
          <span>Step-3</span>
          <div className="liquid"></div>
        </button>
        <img src="https://i.ibb.co/HG0xzn1/arrow.png" alt="" />
        <button className="button" style={{ background: "#062530", color: "#fff" }} onClick={four}>
          <span>Step-4</span>
          <div className="liquid"></div>
        </button>
      </div>

      <Modal title="Step 1 for being successful!" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <ul>
          <li>Explore, and set up for a counselling</li>
          <li>Apply for a program</li>
          <li>Get approved and join</li>
        </ul>
        <button className="button2">Join Our Chat</button>
      </Modal>

      <Modal title="Step 2 for being successful!" visible={secondModal} onOk={handleOk2} onCancel={handleCancel2}>
        <ul>
          <li>Your 52 weeks career switch</li>
          <li>Total 4 quarters journey</li>
        </ul>
        <button className="button2">Join Our Chat</button>
      </Modal>

      <Modal title="Step 3 for being successful!" visible={thirdModal} onOk={handleOk3} onCancel={handleCancel3}>
        <ul>
          <li>Get prepared for Job</li>
          <li>Get job in Max 5 months after successfully program completion</li>
        </ul>
        <button className="button2">Join Our Chat</button>
      </Modal>

      <Modal title="Step 4 for being successful!" visible={fourModal} onOk={handleOk4} onCancel={handleCancel4}>
        <ul>
          <li>Get Job Or join our payroll</li>
          <li>
            Or <span style={{ color: "red" }}>Get Your money Refund</span>
          </li>
        </ul>
        <button className="button2">Join Our Chat</button>
      </Modal>
    </section>
  );
};

export default Steps;
