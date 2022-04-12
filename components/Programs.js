/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TabPanel } from "react-tabs";
import { Tab } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";
import CloudOps from "./CloudOps";
import DeveloperJourney from "./DeveloperJourney";

const Programs = () => {
  return (
    <div>
      <div className="tabs">
        <Tabs>
          <TabList className="tab_list">
            <Tab className="tab_button">Program Roadmap</Tab>
            <Tab className="tab_button">Program Journey</Tab>
            <Tab className="tab_button">End to End Plans</Tab>

            <Tab className="tab_button tabs_size">Call us: +(1) 586-276-7347</Tab>
            <Tab className="tab_button tabs_size">One an Counseling</Tab>

            <Tab className="tab_button tabs_size_last">Enroll Now</Tab>
          </TabList>

          <TabPanel>
            <CloudOps />
          </TabPanel>
          <TabPanel>
            <DeveloperJourney />
          </TabPanel>
          <TabPanel>adfasd</TabPanel>
          <TabPanel>asdfasd</TabPanel>
          <TabPanel>asdfas</TabPanel>
          <TabPanel>adsfasd</TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Programs;
