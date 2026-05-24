import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Ghost, ArrowRight, Play, Star, BookOpen, Sparkles,
  Moon, Heart, Users, CheckCircle, ChevronRight, Zap,
  Shield, Globe, Clock, ArrowDown
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [stats, setStats] = useState({ stories: 0, yokai: 0, members: 0 });

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Curated Ghost Stories",
      description: "Beautifully told Japanese supernatural tales with cultural context and historical significance."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Yōkai Encyclopedia",
      description: "Comprehensive guide to supernatural creatures from Japanese folklore, with origins and stories."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Interactive Tools",
      description: "Take our personality quiz or use the Story Oracle to generate unique supernatural tales."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Join thousands of enthusiasts who share your passion for Japanese supernatural traditions."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Horror Writer",
      quote: "GhostingLeik is the only place I find Japanese horror content that respects the culture while being genuinely engaging.",
      avatar: "S"
    },
    {
      name: "Kenji R.",
      role: "Game Developer",
      quote: "I use GhostingLeik's yokai compendium for every supernatural game project. It's become an essential reference.",
      avatar: "K"
    },
    {
      name: "Maya T.",
      role: "Japanophile",
      quote: "I was intimidated by Japanese folklore, but GhostingLeik made it accessible and fascinating.",
      avatar: "M"
    }
  ];

  const recentStories = [
    {
      title: "The Tale of Oiwa",
      excerpt: "One of the most famous ghosts in Japanese theater, the betrayed wife whose vengeance knows no bounds...",
      category: "Classic",
      readTime: "8 min"
    },
    {
      title: "Kappa of the Gifu River",
      excerpt: "A curious creature who loves nothing more than perfecting its cucumber-based recipes...",
      category: "Yōkai",
      readTime: "5 min"
    },
    {
      title: "The Suicide Forest",
      excerpt: "Aokigahara's dark reputation and the legends that explain why people journey there...",
      category: "Modern",
      readTime: "12 min"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Japanese Supernatural Content</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Where Ghosts Come
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                to Life
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover the mysterious world of Japanese ghost stories (kaidan) and supernatural folklore (yōkai). Beautifully curated content that entertains, educates, and inspires.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/stories"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/25"
              >
                <BookOpen className="w-5 h-5" />
                Explore Stories
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/quiz"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all"
              >
                <Sparkles className="w-5 h-5" />
                Take the Quiz
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">156+</div>
                <div className="text-xs md:text-sm text-gray-400">Ghost Stories</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">89</div>
                <div className="text-xs md:text-sm text-gray-400">Yōkai</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5K+</div>
                <div className="text-xs md:text-sm text-gray-400">Members</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Your Guide to Japan's Supernatural World
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Whether you're a horror enthusiast, a writer seeking inspiration, or a Japanophile hungry for cultural depth—you've found your destination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-5 text-purple-400 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Stories Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  From the Archives
                </span>
              </h2>
              <p className="text-gray-400">Explore our most compelling ghost stories</p>
            </div>
            <Link
              to="/stories"
              className="hidden md:flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold"
            >
              View All Stories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentStories.map((story, index) => (
              <Link
                key={index}
                to={`/stories/${story.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                  <Ghost className="w-16 h-16 text-white/20" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">{story.category}</span>
                    <span className="text-xs text-gray-500">{story.readTime} read</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">{story.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{story.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold"
            >
              View All Stories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-red-900/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Discover Your Yokai Spirit
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Take our 3-minute personality quiz and discover which supernatural creature from Japanese folklore matches your personality.
              </p>
              <Link
                to="/quiz"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
              >
                Take the Quiz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Yōkai Preview Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Popular Yōkai
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore the fascinating supernatural creatures of Japanese folklore
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Kitsune', 'Kappa', 'Yūrei', 'Oni'].map((yokai, index) => (
              <Link
                key={index}
                to={`/yokai/${yokai.toLowerCase()}`}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all"
              >
                <div className="text-5xl mb-3">{
                  yokai === 'Kitsune' ? '🦊' :
                  yokai === 'Kappa' ? '🐸' :
                  yokai === 'Yūrei' ? '👻' : '👹'
                }</div>
                <h3 className="font-bold group-hover:text-purple-400 transition-colors">{yokai}</h3>
                <p className="text-xs text-gray-500 mt-1">{
                  yokai === 'Kitsune' ? 'Fox Spirit' :
                  yokai === 'Kappa' ? 'Water Demon' :
                  yokai === 'Yūrei' ? 'Restless Ghost' : 'Demon Ogre'
                }</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/yokai"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold"
            >
              Explore Yōkai Encyclopedia
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                What Our Community Says
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Explore?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              Join thousands of enthusiasts who've made GhostingLeik their destination for Japanese supernatural content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                <Star className="w-5 h-5" />
                Join Membership
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/stories"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all"
              >
                <BookOpen className="w-5 h-5" />
                Browse Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;