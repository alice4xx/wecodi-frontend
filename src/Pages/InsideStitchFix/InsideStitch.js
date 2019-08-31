import React, { Component } from 'react';
import './InsideStitch.scss';
import Footer from '../../Components/Footer/Footer';
import Inside1 from '../../Images/insidestitchfix_1.png';
import Readmore from '../../Components/Readmore/Readmore';

class Inside extends Component {
  render() {
    return (
      <>
        <div className="pageContainer">
          <div className="page_Body">
            <div className="body_Left">
              <div className="title_Left">
                <div className="recent">
                  <span>•</span> RECENT INSIDE STITCH FIX <span>•</span>
                </div>
                <div className="fashionTips">
                  <div className="fashionTips_3">
                    <div className="articles">
                      <div className="thumbnail">
                        <img src={Inside1} alt="inside_1" width="120" />
                      </div>
                      <div className="entry">
                        <header className="entry-Container">
                          <p className="entry-category">INSIDE STITCH FIX</p>
                          <h3 className="entry-title">
                            <a href="/" className="articleTitle">
                              Stitch Fix Stylists Share Their Favorite Fall 2019
                              Looks
                            </a>
                          </h3>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fashionTips">
                  <div className="fashionTips_3">
                    <div className="articles">
                      <div className="thumbnail">
                        <img src={Inside1} alt="outfit_1" width="120" />
                      </div>
                      <div className="entry">
                        <header className="entry-Container">
                          <p className="entry-category">INSIDE STITCH FIX</p>
                          <h3 className="entry-title">
                            <a href="/" className="articleTitle">
                              Stitch Fix Stylists Share Their Favorite Fall 2019
                              Looks
                            </a>
                          </h3>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fashionTips">
                  <div className="fashionTips_3">
                    <div className="articles">
                      <div className="thumbnail">
                        <img src={Inside1} alt="inside_1" width="120" />
                      </div>
                      <div className="entry">
                        <header className="entry-Container">
                          <p className="entry-category">INSIDE STITCH FIX</p>
                          <h3 className="entry-title">
                            <a href="/" className="articleTitle">
                              Stitch Fix Stylists Share Their Favorite Fall 2019
                              Looks
                            </a>
                          </h3>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fashionTips">
                  <div className="fashionTips_3">
                    <div className="articles">
                      <div className="thumbnail">
                        <img src={Inside1} alt="inside_1" width="120" />
                      </div>
                      <div className="entry">
                        <header className="entry-Container">
                          <p className="entry-category">INSIDE STITCH FIX</p>
                          <h3 className="entry-title">
                            <a href="/" className="articleTitle">
                              Stitch Fix Stylists Share Their Favorite Fall 2019
                              Looks
                            </a>
                          </h3>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fashionTips">
                  <div className="fashionTips_3">
                    <div className="articles">
                      <div className="thumbnail">
                        <img src={Inside1} alt="inside_1" width="120" />
                      </div>
                      <div className="entry">
                        <header className="entry-Container">
                          <p className="entry-category">INSIDE STITCH FIX</p>
                          <h3 className="entry-title">
                            <a href="/" className="articleTitle">
                              Stitch Fix Stylists Share Their Favorite Fall 2019
                              Looks
                            </a>
                          </h3>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fashionTips">
                  <div className="fashionTips_3">
                    <div className="articles">
                      <div className="thumbnail">
                        <img src={Inside1} alt="inside_1" width="120" />
                      </div>
                      <div className="entry">
                        <header className="entry-Container">
                          <p className="entry-category">INSIDE STITCH FIX</p>
                          <h3 className="entry-title">
                            <a href="/" className="articleTitle">
                              Stitch Fix Stylists Share Their Favorite Fall 2019
                              Looks
                            </a>
                          </h3>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="body_Right">
              <div className="trending">
                <div className="nomoreTrending">
                  <span>•</span> TRENDING NOW <span>•</span>
                </div>
                <ul className="trendingNow">
                  <li>
                    <a href="/">
                      <span>
                        {' '}
                        All of your Style Shuffle Questions, Answered{' '}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>31 Days of Outfits: August Edition</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>
                        {' '}
                        Stitch Fix Stylists Share Their Favorite Fall 2019 Looks
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="nomoreTrending2">
                  <span>•</span> RECENT STYLIST ADVICE <span>•</span>
                </div>
                <ul className="trendingNow">
                  <li>
                    <a href="/">
                      <span>How can I build a capsule wardrobe for work? </span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>What are the new fall trends? </span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>How do I tie a tie-front top? </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Readmore />
        <Footer />
      </>
    );
  }
}

export default Inside;
