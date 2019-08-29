import React from 'react';

const Post = props => {
  console.log(props);
  const { thumbnail, category, title } = props.info;
  return (
    <div className="RecentContent">
      <img src={thumbnail} alt="test" width="300" />
      <div className="ContentDetail">
        <p className="ContentCategory">{category}</p>
        <h2 className="ContentTitle">
          <a href="/">{title}</a>
        </h2>
      </div>
    </div>
  );
};

export default Post;
