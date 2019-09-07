import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post = {} }) => {
  const { thumb_img, categoryname, title, article_id } = post;
  return (
    <div className="RecentContent">
      
      <Link to={`/article/${article_id}`}><img src={thumb_img} alt="test" width="300" /></Link>
      <div className="ContentDetail">
        <Link to="/">
          <p className="ContentCategory">{categoryname}</p>
        </Link>
        <h2 className="ContentTitle">
          <Link to={`/article/${article_id}`}>{title}</Link>
        </h2>
      </div>
    </div>
  );
};

export default Post;
