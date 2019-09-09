import React from 'react';
import { Link } from 'react-router-dom';

const Sidetitle = ({ info = {} }) => {
  const { title, article_id } = info;
  const path = {
    'Fashion Tip': 'fashion-tips',
    'Outfit Ideas': 'outfit-ideas',
    'Inside Wecodi': 'inside-wecodi',
  };
  return (
    <ul className="trendingNow">
      <li>
        <Link to={`/article/${article_id}`}>
          <span>{title}</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidetitle;