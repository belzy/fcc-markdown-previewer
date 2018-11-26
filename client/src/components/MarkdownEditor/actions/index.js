export const ADD_TEXT = 'ADD_TEXT';
export const ADD_MD = 'ADD_MD';

export const addText = text => {
  return {
    type: ADD_TEXT,
    text
  };
}

export const addMd = md => {
  return {
    type: ADD_MD,
    md
  };
}
