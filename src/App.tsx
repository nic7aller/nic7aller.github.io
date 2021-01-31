import React, { useState } from "react";
import { Box, Grommet } from "grommet";
import { HashRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import ResumePage from "./components/ResumePage";
import theme from "./themes";

function App() {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  return (
    <HashRouter>
      <Grommet theme={theme} themeMode={themeMode} full>
        <Box direction="row" fill>
          <Sidebar themeMode={themeMode} setThemeMode={setThemeMode} />
          <Box flex>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/resume">
                <ResumePage />
              </Route>
            </Switch>
          </Box>
        </Box>
      </Grommet>
    </HashRouter>
  );
}

export default App;
