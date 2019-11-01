import React from 'react';
import { connect } from 'react-redux';
import { commentDelete } from '../../actions';
import { useParams } from 'react-router-dom';
import store from '../../store';
import FormAddComment from '../form-add-comment';

import './blog-post.css';

const BlogPost = ({articles}) => {
  const { idArticl } = useParams();

  const dataArticle = articles.filter(artic => (artic.id === idArticl));
// CODE COMMENT LIST
  const commentsItem = dataArticle[0].comments.map((item) => {
    const { id, name, comment } = item;

    return (
        <div  className="blog-post__comments-list__item"
              key={id + name}>
        <div  className="comments-list__item__text-block">
          <p>Пользователь: {name}</p>
          <p>{comment}</p>
        </div>
        <div  className="comments-list__item__btn-block">
          <button
              onClick = { () => store.dispatch(commentDelete({id}))}>
            Delete
          </button>
        </div>
      </div>
    );
  });
// CODE COMMENT LIST

  return (
    <div    className="blog-post">
      <div  className="blog-post__item blog-post__title">
        <h3>{dataArticle[0].title}</h3>
      </div>
      <div  className="blog-post__item">
        <p>{dataArticle[0].text}</p>
      </div>

      <div   className="blog-post__item blog-post__wrapper-comment-block">
        <div className="blog-post__form-add-comment">
          <FormAddComment idArticl={ idArticl } />
        </div>

        <div className="blog-post__comments-list">
          {commentsItem}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ articles }) => {
  return { articles };
};

export default connect(mapStateToProps)(BlogPost);