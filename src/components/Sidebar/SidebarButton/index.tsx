import React from "react";
import { Box, Button, ButtonType, ThemeContext } from "grommet";

type SidebarButtonProps = Omit<
  ButtonType,
  "icon" | "plain" | "hoverIndicator" | "focusIndicator"
> & {
  hoverLabel: string;
  hoverColor: object;
  faIcon: JSX.Element;
};

const SidebarButton: React.FC<SidebarButtonProps> = ({
  ...props
}: SidebarButtonProps) => {
  const { hoverLabel, hoverColor, faIcon } = props;
  return (
    <ThemeContext.Extend
      value={{
        tip: {
          content: {
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
          tip={{
            content: <Box>{hoverLabel}</Box>,
            dropProps: { align: { left: "right" } },
          }}
          {...props}
          hoverIndicator={hoverColor}
          focusIndicator={false}
          plain
        >
          <Box pad={{ vertical: "small" }} align="center">
            {faIcon}
          </Box>
        </Button>
      </Box>
    </ThemeContext.Extend>
  );
};

export default SidebarButton;
