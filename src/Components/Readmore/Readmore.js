import React from 'react';
import './Readmore.scss';

const Readmore = (props) => {
  return (
    <div className="Readmore" onClick={props.handleClick}>
      <div className="LineWrap">
        <div className="LeftLine" />
        <div className="RightLine" />
      </div>
      <div className="ReadmoreText">
        <span>Read More</span>
      </div>
    </div>
  );
};

export default Readmore;
