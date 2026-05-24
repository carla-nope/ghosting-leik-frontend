import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Filter, ArrowRight, Clock, Star, Eye,
  Bookmark, Share2, ChevronRight, Ghost, BookOpen, Scroll
} from 'lucide-react';

const StoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEra, setSelectedEra] = useState('all');
  const [selectedMood, setSelectedMood] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Story categories based on GhostingLeik research
  const categories = [
    { id: 'all', label: 'All Stories' },
    { id: 'kaidan', label: 'Kaidan (Classic)' },
    { id: 'yokai', label: 'Yōkai Tales' },
    { id: 'yurei', label: 'Yūrei Stories' },
    { id: 'urban', label: 'Urban Legends' },
    { id: 'folklore', label: 'Folklore' },
  ];

  // Era/Period filters
  const eras = [
    { id: 'all', label: 'All Periods' },
    { id: 'heian', label: 'Heian Period' },
    { id: 'edo', label: 'Edo Period' },
    { id: 'meiji', label: 'Meiji Era' },
    { id: 'modern', label: 'Modern' },
  ];

  // Mood filters
  const moods = [
    { id: 'all', label: 'All Moods' },
    { id: 'chilling', label: 'Chilling' },
    { id: 'mysterious', label: 'Mysterious' },
    { id: 'bittersweet', label: 'Bittersweet' },
    { id: 'whimsical', label: 'Whimsical' },
    { id: 'romantic', label: 'Romantic' },
  ];

  // Stories database
  const stories = [
    {
      title: 'The Tale of Oiwa',
      excerpt: 'One of the most famous ghosts in Japanese theater, the betrayed wife whose vengeance knows no bounds. A story of love, betrayal, and eternal retribution.',
      category: 'yurei',
      era: 'edo',
      mood: 'chilling',
      readTime: '8 min',
      rating: 4.9,
      views: '12.5K',
      featured: true,
      slug: 'tale-of-oiwa'
    },
    {
      title: 'Kappa of the Gifu River',
      excerpt: 'A curious water demon who loves nothing more than perfecting its cucumber-based recipes. Surprisingly wholesome for a creature of the deep.',
      category: 'yokai',
      era: 'regional',
      mood: 'whimsical',
      readTime: '5 min',
      rating: 4.7,
      views: '8.3K',
      featured: false,
      slug: 'kappa-of-gifu-river'
    },
    {
      title: 'The Suicide Forest',
      excerpt: 'Aokigahara\'s dark reputation and the legends that explain why people journey there. An exploration of one of the world\'s most mysterious forests.',
      category: 'kaidan',
      era: 'modern',
      mood: 'chilling',
      readTime: '12 min',
      rating: 4.8,
      views: '15.2K',
      featured: true,
      slug: 'suicide-forest'
    },
    {
      title: 'The Birthday Phenomenon',
      excerpt: 'Why do so many famous Japanese horror events occur on birthdays? A chilling analysis of dates, coincidences, and the supernatural.',
      category: 'kaidan',
      era: 'modern',
      mood: 'mysterious',
      readTime: '7 min',
      rating: 4.6,
      views: '9.8K',
      featured: false,
      slug: 'birthday-phenomenon'
    },
    {
      title: 'Tengu of Mount Kurama',
      excerpt: 'The long-nosed mountain goblins who serve as guardians of ancient wisdom. Warriors, monks, and the supernatural intersect.',
      category: 'yokai',
      era: 'edo',
      mood: 'mysterious',
      readTime: '6 min',
      rating: 4.8,
      views: '7.1K',
      featured: false,
      slug: 'tengu-mount-kurama'
    },
    {
      title: 'The Red Room',
      excerpt: 'A modern urban legend about a hidden room in traditional ryokan that only appears to certain guests. What waits inside?',
      category: 'urban',
      era: 'modern',
      mood: 'chilling',
      readTime: '9 min',
      rating: 4.9,
      views: '11.3K',
      featured: true,
      slug: 'red-room'
    },
    {
      title: 'The Lantern of Lost Souls',
      excerpt: 'A wandering spirit who collects abandoned paper lanterns discovers one that belonged to a poet who died 200 years ago. Through the lantern\'s glow, they witness the poet\'s unfinished love letter.',
      category: 'kaidan',
      era: 'folklore',
      mood: 'bittersweet',
      readTime: '10 min',
      rating: 4.9,
      views: '13.1K',
      featured: true,
      slug: 'lantern-of-lost-souls'
    },
    {
      title: 'Baku - The Dream Eater',
      excerpt: 'These strange creatures consume nightmares and bring sweet dreams. A look at one of the friendliest yokai in Japanese folklore.',
      category: 'yokai',
      era: 'heian',
      mood: 'whimsical',
      readTime: '4 min',
      rating: 4.5,
      views: '5.9K',
      featured: false,
      slug: 'baku-dream-eater'
    },
  ];

  const featuredStories = stories.filter(s => s.featured);

  // Filter stories
  const filteredStories = useMemo(() => {
    return stories.filter(story => {
      if (selectedCategory !== 'all' && story.category !== selectedCategory) return false;
      if (selectedEra !== 'all' && story.era !== selectedEra) return false;
      if (selectedMood !== 'all' && story.mood !== selectedMood) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          story.title.toLowerCase().includes(query) ||
          story.excerpt.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [selectedCategory, selectedEra, selectedMood, searchQuery]);

  const getCategoryLabel = (cat: string) => {
    const found = categories.find(c => c.id === cat);
    return found ? found.label : cat;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/10 border border-crimson/30 rounded-full mb-6">
            <Scroll className="w-4 h-4 text-crimson" />
            <span className="text-sm text-crimson font-medium">Curated Kaidan Collection</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-ink-base">
            Ghost Stories
          </h1>
          <p className="text-xl text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Explore the mysterious world of Japanese kaidan (怪談) - ghost stories that have chilled audiences for centuries.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="max-w-5xl mx-auto mb-12">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-muted" />
            <input
              type="text"
              placeholder="Search stories by title or theme..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-parchment border border-ink-subtle rounded-lg text-ink-base placeholder-ink-muted focus:outline-none focus:border-crimson/50 font-serif"
            />
          </div>

          {/* Filter Row */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-ink-base mb-2">Category</label>
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-crimson text-bone-white'
                        : 'bg-parchment text-ink-muted hover:bg-crimson/10 hover:text-crimson border border-ink-subtle'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-ink-base mb-2">Era/Period</label>
              <select
                value={selectedEra}
                onChange={(e) => setSelectedEra(e.target.value)}
                className="w-full px-4 py-3 bg-parchment border border-ink-subtle rounded-lg text-ink-base focus:outline-none focus:border-crimson/50 font-serif"
              >
                {eras.map((era) => (
                  <option key={era.id} value={era.id}>{era.label}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-ink-base mb-2">Mood</label>
              <select
                value={selectedMood}
                onChange={(e) => setSelectedMood(e.target.value)}
                className="w-full px-4 py-3 bg-parchment border border-ink-subtle rounded-lg text-ink-base focus:outline-none focus:border-crimson/50 font-serif"
              >
                {moods.map((mood) => (
                  <option key={mood.id} value={mood.id}>{mood.label}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end pb-1">
              <span className="text-ink-muted font-serif">
                Showing {filteredStories.length} of {stories.length} stories
              </span>
            </div>
          </div>
        </div>

        {/* Featured Stories */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 text-ink-base">
            <Star className="w-5 h-5 text-gold" />
            Featured Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStories.map((story, index) => (
              <Link
                key={index}
                to={`/stories/${story.slug}`}
                className="group card-archive hover:border-crimson/40 transition-all overflow-hidden"
              >
                {/* Decorative Header */}
                <div className="h-32 bg-gradient-to-br from-crimson/5 to-gold/5 flex items-center justify-center relative">
                  <Ghost className="w-16 h-16 text-crimson/10 group-hover:text-crimson/20 transition-colors" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gold/20 border border-gold/30 text-gold-dark text-xs rounded-full font-semibold">
                    Featured
                  </div>
                </div>

                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-crimson/10 border border-crimson/20 text-crimson text-xs rounded">
                      {getCategoryLabel(story.category)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-ink-muted">
                      <Clock className="w-3 h-3" />
                      {story.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold mb-2 text-ink-base group-hover:text-crimson transition-colors">
                    {story.title}
                  </h3>

                  <p className="text-sm text-ink-muted leading-relaxed mb-4 line-clamp-3">
                    {story.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-ink-subtle">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-gold fill-gold" />
                      <span className="text-sm text-ink-base font-medium">{story.rating}</span>
                    </div>
                    <span className="text-xs text-ink-muted">{story.views} views</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Stories */}
        <div>
          <h2 className="text-2xl font-display font-bold mb-6 text-ink-base">All Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story, index) => (
              <Link
                key={index}
                to={`/stories/${story.slug}`}
                className="group card-archive hover:border-crimson/30 transition-all"
              >
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-crimson/10 border border-crimson/20 text-crimson text-xs rounded">
                      {getCategoryLabel(story.category)}
                    </span>
                    <span className="text-xs text-ink-muted">{story.readTime}</span>
                  </div>

                  <h3 className="font-display font-bold mb-2 text-ink-base group-hover:text-crimson transition-colors line-clamp-1">
                    {story.title}
                  </h3>

                  <p className="text-xs text-ink-muted line-clamp-2 mb-4">
                    {story.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-ink-muted pt-3 border-t border-ink-subtle">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-gold fill-gold" />
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
        <div className="mt-16 max-w-3xl mx-auto text-center card-parchment p-8">
          <BookOpen className="w-10 h-10 text-gold mx-auto mb-4" />
          <h3 className="text-2xl font-display font-bold text-ink-base mb-4">Never Miss a New Story</h3>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Get weekly Japanese ghost stories delivered to your inbox. Curated content you won't find anywhere else.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-parchment-alt border border-ink-subtle rounded-lg focus:outline-none focus:border-crimson/50 font-serif"
            />
            <button
              type="submit"
              className="btn-primary"
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