import React from 'react';

const FashionPost = props => (
  <div className="fashion_articles">
    <div className="thumbnail">
      <img src={props.info.thumbnail} alt="sample" width="120" />
    </div>
    <div className="entry">
      <div className="entry-Container">
        <p className="entry-category">{props.info.category}</p>
        <h3 className="entry-title">
          <a href="/" className="articleTitle">
            {props.info.title}
          </a>
        </h3>
      </div>
    </div>
  </div>
);

export default FashionPost;

// const FashionPost = ({ info = {} }) => {
//   const { thumbnail, category, title } = info;
//   return (
//     <div className="fashion_articles">
//       <div className="thumbnail">
//         <img src={thumbnail} alt="sample" width="120" />
//       </div>
//       <div className="entry">
//         <header className="entry-Container">
//           <p className="entry-category">{category}</p>
//           <h3 className="entry-title">
//             <a href="/" className="articleTitle">
//               {title}
//             </a>
//           </h3>
//         </header>
//       </div>
//     </div>
//   );
// };
