import React from 'react';
import { withRouter } from 'react-router-dom';
import Close from '../../Images/close.png';

const path_url = {
  home: '/',
  fashion: '/fashion-tips',
  outfit: '/outfit-ideas',
  inside: '/inside-wecodi',
  about: '/about',
};

const BarsMenu = props => {
  const toggle = props.mode ? `BarsMenu` : `BarsMenu BarMenuFocus`;

  const goToPage = e => {
    props.history.push(path_url[e.target.dataset.path]);
    props.handleClick();
  };

  return (
    <div className={toggle}>
      <div className="BarsHeader">
        <span>
          <a href="/Login">Login</a>
          <a href="Signup">Signup</a>
        </span>
        <div className="CloseBtnWrap" onClick={props.handleClick}>
          <img src={Close} width="18" alt="close" />
        </div>
      </div>
      <div className="ListWrap">
        <div className="Category" data-path="home" onClick={goToPage}>
          HOME
        </div>
        <div className="Category" data-path="fashion" onClick={goToPage}>
          FASHION TIPS
        </div>
        <div className="Category" data-path="outfit" onClick={goToPage}>
          OUTFIT IDEAS
        </div>
        <div className="Category" data-path="inside" onClick={goToPage}>
          INSIDE STITCH FIX
        </div>
        <div className="Category" data-path="about" onClick={goToPage}>
          ABOUT
        </div>
      </div>
    </div>
  );
};

export default withRouter(BarsMenu);
