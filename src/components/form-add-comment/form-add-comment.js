import React, { useState } from 'react';
import { connect } from 'react-redux';
import { commentAdd } from '../../actions';
import store from '../../store';

import './form-add-comment.css';

const FormAddComment = ({idArticl}) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, comment);
    if( name === '' || comment === ''){
      alert('Для добавления комментария оба поля должны быть заполнены')
    } else{
      store.dispatch(commentAdd(idArticl, name, comment));
      setName('');
      setComment('');
    }
  }
  return(
    <div className="add-comment-form-wraper">
      <form onSubmit={handleSubmit}
            className="add-comment-form">
        <p>Поделитесь впечатлением от прочитанной статьи</p>
        <input type="text"
                  placeholder="Ваше имя"
                  className="form-control-name"
                  onChange = {(e) => setName(e.target.value)}
                  value = {name}
          />

          <textarea type="text"
          cols="40"
          rows="5"
                  placeholder="Ваш комментарий"
                  className="form-control-comment-text"
                  onChange = {(e) => setComment(e.target.value)}
                  value = {comment}
          />
          <button
            className="btn btn-add-comment" >
            Добавить отзыв
          </button>
      </form>
    </div>
  )
}

const mapStateToProps = ({ articles }) => {
  return { articles };
};

const mapDispatchToProps = {
  commentAdd
};

export default connect(mapStateToProps,mapDispatchToProps)(FormAddComment);