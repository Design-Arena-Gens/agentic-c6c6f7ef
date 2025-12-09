export default function CaseStudies() {
  const cases = [
    {
      industry: 'E-Commerce Fashion',
      company: 'StyleHub',
      challenge: 'High CPA and declining ROAS on Meta ads',
      results: [
        '327% increase in ROAS',
        '62% reduction in CPA',
        '$580K in new revenue (first 3 months)'
      ],
      quote: 'Adcraze turned our ad account from a money pit into our #1 revenue driver. The transparency alone is worth every penny.',
      author: 'Sarah Chen, Founder'
    },
    {
      industry: 'SaaS B2B',
      company: 'CloudMetrics',
      challenge: 'Low lead quality from Google Ads campaigns',
      results: [
        '4.2x increase in qualified leads',
        '38% lower cost per SQL',
        '$1.2M pipeline generated in Q1'
      ],
      quote: 'Finally, an agency that understands B2B performance marketing. They don\'t just drive clicks—they drive revenue.',
      author: 'Michael Torres, CMO'
    },
    {
      industry: 'Local Services',
      company: 'Elite Home Remodeling',
      challenge: 'Inconsistent leads from local service ads',
      results: [
        '189% more qualified bookings',
        '51% decrease in cost per lead',
        '94% of leads converted to consultations'
      ],
      quote: 'We went from 8 bookings a month to 30+. Our biggest problem now is hiring fast enough to keep up with demand.',
      author: 'James Rodriguez, Owner'
    }
  ];

  return (
    <section className="case-studies">
      <div className="container">
        <div className="section-header">
          <h2>Real Results, Real Clients</h2>
          <p>See how we've helped businesses like yours scale profitably</p>
        </div>

        <div className="cases-grid">
          {cases.map((study, index) => (
            <div key={index} className="case-card">
              <div className="case-header">
                <span className="industry-tag">{study.industry}</span>
                <h3>{study.company}</h3>
              </div>

              <div className="case-challenge">
                <strong>Challenge:</strong> {study.challenge}
              </div>

              <div className="case-results">
                <strong>Results:</strong>
                <ul>
                  {study.results.map((result, i) => (
                    <li key={i}>{result}</li>
                  ))}
                </ul>
              </div>

              <div className="case-quote">
                <div className="quote-mark">"</div>
                <p>{study.quote}</p>
                <div className="quote-author">— {study.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .case-studies {
          padding: 80px 20px;
          background: var(--navy);
          color: var(--white);
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
          color: var(--white);
        }

        .section-header p {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.8);
        }

        .cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .case-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 32px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .case-card:hover {
          border-color: var(--electric-blue);
          background: rgba(255, 255, 255, 0.08);
        }

        .case-header {
          margin-bottom: 20px;
        }

        .industry-tag {
          display: inline-block;
          background: var(--electric-blue);
          color: var(--white);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .case-card h3 {
          font-size: 24px;
          color: var(--white);
        }

        .case-challenge {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 15px;
          line-height: 1.6;
        }

        .case-challenge strong {
          color: var(--orange);
          display: block;
          margin-bottom: 8px;
        }

        .case-results {
          margin-bottom: 24px;
          font-size: 15px;
        }

        .case-results strong {
          color: var(--electric-blue);
          display: block;
          margin-bottom: 12px;
        }

        .case-results ul {
          list-style: none;
          padding: 0;
        }

        .case-results li {
          padding: 8px 0 8px 24px;
          position: relative;
          line-height: 1.5;
        }

        .case-results li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--electric-blue);
          font-weight: bold;
        }

        .case-quote {
          background: rgba(42, 127, 255, 0.1);
          padding: 20px;
          border-radius: 8px;
          border-left: 3px solid var(--electric-blue);
          position: relative;
        }

        .quote-mark {
          font-size: 48px;
          color: var(--electric-blue);
          line-height: 1;
          opacity: 0.5;
          position: absolute;
          top: 10px;
          left: 15px;
        }

        .case-quote p {
          font-style: italic;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 12px;
          padding-left: 25px;
        }

        .quote-author {
          font-size: 14px;
          font-weight: 600;
          color: var(--electric-blue);
          padding-left: 25px;
        }

        @media (max-width: 768px) {
          .case-studies {
            padding: 60px 20px;
          }

          .section-header h2 {
            font-size: 32px;
          }

          .section-header p {
            font-size: 18px;
          }

          .cases-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
