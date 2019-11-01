import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { articleEdit } from '../../actions';
import store from '../../store';

import 'semantic-ui-css/semantic.min.css';

class ModalExampleCloseConfig extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      title: this.props.posts.title,
      summary: this.props.posts.summary,
      text: this.props.posts.text,
    }

    this.handleTitleChangeTitle = this.handleTitleChangeTitle.bind(this);
    this.handleTitleChangeSummary = this.handleTitleChangeSummary.bind(this);
    this.handleTitleChangeText = this.handleTitleChangeText.bind(this);
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })


  handleTitleChangeTitle(event) {
    this.setState({title: event.target.value})
  }
  handleTitleChangeSummary(event) {
    this.setState({summary: event.target.value})
  }
  handleTitleChangeText(event) {
    this.setState({text: event.target.value})
  }

  render() {
    const {id, title, comments }= this.props.posts

    const { open, closeOnEscape, closeOnDimmerClick } = this.state

    return (
      <div>
        <Button onClick={this.closeConfigShow(true, false)}>
          Edit
        </Button>

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Режим редактирования статьи: "{title}"</Modal.Header>
          <Modal.Content>
            <p>Внесите правки в статью и нажмите на кнопку 'ИЗМЕНИТЬ'</p>
            <div className="modal-block-edite-article">
              <input type="text"
                    placeholder="Заголовок статьи"
                    className="form-control modal-title"
                    onChange = {this.handleTitleChangeTitle}
                    value = {this.state.title}
                />

                <textarea type="text"
                          cols="30"
                          rows="3"
                        placeholder="Краткое описание"
                        className="form-control modal-summary"
                        onChange = {this.handleTitleChangeSummary}
                        value = {this.state.summary}
                />
                <textarea type="text"
                          cols="40"
                          rows="5"
                        placeholder="Текст"
                        className="form-control modal-text"
                        onChange = {this.handleTitleChangeText}
                        value = {this.state.text}
                />
            </div>

          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              Отмена
            </Button>
            <Button
              onClick={() => store.dispatch(articleEdit(id, this.state.title,this.state.summary,this.state.text,comments))}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Изменить'
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
const mapDispatchToProps = {
  articleEdit,
};
const mapStateToProps = ({ articles }) => {
  return { articles };
};

export default connect(mapStateToProps,mapDispatchToProps)(ModalExampleCloseConfig)