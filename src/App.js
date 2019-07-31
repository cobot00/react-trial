import React from 'react';
import 'App.css';

import {BrowserRouter, Route, Redirect, Switch, Link} from 'react-router-dom';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ColorLens from '@material-ui/icons/ColorLens';
import ListIcon from '@material-ui/icons/List';
import Update from '@material-ui/icons/Update';

import {SessionContext} from 'session/session-context.js';
import {sessionState} from 'session/session-state.js';

import {LoginForm} from 'components/forms/LoginForm.js';
import {HomeForm} from 'components/forms/HomeForm.js';
import {ButtonForm} from 'components/forms/ButtonForm.js';
import {ListForm} from 'components/forms/ListForm.js';
import {EventForm} from 'components/forms/EventForm.js';

import PropTypes from 'prop-types';

export class App extends React.Component {
  constructor() {
    super();

    const login = () => {
      this.setState(() => ({
        authenticated: true
      }));
      sessionState.login();
    };

    const logout = () => {
      this.setState(() => ({
        authenticated: false
      }));
      sessionState.logout();
    };

    this.state = {
      authenticated: sessionState.authenticated,
      login: login,
      logout: logout
    };
  }

  render() {
    return (
      <SessionContext.Provider value={this.state}>
        <Routing authenticated={this.state.authenticated} />
      </SessionContext.Provider>
    );
  }
}

const Routing = (props) => {
  return (
    <BrowserRouter>
      <div>
        <ul className="flex-container" style={{paddingLeft: '5px'}}>
          <li>
            <div className="side-menu">
              { props.authenticated ? <AuthenticatedMenus /> : <NotAuthenticatedMenus /> }
            </div>
          </li>

          <li className="right-justified-item" style={{width: '100%'}}>
            { props.authenticated ? <AuthenticatedRouting /> : <NotAuthenticatedRouting /> }
          </li>
        </ul>
      </div>
    </BrowserRouter>
  );
};

Routing.propTypes = {authenticated: PropTypes.bool};

const AuthenticatedMenus = () => {
  return (
    <List>
      <ListItem button component={Link} to="/">
        <ListItemIcon className="menu-icon"><HomeIcon /></ListItemIcon>
        <ListItemText primary="ホーム" />
      </ListItem>

      <ListItem button component={Link} to="/button">
        <ListItemIcon className="menu-icon"><ColorLens /></ListItemIcon>
        <ListItemText primary="Materila-UI Buttons" />
      </ListItem>

      <ListItem button component={Link} to="/list">
        <ListItemIcon className="menu-icon"><ListIcon /></ListItemIcon>
        <ListItemText primary="リスト表示" />
      </ListItem>

      <ListItem button component={Link} to="/event">
        <ListItemIcon className="menu-icon"><Update /></ListItemIcon>
        <ListItemText primary="イベント制御" />
      </ListItem>
    </List>
  );
};

const NotAuthenticatedMenus = () => {
  return (
    <List>
      <ListItem button component={Link} to="/login">
        <ListItemIcon className="menu-icon"><AccountBoxIcon /></ListItemIcon>
        <ListItemText primary="ログイン" />
      </ListItem>
    </List>
  );
};

const AuthenticatedRouting = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomeForm} />
      <Route path="/button" exact component={ButtonForm} />
      <Route path="/list" exact component={ListForm} />
      <Route path="/event" exact component={EventForm} />
      <Route path='*'
        render={() => (
          <Redirect to="/" />
        )}
      />
    </Switch>
  );
};

const NotAuthenticatedRouting = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path='*'
        render={() => (
          <Redirect to="/login" />
        )}
      />
    </Switch>
  );
};
