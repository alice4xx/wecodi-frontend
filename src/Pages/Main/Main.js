import React, { Component } from 'react';
import './Main.scss';
import Post from './Post';
import Footer from '../../Components/Footer/Footer';
import Slider from './Slider';
import Readmore from '../../Components/Readmore/Readmore';
import Loading from '../../Components/Loading/Loading';

class Main extends Component {
  state = {
    articles: [],
    readArticles: 1,
  };

  renderPost = () => {
    const posts = this.state.posts.map((post, i) => {
      return <Post key={i} post={post} />;
    });
    return posts;
  };

  getPost = async () => {
    const posts = await this.callApi();
    this.setState({
      posts,
    });
  };

  callApi = () => {
    return fetch(
      'http://13.125.254.18:8000/article/allcategory?offset=0&limit=9',
      {
        method: 'GET',
        headers: {
          AUTHORIZATION:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMn0.eMDToX8PM0dxWr7sbXogpzv7tF5VFUZWRS-btmY2MOo',
        },
      },
    )
      .then(response => response.json())
      .then(response => response.DATA);
  };

  clickReadMore = () => {
    const NewReadArticles = this.state.readArticles + 6;
    this.setState({ readArticles: NewReadArticles });

    fetch(
      'http://13.125.254.18:8000/article/category/1?offset=' +
        NewReadArticles +
        '&limit=' +
        (NewReadArticles + 6),
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

  componentDidMount() {
    this.getPost();
  }

  render() {
    return (
      <>
        <div className="Main">
          <div className="Wrapper">
            <Slider />
            <section className="Recent">
              <header className="RecentHeader">
                <h2 className="Title">
                  <span>•</span> Recent Stories <span>•</span>
                </h2>
              </header>
              {this.state.posts ? (
                <div className="Posts">{this.renderPost()}</div>
              ) : (
                <Loading />
              )}

              <div className="Posts">
                {this.state.articles.map((el, i) => {
                  return <Post key={i} post={el} />;
                })}
              </div>
            </section>
            <Readmore handleClick={this.clickReadMore} />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
