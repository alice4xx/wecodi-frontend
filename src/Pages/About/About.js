import React, { Component } from 'react';
import './About.scss';
import Footer from '../../Components/Footer/Footer';

class About extends Component {
  render() {
    return (
      <>
        <div className="About">
          <div className="Wrapper">
            <section className="AboutHeader">
              <h2 className="Title">
                <span>•</span> About <span>•</span>
              </h2>
            </section>
            <section className="Container">
              <div className="ImageWrap">
                <img
                  src="https://s3.amazonaws.com/com.stitchfix.blog/wp-content/uploads/2016/02/24172234/aboutus.jpg"
                  alt="about"
                />
              </div>
              <h3 className="Subtitle">위코디 팀 너무 수고 많으셨습니다! :)</h3>
              <div className="ContentWrap">
                <p className="ContentBody">
                  프론트엔드 김감사, 이진경, 권순규
                  <br />
                  백엔드 한바름, 신이레
                  <br />
                </p>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
