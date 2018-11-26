import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import MarkdownEditor from '../MarkdownEditor/index';
import MarkdownViewer from '../MarkdownViewer/index';

const styles = {
  root: {
    width: '92vw',
    margin: '80px auto',
    padding: '10px',
    backgroundColor: '#29B6F6'
  },
  mdCtr: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
};

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { classes } = this.props;

    return (
      <Paper classes={{ root: classes.root }}>

        <div style={styles.mdCtr}>
          <MarkdownEditor />
          <MarkdownViewer />
        </div>
      </Paper>

    );
  }
}

export default withStyles(styles)(MarkdownPreviewer);
