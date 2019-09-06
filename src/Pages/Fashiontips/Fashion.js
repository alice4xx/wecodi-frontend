import React, { Component } from 'react';
import './Fashion.scss';
import FashionPost from './FashionPost';
import Sidetitle from './Sidetitle';
import Readmore from '../../Components/Readmore/Readmore';
import Footer from '../../Components/Footer/Footer';

class Fashion extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      Sidetitle1: [],
      Sidetitle2: [],
    };
  }

  // 리액트 lifecycle 확인..
  componentDidMount() {
    fetch('http://10.58.2.142:8002/article/category/1?offset=0&limit=30', {
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

    fetch('http://10.58.2.142:8002/article/recommend/100', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTExIn0.sECbRkAG52DuaBKpv4XpJ2KrT-s56b8ObFR3T_DD6oo',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ Sidetitle1: response.DATA });
      });
    fetch('http://10.58.2.142:8002/article/recommend/101', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTExIn0.sECbRkAG52DuaBKpv4XpJ2KrT-s56b8ObFR3T_DD6oo',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ Sidetitle2: response.DATA });
      });
  }

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
                {this.state.articles.map(function(el, i) {
                  if (i < 15) {
                    return <FashionPost info={el} />;
                  }
                })}
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
                  {this.state.Sidetitle1.map(function(el) {
                    return <Sidetitle info={el} />;
                  })}
                </ul>
              </div>
              <div className="trending_4">
                <div className="nomoreTrending2">
                  <span>•</span> RECENT STYLIST ADVICE <span>•</span>
                </div>
                <ul className="trendingNow">
                  {this.state.Sidetitle2.map(function(el) {
                    return <Sidetitle info={el} />;
                  })}
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
