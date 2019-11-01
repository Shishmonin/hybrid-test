import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './components/app'
import { ArticlesBlogServiceProvider } from './components/articlesblog-service-context';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ArticlesBlogServiceProvider >
      <Router>
        <App/>
      </Router>
    </ArticlesBlogServiceProvider>
  </Provider>,
  document.getElementById('root'));
