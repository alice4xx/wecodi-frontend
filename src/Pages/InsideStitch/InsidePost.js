import React from 'react';

const InsidePost = a => (
  <div className="fashion_articles">
    <div className="thumbnail">
      <img src={a.info.thumb_img} alt="sample" width="120" />
    </div>
    <div className="entry">
      <div className="entry-Container">
        <p className="entry-category">{a.info.categoryname}</p>
        <h3 className="entry-title">
          <a href="/" className="articleTitle">
            {a.info.title}
          </a>
        </h3>
      </div>
    </div>
  </div>
);

export default InsidePost;

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
