import React from 'react';
import { connect } from 'react-redux';
import { articleAdd } from '../../actions';
import store from '../../store';

import './create-article-page.css';

class CreateArticle extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      summary: '',
      text: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChangeTitle = this.handleTitleChangeTitle.bind(this);
    this.handleTitleChangeSummary = this.handleTitleChangeSummary.bind(this);
    this.handleTitleChangeText = this.handleTitleChangeText.bind(this);

  }
  handleSubmit(e) {
    e.preventDefault();
    store.dispatch(articleAdd(this.state.title,this.state.summary,this.state.text));
    this.setState({
      title: '',
      summary: '',
      text: ''
    })
  }

  handleTitleChangeTitle(event) {
    this.setState({title: event.target.value})
  }
  handleTitleChangeSummary(event) {
    this.setState({summary: event.target.value})
  }
  handleTitleChangeText(event) {
    this.setState({text: event.target.value})
  }

  render(){
    return (
      <form className="add-form"
      onSubmit={this.handleSubmit}
            >
        <p>Создай свою первую статью</p>

        <input type="text"
                placeholder="Заголовок статьи"
                className="form-control-title"
                onChange = {this.handleTitleChangeTitle}
                value = {this.state.title}
        />

        <textarea type="text"
        cols="40" 
        rows="5" 
                placeholder="Краткое описание"
                className="form-control-summary"
                onChange = {this.handleTitleChangeSummary}
                value = {this.state.summary}
        />
        <textarea type="text"
                placeholder="Текст"
                className="form-control-text"
                onChange = {this.handleTitleChangeText}
                value = {this.state.text}
        />

        <button
        className="btn btn-add-article" >
          Добавить
        </button>
      </form>
    );
  }
};

const mapStateToProps = ({ articles }) => {
  return { articles };
};

const mapDispatchToProps = {
  articleAdd
};
export default connect(mapStateToProps,mapDispatchToProps)(CreateArticle);
