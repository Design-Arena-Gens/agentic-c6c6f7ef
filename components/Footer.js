export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="logo">Adcraze</h3>
            <p>Performance-driven advertising that scales your revenue—not your costs.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#process">Our Process</a></li>
                <li><a href="#contact-form">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Meta Ads</a></li>
                <li><a href="#services">Google Ads</a></li>
                <li><a href="#services">TikTok Ads</a></li>
                <li><a href="#services">LinkedIn Ads</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Adcraze. All rights reserved.</p>
          <div className="social-links">
            <a href="#linkedin" aria-label="LinkedIn">LinkedIn</a>
            <a href="#twitter" aria-label="Twitter">Twitter</a>
            <a href="#facebook" aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--navy);
          color: var(--white);
          padding: 60px 20px 30px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 60px;
          margin-bottom: 40px;
        }

        .footer-brand {
          max-width: 400px;
        }

        .logo {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 16px;
          color: var(--electric-blue);
        }

        .footer-brand p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 15px;
          line-height: 1.6;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .footer-column h4 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--white);
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
        }

        .footer-column li {
          margin-bottom: 12px;
        }

        .footer-column a {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-column a:hover {
          color: var(--electric-blue);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
        }

        .social-links {
          display: flex;
          gap: 24px;
        }

        .social-links a {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .social-links a:hover {
          color: var(--electric-blue);
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 20px 20px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
