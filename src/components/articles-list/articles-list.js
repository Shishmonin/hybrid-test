import React, { useState, useEffect } from 'react';
import ArticlesListPrevItem from '../articles-list-prev-item';
import { connect } from 'react-redux';

import './articles-list.css';

const ArticlesListContainer = ({articles}) => {

  const [posts, setPosts] = useState(articles);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  console.log(setPostsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPosts)

  useEffect(() => {
    setPosts(articles);
  })

  return(
    <div className="article-list-wraper">
      <ArticlesList currentPosts={currentPosts}/>
      <Pagination postsPerPage={postsPerPage}
                  totalPosts={posts.length}
                  setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

const ArticlesList = ({currentPosts}) => {
  return (
    <ul className="article-list">
      {
        currentPosts.map((currentPosts) => {
          return (
            <li key={currentPosts.id} > <ArticlesListPrevItem posts={currentPosts}/> </li>
          )
        })
      }
    </ul>
  );
}

const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {
  const pageNumbers = [];

  for(let i =1; i <= Math.ceil(totalPosts / postsPerPage);i++) {
    pageNumbers.push(i);
  }

  return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a href="/#" className="page-link" onClick={() => setCurrentPage(number)}>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
  );
}

const mapStateToProps = ({ articles }) => {
  return { articles };
};

export default connect(mapStateToProps)(ArticlesListContainer);