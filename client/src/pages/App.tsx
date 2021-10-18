import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../common/style/theme/default';
import GlobalStyles from '../common/GlobalStyles';
import TodoListPage from './TodoListPage';
import LandingPage from './LandingPage';
import ChatPage from './ChatPage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import GithubPage from './GithubPage';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/todo" component={TodoListPage} />
          <Route exact path="/chat" component={ChatPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/github" component={GithubPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
