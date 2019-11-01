import React from 'react';
import ArticlesListContainer from '../articles-list';
import CreateArticle from './create-article-page';

import './home-page.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* ArticlesListContainer лежит articles-list */}
      <ArticlesListContainer />
      <CreateArticle/>
    </div>

  );
};

export default HomePage;