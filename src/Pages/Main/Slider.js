import React, { Component } from 'react';
import data from './slider-data';
import { Link } from 'react-router-dom';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      i: 0,
      title: data[0].title,
      category: data[0].category,
      img: data[0].slider,
      path: data[0].path,
      trending: [],
      advice: [],
    };
  }

  moveSlider = (e, point = 1) => {
    let nextI = this.state.i;

    nextI += point;
    clearInterval(this.interval);
    this.interval = setInterval(() => this.moveSlider(null), 3000);
    setTimeout(this.interval, 1000);

    if (nextI >= data.length) {
      nextI = 0;
    }
    if (nextI < 0) {
      nextI = data.length - 1;
    }
    this.setState({
      i: nextI,
      title: data[nextI].title,
      category: data[nextI].category,
      img: data[nextI].slider,
      path: data[nextI].path,
    });
  };

  indicatorClick = e => {
    const idx = Number(e.target.dataset.idx);
    clearInterval(this.interval);
    setTimeout(() => {
      this.interval = setInterval(() => {
        this.moveSlider(null);
      }, 3000);
    }, 1000);

    this.setState({
      i: idx,
      title: data[idx].title,
      category: data[idx].category,
      img: data[idx].slider,
      path: data[idx].path,
    });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      return this.moveSlider(null);
    }, 3000);

    fetch('http://13.125.254.18:8000/article/recommend/102', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        AUTHORIZATION:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMn0.eMDToX8PM0dxWr7sbXogpzv7tF5VFUZWRS-btmY2MOo',
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ trending: response.DATA });
      });

    fetch('http://13.125.254.18:8000/article/recommend/103', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        AUTHORIZATION:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMn0.eMDToX8PM0dxWr7sbXogpzv7tF5VFUZWRS-btmY2MOo',
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ advice: response.DATA });
      });
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { trending, advice } = this.state;
    return (
      <section className="SliderWrapper">
        <section className="Slider">
          <header className="SliderHeader">
            <h2 className="Title">
              <span>•</span> FEATURED STORIES <span>•</span>
            </h2>
          </header>
          <section className="SliderBody">
            <div className="ImageWrap">
              <div className="ImageCover">
                <Link to={`/article/${this.state.i + 300}`}>
                  <img src={this.state.img} alt="featured stories" />
                </Link>
              </div>
              <div className="Indicator">
                {data.map((el, idx) => {
                  return (
                    <span className="Icon" key={idx}>
                      <i
                        className={`${
                          this.state.i === idx ? 'fas' : 'far'
                        } fa-square`}
                        data-idx={idx}
                        onClick={this.indicatorClick}
                      />
                    </span>
                  );
                })}
              </div>
              <div className="ButtonWrap">
                <div className="Left" onClick={e => this.moveSlider(e, -1)}>
                  <i className="fas fa-chevron-circle-left" />
                </div>
                <div className="Right" onClick={e => this.moveSlider(e, 1)}>
                  <i className="fas fa-chevron-circle-right" />
                </div>
              </div>
            </div>
            <div className="SliderDetail">
              <p className="DetailCategory">
                <Link to={`/${this.state.path}`}>{this.state.category}</Link>
              </p>

              <h2 className="DetailTitle">
                <Link to={`/article/${this.state.i + 300}`}>
                  {this.state.title}
                </Link>
              </h2>
            </div>
          </section>
        </section>
        <section className="Widget">
          <div className="TrendingWidget">
            <h3 className="WidgetTitle">
              <span>•</span> Trending Now <span>•</span>
            </h3>
            <div className="WidgetDetails">
              {trending.map((el, i) => {
                return (
                  <p key={i}>
                    <Link to={`/article/${el.article_id}`}>{el.title}</Link>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="RecentWidget">
            <h3 className="WidgetTitle">
              <span>•</span> Stylist Advice <span>•</span>
            </h3>
            <div className="WidgetDetails">
              {advice.map((el, i) => {
                return (
                  <p key={i}>
                    <Link to={`/article/${el.article_id}`}>{el.title}</Link>
                  </p>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Slider;
