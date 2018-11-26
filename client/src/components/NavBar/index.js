import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    backgroundColor: '#009688'
  },
};

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { classes } = this.props;

    return (
      <AppBar classes={{ root: classes.root }} position='static'>
        <Toolbar>
          <Typography variant='h6' style={{ color: 'white' }} classes={{ typography: classes.typography }} >
            Markdown Previewer
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
