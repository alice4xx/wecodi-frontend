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
                <img src='https://s3.amazonaws.com/com.stitchfix.blog/wp-content/uploads/2016/02/24172234/aboutus.jpg' alt="about" />
              </div>
              <h3 className="Subtitle">
                Well Hello There
              </h3>
              <div className="ContentWrap">
                <h4 className="ContentTitle">ABOUT STITCH FIX</h4>
                <p className="ContentBody">Stitch Fix is the online personal styling service for busy women. Founded in 2011 by Katrina Lake, whose fashionable sister served as her own personal stylist, Stitch Fix was inspired by the opportunity to create a truly personalized shopping experience. Thanks to a brand-new retail model that blends technology with expert Stylists, it’s now effortless to find clothing tailored to your taste, budget, shape & lifestyle. Find out how it works.</p>
              </div>
              <div className="ContentWrap">
                <h4 className="ContentTitle">ABOUT STITCH FIX STYLE</h4>
                <p className="ContentBody">At Stitch Fix, we’re obsessed with fashion: the colors, fabrics, silhouettes, we love it all. But we also believe that style should be fun, accessible and make you look & feel your best. Which is why we hope you find the content here useful—filled with not just pretty pictures (though there are plenty), but practical advice so you can achieve your own fashion nirvana. Our goal: To arm you with the tools, tips & inspiration to Be Your Own Fashion Icon—whatever that may be.</p>
              </div>
              <div className="ContentWrap">
                <h4 className="ContentTitle">THE STITCH FIX EDITORS</h4>
                <p className="ContentBody">Our editors & fashion writers are savvy, stylish & strive for that “aha!” moment—when they teach you something new or expand your fashion horizons just a bit. They’re trend-seekers and word nerds and obsess over the littlest details, like the perfect shade of grey (pewter!) or the ideal heel height (still debating!). But most of all, they’re here to help you navigate the style seas with grace, sanity & a touch of humor.</p>
              </div>
              <div className="ContentWrap">
                <h4 className="ContentTitle">THE STITCH FIX STYLISTS</h4>
                <p className="ContentBody">Stitch Fix Stylists are trained in the art of style—they’re sharp, creative & naturally ooze chicness (sooo jealous). Which means they’re our go-to resource for every fashion dilemma. Should we tuck this in? Do these prints go together? How do I expertly tie a belt? Can we really wear navy & black together? Is this still “a thing?” We literally never leave them alone. Which is why they make the best on-the-fly advice columnists. Ask a Stylist your pressing fashion questions & see for yourself.</p>
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
