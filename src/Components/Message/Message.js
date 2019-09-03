import React, { useState } from 'react';
import './Message.scss';

const Message = () => {
  const [success, setSuccess] = useState(true);

  return (
    <div className="MessageWrap">
      <div className="MessageBox">
        {success === true ? (
          <>
            <i className="far fa-check-circle" />
            <p className="MessageBody">가입을 축하합니다!</p>
            <div className="ButtonWrap">
              <div className="Button">확인</div>
            </div>
          </>
        ) : (
          <>
            <i className="fas fa-ban" />
            <p className="MessageBody">비밀번호가 틀렸습니다</p>
            <div className="ButtonWrap">
              <div className="Button">확인</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Message;
