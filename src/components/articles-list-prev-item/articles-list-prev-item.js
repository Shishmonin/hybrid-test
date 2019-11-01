import React from 'react';
import { connect } from 'react-redux';
import { articleDelete } from '../../actions';
import store from '../../store';
import { Link } from 'react-router-dom';
import ModalExampleCloseConfig from '../modal-edite/modal-edit';

import './articles-list-prev-item.css';

const ArticlesListPrevItem = ({ posts }) =>{
  const {id, title, summary, comments } = posts;

  return (
    <div className="articles-list__prev-item" >
      <Link to={"/article/"+id}>
        <h3>{title}</h3>
        <p>{summary}</p>
        <span>Комментарии к статье: {comments.length}</span>
      </Link>
      <div className="articles-list__prev-btns">
        <ModalExampleCloseConfig posts={posts}/>

        <button
            onClick = { () => store.dispatch(articleDelete(id))}
            className="btn-prev-delete">Delete</button>
      </div>
    </div>
  );
};

export default connect()(ArticlesListPrevItem);