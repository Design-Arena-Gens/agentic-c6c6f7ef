export default function Problems() {
  const problems = [
    {
      icon: '💸',
      title: 'Burning Cash on Ads That Don\'t Convert',
      description: 'You\'re spending thousands on Facebook, Google, or TikTok ads—but your CPA keeps climbing while sales stay flat.'
    },
    {
      icon: '📊',
      title: 'No Clear Attribution or Accountability',
      description: 'Your agency sends pretty reports, but you can\'t tell which campaigns actually drive revenue. It\'s all vanity metrics.'
    },
    {
      icon: '⏰',
      title: 'Wasting Time on Guesswork',
      description: 'You\'re stuck testing endless creatives and audiences with no strategy—just hoping something sticks.'
    },
    {
      icon: '🎯',
      title: 'Agencies That Over-Promise, Under-Deliver',
      description: 'You\'ve been burned before. Big promises, zero results, and you\'re left holding the bag on wasted ad spend.'
    }
  ];

  return (
    <section className="problems">
      <div className="container">
        <div className="section-header">
          <h2>Sound Familiar?</h2>
          <p>You\'re not alone. Most businesses struggle with the same ad problems:</p>
        </div>

        <div className="problems-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card">
              <div className="problem-icon">{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="urgency-banner">
          <strong>The truth is:</strong> Every day you wait is another day your competitors capture market share with optimized ad campaigns.
        </div>
      </div>

      <style jsx>{`
        .problems {
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
          font-size: 18px;
          color: var(--gray-medium);
        }

        .problems-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .problem-card {
          background: var(--white);
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(10, 26, 53, 0.08);
          transition: all 0.3s ease;
        }

        .problem-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(10, 26, 53, 0.12);
        }

        .problem-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .problem-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
          color: var(--navy);
        }

        .problem-card p {
          color: var(--gray-medium);
          font-size: 16px;
          line-height: 1.6;
        }

        .urgency-banner {
          background: linear-gradient(135deg, var(--orange), #FF8555);
          color: var(--white);
          padding: 24px 32px;
          border-radius: 12px;
          text-align: center;
          font-size: 18px;
          line-height: 1.6;
        }

        .urgency-banner strong {
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .problems {
            padding: 60px 20px;
          }

          .section-header h2 {
            font-size: 32px;
          }

          .problems-grid {
            grid-template-columns: 1fr;
          }

          .urgency-banner {
            font-size: 16px;
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
