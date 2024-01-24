import Footer from "./Footer.jsx";
import Nav from "./Navbar.jsx";

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="contact" id="contact">
        <div className="contact-form">
          <h1>Have You any Question?</h1>
          <h4>For any inquiries, please reach us using the form below.</h4>
          <form>
            <input type="text" name="Names" placeholder="Names" />
            <input type="email" name="Email" placeholder="Email" />
            <textarea placeholder="Message" cols="5" rows="12"></textarea>
            <br />
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="contact-address">
          <div className="shop-address">
            <h2>Shop Address</h2>
            <p>KG 11 Ave,</p>
            <p>Kigali City, Rwanda</p>
          </div>
          <div className="shop-hours">
            <h2>Shop Hours</h2>
            <p>Monday - Friday: 8am - 5pm</p>
            <p>Saturday: 9am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="contact-info">
            <h2>Contact</h2>
            <p>+250 788 825 555</p>
            <p>+250 781 199 094</p>
            <p>info@kigalibestheadset.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
