import React from 'react';

const Post = props => {
  return (
    <div className="RecentContent">
      <img src={props.info.thumbnail} alt="test" width="300" />
      <div className="ContentDetail">
        <p className="ContentCategory">{props.info.category}</p>
        <h2 className="ContentTitle">
          <a href="/">{props.info.title}</a>
        </h2>
      </div>
    </div>
  );
};

export default Post;
