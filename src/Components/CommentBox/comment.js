import React, { Component } from 'react';
import './comment.scss';


const ReviewContent = (props) => (

  <div className="review-Comment">
    <div className="review-user-icon">
      <img className="img-icon" src="https://www.facebook.com/rsrc.php/v1/yi/r/odA9sNLrE86.jpg?_nc_x=Ij3Wp8lg5Kz" alt="" />
    </div>
    <div className="review-Comment-User">
      <div className="review-Comment-Content">
        <div className="review-Comment-Text">
          <span className="review-Comment-UserName">
            {props.comment.user__user_id}
          </span>
        </div>
        <div className="review-Comment-UserWriteTime">
          <span className="review-Comment-Time">
            {props.comment.created_at.substring(0, 10)}
          </span>
        </div>
        <div className="review-Comment-UserReview">
          <p className="review-Comment-Review">
            {props.comment.content}
          </p>
        </div>
      </div>
    </div>
  </div>
  
);
  export default ReviewContent;

   