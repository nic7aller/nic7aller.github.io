import React, { useState } from "react";
import { Box, Grommet } from "grommet";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import { HashRouter, Route, Switch } from "react-router-dom";
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
                Resume Page
              </Route>
            </Switch>
          </Box>
        </Box>
      </Grommet>
    </HashRouter>
  );
}

export default App;
