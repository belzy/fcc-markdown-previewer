import { combineReducers } from 'redux';
import markdownEditor from './components/MarkdownEditor/reducers/index.js';

export default combineReducers({
  editor: markdownEditor,
});
