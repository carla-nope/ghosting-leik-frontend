import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Heart, Share2, Bookmark, Clock, Star,
  ChevronRight, Globe, MapPin, AlertTriangle, BookOpen
} from 'lucide-react';

const YokaiDetailPage: React.FC = () => {
  const { slug } = useParams();

  // Sample yōkai data
  const yokai = {
    name: 'Kitsune',
    japanese: '狐',
    category: 'Tsukumogami',
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
      case 'None': return 'text-green-400 bg-green-400/10';
      case 'Low': return 'text-blue-400 bg-blue-400/10';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'High': return 'text-orange-400 bg-orange-400/10';
      case 'Very High': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/yokai" className="hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            Yōkai Encyclopedia
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-purple-400">{yokai.category}</span>
        </div>

        {/* Article */}
        <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 md:p-12 text-center">
            <div className="text-8xl mb-4">🦊</div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-3xl text-purple-300">{yokai.japanese}</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                {yokai.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{yokai.name}</h1>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className={`px-3 py-1 rounded-full ${getDangerColor(yokai.dangerLevel)}`}>
                <AlertTriangle className="w-4 h-4 inline mr-1" />
                {yokai.dangerLevel} Danger
              </span>
              <span className="flex items-center gap-1 text-gray-400">
                <Globe className="w-4 h-4" />
                {yokai.origin}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between px-8 py-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm">Favorite</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Bookmark className="w-5 h-5" />
                <span className="text-sm">Save</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{yokai.description}</p>
            </div>

            {/* Appearance */}
            <div>
              <h2 className="text-xl font-bold mb-4">Appearance & Forms</h2>
              <p className="text-gray-300 leading-relaxed">{yokai.appearance}</p>
            </div>

            {/* Abilities */}
            <div>
              <h2 className="text-xl font-bold mb-4">Abilities</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {yokai.abilities.map((ability, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
                        {i + 1}
                      </div>
                      <span className="text-gray-200">{ability}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personality */}
            <div>
              <h2 className="text-xl font-bold mb-4">Personality & Nature</h2>
              <p className="text-gray-300 leading-relaxed">{yokai.personality}</p>
            </div>

            {/* Story */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Famous Story</h2>
              <p className="text-gray-300 leading-relaxed italic">{yokai.story}</p>
            </div>

            {/* Media Appearances */}
            <div>
              <h2 className="text-xl font-bold mb-4">In Popular Culture</h2>
              <div className="flex flex-wrap gap-2">
                {yokai.mediaAppearances.map((media, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300">
                    {media}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related Yōkai */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Yōkai</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {yokai.relatedYokai.map((related, i) => (
              <Link
                key={i}
                to={`/yokai/${related.slug}`}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all"
              >
                <div className="text-5xl mb-3">{related.emoji}</div>
                <h3 className="font-bold group-hover:text-purple-400 transition-colors">
                  {related.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Quiz CTA */}
        <div className="mt-12 text-center bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-2">Are You a {yokai.name}?</h3>
          <p className="text-gray-400 mb-6">
            Take our personality quiz to discover which yōkai matches your personality
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YokaiDetailPage;