import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Filter, ArrowRight, Clock, Star, Eye,
  ChevronRight, Ghost, Sparkles, BookOpen, Scroll
} from 'lucide-react';

const YokaiPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedOrigin, setSelectedOrigin] = useState('all');
  const [selectedDanger, setSelectedDanger] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Comprehensive categories based on GhostingLeik research
  const categories = [
    { id: 'all', label: 'All Entries' },
    { id: 'yurei', label: 'Yūrei (Ghosts)' },
    { id: 'oni', label: 'Oni (Demons)' },
    { id: 'kappa', label: 'Kappa (Aquatic)' },
    { id: 'tsukumogami', label: 'Tsukumogami' },
    { id: 'tengu', label: 'Tengu' },
    { id: 'kodama', label: 'Kodama (Tree Spirits)' },
    { id: 'bakemono', label: 'Bakemono (Transformers)' },
  ];

  // Origin regions for filtering
  const origins = [
    { id: 'all', label: 'All Regions' },
    { id: 'edo', label: 'Edo Period' },
    { id: 'heian', label: 'Heian Period' },
    { id: 'folklore', label: 'Folklore' },
    { id: 'kyoto', label: 'Kyoto' },
    { id: 'regional', label: 'Regional' },
  ];

  // Danger levels
  const dangerLevels = [
    { id: 'all', label: 'All Levels' },
    { id: 'benign', label: 'Benign' },
    { id: 'low', label: 'Low' },
    { id: 'medium', label: 'Medium' },
    { id: 'high', label: 'High' },
    { id: 'extreme', label: 'Extreme' },
  ];

  // Comprehensive yokai database based on research
  const yokai = [
    {
      name: 'Kitsune',
      japanese: '狐',
      category: 'bakemono',
      origin: 'folklore',
      dangerLevel: 'medium',
      description: 'Intelligent fox spirits with the ability to shapeshift into human form. Known for their cunning nature and deep magical powers. They can be benevolent helpers or mischievous tricksters depending on their mood.',
      traits: ['Shapeshifter', 'Magical', 'Cunning', 'Protective'],
      slug: 'kitsune'
    },
    {
      name: 'Kappa',
      japanese: '河童',
      category: 'kappa',
      origin: 'regional',
      dangerLevel: 'low',
      description: 'Water-dwelling creatures with a dish-shaped head containing water. Known for their love of cucumbers and sumo wrestling. Despite their fearsome appearance, they are often playful and value their honor.',
      traits: ['Aquatic', 'Strong', 'Honor-bound', 'Cucumber lover'],
      slug: 'kappa'
    },
    {
      name: 'Yūrei',
      japanese: '幽霊',
      category: 'yurei',
      origin: 'folklore',
      dangerLevel: 'high',
      description: 'Restless spirits of the dead who return to the world of the living. Always wear white and have no knees. They are bound by strong emotions—often love, jealousy, or revenge.',
      traits: ['Ghost', 'White robes', 'No knees', 'Emotion-bound'],
      slug: 'yurei'
    },
    {
      name: 'Onryō',
      japanese: '怨霊',
      category: 'yurei',
      origin: 'heian',
      dangerLevel: 'extreme',
      description: 'Vengeful ghosts who return to exact retribution on those who wronged them. Often women who died from betrayal or injustice. Their grief transforms into unstoppable fury.',
      traits: ['Revenge spirit', 'Powerful', 'Tragic', 'Supernatural force'],
      slug: 'onryo'
    },
    {
      name: 'Oni',
      japanese: '鬼',
      category: 'oni',
      origin: 'folklore',
      dangerLevel: 'high',
      description: 'Fierce demons with horns, fangs, and incredible strength. Often depicted in red or blue with iron clubs. They represent the primal fears of humanity.',
      traits: ['Demon', 'Horned', 'Strong', 'Fearsome'],
      slug: 'oni'
    },
    {
      name: 'Tengu',
      japanese: '天狗',
      category: 'tengu',
      origin: 'edo',
      dangerLevel: 'medium',
      description: 'Long-nosed mountain goblins with supernatural powers. Both guardians of mountains and fearsome warriors. They guard ancient wisdom and martial arts secrets.',
      traits: ['Long nose', 'Martial artist', 'Mountain dweller', 'Wise'],
      slug: 'tengu'
    },
    {
      name: 'Tanuki',
      japanese: '狸',
      category: 'bakemono',
      origin: 'folklore',
      dangerLevel: 'low',
      description: 'Mischievous raccoon dogs famous for their shapeshifting abilities and playful trickster nature. Their transformations are often imperfect, leading to comedic situations.',
      traits: ['Shapeshifter', 'Mischievous', 'Playful', 'Raccoon-like'],
      slug: 'tanuki'
    },
    {
      name: 'Baku',
      japanese: '獏',
      category: 'yokai',
      origin: 'heian',
      dangerLevel: 'benign',
      description: 'Dream-eating creatures that consume nightmares. Surprisingly friendly and beloved by children. They are summoned by those who wish to escape bad dreams.',
      traits: ['Dream-eater', 'Friendly', 'Elephant-like', 'Protective'],
      slug: 'baku'
    },
    {
      name: 'Gashadokuro',
      japanese: '餓者髑髏',
      category: 'yurei',
      origin: 'folklore',
      dangerLevel: 'extreme',
      description: 'Giant skeleton yōkai formed from the bones of those who died of starvation. Completely silent and deadly. They wander at night seeking to fulfill their insatiable hunger.',
      traits: ['Skeleton', 'Giant', 'Silent', 'Starving'],
      slug: 'gashadokuro'
    },
    {
      name: 'Kodama',
      japanese: '木霊',
      category: 'kodama',
      origin: 'regional',
      dangerLevel: 'benign',
      description: 'Tree spirits that emit eerie shrieks when trees are cut down. They are the consciousness of ancient trees. Cutting a kodama tree is said to bring disaster.',
      traits: ['Tree spirit', 'Ethereal scream', 'Nature guardian', 'Ancient'],
      slug: 'kodama'
    },
    {
      name: 'Neko-mata',
      japanese: '猫又',
      category: 'bakemono',
      origin: 'folklore',
      dangerLevel: 'medium',
      description: 'Two-tailed cats with supernatural abilities. They gain a second tail with age and power. Often associated with witchcraft and magical manipulation.',
      traits: ['Two-tailed', 'Aged', 'Magical', 'Supernatural'],
      slug: 'neko-mata'
    },
    {
      name: 'Oiwa',
      japanese: 'お岩',
      category: 'yurei',
      origin: 'edo',
      dangerLevel: 'extreme',
      description: 'One of the most famous and terrifying ghosts in Japanese theater. Her vengeance drove her murderer to madness. She appears with one eye missing and disheveled hair.',
      traits: ['Vengeful', 'Tragic love', 'Theater spirit', 'Terrifying'],
      slug: 'oiwa'
    },
    {
      name: 'Hitodama',
      japanese: '人魂',
      category: 'yurei',
      origin: 'folklore',
      dangerLevel: 'medium',
      description: 'Ghost flames—floating balls of blue fire that drift through the night. Each contains a wandering soul. They are the spirits of those who died with strong attachments.',
      traits: ['Floating flame', 'Blue fire', 'Soul vessel', 'Wandering'],
      slug: 'hitodama'
    },
    {
      name: 'Futakuchi-onna',
      japanese: '二口女',
      category: 'yokai',
      origin: 'folklore',
      dangerLevel: 'high',
      description: 'Women with a second mouth in the back of their heads. The mouth is controlled by a parasitic spirit. Often a result of jealousy transformed into supernatural horror.',
      traits: ['Two mouths', 'Parasitic', 'Tragic', 'Horrific'],
      slug: 'futakuchi-onna'
    },
    {
      name: 'Rokurokubi',
      japanese: '轆轤首',
      category: 'bakemono',
      origin: 'folklore',
      dangerLevel: 'medium',
      description: 'Women whose necks can stretch to supernatural lengths. Unlike their close relatives the nukekubi, their elongation is a learned supernatural ability tied to meditation.',
      traits: ['Long neck', 'Elongation', 'Meditation', 'Supernatural'],
      slug: 'rokurokubi'
    },
    {
      name: 'Nure-onna',
      japanese: '濡女',
      category: 'kappa',
      origin: 'regional',
      dangerLevel: 'high',
      description: 'Snake-bodied water spirits that appear as beautiful women by the water. They have a long serpentine body that remains hidden. They lure victims to the water to devour them.',
      traits: ['Serpent body', 'Water spirit', 'Deceptive beauty', 'Predatory'],
      slug: 'nure-onna'
    },
    {
      name: 'Kitsune no yomeiri',
      japanese: '狐の嫁入り',
      category: 'folklore',
      origin: 'folklore',
      dangerLevel: 'low',
      description: 'Fox wedding processions seen at dusk. These magical sightings are considered very lucky. They are the foxes holding their wedding ceremonies, invisible to humans.',
      traits: ['Fox spirit', 'Wedding', 'Dusk', 'Lucky omen'],
      slug: 'kitsune-yomeiri'
    },
    {
      name: 'Mikado no himatsuri',
      japanese: '御方の火祭',
      category: 'yurei',
      origin: 'heian',
      dangerLevel: 'high',
      description: 'The burning of angry spirits—a phenomenon where spirits rise as fire. Occurs when spirits of the wrongfully killed seek justice through supernatural means.',
      traits: ['Fire spirit', 'Justice', 'Supernatural fire', 'Tragic'],
      slug: 'himatsuri'
    },
  ];

  // Filter yokai based on all criteria
  const filteredYokai = useMemo(() => {
    return yokai.filter(yokai => {
      // Category filter
      if (selectedCategory !== 'all' && yokai.category !== selectedCategory) return false;
      // Origin filter
      if (selectedOrigin !== 'all' && yokai.origin !== selectedOrigin) return false;
      // Danger level filter
      if (selectedDanger !== 'all' && yokai.dangerLevel !== selectedDanger) return false;
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          yokai.name.toLowerCase().includes(query) ||
          yokai.japanese.includes(query) ||
          yokai.description.toLowerCase().includes(query) ||
          yokai.traits.some(trait => trait.toLowerCase().includes(query))
        );
      }
      return true;
    });
  }, [selectedCategory, selectedOrigin, selectedDanger, searchQuery]);

  const getDangerColor = (level: string) => {
    switch (level) {
      case 'benign': return 'text-green-600 bg-green-50 border border-green-200';
      case 'low': return 'text-blue-600 bg-blue-50 border border-blue-200';
      case 'medium': return 'text-amber-600 bg-amber-50 border border-amber-200';
      case 'high': return 'text-orange-600 bg-orange-50 border border-orange-200';
      case 'extreme': return 'text-red-600 bg-red-50 border border-red-200';
      default: return 'text-gray-600 bg-gray-50 border border-gray-200';
    }
  };

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
            <span className="text-sm text-crimson font-medium">Japanese Supernatural Bestiary</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-ink-base">
            Yōkai Encyclopedia
          </h1>
          <p className="text-xl text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Discover the supernatural creatures of Japanese folklore. From benign spirits to fearsome demons, explore our complete field guide to the yokai of Japan.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="max-w-5xl mx-auto mb-12">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-muted" />
            <input
              type="text"
              placeholder="Search by name, trait, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-parchment border border-ink-subtle rounded-lg text-ink-base placeholder-ink-muted focus:outline-none focus:border-crimson/50 focus:ring-2 focus:ring-crimson/20 font-serif"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink-base"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Row */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            {/* Category Filter */}
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

          {/* Second Row of Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Origin Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-ink-base mb-2">Origin/Period</label>
              <select
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
                className="w-full px-4 py-3 bg-parchment border border-ink-subtle rounded-lg text-ink-base focus:outline-none focus:border-crimson/50 font-serif"
              >
                {origins.map((orig) => (
                  <option key={orig.id} value={orig.id}>{orig.label}</option>
                ))}
              </select>
            </div>

            {/* Danger Level Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-ink-base mb-2">Danger Level</label>
              <select
                value={selectedDanger}
                onChange={(e) => setSelectedDanger(e.target.value)}
                className="w-full px-4 py-3 bg-parchment border border-ink-subtle rounded-lg text-ink-base focus:outline-none focus:border-crimson/50 font-serif"
              >
                {dangerLevels.map((danger) => (
                  <option key={danger.id} value={danger.id}>{danger.label}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-end pb-1">
              <span className="text-ink-muted font-serif">
                Showing {filteredYokai.length} of {yokai.length} entries
              </span>
            </div>
          </div>
        </div>

        {/* Yōkai Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredYokai.map((creature, index) => (
            <Link
              key={index}
              to={`/yokai/${creature.slug}`}
              className="group card-archive hover:border-crimson/40 transition-all"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-ink-base group-hover:text-crimson transition-colors mb-1">
                      {creature.name}
                    </h3>
                    <span className="text-2xl text-crimson/70">{creature.japanese}</span>
                  </div>
                  <div className={`px-3 py-1 rounded text-xs font-medium ${getDangerColor(creature.dangerLevel)}`}>
                    {creature.dangerLevel}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-parchment-alt border border-ink-subtle text-xs text-ink-muted rounded">
                    {getCategoryLabel(creature.category)}
                  </span>
                  <span className="px-2 py-1 bg-parchment-alt border border-ink-subtle text-xs text-ink-muted rounded">
                    {creature.origin}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-ink-muted leading-relaxed mb-4 line-clamp-3">
                  {creature.description}
                </p>

                {/* Traits */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {creature.traits.slice(0, 3).map((trait, i) => (
                    <span key={i} className="px-2 py-0.5 bg-gold/10 border border-gold/30 text-xs text-gold-dark rounded">
                      {trait}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-ink-subtle">
                  <span className="text-xs text-ink-muted">Read full entry</span>
                  <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredYokai.length === 0 && (
          <div className="text-center py-16">
            <Ghost className="w-16 h-16 text-ink-subtle mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold text-ink-base mb-2">No entries found</h3>
            <p className="text-ink-muted">Try adjusting your filters or search terms.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedOrigin('all');
                setSelectedDanger('all');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-3 bg-crimson text-bone-white rounded-lg hover:bg-crimson/90 transition-colors font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-parchment-alt border border-ink-subtle rounded-lg p-6 text-center">
            <div className="text-3xl font-display font-bold text-crimson mb-2">{yokai.length}+</div>
            <div className="text-sm text-ink-muted">Entries Documented</div>
          </div>
          <div className="bg-parchment-alt border border-ink-subtle rounded-lg p-6 text-center">
            <div className="text-3xl font-display font-bold text-crimson mb-2">{categories.length - 1}</div>
            <div className="text-sm text-ink-muted">Categories</div>
          </div>
          <div className="bg-parchment-alt border border-ink-subtle rounded-lg p-6 text-center">
            <div className="text-3xl font-display font-bold text-crimson mb-2">{origins.length - 1}</div>
            <div className="text-sm text-ink-muted">Origin Regions</div>
          </div>
          <div className="bg-parchment-alt border border-ink-subtle rounded-lg p-6 text-center">
            <div className="text-3xl font-display font-bold text-crimson mb-2">5</div>
            <div className="text-sm text-ink-muted">Danger Levels</div>
          </div>
        </div>

        {/* Quiz CTA */}
        <div className="mt-16 max-w-3xl mx-auto text-center card-parchment p-8">
          <Sparkles className="w-10 h-10 text-gold mx-auto mb-4" />
          <h3 className="text-2xl font-display font-bold text-ink-base mb-4">Which Yōkai Matches You?</h3>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Take our personality quiz and discover which supernatural creature from Japanese folklore matches your personality type.
          </p>
          <Link
            to="/quiz"
            className="btn-primary inline-flex items-center gap-2"
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