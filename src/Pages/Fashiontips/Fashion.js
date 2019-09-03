import React, { Component } from 'react';
import './Fashion.scss';
import FashionPost from './FashionPost';
import data from './data';
import Readmore from '../../Components/Readmore/Readmore';
import Footer from '../../Components/Footer/Footer';

class Fashion extends Component {
  render() {
    return (
      <div className="Fashion_Container">
        <div className="page_Body">
          <div className="body_Left">
            <div className="recent">
              <span>•</span> RECENT FASHION TIPS <span>•</span>
            </div>
            <div className="fashionTips">
              <div className="postWrap">
                {data.map((el, idx) => (
                  <FashionPost info={el} key={idx} />
                ))}
              </div>

              {/* <div className="postWrap">
                  {data.map((el, i) => (
                    <FashionPost key={i} info={el} />
                  ))}
                </div> */}
            </div>
          </div>
          <div className="body_Right">
            <div className="trending">
              <div className="trending_3">
                <div className="nomoreTrending">
                  <span>•</span> TRENDING NOW <span>•</span>
                </div>
                <ul className="trendingNow">
                  <li>
                    <a href="/">
                      <span>
                        {' '}
                        All of your Style Shuffle Questions, Answered{' '}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>31 Days of Outfits: August Edition</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>
                        {' '}
                        Stitch Fix Stylists Share Their Favorite Fall 2019 Looks
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="trending_4">
                <div className="nomoreTrending2">
                  <span>•</span> RECENT STYLIST ADVICE <span>•</span>
                </div>
                <ul className="trendingNow">
                  <li>
                    <a href="/">
                      <span>How can I build a capsule wardrobe for work? </span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>What are the new fall trends? </span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>How do I tie a tie-front top? </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Readmore />
        <Footer />
      </div>
    );
  }
}

export default Fashion;
