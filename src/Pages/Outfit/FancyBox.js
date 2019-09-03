import React from 'react';
import { Link } from 'react-router-dom';
import GridSample from '../../Images/grid-sample.png';
import CloseBtn from '../../Images/close.png';

const FancyBox = () => {
  return (
    <div className="FancyBox">
      <div className="FancyWrapper">
        <div className="FancyImageWrap">
          <img src={GridSample} alt="outfit" />
        </div>
        <div className="RelatedWrap">
          <div className="CloseBtn">
            <img src={CloseBtn} alt="close" />
          </div>
          <div className="CategoryTitle">
            <h3>related stories</h3>
            <div className="Line" />
          </div>
          <ul className="Stories">
            <li className="StoriesList">
              <Link to="/">
                <h3 className="Category">FASHION TIPS</h3>
              </Link>
              <Link to="/">
                <p className="Title">
                  6 Wardrobe Essentials for Fearlessly Feminine Style
                </p>
              </Link>
            </li>
            <li className="StoriesList">
              <Link to="/">
                <h3 className="Category">FASHION TIPS</h3>
              </Link>
              <Link to="/">
                <p className="Title">
                  6 Wardrobe Essentials for Fearlessly Feminine Style
                </p>
              </Link>
            </li>
            <li className="StoriesList">
              <Link to="/">
                <h3 className="Category">FASHION TIPS</h3>
              </Link>
              <Link to="/">
                <p className="Title">
                  6 Wardrobe Essentials for Fearlessly Feminine Style
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FancyBox;
