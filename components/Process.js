export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Audit',
      description: 'We analyze your current ad performance, identify what\'s broken, and map out quick wins.',
      timeline: 'Week 1'
    },
    {
      number: '02',
      title: 'Strategy & Setup',
      description: 'Build your custom performance framework: audiences, creative strategy, tracking, and attribution.',
      timeline: 'Week 2'
    },
    {
      number: '03',
      title: 'Launch & Test',
      description: 'Deploy campaigns across platforms, run rapid A/B tests, and gather performance data.',
      timeline: 'Week 3-4'
    },
    {
      number: '04',
      title: 'Optimize & Scale',
      description: 'Cut losers, double down on winners, and systematically scale what\'s working.',
      timeline: 'Ongoing'
    }
  ];

  return (
    <section className="process">
      <div className="container">
        <div className="section-header">
          <h2>How We Work</h2>
          <p>Our proven 4-step process to predictable ad performance</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="step-timeline">{step.timeline}</div>
              </div>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>

        <div className="cta-box">
          <h3>Ready to Stop Wasting Ad Spend?</h3>
          <p>Book a free 30-minute strategy call. We'll audit your current ads and show you exactly where you're leaving money on the table.</p>
          <button className="btn-cta" onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}>
            Schedule Your Free Audit
          </button>
        </div>
      </div>

      <style jsx>{`
        .process {
          padding: 80px 20px;
          background: var(--gray-light);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 42px;
          margin-bottom: 16px;
          color: var(--navy);
        }

        .section-header p {
          font-size: 20px;
          color: var(--gray-medium);
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
          position: relative;
        }

        .step-card {
          background: var(--white);
          padding: 32px;
          border-radius: 12px;
          position: relative;
          box-shadow: 0 2px 10px rgba(10, 26, 53, 0.08);
        }

        .step-number {
          font-size: 48px;
          font-weight: 800;
          color: var(--electric-blue);
          opacity: 0.2;
          margin-bottom: 16px;
          line-height: 1;
        }

        .step-content h3 {
          font-size: 22px;
          margin-bottom: 12px;
          color: var(--navy);
        }

        .step-content p {
          color: var(--gray-medium);
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .step-timeline {
          display: inline-block;
          background: var(--electric-blue);
          color: var(--white);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        .step-arrow {
          display: none;
        }

        .cta-box {
          background: linear-gradient(135deg, var(--orange), #FF8555);
          color: var(--white);
          padding: 48px;
          border-radius: 12px;
          text-align: center;
        }

        .cta-box h3 {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .cta-box p {
          font-size: 18px;
          margin-bottom: 32px;
          line-height: 1.6;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .btn-cta {
          background: var(--white);
          color: var(--orange);
          padding: 18px 40px;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .process {
            padding: 60px 20px;
          }

          .section-header h2 {
            font-size: 32px;
          }

          .section-header p {
            font-size: 18px;
          }

          .steps-container {
            grid-template-columns: 1fr;
          }

          .cta-box {
            padding: 32px 20px;
          }

          .cta-box h3 {
            font-size: 26px;
          }

          .cta-box p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
