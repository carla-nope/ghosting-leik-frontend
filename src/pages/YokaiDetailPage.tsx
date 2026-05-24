import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Heart, Share2, Bookmark, Clock, Star,
  ChevronRight, Globe, MapPin, AlertTriangle, BookOpen, Scroll
} from 'lucide-react';

const YokaiDetailPage: React.FC = () => {
  const { slug } = useParams();

  const yokai = {
    name: 'Kitsune',
    japanese: '狐',
    category: 'Bakemono',
    dangerLevel: 'Medium',
    origin: 'Japanese Folklore',
    description: 'Kitsune (狐) are intelligent fox spirits with the ability to shapeshift into human form. They are among the most famous and beloved yōkai in Japanese folklore.',
    appearance: 'Kitsune can appear as beautiful women, young men, or elderly scholars. When not in human form, they appear as ordinary foxes, but with supernatural insight. Some tales describe kitsune with multiple tails—the more tails a kitsune has, the more powerful it is. A nine-tailed kitsune is considered nearly divine.',
    abilities: [
      'Shapeshifting – Can transform into any human form perfectly',
      'Fox Fire – Can create ethereal flames that appear in various colors',
      'Possession – Can possess humans through their breath or food',
      'Illusion Creation – Masters of deception and misdirection',
      'Longevity – Can live for hundreds or even thousands of years'
    ],
    personality: 'Kitsune personalities vary widely. Some are mischievous tricksters who enjoy playing pranks on humans. Others are wise and benevolent, serving as guardians of certain places or people. The most powerful kitsune are often associated with Inari, the Shinto deity of rice and fertility.',
    story: 'There are countless kitsune stories, but one of the most famous is the tale of Genno, a kitsune who fell in love with a Buddhist monk named Myōren. Despite their different natures, they formed a deep bond that transcended the boundary between human and yōkai. When Myōren was attacked by jealous priests, Genno appeared in dreams to protect him, eventually using her supernatural powers to save his life. The story reminds us that love can bridge even the widest divides.',
    relatedYokai: [
      { name: 'Kappa', slug: 'kappa', emoji: '🐸' },
      { name: 'Tanuki', slug: 'tanuki', emoji: '🦝' },
      { name: 'Yūrei', slug: 'yurei', emoji: '👻' }
    ],
    mediaAppearances: [
      'Spirited Away (Chihiro)',
      'Pokemon (multiple fox-like creatures)',
      'Okami (video game)',
      'Naruto (multiple characters)'
    ]
  };

  const getDangerColor = (level: string) => {
    switch (level) {
      case 'None': return 'text-green-600 bg-green-50 border border-green-200';
      case 'Low': return 'text-blue-600 bg-blue-50 border border-blue-200';
      case 'Medium': return 'text-amber-600 bg-amber-50 border border-amber-200';
      case 'High': return 'text-orange-600 bg-orange-50 border border-orange-200';
      case 'Very High': return 'text-red-600 bg-red-50 border border-red-200';
      default: return 'text-gray-600 bg-gray-50 border border-gray-200';
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-ink-muted mb-8">
          <Link to="/yokai" className="hover:text-crimson flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            Yōkai Encyclopedia
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-crimson">{yokai.category}</span>
        </div>

        {/* Article */}
        <article className="card-archive overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-crimson/5 to-gold/5 p-8 md:p-12 text-center">
            <div className="text-8xl mb-4">{yokai.japanese}</div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-3xl text-crimson/70 font-serif">{yokai.japanese}</span>
              <span className="px-3 py-1 bg-crimson/10 border border-crimson/20 text-crimson text-sm rounded-full">
                {yokai.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-ink-base">{yokai.name}</h1>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className={`px-3 py-1 rounded-full ${getDangerColor(yokai.dangerLevel)}`}>
                <AlertTriangle className="w-4 h-4 inline mr-1" />
                {yokai.dangerLevel} Danger
              </span>
              <span className="flex items-center gap-1 text-ink-muted">
                <Globe className="w-4 h-4" />
                {yokai.origin}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between px-8 py-4 border-b border-ink-subtle">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-ink-muted hover:text-crimson transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm">Favorite</span>
              </button>
              <button className="flex items-center gap-2 text-ink-muted hover:text-crimson transition-colors">
                <Bookmark className="w-5 h-5" />
                <span className="text-sm">Save</span>
              </button>
              <button className="flex items-center gap-2 text-ink-muted hover:text-crimson transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-xl font-display font-bold mb-4 text-ink-base">Overview</h2>
              <p className="text-ink-muted leading-relaxed font-serif">{yokai.description}</p>
            </div>

            {/* Appearance */}
            <div>
              <h2 className="text-xl font-display font-bold mb-4 text-ink-base">Appearance & Forms</h2>
              <p className="text-ink-muted leading-relaxed font-serif">{yokai.appearance}</p>
            </div>

            {/* Abilities */}
            <div>
              <h2 className="text-xl font-display font-bold mb-4 text-ink-base">Abilities</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {yokai.abilities.map((ability, i) => (
                  <div key={i} className="bg-parchment-alt border border-ink-subtle rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-crimson/10 border border-crimson/20 rounded-lg flex items-center justify-center text-crimson font-bold">
                        {i + 1}
                      </div>
                      <span className="text-ink-muted font-serif">{ability}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personality */}
            <div>
              <h2 className="text-xl font-display font-bold mb-4 text-ink-base">Personality & Nature</h2>
              <p className="text-ink-muted leading-relaxed font-serif">{yokai.personality}</p>
            </div>

            {/* Story */}
            <div className="bg-gradient-to-br from-crimson/5 to-gold/5 border border-crimson/20 rounded-xl p-6">
              <h2 className="text-xl font-display font-bold mb-4 text-ink-base">Famous Story</h2>
              <p className="text-ink-muted leading-relaxed italic font-serif">{yokai.story}</p>
            </div>

            {/* Media Appearances */}
            <div>
              <h2 className="text-xl font-display font-bold mb-4 text-ink-base">In Popular Culture</h2>
              <div className="flex flex-wrap gap-2">
                {yokai.mediaAppearances.map((media, i) => (
                  <span key={i} className="px-4 py-2 bg-parchment-alt border border-ink-subtle rounded-full text-sm text-ink-muted font-serif">
                    {media}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related Yōkai */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold mb-6 text-ink-base">Related Yōkai</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {yokai.relatedYokai.map((related, i) => (
              <Link
                key={i}
                to={`/yokai/${related.slug}`}
                className="group card-archive p-6 text-center hover:border-crimson/30 transition-all"
              >
                <div className="text-5xl mb-3">{related.emoji}</div>
                <h3 className="font-display font-bold text-ink-base group-hover:text-crimson transition-colors">
                  {related.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Quiz CTA */}
        <div className="mt-12 text-center card-parchment p-8">
          <h3 className="text-xl font-display font-bold mb-2 text-ink-base">Are You a {yokai.name}?</h3>
          <p className="text-ink-muted mb-6 font-serif">
            Take our personality quiz to discover which yōkai matches your personality
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 px-8 py-4 btn-primary"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YokaiDetailPage;