export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge">⚡ Performance-Based Advertising</span>
        </div>
        <h1>
          Stop Wasting Ad Spend.<br />
          Start Scaling Revenue.
        </h1>
        <p className="hero-subtitle">
          We only win when you win. Data-driven campaigns that deliver real ROI—no fluff, no excuses, just results.
        </p>
        <div className="hero-cta">
          <button className="btn-primary" onClick={scrollToForm}>
            Get Your Free Strategy Call
          </button>
          <button className="btn-secondary" onClick={scrollToForm}>
            See Our Case Studies
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">284%</div>
            <div className="stat-label">Avg. ROAS</div>
          </div>
          <div className="stat">
            <div className="stat-number">$12M+</div>
            <div className="stat-label">Client Revenue Generated</div>
          </div>
          <div className="stat">
            <div className="stat-number">93%</div>
            <div className="stat-label">Client Retention Rate</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, var(--navy) 0%, #0D2447 100%);
          color: var(--white);
          padding: 100px 20px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(42, 127, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          margin-bottom: 24px;
        }

        .badge {
          display: inline-block;
          background: rgba(255, 107, 53, 0.2);
          color: var(--orange);
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          border: 1px solid var(--orange);
        }

        h1 {
          font-size: 56px;
          margin-bottom: 24px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 20px;
          margin-bottom: 40px;
          color: rgba(255, 255, 255, 0.9);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .hero-cta {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .btn-primary {
          background: var(--electric-blue);
          color: var(--white);
          padding: 16px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(42, 127, 255, 0.3);
        }

        .btn-primary:hover {
          background: #1E6FE8;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(42, 127, 255, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: var(--white);
          padding: 16px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          border: 2px solid var(--white);
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 42px;
          font-weight: 800;
          color: var(--electric-blue);
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 80px 20px 60px;
          }

          h1 {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 18px;
          }

          .hero-cta {
            flex-direction: column;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
          }

          .hero-stats {
            gap: 40px;
          }

          .stat-number {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}
