import React from 'react';

const Content = props => {
  return (
    <div className="ImageWrap" onClick={props.handleClick}>
      <div className="HoverWrap">
        <i className="fas fa-plus" />
      </div>
      <img src={props.img} alt="grid-sample" />
    </div>
  );
};

export default Content;
