import React from 'react';
import './Comment.scss';


const ReviewContent = props => {
  return (
    <div className="review-Comment">
      <div className="review-user-icon">
        <img
          className="img-icon"
          src="https://www.facebook.com/rsrc.php/v1/yi/r/odA9sNLrE86.jpg?_nc_x=Ij3Wp8lg5Kz"
          alt=""
        />
      </div>
      <div className="review-Comment-User">
        <div className="review-Comment-Content">
          <div className="review-Comment-Text">
            <span className="review-Comment-UserName">
              {props.comment.user_name}
            </span>
          </div>
          <div className="review-Comment-UserWriteTime">
            <span className="review-Comment-Time">
              {props.comment.updated_at.substring(0, 10)}
            </span>
          </div>
          <div className="review-Comment-UserReview">
            <p className="review-Comment-Review">{props.comment.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewContent;
