import Navbar from "./Nav-dash.jsx";

function Cart() {
  return (
    <>
      <Navbar />
      <div class="products" id="products">
        <h1>Your Shopping Cart</h1>
        <div class="products-div">
          {/* Product card starts */}
          <div class="product-card">
            <img src="/assets/images/brown.png" />
            <div class="product-description">
              <h4>Beats Studio Pro</h4>
              <p>$100</p>
              <p>
                Fine-tuned acoustics for clarity and depth with noise isolation
              </p>
            </div>
          </div>
          {/* ........ */}
          {/* Product card starts */}
          <div class="product-card">
            <img src="/assets/images/2.png" />
            <div class="product-description">
              <h4>PodCast</h4>
              <p>$150</p>
              <p>
                Adjustable fit with comfort-cushioned ear cups made for everyday
                use
              </p>
            </div>
          </div>
          {/* ......... */}
          {/* Product card starts */}
          <div class="product-card">
            <img src="/assets/images/dark-blue.png" />
            <div class="product-description">
              <h4>Beats Studio Pro</h4>
              <p>$50</p>
              <p>
                Adjustable fit with comfort-cushioned ear cups made for everyday
                use
              </p>
            </div>
          </div>
          {/* ......... */}
        </div>
      </div>
    </>
  );
}
export default Cart;
