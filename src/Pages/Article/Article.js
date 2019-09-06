import React, { Component } from 'react';
import './Article.scss';
import { get } from 'http';
import { Route, withRouter } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Slideshowimg from '../../Images/slideshowsample-img.png';
import ReviewContent from '../../Components/CommentBox/comment';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      heart: 0,
      id: 0,
      title: '',
      category: '',
      content: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://10.58.7.236:8002/article/detail/${this.props.match.params.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          AUTHORIZATION:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTExIn0.sECbRkAG52DuaBKpv4XpJ2KrT-s56b8ObFR3T_DD6oo',
        },
      },
    )
      .then(response => response.json())
      .then(response => response.DATA)
      .then(response => {
        this.setState({
          title: response.TITLE,
          category: response.CATEGORY,
          content: response.CONTENT,
        });
      });

    // fetch('http://10.58.7.236:8002/comment/list/1', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // .then(response => response.json())
    // .then(response => {
    //   this.setState({ comments: response });
    // });

    fetch('http://10.58.7.236:8002/article/heartcheck/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        AUTHORIZATION:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTExIn0.sECbRkAG52DuaBKpv4XpJ2KrT-s56b8ObFR3T_DD6oo',
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ heart: response.HEART_COUNT });
      });
  }

  render() {
    const { title, category, content } = this.state;
    return (
      <>
        <div className="detailpages">
          <div className="page-container">
            <div className="header-title">
              <span>•</span> {category} <span>•</span>
            </div>
            <div className="page-body">
              <section className="section-wrap">
                <header className="section-title">
                  <h1 className="entry-title"> {title}</h1>
                  {content[0] && (
                    <div className="first-article">
                      <p>{content[0]}</p>
                    </div>
                  )}
                </header>
                <div className="">
                  {content[3] && (
                    <div className="slideshow-slide-first">
                      <img src={content[3]} alt="beautiful-clothing" />
                    </div>
                  )}
                  <div className="share-this-wrap">
                    {content[1] && (
                      <p className="second-article">
                        <span>{content[1]}</span>
                      </p>
                    )}

                    {content[4] && (
                      <div className="slideshow-slide-second">
                        <img src={content[4]} alt="beautiful-clothing" />
                      </div>
                    )}
                    {content[2] && (
                      <p className="third-article">
                        <span>{content[2]} </span>
                      </p>
                    )}
                    <div className="author-byline">
                      <p>By: Stitch Fix</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="heart-counter">
                <div className="heart-wrap">
                  <p>love this? Help trend it! </p>
                  <div className="vote-counter">
                    <p className="heart-count">{this.state.heart}</p>
                    <i className="far fa-heart heart-button" />
                  </div>
                </div>
              </section>
              <div className="comments">
                <div className="gotocomments">
                  <h3>Comments</h3>
                </div>
                <div className="comment-new-form">
                  <div className="comment-user-icon">
                    <img
                      className="img-icon"
                      src="https://www.facebook.com/rsrc.php/v1/yi/r/odA9sNLrE86.jpg?_nc_x=Ij3Wp8lg5Kz"
                      alt=""
                    />
                  </div>
                  <textarea
                    className="add-comment"
                    placeholder="Add a comment..."
                  />
                  <div className="comment-send">
                    <button
                      type="button"
                      className="comment-btn"
                      value="Register"
                      onClick={this.clickCommentBtn}
                    >
                      {' '}
                      SEND{' '}
                    </button>
                  </div>
                </div>
                <div className="real-user-comment">
                  {this.state.comments.map(el => {
                    return <ReviewContent comment={el} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(Article);
