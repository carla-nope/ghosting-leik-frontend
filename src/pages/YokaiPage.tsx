import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Filter, ArrowRight, Heart, Eye,
  ChevronRight, Ghost, Sparkles, Shield, Zap
} from 'lucide-react';

const YokaiPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Yōkai' },
    { id: 'oni', label: 'Oni (Demons)' },
    { id: 'kappa', label: 'Kappa (Aquatic)' },
    { id: 'tsukumogami', label: 'Tsukumogami' },
    { id: 'yurei', label: 'Yūrei (Ghosts)' },
  ];

  const yokai = [
    {
      name: 'Kitsune',
      japanese: '狐',
      category: 'tsukumogami',
      description: 'Intelligent fox spirits with the ability to shapeshift into human form. Known for their cunning nature and deep magical powers.',
      dangerLevel: 'Medium',
      origin: 'Folklore',
      emoji: '🦊',
      featured: true,
      slug: 'kitsune'
    },
    {
      name: 'Kappa',
      japanese: '河童',
      category: 'kappa',
      description: 'Water-dwelling creatures with a dish-shaped head. Known for their love of cucumbers and sumo wrestling.',
      dangerLevel: 'Low',
      origin: 'Folklore',
      emoji: '🐸',
      featured: true,
      slug: 'kappa'
    },
    {
      name: 'Yūrei',
      japanese: '幽霊',
      category: 'yurei',
      description: 'Restless spirits of the dead who return to the world of the living. Always wear white and have no knees.',
      dangerLevel: 'High',
      origin: 'Folklore',
      emoji: '👻',
      featured: true,
      slug: 'yurei'
    },
    {
      name: 'Oni',
      japanese: '鬼',
      category: 'oni',
      description: 'Fierce demons with horns, fangs, and incredible strength. Often depicted in red or blue with iron clubs.',
      dangerLevel: 'Very High',
      origin: 'Folklore',
      emoji: '👹',
      featured: true,
      slug: 'oni'
    },
    {
      name: 'Tengu',
      japanese: '天狗',
      category: 'oni',
      description: 'Long-nosed mountain goblins with supernatural powers. Both guardians of mountains and fearsome warriors.',
      dangerLevel: 'Medium',
      origin: 'Folklore',
      emoji: '🧔',
      featured: false,
      slug: 'tengu'
    },
    {
      name: 'Tanuki',
      japanese: '狸',
      category: 'tsukumogami',
      description: 'Mischievous raccoon dogs famous for their shapeshifting abilities and playful trickster nature.',
      dangerLevel: 'Low',
      origin: 'Folklore',
      emoji: '🦝',
      featured: false,
      slug: 'tanuki'
    },
    {
      name: 'Baku',
      japanese: '獏',
      category: 'tsukumogami',
      description: 'Dream-eating creatures that consume nightmares. Surprisingly friendly and beloved by children.',
      dangerLevel: 'None',
      origin: 'Folklore',
      emoji: '🐘',
      featured: false,
      slug: 'baku'
    },
    {
      name: 'Gashadokuro',
      japanese: '餓者髑髏',
      category: 'yurei',
      description: 'Giant skeleton yōkai formed from the bones of those who died of starvation. Completely silent and deadly.',
      dangerLevel: 'Extreme',
      origin: 'Folklore',
      emoji: '💀',
      featured: false,
      slug: 'gashadokuro'
    },
  ];

  const featuredYokai = yokai.filter(y => y.featured);

  const getDangerColor = (level: string) => {
    switch (level) {
      case 'None': return 'text-green-400 bg-green-400/10';
      case 'Low': return 'text-blue-400 bg-blue-400/10';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'High': return 'text-orange-400 bg-orange-400/10';
      case 'Very High': return 'text-red-400 bg-red-400/10';
      case 'Extreme': return 'text-red-600 bg-red-600/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Yōkai Encyclopedia
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the supernatural creatures of Japanese folklore. From friendly spirits to fearsome demons, explore the complete bestiary.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search yōkai..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Yōkai */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            Featured Yōkai
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredYokai.map((creature, index) => (
              <Link
                key={index}
                to={`/yokai/${creature.slug}`}
                className="group bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all"
              >
                <div className="text-6xl mb-4">{creature.emoji}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-purple-400 font-medium">{creature.japanese}</span>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${getDangerColor(creature.dangerLevel)}`}>
                    {creature.dangerLevel}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {creature.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                  {creature.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{creature.origin}</span>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Yōkai Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Complete Bestiary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {yokai.map((creature, index) => (
              <Link
                key={index}
                to={`/yokai/${creature.slug}`}
                className="group bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-purple-500/30 transition-all"
              >
                <div className="text-4xl mb-3">{creature.emoji}</div>
                <h3 className="font-bold mb-1 group-hover:text-purple-400 transition-colors">
                  {creature.name}
                </h3>
                <span className="text-xs text-gray-500">{creature.japanese}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">89+</div>
            <div className="text-sm text-gray-400">Yōkai Documented</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">12</div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">156</div>
            <div className="text-sm text-gray-400">Origin Stories</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">5K+</div>
            <div className="text-sm text-gray-400">Encyclopedia Users</div>
          </div>
        </div>

        {/* Quiz CTA */}
        <div className="mt-16 max-w-3xl mx-auto text-center bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Which Yōkai Matches You?</h3>
          <p className="text-gray-400 mb-6">
            Take our personality quiz and discover which supernatural creature from Japanese folklore matches your personality type.
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Take the Quiz
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YokaiPage;