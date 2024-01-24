import Footer from "./Footer.jsx";
import Nav from "./Navbar.jsx";

const About = () => {
  return (
    <>
      <Nav />

      <div className="about-container" id="about">
        <h1>ABOUT US</h1>
        <div className="about-flex">
          <img src="/assets/images/logo.png" alt="Company Logo" />
          <p>
            Kigali’s best headsets is a product-based business located in Kigali
            city, Rwanda. Our mission is to address the problem of customers not
            having access to reliable and affordable headsets for their personal
            and professional needs. We offer a diverse range of headsets,
            including both wireless and wired options, to offer to our
            customers' audio requirements. In addition, we provide complimentary
            headset maintenance and repair services to ensure customer
            satisfaction. By implementing tiered pricing options and value-added
            services, we plan to monetize our headsets through sales and
            maintenance contracts. Our primary audience consists of individuals
            seeking dependable and reasonably priced headsets for their personal
            and professional audio needs. What sets us apart from competitors is
            our unique selection of high-quality headsets at affordable prices.
            To effectively reach our target audience, we will leverage social
            media platforms, influencer partnerships, and targeted online
            advertising as part of our comprehensive marketing strategy. <br />
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
