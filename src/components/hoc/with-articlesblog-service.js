import React from 'react';
import { ArticlesBlogServiceConsumer } from '../articlesblog-service-context/';
// Получает сервис из контекста и передает в компонент
const withArticlesBlogService = () => (Wrapped) => {
  return (props) => {
    return (
      <ArticlesBlogServiceConsumer>
        {
          (articlesBlogService) => {
            return (<Wrapped {...props}
              articlesBlogService={articlesBlogService}/>);
          }
        }
      </ArticlesBlogServiceConsumer>
    );
  }
};

export default withArticlesBlogService;