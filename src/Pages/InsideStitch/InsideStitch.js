import React, { Component } from 'react';
import './InsideStitch.scss';
import Footer from '../../Components/Footer/Footer';
import InsidePost from './InsidePost';
import data from './data';
import Readmore from '../../Components/Readmore/Readmore';

class Inside extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
    };
  }

  // 리액트 lifecycle 확인..
  componentDidMount() {
    fetch('http://10.58.2.142:8002/article/category/2?offset=0&limit=20', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTExIn0.sECbRkAG52DuaBKpv4XpJ2KrT-s56b8ObFR3T_DD6oo',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        this.setState({ articles: response.DATA });
      });
  }

  render() {
    return (
      <div className="Stitch_Container">
        <div className="page_Body">
          <div className="body_Left">
            <div className="recent">
              <span>•</span> RECENT INSIDE WECODI <span>•</span>
            </div>
            <div className="fashionTips">
              <div className="postWrap">
                {this.state.articles.map(function(el) {
                  return <InsidePost info={el} />;
                })}
              </div>
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

export default Inside;
