import React, { Component } from 'react';
import './About.scss';
import Footer from '../../Components/Footer/Footer';
import AboutImg from '../../Images/about.png';

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
                <img src={AboutImg} alt="about" />
              </div>
              <h3 className="Subtitle">
                Wecodi Forever <i className="fas fa-seedling Seeding" />
              </h3>
              <div className="ContentWrap">
                <p className="ContentBody">
                  <p>
                    김감사 : 모든 것이 은혜입니다. 함께해줘서 고마워요.{' '}
                    <i className="fas fa-hand-holding-heart Kamsa" />
                  </p>
                  <p>
                    권순규 : 의미 있는 우리 모두의 첫 프로젝트, 너무 고생
                    많으셨습니다! 위코디 팀 만세!{' '}
                  </p>
                  <p>이진경 : </p>
                  <p>
                    신이레 : 소통이 원활한 팀과 함께 으쌰으쌰 하며 보낸 2주!
                    너무나 값졌습니다.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;다음
                    걸음도 화이팅! :)
                  </p>
                  <p>한바름 : 한 바름 하는 한바름은 오늘도 바름바름합니다.</p>
                  <br />
                  <p>송은우, 김예리, 박지훈 멘토님 감사합니다.</p>
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
