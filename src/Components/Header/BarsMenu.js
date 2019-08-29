import React from 'react';
import Close from '../../Images/close.png';

const BarsMenu = () => {
  return (
    <div className="BarsMenu">
      <div className="BarsHeader">
        <span>
          <a href="/Login">Login</a> or <a href="Signup">Signup</a>
        </span>
        <div className="CloseBtnWrap">
          <img src={Close} width="20" alt="close" />
        </div>
      </div>
    </div>
  );
};

export default BarsMenu;
