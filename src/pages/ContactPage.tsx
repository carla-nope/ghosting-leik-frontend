import React, { useState } from 'react';
import {
  Mail, User, MessageSquare, Send, Clock, CheckCircle,
  AlertCircle, Scroll
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const subjects = [
    { id: 'general', label: 'General Inquiry' },
    { id: 'support', label: 'Technical Support' },
    { id: 'feedback', label: 'Content Feedback' },
    { id: 'partnership', label: 'Partnership Opportunity' },
    { id: 'other', label: 'Other' }
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-ink-base">
            Get in Touch
          </h1>
          <p className="text-xl text-ink-muted max-w-2xl mx-auto font-serif">
            Have questions, feedback, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card-archive p-6">
              <div className="w-12 h-12 bg-crimson/10 border border-crimson/20 rounded-lg flex items-center justify-center text-crimson mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold mb-2 text-ink-base">Email Us</h3>
              <p className="text-ink-muted text-sm mb-2 font-serif">We'll respond within 24 hours</p>
              <a href="mailto:hello@ghostingleik.com" className="text-crimson hover:text-crimson/80 font-serif">
                hello@ghostingleik.com
              </a>
            </div>

            <div className="card-archive p-6">
              <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center text-gold-dark mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold mb-2 text-ink-base">Response Time</h3>
              <p className="text-ink-muted text-sm font-serif">We typically respond within 24 hours during business days.</p>
            </div>

            <div className="card-archive p-6">
              <div className="w-12 h-12 bg-parchment-alt border border-ink-subtle rounded-lg flex items-center justify-center text-ink-muted mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold mb-2 text-ink-base">Community</h3>
              <p className="text-ink-muted text-sm mb-3 font-serif">Join our Discord for real-time discussions</p>
              <a href="#" className="text-crimson hover:text-crimson/80 text-sm font-serif">Join Discord →</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="card-archive p-8 text-center">
                <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-display font-bold mb-2 text-ink-base">Message Sent!</h2>
                <p className="text-ink-muted mb-6 font-serif">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2 bg-parchment-alt border border-ink-subtle rounded-lg hover:bg-parchment transition-colors font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-archive p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-ink-base mb-2 font-display">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-muted" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="John Doe"
                        className={`w-full pl-12 pr-4 py-3 bg-parchment-alt border rounded-lg text-ink-base placeholder-ink-muted focus:outline-none font-serif ${
                          errors.name ? 'border-red-500' : 'border-ink-subtle focus:border-crimson/50'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink-base mb-2 font-display">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-muted" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="your@email.com"
                        className={`w-full pl-12 pr-4 py-3 bg-parchment-alt border rounded-lg text-ink-base placeholder-ink-muted focus:outline-none font-serif ${
                          errors.email ? 'border-red-500' : 'border-ink-subtle focus:border-crimson/50'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-ink-base mb-2 font-display">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className={`w-full px-4 py-3 bg-parchment-alt border rounded-lg text-ink-base focus:outline-none font-serif ${
                      errors.subject ? 'border-red-500' : 'border-ink-subtle focus:border-crimson/50'
                    } ${!formData.subject ? 'text-ink-muted' : ''}`}
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((s) => (
                      <option key={s.id} value={s.id}>{s.label}</option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-ink-base mb-2 font-display">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    className={`w-full px-4 py-3 bg-parchment-alt border rounded-lg text-ink-base placeholder-ink-muted focus:outline-none resize-none font-serif ${
                      errors.message ? 'border-red-500' : 'border-ink-subtle focus:border-crimson/50'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 btn-primary flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Link */}
        <div className="mt-12 text-center">
          <p className="text-ink-muted font-serif">
            Have questions before contacting us?{' '}
            <a href="#" className="text-crimson hover:text-crimson/80">
              Check our FAQ →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;