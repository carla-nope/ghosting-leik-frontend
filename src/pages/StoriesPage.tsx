import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Ghost, Search, Filter, Clock, Heart, ArrowRight,
  Bookmark, Share2, ChevronRight, Star
} from 'lucide-react';

const StoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Stories' },
    { id: 'classic', label: 'Classic Kaidan' },
    { id: 'yokai', label: 'Yōkai Tales' },
    { id: 'modern', label: 'Modern Horror' },
    { id: 'folklore', label: 'Folklore' },
  ];

  const stories = [
    {
      title: 'The Tale of Oiwa',
      excerpt: 'One of the most famous ghosts in Japanese theater, the betrayed wife whose vengeance knows no bounds. A story of love, betrayal, and eternal retribution.',
      category: 'Classic',
      readTime: '8 min',
      rating: 4.9,
      views: '12.5K',
      featured: true,
      slug: 'tale-of-oiwa'
    },
    {
      title: 'Kappa of the Gifu River',
      excerpt: 'A curious water demon who loves nothing more than perfecting its cucumber-based recipes. Surprisingly wholesome for a creature of the deep.',
      category: 'Yōkai',
      readTime: '5 min',
      rating: 4.7,
      views: '8.3K',
      featured: false,
      slug: 'kappa-of-gifu-river'
    },
    {
      title: 'The Suicide Forest',
      excerpt: 'Aokigahara\'s dark reputation and the legends that explain why people journey there. A exploration of one of the world\'s most mysterious forests.',
      category: 'Modern',
      readTime: '12 min',
      rating: 4.8,
      views: '15.2K',
      featured: true,
      slug: 'suicide-forest'
    },
    {
      title: 'The Birthday Phenomenon',
      excerpt: 'Why do so many famous Japanese horror events occur on birthdays? A chilling analysis of dates, coincidences, and the supernatural.',
      category: 'Modern',
      readTime: '7 min',
      rating: 4.6,
      views: '9.8K',
      featured: false,
      slug: 'birthday-phenomenon'
    },
    {
      title: 'Tengu of Mount Kurama',
      excerpt: 'The long-nosed mountain goblins who serve as guardians of ancient wisdom. Warriors, monks, and the supernatural.',
      category: 'Yōkai',
      readTime: '6 min',
      rating: 4.8,
      views: '7.1K',
      featured: false,
      slug: 'tengu-mount-kurama'
    },
    {
      title: 'The Red Room',
      excerpt: 'A modern urban legend about a hidden room in traditional ryokan that only appears to certain guests. What waits inside?',
      category: 'Modern',
      readTime: '9 min',
      rating: 4.9,
      views: '11.3K',
      featured: true,
      slug: 'red-room'
    },
    {
      title: 'The Tale of Genji',
      excerpt: 'Not the classic novel, but the ghost story behind one of the most famous works of Japanese literature. Haunted poets and vengeful spirits.',
      category: 'Classic',
      readTime: '10 min',
      rating: 4.7,
      views: '6.4K',
      featured: false,
      slug: 'tale-of-genji'
    },
    {
      title: 'Baku - The Dream Eater',
      excerpt: 'These strange creatures consume nightmares and bring sweet dreams. A look at one of the friendliest yokai in Japanese folklore.',
      category: 'Yōkai',
      readTime: '4 min',
      rating: 4.5,
      views: '5.9K',
      featured: false,
      slug: 'baku-dream-eater'
    },
  ];

  const featuredStories = stories.filter(s => s.featured);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Ghost Stories
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore the mysterious world of Japanese kaidan (怪談) - ghost stories that have chilled audiences for centuries.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search stories..."
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

        {/* Featured Stories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            Featured Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredStories.map((story, index) => (
              <Link
                key={index}
                to={`/stories/${story.slug}`}
                className="group bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all"
              >
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30"></div>
                  <Ghost className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-white/10" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full font-semibold">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {story.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {story.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {story.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-300">{story.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">{story.views} views</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Stories */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stories.map((story, index) => (
              <Link
                key={index}
                to={`/stories/${story.slug}`}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all"
              >
                <div className="h-32 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <Ghost className="w-12 h-12 text-white/10 group-hover:text-purple-400/20 transition-colors" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {story.category}
                    </span>
                    <span className="text-xs text-gray-500">{story.readTime}</span>
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-purple-400 transition-colors line-clamp-1">
                    {story.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 mb-3">
                    {story.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      {story.rating}
                    </div>
                    <span>{story.views}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 max-w-3xl mx-auto text-center bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Never Miss a New Story</h3>
          <p className="text-gray-400 mb-6">
            Get weekly Japanese ghost stories delivered to your inbox. Curated content you won't find anywhere else.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;