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

const getFilters = (filters) => {
      // console.log(filters);
  console.log(Object.keys(filters).length);
  // if (Object.keys(filters) == null) {
  //   console.log('пуст');
  // }
  if((filters.status || 
    filters.data_create_from || 
    filters.data_create_to || 
    filters.delivery_from || 
    filters.delivery_to) !== null){
    console.log(filters);
  }else{
    console.log('пуст');
  }
  return {
    type: 'GET_FILTERS',
  };
};

export {
  commentAdd,
  commentDelete,
  articleAdd,
  articleEdit,
  articleDelete,
  getFilters
};