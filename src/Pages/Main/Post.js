import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ info = {} }) => {
  const { thumbnail, category, title, path } = info;
  return (
    <div className="RecentContent">
      <img src={thumbnail} alt="test" width="300" />
      <div className="ContentDetail">
        <Link to={path}>
          <p className="ContentCategory">{category}</p>
        </Link>
        <h2 className="ContentTitle">
          <a href="/">{title}</a>
        </h2>
      </div>
    </div>
  );
};

export default Post;
