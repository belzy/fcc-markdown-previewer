import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import MarkdownPreviewer from './components/MarkdownPreviewer/index';
import NavBar from './components/NavBar/index';

const styles = {
  root: {

  }
};

class App extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div className="App">
        <NavBar />
        <MarkdownPreviewer />
      </div>
    );
  }
}

export default withStyles(styles)(App);
