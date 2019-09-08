import React from 'react';
import { Link } from 'react-router-dom';

const Sidetitle = ({ info = {} }) => {
  const { title, article_id } = info;
  const path = {
    'Fashion Tip': 'fashion-tips',
    'Outfit Ideas': 'outfit-ideas',
    'Inside Wecodi': 'inside-wecodi',
  };
  return (
    <ul className="trendingNow">
      <li>
        <Link to={`/article/${article_id}`}>
          <span>{title}</span>
        </Link>
      </li>
    </ul>
  );
};

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
