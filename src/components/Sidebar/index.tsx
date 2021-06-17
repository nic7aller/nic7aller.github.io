import React from "react";
import { Avatar, Button, Nav, Sidebar as GSidebar } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { ReactComponent as N7Chip } from "./N7ChipWRev.svg";
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
  const [expand, setExpand] = React.useState<boolean>(false);
  const nextTheme = themeMode !== "light" ? "light" : "dark";
  const expandIcon = `angle-${expand ? "left" : "right"}` as IconName;
  const expandAnimation = `slide${expand ? "Right" : "Left"}` as
    | "slideRight"
    | "slideLeft";
  return (
    <>
      <GSidebar background="black" pad="none">
        <GSidebar
          background="black"
          justify="center"
          animation={{
            type: expandAnimation,
            duration: 500,
          }}
          header={
            <Nav gap="small">
              <Avatar
                overflow="visible"
                round={false}
                margin={{ vertical: "small" }}
              >
                <N7Chip title="Nic 7aller logo" />
              </Avatar>
              <SidebarButton
                onClick={() => setThemeMode(nextTheme)}
                hoverLabel="Toggle Theme"
                hoverColor={backgroundColor}
                expanded={expand}
                faIcon={
                  <FontAwesomeIcon
                    icon={["fas", themeIcons[themeMode]]}
                    className="fa-fw"
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
                hoverColor={backgroundColor}
                expanded={expand}
                faIcon={
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="fa-fw"
                    size="lg"
                  />
                }
              />
              <SidebarButton
                href="https://www.linkedin.com/in/nicholassiebenaller/"
                hoverLabel="LinkedIn"
                hoverColor={backgroundColor}
                expanded={expand}
                faIcon={
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className="fa-fw"
                    size="lg"
                  />
                }
              />
            </Nav>
          }
        >
          <Nav>
            <SidebarButton
              onClick={() => history.push("/")}
              hoverLabel="Home"
              hoverColor={backgroundColor}
              expanded={expand}
              faIcon={
                <FontAwesomeIcon
                  icon={["fas", "home"]}
                  className="fa-fw"
                  size="lg"
                />
              }
            />
            <SidebarButton
              onClick={() => history.push("/resume")}
              hoverLabel="Resume"
              hoverColor={backgroundColor}
              expanded={expand}
              faIcon={
                <FontAwesomeIcon
                  icon={["fas", "file-alt"]}
                  className="fa-fw"
                  size="lg"
                />
              }
            />
          </Nav>
        </GSidebar>
      </GSidebar>
      <GSidebar pad="none">
        <GSidebar
          direction="row"
          align="center"
          pad="xsmall"
          gap="medium"
          animation={{
            type: expandAnimation,
            duration: 500,
          }}
        >
          <Button hoverIndicator={backgroundColor} focusIndicator={false}>
            <FontAwesomeIcon
              icon={["fas", expandIcon]}
              className="fa-fw"
              size="lg"
              onClick={() => setExpand(!expand)}
            />
          </Button>
        </GSidebar>
      </GSidebar>
    </>
  );
};

export default Sidebar;
