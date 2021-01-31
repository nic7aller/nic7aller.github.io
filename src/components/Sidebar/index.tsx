import React from "react";
import { Avatar, Nav, Sidebar as GSidebar, ThemeContext } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import SidebarButton from "./SidebarButton";

type Theme = "light" | "dark";
const backgroundColor = { color: "brand" };
const themeIcons: Record<Theme, IconName> = {
  light: "sun",
  dark: "moon",
};

type SidebarProps = {
  themeMode: Theme;
  setThemeMode: (theme: Theme) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ themeMode, setThemeMode }) => {
  const history = useHistory();
  const nextTheme = themeMode !== "light" ? "light" : "dark";
  return (
    <ThemeContext.Extend
      value={{
        tip: {
          content: {
            margin: "small",
            pad: "small",
            background: backgroundColor,
            round: false,
            flex: false,
          },
        },
      }}
    >
      <GSidebar
        background="black"
        header={
          <Nav gap="small">
            <Avatar
              border={{ size: "small", color: "brand" }}
              background="white"
              flex={false}
            >
              N.7
            </Avatar>
            <SidebarButton
              onClick={() => setThemeMode(nextTheme)}
              hoverLabel="Toggle Theme"
              hoverColor={backgroundColor}
              faIcon={
                <FontAwesomeIcon
                  icon={["fas", themeIcons[themeMode]]}
                  size="lg"
                />
              }
            />
          </Nav>
        }
        footer={
          <Nav gap="small">
            <SidebarButton
              href="https://www.github.com/nic7aller/"
              hoverLabel="GitHub"
              faIcon={<FontAwesomeIcon icon={["fab", "github"]} size="lg" />}
              hoverColor={backgroundColor}
            />
            <SidebarButton
              href="https://www.linkedin.com/in/nicholassiebenaller/"
              hoverLabel="LinkedIn"
              faIcon={<FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />}
              hoverColor={backgroundColor}
            />
          </Nav>
        }
      >
        <Nav>
          <SidebarButton
            onClick={() => history.push("/")}
            hoverLabel="Home"
            hoverColor={backgroundColor}
            faIcon={<FontAwesomeIcon icon={["fas", "home"]} size="lg" />}
          />
          <SidebarButton
            onClick={() => history.push("/resume")}
            hoverLabel="Resume"
            hoverColor={backgroundColor}
            faIcon={<FontAwesomeIcon icon={["fas", "file-alt"]} size="lg" />}
          />
        </Nav>
      </GSidebar>
    </ThemeContext.Extend>
  );
};

export default Sidebar;
