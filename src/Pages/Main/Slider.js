import React, { Component } from 'react';
import data from './slider-data';
import {Link} from 'react-router-dom';

// ----------구현해야하는 로직-----------
// 받아온 data의 length만큼 setInterval을 돌려서 title, category, slider 값 변경을 준다.
// ----------필요한 함수----------------
// 1) nextSlider => 다음 슬라이더로 넘어가는 함수(setInterval, leftBtn에 넘겨주면 될 듯)
//    => 인덱스가 data.length-1이면 0번째 인덱스로 보내야할 것 같다.
// 2) beforeSlider => 이전 슬라이더로 넘기는 함수, index===0인 순간엔 length-1 인덱스로 보내야할 것 -> leftBtn에 적용

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      i: 0,
      title: data[0].title,
      category: data[0].category,
      img: data[0].slider,
    };
  }

  nextSlider = () => {
    let nextI = this.state.i;
    nextI++;
    if (nextI >= data.length) {
      nextI = 0;
    }
    this.setState({
      i: nextI,
      title: data[nextI].title,
      category: data[nextI].category,
      img: data[nextI].slider,
    });
  };
  beforeSlider = () => {
    let nextI = this.state.i;
    nextI--;
    if (nextI < 0) {
      nextI = data.length - 1;
    }
    this.setState({
      i: nextI,
      title: data[nextI].title,
      category: data[nextI].category,
      img: data[nextI].slider,
    });
  };

  componentDidMount() {
    this.interval = setInterval(this.nextSlider, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
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
                <img src={this.state.img} alt="featured stories" />
              </div>
              <div className="Indicator">
                {data.map((el, i) => {
                  return (
                    <span className="Icon" key={i} >
                      <i className={`${this.state.i === i ? 'fas' : 'far'} fa-square`}/>
                   </span>
                  )
                })}
              </div>
              <div className="ButtonWrap">
                <div className="Left" onClick={this.beforeSlider}>
                  <i className="fas fa-chevron-circle-left" />
                </div>
                <div className="Right" onClick={this.nextSlider}>
                  <i className="fas fa-chevron-circle-right" />
                </div>
              </div>
            </div>
            <div className="SliderDetail">
              <p className="DetailCategory">{this.state.category}</p>
              <h2 className="DetailTitle">{this.state.title}</h2>
            </div>
          </section>
        </section>
        <section className="Widget">
          <div className="TrendingWidget">
            <h3 className="WidgetTitle"><span>•</span> Trending Now <span>•</span></h3>
            <div className="WidgetDetails">
              <p><Link to="/">31 Days of Outfits: August Edition</Link></p>
              <p><Link to="/">Stitch Fix Stylists Share Their Favorite Fall 2019 Looks</Link></p>
              <p><Link to="/">Not A Shorts Fan? Meet The Summer Pant</Link></p>
            </div>
          </div>
          <div className="RecentWidget">
            <h3 className="WidgetTitle"><span>•</span> Recent Stylist Advice <span>•</span></h3>
            <div className="WidgetDetails">
              <p><Link to="/">Can I wear gold & silver jewelry together?</Link></p>
              <p><Link to="/">How can I build a capsule wardrobe for work?</Link></p>
              <p><Link to="/">What are the new fall trends?</Link></p>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Slider;
