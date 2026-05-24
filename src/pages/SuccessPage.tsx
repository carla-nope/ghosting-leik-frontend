import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Sparkles, Star, Gift,
  BookOpen, Users, Heart, Scroll
} from 'lucide-react';

const SuccessPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        {/* Message */}
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-ink-base">
          Welcome to GhostingLeik!
        </h1>
        <p className="text-xl text-ink-muted mb-8 font-serif">
          Your subscription has been confirmed. You're now part of our supernatural community.
        </p>

        {/* What's Next */}
        <div className="card-archive p-8 mb-8">
          <h2 className="text-xl font-display font-bold mb-6 text-ink-base">What's Next?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="card-parchment p-6">
              <div className="w-12 h-12 bg-crimson/10 border border-crimson/20 rounded-lg flex items-center justify-center text-crimson mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold mb-2 text-ink-base">Explore Stories</h3>
              <p className="text-sm text-ink-muted mb-4 font-serif">
                Dive into our collection of Japanese ghost stories and supernatural tales.
              </p>
              <Link
                to="/stories"
                className="text-crimson hover:text-crimson/80 text-sm font-medium flex items-center gap-1"
              >
                Browse Stories <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="card-parchment p-6">
              <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center text-gold-dark mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold mb-2 text-ink-base">Take the Quiz</h3>
              <p className="text-sm text-ink-muted mb-4 font-serif">
                Discover your yōkai spirit with our personality quiz.
              </p>
              <Link
                to="/quiz"
                className="text-crimson hover:text-crimson/80 text-sm font-medium flex items-center gap-1"
              >
                Start Quiz <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="card-parchment p-6">
              <div className="w-12 h-12 bg-parchment-alt border border-ink-subtle rounded-lg flex items-center justify-center text-ink-muted mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold mb-2 text-ink-base">Join Community</h3>
              <p className="text-sm text-ink-muted mb-4 font-serif">
                Connect with fellow enthusiasts in our Discord community.
              </p>
              <a
                href="#"
                className="text-crimson hover:text-crimson/80 text-sm font-medium flex items-center gap-1"
              >
                Join Discord <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Your Benefits */}
        <div className="card-parchment p-8 mb-8">
          <h2 className="text-xl font-display font-bold mb-6 text-ink-base">Your Premium Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {[
              'Unlimited access to 150+ stories',
              'Complete Yōkai encyclopedia (89+ entries)',
              'Unlimited Story Oracle generations',
              'Story downloads (PDF/EPUB)',
              'Early access to new content',
              'Exclusive premium stories'
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-ink-muted font-serif">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/stories"
            className="flex items-center justify-center gap-2 px-8 py-4 btn-primary"
          >
            <BookOpen className="w-5 h-5" />
            Start Exploring
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-parchment-alt border border-ink-subtle rounded-lg font-semibold hover:bg-parchment transition-colors"
          >
            Go to Homepage
          </Link>
        </div>

        {/* Support Note */}
        <p className="text-sm text-ink-muted mt-8 font-serif">
          A confirmation email has been sent to your inbox. If you have any questions,{' '}
          <Link to="/contact" className="text-crimson hover:text-crimson/80">
            contact our support team
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;