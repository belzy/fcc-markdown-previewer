import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import marked from 'marked';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {

  },
  title: {
    color: 'black',
    textAlign: 'left',
    margin: '0px 0px 8px 8px',
    fontSize: '1.15rem'
  },
  ctr: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  viewer: {
    flex: '1',
    padding: '0 10px',
    //height: '100%',
    textAlign: 'left',
    overflowY: 'scroll',
    backgroundColor: 'white',
    //border: '1px solid black'
  }
};

class Viewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { classes } = this.props;

    marked.setOptions({
      //renderer: new marked.Renderer(),
      highlight: function(code) {
        return require('highlight.js').highlightAuto(code).value;
      },
      gfm: true,
      xhtml: true,
      breaks: true,
    });

    return (
      <div style={ styles.ctr }>
        <Typography classes={{ title: classes.title }} variant='title'>Preview</Typography>
        <div id='preview' style={styles.viewer} dangerouslySetInnerHTML={{__html: marked(this.props.md)}}>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Viewer);
