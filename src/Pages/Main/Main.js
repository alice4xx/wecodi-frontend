import React, { Component } from 'react';
import './Main.scss';
import Post from './Post';
import Footer from '../../Components/Footer/Footer';
import Slider from './Slider';
import Readmore from '../../Components/Readmore/Readmore';
import Loading from '../../Components/Loading/Loading';

class Main extends Component {
  state = {};

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
      'http://10.58.2.142:8002/article/category/0?offset=0&limit=9',
      {
        method: 'GET',
        headers: {
          'AUTHORIZATION':
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTExIn0.sECbRkAG52DuaBKpv4XpJ2KrT-s56b8ObFR3T_DD6oo',
        },
      },
    )
    .then(response => response.json())
    .then(response => response.DATA);
  };

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
                {this.state.posts ?  <div className="Posts">{this.renderPost()}</div> : <Loading />}
            </section>
            <Readmore />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
