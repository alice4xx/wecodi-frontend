import React from 'react';
import { withRouter } from 'react-router-dom';
import Close from '../../Images/close.png';

const BarsMenu = props => {
  const toggle = props.mode ? `BarsMenu` : `BarsMenu BarMenuFocus`;

  const goToHome = () => {
    props.history.push('/');
    props.handleClick();
  };
  const goToFashion = () => {
    props.history.push('/fashion-tips');
    props.handleClick();
  };
  const goToOutfit = () => {
    props.history.push('/outfit-ideas');
    props.handleClick();
  };
  const goToInside = () => {
    props.history.push('/inside-stitch-fix');
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
        <div className="Category">
          <div className="CategoryName" onClick={goToHome}>
            <h3>HOME</h3>
          </div>
        </div>
        <div className="Category">
          <div className="CategoryName" onClick={goToFashion}>
            <h3>FASHION TIPS</h3>
          </div>
        </div>
        <div className="Category">
          <div className="CategoryName" onClick={goToOutfit}>
            <h3>OUTFIT IDEAS</h3>
          </div>
        </div>
        <div className="Category">
          <div className="CategoryName" onClick={goToInside}>
            <h3>INSIDE STITCH FIX</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BarsMenu);
