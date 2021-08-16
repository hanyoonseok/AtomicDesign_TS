import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import theme from "../common/style/theme/default";
import GlobalStyles from "../common/GlobalStyles";
import TodoListPage from "./TodoListPage"
import LandingPage from "./LandingPage"

const App:React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={LandingPage}   
          />
          <Route
            exact
            path="/todo"
            component={TodoListPage}   
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
