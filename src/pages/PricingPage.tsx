import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star, Check, ArrowRight, Zap, BookOpen, Users,
  Crown, Heart, Shield, Clock, Gift, Sparkles, Scroll
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Seeker',
      price: 0,
      description: 'Perfect for exploring Japanese supernatural content',
      features: [
        'Access to 10 featured stories',
        'Basic Yōkai encyclopedia (20 entries)',
        'Personality quiz (unlimited)',
        'Weekly newsletter',
        'Community forum access',
      ],
      cta: 'Begin Your Journey',
      popular: false,
      slug: 'seeker'
    },
    {
      name: 'Adept',
      price: isAnnual ? 7 : 9,
      description: 'Full access to all supernatural content and tools',
      features: [
        'Everything in Seeker',
        'Unlimited story access (150+ stories)',
        'Complete Yōkai encyclopedia (89+ entries)',
        'Unlimited Story Oracle generations',
        'Story downloads (PDF/EPUB)',
        'Early access to new content',
        'Exclusive premium stories',
        'Private Discord community',
      ],
      cta: 'Join the Adept',
      popular: true,
      slug: 'adept'
    },
    {
      name: 'Collector',
      price: isAnnual ? 12 : 15,
      description: 'For serious enthusiasts and researchers',
      features: [
        'Everything in Adept',
        'Offline reading app (iOS/Android)',
        'Advanced search & filtering',
        'Custom collections & bookmarks',
        'Audio narration of stories',
        'Monthly live Q&A sessions',
        'Exclusive Collector merchandise',
        'Early access to new tools',
      ],
      cta: 'Become a Collector',
      popular: false,
      slug: 'collector'
    }
  ];

  const faqs = [
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay.'
    },
    {
      question: 'Is there a free trial for Adept?',
      answer: 'Yes! New Adept members get a 7-day free trial. You can explore all premium features before committing.'
    },
    {
      question: 'Can I switch plans later?',
      answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, contact us for a full refund.'
    }
  ];

  const testimonials = [
    {
      quote: "The Adept subscription is worth every penny. The story archive is incredible and I've discovered so many hidden gems.",
      author: "Sarah M.",
      role: "Horror Writer"
    },
    {
      quote: "As a game developer, the Yōkai encyclopedia alone is worth the subscription. It's become my essential reference.",
      author: "Kenji R.",
      role: "Game Developer"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/10 border border-crimson/30 rounded-full mb-6">
            <Crown className="w-4 h-4 text-crimson" />
            <span className="text-sm text-crimson font-medium">Membership Ranks</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-ink-base">
            Choose Your Path
          </h1>
          <p className="text-xl text-ink-muted max-w-2xl mx-auto mb-8">
            Unlock the mysteries of Japanese supernatural folklore. From casual exploration to deep research.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-parchment-alt border border-ink-subtle rounded-full p-1">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                isAnnual ? 'bg-crimson text-bone-white' : 'text-ink-muted hover:text-ink-base'
              }`}
            >
              Annual <span className="text-green-600 text-sm ml-1">-20%</span>
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                !isAnnual ? 'bg-crimson text-bone-white' : 'text-ink-muted hover:text-ink-base'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.slug}
              className={`relative card-archive p-8 ${
                plan.popular ? 'ring-2 ring-crimson/30' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-crimson text-bone-white rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-display font-bold mb-2 text-ink-base">{plan.name}</h3>
                <p className="text-sm text-ink-muted font-serif">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-display font-bold text-ink-base">${plan.price}</span>
                  <span className="text-ink-muted ml-2 font-serif">/month</span>
                </div>
                {isAnnual && plan.price > 0 && (
                  <p className="text-sm text-green-600 mt-2 font-serif">
                    Save ${(plan.price * 0.2 * 12).toFixed(0)}/year
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-ink-muted font-serif">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'btn-primary'
                    : 'bg-parchment-alt border border-ink-subtle text-ink-base hover:bg-parchment'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-bold text-center mb-8 text-ink-base">What's Included</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-ink-subtle">
                  <th className="text-left py-4 px-4 font-display text-ink-base">Feature</th>
                  <th className="text-center py-4 px-4 font-display text-ink-base">Seeker</th>
                  <th className="text-center py-4 px-4 bg-crimson/5 font-display text-ink-base">Adept</th>
                  <th className="text-center py-4 px-4 font-display text-ink-base">Collector</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Ghost Stories', '10', '150+', '150+'],
                  ['Yōkai Encyclopedia', '20 entries', '89+ entries', '89+ entries'],
                  ['Story Oracle', '3/day', 'Unlimited', 'Unlimited'],
                  ['Audio Narration', '-', '-', '✓'],
                  ['Offline App', '-', '-', '✓'],
                  ['Monthly Q&A', '-', '-', '✓'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-ink-subtle/50">
                    <td className="py-4 px-4 text-ink-muted font-serif">{row[0]}</td>
                    <td className="py-4 px-4 text-center text-ink-muted font-serif">{row[1]}</td>
                    <td className="py-4 px-4 text-center bg-crimson/5">
                      <span className={row[2] === '✓' ? 'text-gold' : 'text-ink-base font-semibold'}>
                        {row[2]}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-ink-muted font-serif">
                      {row[3] === '✓' ? (
                        <Check className="w-5 h-5 text-gold mx-auto" />
                      ) : (
                        row[3]
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="card-parchment p-6">
              <p className="text-ink-muted italic mb-4 font-serif">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-crimson/10 border border-crimson/20 rounded-full flex items-center justify-center font-bold text-crimson">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-semibold text-ink-base">{testimonial.author}</div>
                  <div className="text-sm text-ink-muted">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-display font-bold text-center mb-8 text-ink-base">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card-parchment p-6">
                <h3 className="font-display font-semibold mb-2 text-ink-base">{faq.question}</h3>
                <p className="text-ink-muted text-sm font-serif">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="max-w-3xl mx-auto text-center card-parchment p-8">
          <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-display font-bold mb-2 text-ink-base">30-Day Money-Back Guarantee</h3>
          <p className="text-ink-muted font-serif">
            Try GhostingLeik Premium risk-free. If you're not completely satisfied within 30 days, we'll refund your subscription—no questions asked.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;