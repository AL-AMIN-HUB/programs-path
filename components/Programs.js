/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TabPanel } from "react-tabs";
import { Tab } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";
import CloudOps from "./CloudOps";
import DeveloperJourney from "./DeveloperJourney";
import JourneyHeader from "./JourneyHeader";

const Programs = () => {
  return (
    <div>
      <JourneyHeader />
      <div id="start_journey" className="tabs">
        <Tabs>
          <TabList className="tab_list">
            <Tab className="tab_button">Program Roadmap</Tab>
            <Tab className="tab_button">Program Journey</Tab>
            <Tab className="tab_button">End to End Plans</Tab>
            <a target="_blank" href="https://ts4u.us/channel-invitation/61d836320ffc531d5767b6e4" rel="noreferrer">
              <button className="tab_button tabs_size">Call us: +(1) 586-276-7347</button>{" "}
            </a>
            <a target="_blank" href="https://ts4u.us/channel-invitation/61d836320ffc531d5767b6e4" rel="noreferrer">
              <button className="tab_button tabs_size">Set Up Personal Counseling</button>
            </a>
            <button className="tab_button tabs_size_last">Enroll Now</button>
          </TabList>

          <TabPanel>
            <CloudOps />
          </TabPanel>
          <TabPanel>
            <DeveloperJourney />
          </TabPanel>
          <TabPanel>
            <h2 style={{ background: "red", padding: "10px", textAlign: "center", margin: "30px 0" }}>Coming Soon This Feature</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Programs;
