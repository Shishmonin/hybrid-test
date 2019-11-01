const articleAdd = (title, summary, text) => {

  return {
    type: 'ADD_ARTICLE',
    title,
    summary,
    text
  };
};

const articleEdit = (id, title, summary, text, comments) => {

  return {
    type: 'ARTICLES_EDIT',
    id,
    title,
    summary,
    text,
    comments,
  };
};

const articleDelete = (id) => {

  return {
    type: 'ARTICLES_DELETE',
    id,
  };
};

const commentDelete = (id) => {

  return {
    type: 'COMMENT_DELETE',
    id
  };
};

const commentAdd = (idArticl, name, comment) => {

  return {
    type: 'COMMENT_ADD',
    id: idArticl,
    name,
    comment,
  };
};

export {
  commentAdd,
  commentDelete,
  articleAdd,
  articleEdit,
  articleDelete
};