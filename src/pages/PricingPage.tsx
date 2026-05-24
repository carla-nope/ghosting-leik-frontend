import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star, Check, ArrowRight, Zap, BookOpen, Users,
  Crown, Heart, Shield, Clock, Gift, Sparkles
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Free',
      price: 0,
      description: 'Perfect for exploring Japanese supernatural content',
      features: [
        'Access to 10 featured stories',
        'Basic Yōkai encyclopedia (20 entries)',
        'Personality quiz (unlimited)',
        'Weekly newsletter',
        'Community forum access',
      ],
      cta: 'Get Started',
      popular: false,
      slug: 'free'
    },
    {
      name: 'Premium',
      price: isAnnual ? 7 : 9,
      description: 'Full access to all supernatural content and tools',
      features: [
        'Everything in Free',
        'Unlimited story access (150+ stories)',
        'Complete Yōkai encyclopedia (89+ entries)',
        'Unlimited Story Oracle generations',
        'Story downloads (PDF/EPUB)',
        'Early access to new content',
        'Exclusive premium stories',
        'Private Discord community',
      ],
      cta: 'Join Premium',
      popular: true,
      slug: 'premium'
    },
    {
      name: 'Collector',
      price: isAnnual ? 12 : 15,
      description: 'For serious enthusiasts and researchers',
      features: [
        'Everything in Premium',
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
      question: 'Is there a free trial for Premium?',
      answer: 'Yes! New Premium members get a 7-day free trial. You can explore all premium features before committing.'
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
      quote: "The premium subscription is worth every penny. The story archive is incredible and I've discovered so many hidden gems.",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6">
            <Crown className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Membership Plans</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Choose Your Journey
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Unlock the mysteries of Japanese supernatural folklore. From casual exploration to deep research.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white/5 rounded-full p-1">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                isAnnual ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual <span className="text-green-400 text-sm ml-1">-20%</span>
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                !isAnnual ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
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
              className={`relative bg-white/5 border rounded-2xl p-8 ${
                plan.popular
                  ? 'border-purple-500 ring-2 ring-purple-500/20'
                  : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                {isAnnual && plan.price > 0 && (
                  <p className="text-sm text-green-400 mt-2">
                    Save ${(plan.price * 0.2 * 12).toFixed(0)}/year
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">What's Included</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Free</th>
                  <th className="text-center py-4 px-4 bg-purple-500/10">Premium</th>
                  <th className="text-center py-4 px-4">Collector</th>
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
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-4 px-4 text-gray-300">{row[0]}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{row[1]}</td>
                    <td className="py-4 px-4 text-center bg-purple-500/5">
                      <span className={row[2] === '✓' ? 'text-purple-400' : 'text-white'}>
                        {row[2]}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-400">
                      {row[3] === '✓' ? (
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
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
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-8">
          <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">30-Day Money-Back Guarantee</h3>
          <p className="text-gray-400">
            Try GhostingLeik Premium risk-free. If you're not completely satisfied within 30 days, we'll refund your subscription—no questions asked.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;