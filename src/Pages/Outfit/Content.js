import React from 'react';
import GridSample from '../../Images/grid-sample.png';

const Content = () => {
  return (
    <div className="ImageWrap">
      <div className="HoverWrap">
        <i className="fas fa-plus" />
      </div>
      <img src={GridSample} alt="grid-sample" />
    </div>
  );
};

export default Content;
