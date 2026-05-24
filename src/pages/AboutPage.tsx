import React from 'react';
import { Link } from 'react-router-dom';
import {
  Ghost, BookOpen, Users, Heart, Star, Sparkles,
  ArrowRight, Clock, Globe, Award
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Yuki Tanaka',
      role: 'Founder & Chief Storyteller',
      bio: 'Japanese literature scholar with 15 years of experience curating supernatural content.',
      emoji: '👩‍🎨'
    },
    {
      name: 'Kenji Mori',
      role: 'Content Director',
      bio: 'Former horror game writer who fell in love with traditional kaidan stories.',
      emoji: '👨‍💻'
    },
    {
      name: 'Mika Sato',
      role: 'Community Manager',
      bio: 'Japanophile who connects enthusiasts worldwide through shared love of folklore.',
      emoji: '👩‍💼'
    }
  ];

  const values = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Cultural Authenticity',
      description: 'Every story is researched and curated to respect its origins and cultural context.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Accessibility',
      description: 'Making Japanese supernatural traditions accessible to enthusiasts worldwide.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community First',
      description: 'Building a welcoming space for everyone curious about the supernatural.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Modern Relevance',
      description: 'Connecting ancient wisdom to contemporary storytelling and creativity.'
    }
  ];

  const timeline = [
    {
      year: '2022',
      title: 'The Beginning',
      description: 'GhostingLeik was born from a love of Japanese folklore and a desire to share it with the world.'
    },
    {
      year: '2023',
      title: 'Growing Community',
      description: 'Reached 1,000 members and launched our first interactive tool: the Yōkai Personality Quiz.'
    },
    {
      year: '2024',
      title: 'Story Oracle Launch',
      description: 'Introduced our AI-powered story generation tool, helping writers create supernatural tales.'
    },
    {
      year: '2025',
      title: 'Membership Program',
      description: 'Launched premium memberships to fund deeper content creation and community features.'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Ghost className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              About GhostingLeik
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are on a mission to preserve and share the rich supernatural traditions of Japanese folklore with enthusiasts worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                GhostingLeik exists to bridge the gap between ancient Japanese supernatural traditions and modern audiences hungry for authentic, engaging content.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                We believe that ghost stories (kaidan) and supernatural creatures (yōkai) are more than entertainment—they're windows into cultural wisdom, moral lessons, and the timeless human experience of wonder and fear.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Through careful curation, interactive tools, and community engagement, we make these traditions accessible, educational, and inspiring for writers, game designers, horror enthusiasts, and anyone curious about the mysterious.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-500/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">5K+</div>
                <div className="text-sm text-gray-400">Community Members</div>
              </div>
              <div className="bg-pink-500/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">156</div>
                <div className="text-sm text-gray-400">Stories Archived</div>
              </div>
              <div className="bg-red-500/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">89</div>
                <div className="text-sm text-gray-400">Yōkai Documented</div>
              </div>
              <div className="bg-orange-500/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">4.9</div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">What We Believe</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Journey</h2>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="text-2xl font-bold text-purple-400">{item.year}</span>
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 className="font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-purple-400 mb-4">{member.role}</p>
                <p className="text-sm text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Join thousands of enthusiasts who've made GhostingLeik their destination for Japanese supernatural content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Explore Stories
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;