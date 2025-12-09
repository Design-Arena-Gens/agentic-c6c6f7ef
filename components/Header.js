import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">Adcraze</div>

        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
          <a href="#case-studies" onClick={() => setMobileMenuOpen(false)}>Case Studies</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <button className="btn-header" onClick={scrollToForm}>
            Get Started
          </button>
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: var(--white);
          box-shadow: 0 2px 10px rgba(10, 26, 53, 0.1);
          z-index: 1000;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 24px;
          font-weight: 800;
          color: var(--navy);
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav a {
          color: var(--navy);
          font-weight: 500;
          font-size: 15px;
          transition: color 0.3s ease;
        }

        .nav a:hover {
          color: var(--electric-blue);
        }

        .btn-header {
          background: var(--electric-blue);
          color: var(--white);
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-header:hover {
          background: #1E6FE8;
          transform: translateY(-1px);
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          padding: 10px;
        }

        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background: var(--navy);
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .nav {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: var(--white);
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 4px 10px rgba(10, 26, 53, 0.1);
            transform: translateY(-120%);
            transition: transform 0.3s ease;
          }

          .nav.open {
            transform: translateY(0);
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .btn-header {
            width: 100%;
          }
        }
      `}</style>
    </header>
  );
}
