import React from 'react';
import { Link } from 'react-router-dom';
import {
  Ghost, BookOpen, Users, Heart, Star, Sparkles,
  ArrowRight, Clock, Globe, Award, Scroll
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Yuki Tanaka',
      role: 'Founder & Chief Storyteller',
      bio: 'Japanese literature scholar with 15 years of experience curating supernatural content.',
      icon: '👩‍🎨'
    },
    {
      name: 'Kenji Mori',
      role: 'Content Director',
      bio: 'Former horror game writer who fell in love with traditional kaidan stories.',
      icon: '👨‍💻'
    },
    {
      name: 'Mika Sato',
      role: 'Community Manager',
      bio: 'Japanophile who connects enthusiasts worldwide through shared love of folklore.',
      icon: '👩‍💼'
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
          <div className="w-20 h-20 bg-crimson/10 border border-crimson/30 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Ghost className="w-10 h-10 text-crimson" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-ink-base">
            About GhostingLeik
          </h1>
          <p className="text-xl text-ink-muted max-w-3xl mx-auto font-serif">
            We are on a mission to preserve and share the rich supernatural traditions of Japanese folklore with enthusiasts worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <div className="card-archive p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-ink-base">Our Mission</h2>
              <p className="text-ink-muted leading-relaxed mb-4 font-serif">
                GhostingLeik exists to bridge the gap between ancient Japanese supernatural traditions and modern audiences hungry for authentic, engaging content.
              </p>
              <p className="text-ink-muted leading-relaxed mb-4 font-serif">
                We believe that ghost stories (kaidan) and supernatural creatures (yōkai) are more than entertainment—they're windows into cultural wisdom, moral lessons, and the timeless human experience of wonder and fear.
              </p>
              <p className="text-ink-muted leading-relaxed font-serif">
                Through careful curation, interactive tools, and community engagement, we make these traditions accessible, educational, and inspiring for writers, game designers, horror enthusiasts, and anyone curious about the mysterious.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card-parchment p-6 text-center">
                <div className="text-3xl font-display font-bold text-crimson mb-2">5K+</div>
                <div className="text-sm text-ink-muted">Community Members</div>
              </div>
              <div className="card-parchment p-6 text-center">
                <div className="text-3xl font-display font-bold text-crimson mb-2">156</div>
                <div className="text-sm text-ink-muted">Stories Archived</div>
              </div>
              <div className="card-parchment p-6 text-center">
                <div className="text-3xl font-display font-bold text-crimson mb-2">89</div>
                <div className="text-sm text-ink-muted">Yōkai Documented</div>
              </div>
              <div className="card-parchment p-6 text-center">
                <div className="text-3xl font-display font-bold text-crimson mb-2">4.9</div>
                <div className="text-sm text-ink-muted">Average Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-bold text-center mb-8 text-ink-base">What We Believe</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <div key={i} className="card-parchment p-6">
                <div className="w-12 h-12 bg-crimson/10 border border-crimson/20 rounded-lg flex items-center justify-center text-crimson mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold mb-2 text-ink-base">{value.title}</h3>
                <p className="text-ink-muted text-sm font-serif">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-bold text-center mb-8 text-ink-base">Our Journey</h2>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="text-2xl font-display font-bold text-crimson">{item.year}</span>
                </div>
                <div className="flex-1 card-archive p-6">
                  <h3 className="font-display font-bold mb-2 text-ink-base">{item.title}</h3>
                  <p className="text-ink-muted text-sm font-serif">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-bold text-center mb-8 text-ink-base">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div key={i} className="card-archive p-6 text-center">
                <div className="text-5xl mb-4">{member.icon}</div>
                <h3 className="font-display font-bold mb-1 text-ink-base">{member.name}</h3>
                <p className="text-sm text-crimson mb-4 font-serif">{member.role}</p>
                <p className="text-sm text-ink-muted font-serif">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center card-parchment p-8">
          <h2 className="text-2xl font-display font-bold mb-4 text-ink-base">Ready to Explore?</h2>
          <p className="text-ink-muted mb-6 max-w-xl mx-auto font-serif">
            Join thousands of enthusiasts who've made GhostingLeik their destination for Japanese supernatural content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 px-8 py-4 btn-primary"
            >
              Explore Stories
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-parchment-alt border border-ink-subtle rounded-lg font-semibold hover:bg-parchment transition-colors"
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