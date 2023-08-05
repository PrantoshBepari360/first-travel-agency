import './footer.css';

const Footer = () => {
  return (
   <>
    <footer className="footer">
      <div className="container">
        <div className="column">
          <h3 className="header">About Astral Aventura</h3>
          <p className="paragraph">
            Embark on unforgettable adventures with Astral Aventura. We offer curated travel experiences to the most captivating destinations worldwide, ensuring you create lasting memories.
          </p>
        </div>
        <div className="column">
          <h3 className="header">Contact Us</h3>
          <ul className="contact-info">
            <li><i className="fas fa-envelope"></i> Email: info@astralaventura.com</li>
            <li><i className="fas fa-phone"></i> Phone: +1 (XXX) XXX-XXXX</li>
            <li><i className="fas fa-map-marker-alt"></i> Address: 1234 Astral Avenue, City, Country</li>
          </ul>
        </div>
        <div className="column">
          <h3 className="header">Customer Service</h3>
          <ul className="contact-info">
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping">Travel Packages</a></li>
            <li><a href="/returns">Booking Policies</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="column">
          <h3 className="header">Stay Connected</h3>
          <ul className="social-media">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
          </ul>
        </div>
      </div>
      
    </footer>
    <div className="footer footer-center p-4 bg-black text-white">
    <p>Copyright © 2023 - All right reserved by Astral Aventura</p>
  </div>
   </>
    
  );
};

export default Footer;
