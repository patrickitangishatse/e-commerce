import Slider from "react-slick";
import Footer from "./Footer.jsx";
import Nav from "./Navbar.jsx";
import { Link } from "react-router-dom";

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoPlaySpeed: 100,
    pauseOnDotsHover: true,
  };

  return (
    <>
      <Nav />
      <div className="slide-mod">
        <Slider {...settings}>
          <div className="content">
            <div className="left-column">
              <img src="/assets/images/black.png" alt="" />
            </div>
            <div className="right-column">
              <div className="product-description">
                <h2>Beats Studio Pro</h2>
                <ul>
                  <li>
                    Fine-tuned acoustics for clarity and depth with noise
                    isolation
                  </li>
                  <li>
                    Adjustable fit with comfort-cushioned ear cups made for
                    everyday use
                  </li>
                  <li>Stereo Bluetooth®</li>
                  <li>Android compatible</li>
                  <li>Up to 40 hours of battery life</li>
                </ul>
                <Link className="form-container-link" to={"/Login"}>
                  Buy Now!
                </Link>
              </div>
            </div>
          </div>
          {/* End of Products and start of another*/}
          <div className="content">
            <div className="left-column">
              <img src="/assets/images/3.png" alt="" />
            </div>
            <div className="right-column">
              <div className="product-description">
                <h2> Studio Pro </h2>
                <ul>
                  <li>
                    Fine-tuned acoustics for clarity and depth with noise 3.5mm
                  </li>
                  <li>
                    isolation Supports spatial and lossless audio USB-C and
                  </li>
                  <li> headphone jack Supports ANC and transparency mode</li>
                  <li>Android and IoS compatible</li>
                  <li>Up to 20 hours of battery life</li>
                </ul>
                <Link className="form-container-link" to={"/Login"}>
                  Buy Now!
                </Link>
              </div>
            </div>
          </div>
          {/* End of Products and start of another*/}
          <div className="content">
            <div className="left-column">
              <img src="/assets/images/2.png" alt="" />
            </div>
            <div className="right-column">
              <div className="product-description">
                <h2>Studio Head Sets</h2>
                <ul>
                  <li>
                    Fine-tuned acoustics for clarity and depth with noise
                    isolation Upgrade your audio experience with our exceptional
                    range of microphones and headphones.
                  </li>
                  <li>
                    Explore our collection today and unlock the full potential
                    of your audio endeavors.
                  </li>
                </ul>
                <Link className="form-container-link" to={"/Login"}>
                  Buy Now!
                </Link>
              </div>
            </div>
          </div>
        </Slider>
        <Footer />
      </div>
    </>
  );
}

export default Home;
