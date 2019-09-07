import React from 'react';
import './Loading.scss';
import LoadingImage from '../../Images/loading.gif';

const Loading = () => {
  return (
    <div className="LoadingWrap">
      <img src={LoadingImage} alt="loading" />
    </div>
  )
}

export default Loading;