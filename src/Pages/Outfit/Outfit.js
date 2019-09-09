import React, { Component } from 'react';
import './Outfit.scss';
import Footer from '../../Components/Footer/Footer';
import Readmore from '../../Components/Readmore/Readmore';
import FancyBox from './FancyBox';
import Content from './Content';
import Loading from '../../Components/Loading/Loading';

class Outfit extends Component {
  state = {
    mode: false,
    index: 0,
    limit: 1,
    outfits: [],
    target: 0,
  };

  // handleOutsideClick(e) {
  //   // this.modal 는 모달 부분의 ref
  //   if (this.modal.contains(e.target)/* || !this.props.show*/) {
  //     return;
  //   }

  //   this.close();
  // }

  getMore = () => {
    this.setState(
      {
        index: this.state.index + 8,
        limit: 0,
      },
      () => this.getOutfit(),
    );
  };

  getOutfit = async () => {
    const outfits = await this.callApi();
    this.setState({
      outfits: [...this.state.outfits, ...outfits],
    });
  };

  callApi = () => {
    return fetch(
      `http://13.125.254.18:8000/article/category/3?offset=${
        this.state.index
      }&limit=${this.state.limit + this.state.index + 8}`,
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

  componentDidMount() {
    this.getOutfit();
  }

  render() {
    const { mode, outfits, index, target } = this.state;
    return (
      <>
        <div className="Outfit">
          <div className="Wrapper">
            {mode && (
              <FancyBox
                img={outfits[target].thumb_img}
                handleClick={() => this.setState({ mode: !mode })}
              />
            )}
            <section className="OutfitHeader">
              <h2 className="Title">
                <span>•</span> Outfit Ideas <span>•</span>
              </h2>
            </section>
            <section className="MainGallery">
              <div className="GalleryHeader">
                <h3 className="GalleryTitle">
                  Explore, Discover & Be Inspired
                </h3>
                <p className="GalleryDescription">
                  Need some outfit ideas? Look through hundreds of Wecodi styles
                  or see what our clients are wearing!
                </p>
              </div>
              <section className="GalleryContainer">
                <div className="GalleryGrid">
                  {outfits.length > 0 ? (
                    <Content
                      img={outfits[0].thumb_img}
                      handleClick={() =>
                        this.setState({ mode: !mode, target: 0 })
                      }
                    />
                  ) : (
                    <div />
                  )}

                  <div className="GridDetail">
                    {outfits.length > 0 ? (
                      outfits.map((el, i) => {
                        if (i >= 1 && i <= 4) {
                          return (
                            <Content
                              key={i}
                              img={outfits[i].thumb_img}
                              handleClick={() =>
                                this.setState({ mode: !mode, target: i })
                              }
                            />
                          );
                        }
                      })
                    ) : (
                      <Loading />
                    )}
                  </div>
                </div>
              </section>
            </section>
            <section className="FilteredGallery">
              <ul className="TagsWrap">
                <li className="TagsList">Latest</li>
                <li className="TagsList">Summer-Outfits</li>
                <li className="TagsList">Casual</li>
                <li className="TagsList">Denim</li>
                <li className="TagsList">Athleisure</li>
                <li className="TagsList">Date</li>
              </ul>
              <div className="FilterdContainer">
                {outfits.length > 0 ? (
                  outfits.map((el, i) => {
                    if (i >= 5) {
                      return (
                        <Content
                          key={i}
                          img={el.thumb_img}
                          handleClick={() =>
                            this.setState({ mode: !mode, target: i })
                          }
                        />
                      );
                    }
                  })
                ) : (
                  <Loading />
                )}
              </div>
              <Readmore handleClick={this.getMore} />
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Outfit;
