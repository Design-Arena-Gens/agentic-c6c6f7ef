import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How is performance-based pricing structured?',
      answer: 'Our fees are tied directly to your results. We charge a base retainer plus a performance bonus based on hitting agreed-upon KPIs (ROAS, revenue, leads, etc.). If we don\'t hit your targets, you don\'t pay the performance fee.'
    },
    {
      question: 'What\'s the minimum ad spend to work with Adcraze?',
      answer: 'We typically work with businesses spending at least $5,000/month on paid ads. This ensures we have enough budget to test, optimize, and scale effectively.'
    },
    {
      question: 'Which platforms do you specialize in?',
      answer: 'We run campaigns across Meta (Facebook/Instagram), Google Ads (Search, Display, YouTube), TikTok, LinkedIn, and other platforms based on where your audience lives. We\'re platform-agnostic—we go where the ROI is.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Most clients see measurable improvements within 30-45 days. We focus on quick wins early (fixing tracking, pausing losers, testing new creatives) while building longer-term strategic wins.'
    },
    {
      question: 'Do you work with [my industry]?',
      answer: 'We work with e-commerce, SaaS, B2B services, local businesses, and more. If you spend money on ads and want better ROI, we can help. Book a call and we\'ll tell you honestly if we\'re a fit.'
    },
    {
      question: 'What makes Adcraze different from other agencies?',
      answer: 'Three things: (1) Performance-based pricing—we only win when you win. (2) Full transparency—real-time dashboards, not PDFs. (3) Senior-level strategists only—no junior analysts or outsourced teams.'
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'No. We work month-to-month after the initial 90-day onboarding period. If we\'re not delivering results, you\'re free to leave. That\'s how confident we are in our process.'
    },
    {
      question: 'What if I\'ve been burned by agencies before?',
      answer: 'We get it—that\'s why we offer our 90-Day Performance Guarantee. If we don\'t improve your ROAS by at least 50% in the first 90 days, you don\'t pay our management fee. We put our money where our mouth is.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before booking your call</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq {
          padding: 80px 20px;
          background: var(--gray-light);
        }

        .container {
          max-width: 900px;
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

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: var(--white);
          border-radius: 12px;
          overflow: hidden;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .faq-item.open {
          border-color: var(--electric-blue);
        }

        .faq-question {
          width: 100%;
          padding: 24px;
          background: none;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 18px;
          font-weight: 600;
          color: var(--navy);
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          color: var(--electric-blue);
        }

        .faq-icon {
          font-size: 28px;
          color: var(--electric-blue);
          font-weight: 300;
          min-width: 30px;
          text-align: center;
        }

        .faq-answer {
          padding: 0 24px 24px;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-answer p {
          color: var(--gray-medium);
          font-size: 16px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .faq {
            padding: 60px 20px;
          }

          .section-header h2 {
            font-size: 32px;
          }

          .faq-question {
            font-size: 16px;
            padding: 20px;
          }

          .faq-answer {
            padding: 0 20px 20px;
          }
        }
      `}</style>
    </section>
  );
}
