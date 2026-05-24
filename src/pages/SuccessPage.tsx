import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Sparkles, Star, Gift,
  BookOpen, Users, Heart
} from 'lucide-react';

const SuccessPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>

        {/* Message */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Welcome to GhostingLeik!
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Your subscription has been confirmed. You're now part of our supernatural community.
        </p>

        {/* What's Next */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-6">What's Next?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Explore Stories</h3>
              <p className="text-sm text-gray-400 mb-4">
                Dive into our collection of Japanese ghost stories and supernatural tales.
              </p>
              <Link
                to="/stories"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1"
              >
                Browse Stories <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Take the Quiz</h3>
              <p className="text-sm text-gray-400 mb-4">
                Discover your yōkai spirit with our personality quiz.
              </p>
              <Link
                to="/quiz"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1"
              >
                Start Quiz <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Join Community</h3>
              <p className="text-sm text-gray-400 mb-4">
                Connect with fellow enthusiasts in our Discord community.
              </p>
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1"
              >
                Join Discord <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Your Benefits */}
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-6">Your Premium Benefits</h2>
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
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/stories"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            <BookOpen className="w-5 h-5" />
            Start Exploring
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all"
          >
            Go to Homepage
          </Link>
        </div>

        {/* Support Note */}
        <p className="text-sm text-gray-500 mt-8">
          A confirmation email has been sent to your inbox. If you have any questions,{' '}
          <Link to="/contact" className="text-purple-400 hover:text-purple-300">
            contact our support team
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;