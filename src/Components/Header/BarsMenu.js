import React from 'react';
import { withRouter } from 'react-router-dom';
import Close from '../../Images/close.png';

const path_url = {
  home: '/',
  fashion: '/fashion-tips',
  outfit: '/outfit-ideas',
  inside: '/inside-stitch-fix',
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
          <a href="/Login">Login</a> or <a href="Signup">Signup</a>
        </span>
        <div className="CloseBtnWrap" onClick={props.handleClick}>
          <img src={Close} width="18" alt="close" />
        </div>
      </div>
      <div className="ListWrap">
        <div className="Category" data-path="home" onClick={goToPage}>
          <h3>HOME</h3>
        </div>
        <div className="Category" data-path="fashion" onClick={goToPage}>
          <h3>FASHION TIPS</h3>
        </div>
        <div className="Category" onClick={goToPage} data-path="outfit">
          <h3>OUTFIT IDEAS</h3>
        </div>
        <div className="Category" data-path="inside" onClick={goToPage}>
          <h3>INSIDE STITCH FIX</h3>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BarsMenu);
