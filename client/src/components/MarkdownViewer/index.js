import React, { Component } from 'react';
import { connect } from 'react-redux';
import Viewer from './Viewer/index';

const styles = {
  ctr: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    height: '40vw',
    maxHeight: '40vw',
    marginLeft: '10px',
    //marginBottom: '4.5px',
    // border: '1px solid black'
  }
};

class MarkdownViewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.ctr}>
        <Viewer md={this.props.md}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.text,
    md: state.md
  };
}

export default connect(mapStateToProps, null)(MarkdownViewer);
