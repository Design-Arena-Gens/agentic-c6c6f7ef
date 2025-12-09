export default function Solution() {
  const features = [
    {
      title: 'Performance-Based Pricing',
      description: 'We eat our own cooking. Our fees are tied directly to your results—we only win when you win.',
      icon: '🎯'
    },
    {
      title: 'Full-Funnel Attribution',
      description: 'Know exactly which ads, channels, and audiences drive revenue. No more guessing games.',
      icon: '📈'
    },
    {
      title: 'Rapid Testing & Optimization',
      description: 'We launch, test, and iterate fast—cutting losers and scaling winners within days, not months.',
      icon: '⚡'
    },
    {
      title: 'Transparent Reporting',
      description: 'Real-time dashboards showing spend, conversions, and ROI. You\'ll always know where your money goes.',
      icon: '📊'
    },
    {
      title: 'Multi-Platform Expertise',
      description: 'Meta, Google, TikTok, LinkedIn—we know what works on each platform and how to maximize your budget.',
      icon: '🚀'
    },
    {
      title: 'Dedicated Account Team',
      description: 'No junior analysts or outsourced labor. You get senior strategists who know your business inside out.',
      icon: '👥'
    }
  ];

  return (
    <section className="solution">
      <div className="container">
        <div className="section-header">
          <h2>Introducing: The Adcraze Method</h2>
          <p>A proven framework that turns ad spend into predictable revenue</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="guarantee-box">
          <h3>Our 90-Day Performance Guarantee</h3>
          <p>If we don't improve your ROAS by at least 50% in the first 90 days, you don't pay our management fee. Period.</p>
        </div>
      </div>

      <style jsx>{`
        .solution {
          padding: 80px 20px;
          background: var(--white);
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .feature-card {
          padding: 32px;
          border: 2px solid #E8EDF2;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          border-color: var(--electric-blue);
          box-shadow: 0 8px 25px rgba(42, 127, 255, 0.15);
        }

        .feature-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 22px;
          margin-bottom: 12px;
          color: var(--navy);
        }

        .feature-card p {
          color: var(--gray-medium);
          font-size: 16px;
          line-height: 1.6;
        }

        .guarantee-box {
          background: linear-gradient(135deg, var(--navy), #0D2447);
          color: var(--white);
          padding: 40px;
          border-radius: 12px;
          text-align: center;
          border: 3px solid var(--electric-blue);
        }

        .guarantee-box h3 {
          font-size: 28px;
          margin-bottom: 16px;
          color: var(--electric-blue);
        }

        .guarantee-box p {
          font-size: 18px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .solution {
            padding: 60px 20px;
          }

          .section-header h2 {
            font-size: 32px;
          }

          .section-header p {
            font-size: 18px;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .guarantee-box {
            padding: 30px 20px;
          }

          .guarantee-box h3 {
            font-size: 24px;
          }

          .guarantee-box p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
