import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addText, addMd } from './actions/index';
import Editor from './Editor/index';

const styles = {
  display: 'flex',
  flex: '1',
  // border: '1px solid black'
};

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.initMarkdown = this.initMarkdown.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
    this.props.addMd(e.target.value);
  }

  initMarkdown(md) {
    this.setState({
      input: md,
    });
    this.props.addMd(md);
  }

  render() {
    return (
      <div style={styles}>
        <Editor handleChange={this.handleChange} initMarkdown={this.initMarkdown} value={this.state.input} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.text,
    addText: state.addText,
    addMd: state.addMd
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addText: function(text) { dispatch(addText(text)) },
    addMd: function(md) { dispatch(addMd(md)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownEditor);
