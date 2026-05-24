import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, ChevronRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredStories = [
    {
      title: 'The Tale of Oiwa',
      excerpt: 'One of the most famous ghosts in Japanese theater, the betrayed wife whose vengeance knows no bounds. A story of love, betrayal, and eternal retribution.',
      category: 'Classic Kaidan',
      readTime: '8 min',
      slug: 'tale-of-oiwa'
    },
    {
      title: 'Kappa of the Gifu River',
      excerpt: 'A curious creature who loves nothing more than perfecting its cucumber-based recipes. Surprisingly wholesome for a creature of the deep.',
      category: 'Yōkai Tales',
      readTime: '5 min',
      slug: 'kappa-of-gifu-river'
    },
    {
      title: 'The Suicide Forest',
      excerpt: "Aokigahara's dark reputation and the legends that explain why people journey there. A exploration of one of the world's most mysterious forests.",
      category: 'Modern Horror',
      readTime: '12 min',
      slug: 'suicide-forest'
    }
  ];

  const yokai = [
    { name: 'Kitsune', japanese: '狐', type: 'Fox Spirit', danger: 'Medium' },
    { name: 'Kappa', japanese: '河童', type: 'Water Demon', danger: 'Low' },
    { name: 'Yūrei', japanese: '幽霊', type: 'Restless Ghost', danger: 'High' },
    { name: 'Oni', japanese: '鬼', type: 'Demon Ogre', danger: 'Very High' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Archive Entrance */}
      <section className="relative py-20 lg:py-32">
        <div className="container-archive">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <span className="section-label">Japanese Supernatural Archive</span>
              <h1 className="text-hero mb-6">
                Where Ghosts<br />
                <span className="text-[var(--gold-antique)]">Come to Life</span>
              </h1>
              <p className="excerpt-text mb-8 max-w-lg">
                A curated archive of Japanese ghost stories, yōkai folklore, strange legends, and supernatural tales from the land of the rising dead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/stories" className="btn-primary">
                  <BookOpen className="w-5 h-5" />
                  Enter the Archive
                </Link>
                <Link to="/quiz" className="btn-archive">
                  Take the Quiz
                </Link>
              </div>
            </div>

            {/* Right: Visual Panel */}
            <div className="relative">
              <div className="bg-[var(--ink-surface)] border border-[var(--border-medium)] p-8">
                <span className="section-label mb-4 block">Featured Entry</span>
                <div className="text-center mb-6">
                  <span className="text-6xl">👻</span>
                </div>
                <h3 className="font-display text-2xl mb-2 text-[var(--text-primary)]">The Yūrei</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">幽霊 · Ghost</p>
                <p className="excerpt-text text-sm">
                  Restless spirits of the dead who return to the world of the living. Always wearing white, always barefoot, always watching.
                </p>
                <div className="mt-6 pt-6 border-t border-[var(--border-subtle)]">
                  <Link to="/yokai/yurei" className="text-[var(--gold-antique)] text-sm font-medium hover:text-[var(--gold-bright)] flex items-center gap-2">
                    Read Full Entry <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-archive">
        <div className="divider-ink"></div>
      </div>

      {/* Featured Stories Section */}
      <section className="py-20">
        <div className="container-archive">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="section-label">From the Archive</span>
              <h2 className="text-display text-[var(--text-primary)]">Begin with a Tale</h2>
            </div>
            <Link to="/stories" className="hidden md:flex items-center gap-2 text-[var(--gold-antique)] text-sm font-medium hover:text-[var(--gold-bright)]">
              View All Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredStories.map((story, index) => (
              <Link
                key={index}
                to={`/stories/${story.slug}`}
                className="card-archive group"
              >
                {/* Archive Number */}
                <div className="px-6 pt-6 pb-4">
                  <span className="text-xs text-[var(--gold-faded)] font-medium tracking-wider">
                    Entry No. {String(index + 1).padStart(3, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="px-6 pb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="label-ink">{story.category}</span>
                    <span className="text-xs text-[var(--text-muted)]">{story.readTime} read</span>
                  </div>
                  <h3 className="font-display text-xl mb-3 text-[var(--text-primary)] group-hover:text-[var(--gold-antique)] transition-colors">
                    {story.title}
                  </h3>
                  <p className="excerpt-text text-sm line-clamp-3">{story.excerpt}</p>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-xs text-[var(--text-muted)]">Tap to read</span>
                  <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--gold-antique)] transition-colors" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/stories" className="btn-archive">
              View All Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Yōkai Section */}
      <section className="py-20 bg-[var(--ink-black)]">
        <div className="container-archive">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="section-label">Field Guide</span>
              <h2 className="text-display text-[var(--text-primary)]">Meet the Yōkai</h2>
            </div>
            <Link to="/yokai" className="hidden md:flex items-center gap-2 text-[var(--gold-antique)] text-sm font-medium hover:text-[var(--gold-bright)]">
              Full Encyclopedia <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {yokai.map((creature, index) => (
              <Link
                key={index}
                to={`/yokai/${creature.name.toLowerCase()}`}
                className="card-archive text-center group"
              >
                <div className="p-6">
                  <span className="text-4xl mb-4 block">
                    {creature.name === 'Kitsune' ? '🦊' :
                     creature.name === 'Kappa' ? '🐸' :
                     creature.name === 'Yūrei' ? '👻' : '👹'}
                  </span>
                  <span className="text-xs text-[var(--gold-faded)] tracking-wider block mb-2">{creature.japanese}</span>
                  <h3 className="font-display text-lg mb-1 text-[var(--text-primary)] group-hover:text-[var(--gold-antique)] transition-colors">
                    {creature.name}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mb-3">{creature.type}</p>
                  <span className={`text-xs px-2 py-1 ${
                    creature.danger === 'Low' ? 'label-ink' :
                    creature.danger === 'Medium' ? 'label-gold' :
                    'label-crimson'
                  }`}>
                    {creature.danger}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20">
        <div className="container-archive">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Consult the Oracle</span>
              <h2 className="text-display text-[var(--text-primary)] mb-4">Discover Your Spirit</h2>
              <p className="excerpt-text mb-6">
                Take our three-minute personality quiz and discover which supernatural creature from Japanese folklore matches your inner nature.
              </p>
              <Link to="/quiz" className="btn-gold">
                Take the Quiz
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-[var(--ink-surface)] border border-[var(--border-subtle)] p-8">
              <div className="text-center">
                <span className="text-5xl mb-4 block">🔮</span>
                <p className="text-sm text-[var(--text-muted)] italic">
                  "Are you a cunning Kitsune, a playful Kappa, or perhaps a mysterious Yūrei?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-20 bg-[var(--indigo-deep)]">
        <div className="container-archive">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label">Join the Inner Archive</span>
            <h2 className="text-display text-[var(--bone-white)] mb-4">Become a Member</h2>
            <p className="excerpt-text mb-8 max-w-xl mx-auto">
              Unlock full access to 156+ ghost stories, 89+ yōkai entries, unlimited Story Oracle generations, and exclusive collector content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing" className="btn-primary">
                View Membership Tiers
              </Link>
              <Link to="/stories" className="btn-gold">
                Browse Free Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-archive">
          <div className="max-w-3xl mx-auto">
            <span className="section-label text-center block mb-8">Field Notes</span>

            <blockquote className="pull-quote mb-8">
              "GhostingLeik is the only place I find Japanese horror content that respects the culture while being genuinely engaging."
            </blockquote>
            <p className="text-sm text-[var(--text-muted)]">
              — Sarah M., Horror Writer
            </p>

            <div className="divider-flourish my-12">
              <span className="divider-flourish-icon">✦</span>
            </div>

            <blockquote className="pull-quote mb-8">
              "I use GhostingLeik's yokai compendium for every supernatural game project. It's become an essential reference."
            </blockquote>
            <p className="text-sm text-[var(--text-muted)]">
              — Kenji R., Game Developer
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;