import React from "react";
import { Box, Button, ButtonType, Text, ThemeContext } from "grommet";

type SidebarButtonProps = Omit<
  ButtonType,
  "icon" | "plain" | "hoverIndicator" | "focusIndicator"
> & {
  hoverLabel: string;
  hoverColor: object;
  expanded: boolean;
  faIcon: JSX.Element;
};

const SidebarButton: React.FC<SidebarButtonProps> = ({
  ...props
}: SidebarButtonProps) => {
  const { hoverLabel, hoverColor, expanded, faIcon } = props;
  const expandedProps: ButtonType = expanded ? { } : { tip: {
    content: <Box>{hoverLabel}</Box>,
    dropProps: { align: { left: "right" } },
  }};
  return (
    <ThemeContext.Extend
      value={{
        global: { animation: false},
        tip: {
          content: {
            animation: "none",
            margin: "small",
            pad: "small",
            background: hoverColor,
            elevation: "none",
            round: false,
            flex: false,
          },
        },
      }}
    >
      <Box fill="horizontal">
        <Button
          {...props}
          {...expandedProps}
          hoverIndicator={hoverColor}
          focusIndicator={false}
          plain
        >
          <Box direction="row" pad="small" gap="small" align="center">
            {faIcon}{expanded && <Text>{hoverLabel}</Text>}
          </Box>
        </Button>
      </Box>
    </ThemeContext.Extend>
  );
};

export default SidebarButton;
