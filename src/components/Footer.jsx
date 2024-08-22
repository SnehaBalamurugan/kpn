import React from 'react';
import Appstore from '../assests/images/appstore.png'
import GPlay from '../assests/images/googlepay.png'
import FooterBanner from '../assests/images/footer.png'
import './Footer.css'; // Assuming you have a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer fixed">
        <img src={FooterBanner} alt="Footer" height={400} width={'100%'}/>
      <div className="footer-top mt-2">
        <b>Available on Android & iOS</b><br/>
        <img src={Appstore} alt='App Store' height={93} />
        <img src={GPlay} alt="Google Play" />
      </div>
      <div className="footer-sections">
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li>About us</li>
            <li>Blogs</li>
            <li>Stores</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Categories</h4>
          <ul>
            <li>Fresh Fruits</li>
            <li>Edible Oil & Ghee</li>
            <li>Instant & Frozen</li>
            <li>Personal Care</li>
          </ul>
        </div>
        {/* Repeat for other columns as necessary */}
        <div className="footer-column">
          <h4>Contact us</h4>
          <ul>
            <li>Support@kpnfarmfresh.com</li>
            <li>1800 571 4777</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Kovai Pazhamudir Nilayam. All Rights Reserved.</p>
        <p>Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer;
