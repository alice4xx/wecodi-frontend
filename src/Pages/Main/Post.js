import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post = {} }) => {
  const { thumb_img, categoryname, title } = post;
  return (
    <div className="RecentContent">
      <img src={thumb_img} alt="test" width="300" />
      <div className="ContentDetail">
        <Link to="/">
          <p className="ContentCategory">{categoryname}</p>
        </Link>
        <h2 className="ContentTitle">
          <a href="/">{title}</a>
        </h2>
      </div>
    </div>
  );
};

export default Post;
