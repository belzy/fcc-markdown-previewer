import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
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
    flex: '1',
  },
  editor: {
    flex: '1',
    overflowY: 'scroll',
    resize: 'none',
    backgroundColor: 'white',
    padding: '10px'

  },
};


class Editor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const initialMarkdown = `# Header

## Subheader

**Bold Text**

[I'm an inline-style link](https://www.google.com)

<div>
  <p><em>Inline </em><strong>HTML</strong></p>
</div>

\`Inline code\`

<u>Codeblock:</u>

\`\`\`Javascript
const msg = 'Hello World!'

console.log(msg); // Hello World!
\`\`\`

1. Ordered list item one
1. Ordered list item two
1. Ordered list item Three

>This is a
>block-quote

Inline-style image:
![alt text](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg "I <3 React!")`;

    this.props.initMarkdown(initialMarkdown);
  }

  render() {

    const { classes } = this.props;

    return (
      <div style={styles.ctr}>
        <Typography classes={{ title: classes.title }} variant='title'>Editor</Typography>
        <textarea id='editor' style={styles.editor} onLoad={this.setInitialValue} onChange={this.props.handleChange} value={this.props.value} />
      </div>
    );
  }
}

export default withStyles(styles)(Editor);
