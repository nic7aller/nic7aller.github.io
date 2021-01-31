import React from "react";
import { Box, Heading, Paragraph, Anchor } from "grommet";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <Box fill pad="large">
      <Heading>Welcome!</Heading>
      <Paragraph fill>
        Visit the{" "}
        <Link to="/resume">
          <Anchor weight="normal">Resume</Anchor>
        </Link>{" "}
        page for more information about me, Nic Siebenaller.
      </Paragraph>
    </Box>
  );
};

export default HomePage;
