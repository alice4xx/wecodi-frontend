import React, { Component } from 'react';
import './Article.scss';
import { withRouter } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import ReviewContent from '../../Components/Comment/Comment';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      id: 0,
      title: '',
      category: '',
      content: [],
      heartcount: 0,
      heartcheck: 'HEART_OFF',
      commentValue: '',
    };
    this.token = localStorage.getItem('wecodi_token');
  }

  componentDidMount() {
    fetch(
      `http://13.125.254.18:8000/article/detail/${this.props.match.params.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          AUTHORIZATION: this.token,
        },
      },
    )
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('로그인이 필요합니다!');
        }
      })
      .then(response => response.DATA)
      .then(response => {
        this.setState({
          title: response.TITLE,
          category: response.CATEGORY,
          content: response.CONTENT,
        });
      })
      .catch(error => {
        alert('로그인을 해야만 볼 수 있습니다!');
        this.props.history.push('/login');
      })

    fetch(`http://13.125.254.18:8000/comment/list/${this.props.match.params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'AUTHORIZATION':
          this.token,
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ comments: response.DATA});
      });

    fetch(
      `http://13.125.254.18:8000/article/heartcheck/${this.props.match.params.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          AUTHORIZATION: this.token,
        },
      },
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          heartcount: response.HEART_COUNT,
          heartcheck: response.HEART_CHECK,
        });
      });
  }

  clickHeartBtn = () => {
    fetch(
      `http://13.125.254.18:8000/article/heartcheck/${this.props.match.params.id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          AUTHORIZATION: this.token,
        },
      },
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          heartcount: response.HEART_COUNT,
          heartcheck: response.HEART_CHECK,
        });
      });
  };

  textValue = (e) => {
    this.setState({commentValue: e.target.value});
  }

  clickCommentBtn = () => {
  
    fetch(
      `http://13.125.254.18:8000/comment/add/${this.props.match.params.id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMn0.eMDToX8PM0dxWr7sbXogpzv7tF5VFUZWRS-btmY2MOo',
        },
        body:JSON.stringify({
          comment: this.state.commentValue,
        }),
      })
      .then(response => response.json())
      .then(response => {
        if(response.RESULT === 'ADDED'){
          fetch(`http://13.125.254.18:8000/comment/list/${this.props.match.params.id}`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMn0.eMDToX8PM0dxWr7sbXogpzv7tF5VFUZWRS-btmY2MOo',
            },
          })
            .then((response) => response.json())
            .then((response) => {
              this.setState({
                comments:response.DATA.reverse(),
                commentValue:'',    
            });
          });
          
        }
      });
    }

  render() {
    const {
      title,
      category,
      content,
      heartcount,
      heartcheck,
      comments,
    } = this.state;
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
                    <p className="heart-count">{heartcount}</p>
                    <i
                      className={`${
                        heartcheck === 'HEART_ON' ? 'fas' : 'far'
                      } fa-heart heart-button`}
                      onClick={this.clickHeartBtn}
                    />
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
                    onChange={this.textValue}
                  />
                  <div className="comment-send">
                    <button
                      type="button"
                      className="comment-btn"
                      value="Register"
                      onClick={this.clickCommentBtn}
                    >
                      SEND
                    </button>
                  </div>
                </div>
                <div className="real-user-comment">
                  {comments.map((el, i) => {
                    return <ReviewContent comment={el} key={i} />;
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
