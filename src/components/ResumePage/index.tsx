import React from "react";
import { Box, Tab, Tabs } from "grommet";
import ResumeTabCards from "./ResumeTab";
import categories from "../../data/resume";

const resumeTabs: JSX.Element[] = categories.map((category) => (
  <Tab key={category.name} title={category.name}>
    <ResumeTabCards data={category}></ResumeTabCards>
  </Tab>
));

const ResumePage: React.FC = () => {
  return (
    <Box align="center" pad={{ vertical: "medium" }} overflow="auto">
      <Tabs flex>{resumeTabs}</Tabs>
    </Box>
  );
};

export default ResumePage;
