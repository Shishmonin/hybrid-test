import React, { useState, useEffect, useRef } from 'react';
import ArticlesListPrevItem from '../articles-list-prev-item';
import { getFilters } from '../../actions';
import { useDispatch } from 'react-redux'

import { connect } from 'react-redux';
import { Select } from 'antd';
import { DatePicker } from 'antd';

import 'antd/dist/antd.css';
import './articles-list.css';

const ArticlesListContainer = ({articles}) => {
  const { Option } = Select;
  const { RangePicker} = DatePicker;
  const dispatch = useDispatch();
  const [filters, setFilters] =
        useState({
                  status: null,
                  data_create_from: null,
                  data_create_to: null,
                  data_delivery_from: null,
                  data_delivery_to: null,
  });


  const [posts, setPosts] = useState(articles);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const mounted = useRef();
  useEffect(() => {
    dispatch(getFilters(filters));
    setPosts(articles);
    if (!mounted.current) {
      mounted.current = true;
    } else {
      dispatch(getFilters(filters));
    }
  },[filters,articles]);

  function onChangeStatus(value) {
    setFilters({...filters, status: value});
  };

  function onChangeCreate(date, dateString) {
    setFilters({...filters,
                data_create_from: dateString[0],
                data_create_to: dateString[1],
    });
  };

  function onChangeDelivery(date, dateString) {
    setFilters({...filters,
      data_delivery_from: dateString[0],
      data_delivery_to: dateString[1],
    });
  };

  return(
    <div>
      <div>
          <Select
            style={{ width: 100 }}
            placeholder="Статус"
            optionFilterProp="children"
            onChange={onChangeStatus}>
              <Option value="created">Создан</Option>
              <Option value="added">Добавлен</Option>
              <Option value="photo">Фотография продукта</Option>
          </Select>
          <RangePicker  onChange={onChangeCreate}/>
          <RangePicker  onChange={onChangeDelivery}/>

      </div>
      <div className="article-list-wraper">
        <ArticlesList currentPosts={currentPosts}/>
        <Pagination postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    setCurrentPage={setCurrentPage}/>
      </div>
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