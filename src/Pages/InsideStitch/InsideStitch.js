import React, { Component } from 'react';
import './InsideStitch.scss';
import Footer from '../../Components/Footer/Footer';
import InsidePost from './InsidePost';
import Sidetitle from '../Fashiontips/Sidetitle';
import Readmore from '../../Components/Readmore/Readmore';

class Inside extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      Sidetitle3: [],
      Sidetitle4: [],
      readArticles: 1,
    };

    this.token = localStorage.getItem('wecodi_token')
      ? localStorage.getItem('wecodi_token')
      : '';
  }

  componentDidMount() {
    fetch('http://13.125.254.18:8000/article/category/2?offset=0&limit=5', {
      method: 'GET',
      headers: {
        Authorization: this.token,

        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        this.setState({ articles: response.DATA });
      });

    fetch('http://13.125.254.18:8000/article/recommend/105', {
      method: 'GET',
      headers: {
        Authorization: this.token,
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ Sidetitle3: response.DATA });
      });

    fetch('http://13.125.254.18:8000/article/recommend/106', {
      method: 'GET',
      headers: {
        Authorization: this.token,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ Sidetitle4: response.DATA });
      });
  }
  clickReadMore = () => {
    const NewReadArticles = this.state.readArticles + 5;
    this.setState({ readArticles: NewReadArticles });

    fetch(
      'http://13.125.254.18:8000/article/category/2?offset=' +
        NewReadArticles +
        '&limit=' +
        (NewReadArticles + 5),
      {
        method: 'GET',
        headers: {
          Authorization: this.token,
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
  };

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
                {this.state.articles.map(function(el, i) {
                  return <InsidePost info={el} key={i} />;
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
                  {this.state.Sidetitle3.map((el, i) => (
                    <Sidetitle info={el} key={i} />
                  ))}
                </ul>
              </div>
              <div className="trending_4">
                <div className="nomoreTrending2">
                  <span>•</span> RECENT STYLIST ADVICE <span>•</span>
                </div>
                <ul className="trendingNow">
                  {this.state.Sidetitle4.map((el, i) => (
                    <Sidetitle info={el} key={i} />
                  ))}
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

export default Inside;
