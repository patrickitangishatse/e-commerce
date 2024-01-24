function SliderCard({ image }) {
  return (
    <div className="content">
      <div className="left-column">
        <img src={image} alt="" />
      </div>
      <div className="right-column">
        <div className="product-description">
          <h2>Highlights</h2>
          <ul>
            <li>
              Fine-tuned acoustics for clarity and depth with noise isolation
            </li>
            <li>
              Adjustable fit with comfort-cushioned ear cups made for everyday
              use{" "}
            </li>
            <li>Stereo Bluetooth®</li>
            <li>Android compatible</li>
            <li>Up to 40 hours of battery life</li>
          </ul>
          <a href="#" className="btn">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default SliderCard;
