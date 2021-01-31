import React from "react";
import { Box, Card, CardHeader, CardBody, CardFooter, Text } from "grommet";
import { ResumeCategory } from "../../../types/resumeCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ResumeTabProps = React.Attributes & {
  data: ResumeCategory;
};

const ResumeTabCards: React.FC<ResumeTabProps> = ({
  data: { name, items },
}) => {
  const cards = items.map(
    ({ header, subheader, dates, body, footer }, cardIndex) => (
      <Box
        key={`${name}-card-${cardIndex}`}
        pad={{ horizontal: "medium", top: "medium" }}
      >
        <Card
          width="xlarge"
          background="background-front"
          border={{ color: "background-contrast", size: "2px" }}
          elevation="none"
        >
          <CardHeader
            pad={{ horizontal: "medium", vertical: "small" }}
            background="background-contrast"
            margin="none"
          >
            <Box>
              <Text size="xlarge">{header}</Text>
              <Text size="large">{dates}</Text>
              <Text size="large">{subheader}</Text>
            </Box>
          </CardHeader>
          <CardBody pad={{ horizontal: "medium", vertical: "small" }}>
            {body.map((text, bodyIndex) => (
              <Text key={`${name}-card-${cardIndex}-body-${bodyIndex}`}>
                <FontAwesomeIcon
                  icon={["fas", "angle-right"]}
                  className="fa-fw"
                />
                {text}
              </Text>
            ))}
          </CardBody>
          {!!footer && (
            <CardFooter
              pad={{ horizontal: "medium", vertical: "small" }}
              background="background-contrast"
            >
              {footer}
            </CardFooter>
          )}
        </Card>
      </Box>
    )
  );

  return <>{cards}</>;
};

export default ResumeTabCards;
