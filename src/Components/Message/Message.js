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
              <div className="Button" onClick={() => setSuccess(!success)}>
                확인
              </div>
            </div>
          </>
        ) : (
          <>
            <i className="fas fa-ban" />
            <p className="MessageBody">입력 정보를 확인해주세요.</p>
            <div className="ButtonWrap">
              <div className="Button" onClick={() => setSuccess(!success)}>
                확인
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Message;
