import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";

const Steps = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <section className="container steps_area">
      <Button style={{ background: "#062530", color: "#fff" }} onClick={showModal}>
        1st Step
      </Button>
      <Modal title="TS4U" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p> Explore, set up counselling, apply for program, get approved and join</p>
        <button className="button">Join Our Chat</button>
      </Modal>
    </section>
  );
};

export default Steps;
