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
      readArticles: 1,
    };
  }

  componentDidMount() {
    fetch('http://13.125.254.18:8000/article/category/1?offset=0&limit=5', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMn0.eMDToX8PM0dxWr7sbXogpzv7tF5VFUZWRS-btmY2MOo',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ articles: response.DATA });
      });

    fetch('http://13.125.254.18:8000/article/recommend/100', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMn0.eMDToX8PM0dxWr7sbXogpzv7tF5VFUZWRS-btmY2MOo',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ Sidetitle1: response.DATA });
      });
    fetch('http://13.125.254.18:8000/article/recommend/101', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMn0.eMDToX8PM0dxWr7sbXogpzv7tF5VFUZWRS-btmY2MOo',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ Sidetitle2: response.DATA });
      });
  }

  clickReadMore = () => {
    const NewReadArticles = this.state.readArticles + 5;
    this.setState({ readArticles: NewReadArticles });

    fetch(
      'http://13.125.254.18:8000/article/category/1?offset=' +
        NewReadArticles +
        '&limit=' +
        (NewReadArticles + 5),
      {
        method: 'GET',
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMn0.eMDToX8PM0dxWr7sbXogpzv7tF5VFUZWRS-btmY2MOo',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(response => {
        //console.log(response);
        // console.log(this.state.articles.concat(response.DATA));
        this.setState({ articles: this.state.articles.concat(response.DATA) });
      });
  }; //concat함수는 배열을 합치는 메서드. 내가 response받은 데이터는 아티클로 받고 그 스테이트가 변하고 전개 연산자 대신 콘캣을 사용할 수 있으므로 저렇게 씀

  render() {
    const { articles, Sidetitle1, Sidetitle2 } = this.state;
    return (
      <div className="Fashion_Container">
        <div className="page_Body">
          <div className="body_Left">
            <div className="recent">
              <span>•</span> RECENT FASHION TIPS <span>•</span>
            </div>
            <div className="fashionTips">
              <div className="postWrap">
                {articles.map(function(el, i) {
                  return <FashionPost info={el} key={i} />;
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
                  {Sidetitle1.map(function(el, i) {
                    return <Sidetitle info={el} key={i} />;
                  })}
                </ul>
              </div>
              <div className="trending_4">
                <div className="nomoreTrending2">
                  <span>•</span> RECENT STYLIST ADVICE <span>•</span>
                </div>
                <ul className="trendingNow">
                  {Sidetitle2.map(function(el, i) {
                    return <Sidetitle info={el} key={i} />;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Readmore handleClick={this.clickReadMore} />
        <Footer />
      </div>
    );
  }
}

export default Fashion;
