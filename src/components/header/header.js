
import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Тестовый блог</h1>
      <Link to="/">
          Назад к списку статей
      </Link>
    </div>
  )
}

export default Header;