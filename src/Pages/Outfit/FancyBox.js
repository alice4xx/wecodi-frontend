import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CloseBtn from '../../Images/close.png';

const FancyBox = props => {
  const [advice, setAdvice] = useState();

  const path = {
    'Fashion Tip': 'fashion-tips',
    'Outfit Ideas': 'outfit-ideas',
    'Inside Wecodi': 'inside-wecodi',
  };

  useEffect(() => {
    fetch('http://13.125.254.18:8000/article/recommend/103', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        AUTHORIZATION:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMn0.eMDToX8PM0dxWr7sbXogpzv7tF5VFUZWRS-btmY2MOo',
      },
    })
      .then(response => response.json())
      .then(response => setAdvice(response.DATA));
  }, []);

  return (
    <div className="FancyBox">
      <div className="FancyWrapper">
        <div className="CloseBtn" onClick={props.handleClick}>
          <img src={CloseBtn} alt="close" />
        </div>
        <div className="FancyContentWrap">
          <div className="FancyImageWrap">
            <img src={props.img} alt="outfit" />
          </div>
          <div className="RelatedWrap">
            <div className="CategoryTitle">
              <h3>related stories</h3>
              <div className="Line" />
            </div>
            <ul className="Stories">
              {advice &&
                advice.map((el, i) => {
                  return (
                    <li className="StoriesList" key={i}>
                      <Link to={`/${path[el.category]}`}>
                        <h3 className="Category">{el.category}</h3>
                      </Link>
                      <Link to={`/article/${el.article_id}`}>
                        <p className="StoriesTitle">{el.title}</p>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBox;
