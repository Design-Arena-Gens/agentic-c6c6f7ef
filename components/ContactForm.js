import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    monthlyAdSpend: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to your backend/CRM
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        monthlyAdSpend: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <section className="contact-form" id="contact-form">
      <div className="container">
        <div className="form-wrapper">
          <div className="form-header">
            <h2>Get Your Free Strategy Call</h2>
            <p>Tell us about your business and we'll show you exactly how to scale your ad performance in 30 minutes or less.</p>
            <div className="trust-badges">
              <div className="badge-item">
                <span className="badge-icon">✓</span>
                <span>No obligation</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">✓</span>
                <span>Free ad audit included</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">✓</span>
                <span>Book instantly</span>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Thank You!</h3>
              <p>We've received your information. Our team will reach out within 24 hours to schedule your free strategy call.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                  />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Acme Inc."
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Current Monthly Ad Spend *</label>
                <select
                  name="monthlyAdSpend"
                  value={formData.monthlyAdSpend}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your range...</option>
                  <option value="0-5k">$0 - $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-50k">$15,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div className="form-group">
                <label>Tell us about your biggest ad challenge</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="e.g., High CPA, low conversion rates, unclear attribution..."
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">
                Book My Free Strategy Call →
              </button>

              <p className="form-disclaimer">
                By submitting this form, you agree to receive marketing communications from Adcraze. We respect your privacy and you can unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        .contact-form {
          padding: 80px 20px;
          background: var(--white);
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
        }

        .form-wrapper {
          background: var(--white);
          border: 2px solid #E8EDF2;
          border-radius: 16px;
          padding: 48px;
          box-shadow: 0 4px 20px rgba(10, 26, 53, 0.1);
        }

        .form-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .form-header h2 {
          font-size: 38px;
          margin-bottom: 16px;
          color: var(--navy);
        }

        .form-header p {
          font-size: 18px;
          color: var(--gray-medium);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .trust-badges {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .badge-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--navy);
          font-weight: 500;
        }

        .badge-icon {
          background: var(--electric-blue);
          color: var(--white);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        label {
          font-size: 14px;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 8px;
        }

        input, select, textarea {
          padding: 14px;
          border: 2px solid #E8EDF2;
          border-radius: 8px;
          font-size: 16px;
          transition: all 0.3s ease;
          color: var(--navy);
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--electric-blue);
          box-shadow: 0 0 0 3px rgba(42, 127, 255, 0.1);
        }

        textarea {
          resize: vertical;
          font-family: inherit;
        }

        .btn-submit {
          background: var(--electric-blue);
          color: var(--white);
          padding: 18px 32px;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(42, 127, 255, 0.3);
          margin-top: 12px;
        }

        .btn-submit:hover {
          background: #1E6FE8;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(42, 127, 255, 0.4);
        }

        .form-disclaimer {
          font-size: 12px;
          color: var(--gray-medium);
          text-align: center;
          line-height: 1.5;
        }

        .success-message {
          text-align: center;
          padding: 60px 20px;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: var(--electric-blue);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          margin: 0 auto 24px;
        }

        .success-message h3 {
          font-size: 32px;
          color: var(--navy);
          margin-bottom: 16px;
        }

        .success-message p {
          font-size: 18px;
          color: var(--gray-medium);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .contact-form {
            padding: 60px 20px;
          }

          .form-wrapper {
            padding: 32px 20px;
          }

          .form-header h2 {
            font-size: 28px;
          }

          .form-header p {
            font-size: 16px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .trust-badges {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
