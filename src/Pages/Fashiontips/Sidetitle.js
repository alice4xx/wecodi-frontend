import React from 'react';

const Sidetitle = a => (
  <ul className="trendingNow">
    <li>
      <a href="/">
        <span>{a.info.title}</span>
      </a>
    </li>
  </ul>
);

export default Sidetitle;

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
