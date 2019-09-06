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
    fetch(`http://10.58.7.236:8002/article/detail/${this.state.id+1}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'AUTHORIZATION':
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTExIn0.sECbRkAG52DuaBKpv4XpJ2KrT-s56b8ObFR3T_DD6oo',
      },
    })
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
        'AUTHORIZATION':
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTExIn0.sECbRkAG52DuaBKpv4XpJ2KrT-s56b8ObFR3T_DD6oo',
      },
    })
    .then(response => response.json())
    .then(response => {
      this.setState({ heart: response.HEART_COUNT });
    });
  }

  render() {
    const { title, category, content} = this.state;
    // const { match } = props;
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
                  <h1 className="entry-title">
                    {' '}
                    {title}
                  </h1>
                  <div className="first-article">
                    <p>
                      {content}
                    </p>
                  </div>
                </header>
                <div className="main-content">
                  <div className="entry-content">
                    <span className="content-title">
                      Keep reading for more August style inspiration
                    </span>
                  </div>
                  <div className="slideshow-slide-first">
                    <img src={Slideshowimg} alt="beautiful-clothing" />
                  </div>
                  <div className="share-this-wrap">
                    <h2 className="second-title">
                      <span>work meet play</span>
                    </h2>
                    <p className="second-article">
                      <span>
                        Get down to business this summer in fun, lightweight
                        pieces designed to make you feel chic while staying
                        cool. Sleek trousers with a luxe-looking tee or crisp
                        button-down, plus bright block heels or pointy flats, is
                        a no-stress look that’s put-together and polished. Pair
                        a midi or an A-line dress with an oversized tote that’s
                        perfect for commuting and carrying your laptop,
                        after-work heels, or both.
                      </span>
                    </p>
                    <div className="slideshow-slide-second">
                      <img src={Slideshowimg} alt="beautiful-clothing-second" />
                    </div>
                    <h2 className="third-title">
                      <span>Boho Your Way</span>
                    </h2>
                    <p className="third-article">
                      <span>
                        Stay sunshine-ready in soft and flowy earth-tone skirts
                        that move with the late-summer, weekend breeze. Want
                        more subtle hints of boho for everyday wear? Consider a
                        cream-colored flowy tunic with metallic embroidered
                        details as a statement piece, and build around it with
                        cropped trousers or denim and a neutral wedge sandal.{' '}
                      </span>
                    </p>
                    <div className="slideshow-slide-third">
                      <img src={Slideshowimg} alt="beautiful-clothing-third" />
                    </div>
                    <h2 className="fourth-title">
                      <span>Back to Denim</span>
                    </h2>
                    <p className="fourth-article">
                      <span>
                        What is summer, fall or any season for that matter
                        without{' '}
                        <a
                          href="https://www.stitchfix.com/women/blog/denim-trends/?ref=blog"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {' '}
                          proper denim
                        </a>
                        ? Combat over-air-conditioned office spaces with casual
                        but elevated medium-dark denim for work; add a bright,
                        white blazer layered over a silky tank or basic knit,
                        and seal the deal with hot-red heels. Keep things light
                        on the weekend in a pale pink denim skirt with a neutral
                        crossbody bag or clutch and a lightweight, printed
                        blouse. And when temps cool down, just add booties and
                        tights for the ultimate ready-for-fall outfit.
                      </span>
                    </p>
                    <p className="wrap-up-article">
                      <em>
                        <b>
                          Prolong your days of fun-in-the-sun while getting
                          fall-ready
                        </b>
                        <b>. </b>
                        <a
                          href="https://stitchfix.com/women"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Ask your Stylist</span>{' '}
                        </a>
                        <b>
                          for effortless pieces that will help you feel your
                          best and spend more time doing what you love
                        </b>
                        <b>.</b>
                      </em>
                    </p>
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

export default Article;
