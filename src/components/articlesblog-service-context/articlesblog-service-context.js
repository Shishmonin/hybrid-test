import React from 'react';

const {
  Provider: ArticlesBlogServiceProvider,
  Consumer: ArticlesBlogServiceConsumer
} = React.createContext();

export {
  ArticlesBlogServiceProvider,
  ArticlesBlogServiceConsumer
};