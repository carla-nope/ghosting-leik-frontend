import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Heart, Share2, Bookmark, Clock, Star,
  ChevronRight, Ghost, BookOpen, Scroll
} from 'lucide-react';

const StoryDetailPage: React.FC = () => {
  const { slug } = useParams();

  const story = {
    title: 'The Tale of Oiwa',
    category: 'Classic Kaidan',
    readTime: '8 min',
    rating: 4.9,
    views: '12.5K',
    published: 'March 15, 2025',
    author: 'Yuki Tanaka',
    content: `
      <p class="mb-4 font-serif text-ink-muted leading-relaxed">The story of Oiwa (お岩) is perhaps the most famous ghost tale in Japanese theater. This wronged woman's spirit has haunted audiences for over three centuries, her tragedy adapted into numerous plays, films, and modern retellings.</p>

      <h2 class="text-2xl font-display font-bold mt-8 mb-4 text-ink-base">The Origin</h2>
      <p class="mb-4 font-serif text-ink-muted leading-relaxed">The tale begins in Edo period Japan, where Iemon, a low-ranking samurai, yearns for wealth and status. When the opportunity arises to marry into a wealthy family, he sees a chance to escape his humble circumstances. However, he is already married to the gentle and beautiful Oiwa.</p>

      <p class="mb-4 font-serif text-ink-muted leading-relaxed">Driven by ambition, Iemon divorces Oiwa and orders her to leave their home. Devastated by this betrayal, Oiwa returns to her father's house, but the shame proves too much to bear. She falls ill, her hair begins to fall out, and she grows increasingly paranoid.</p>

      <h2 class="text-2xl font-display font-bold mt-8 mb-4 text-ink-base">The Tragedy</h2>
      <p class="mb-4 font-serif text-ink-muted leading-relaxed">One night, Iemon visits the house of a friend named Kiyomatsu, who has been nursing Oiwa back to health. Mistaking Kiyomatsu for an intruder in the dim light, Iemon strikes him down with his sword. Upon closer inspection, he discovers his mistake but realizes that with Oiwa's father conveniently away, there is no witness to his crime.</p>

      <p class="mb-4 font-serif text-ink-muted leading-relaxed">In a moment of cruel calculation, Iemon sees an opportunity. He places the body near Oiwa's room and then abandons her, spreading rumors that she is going mad. When Oiwa discovers Kiyomatsu's body, her sanity finally breaks. She takes her own life with the same sword Iemon used to kill Kiyomatsu.</p>

      <h2 class="text-2xl font-display font-bold mt-8 mb-4 text-ink-base">The Vengeance</h2>
      <p class="mb-4 font-serif text-ink-muted leading-relaxed">From that day forward, Iemon is haunted. His new wife begins to tear out her own hair at night, mirroring Oiwa's affliction. He sees Oiwa's ghost everywhere—in the mirror, in the garden, in the shadows that gather at dusk.</p>

      <p class="mb-4 font-serif text-ink-muted leading-relaxed">The vengeance continues even after Iemon marries again. On his wedding night, the ghost appears to his new bride, warning her of the fate that awaits those who take another woman's husband. The terrified bride flees, and Iemon's new life crumbles before it truly begins.</p>

      <h2 class="text-2xl font-display font-bold mt-8 mb-4 text-ink-base">The Legacy</h2>
      <p class="mb-4 font-serif text-ink-muted leading-relaxed">The tale of Oiwa has been adapted countless times, most notably in the play "Yatsukawa Ichimon Jiro" which was later renamed "Tokaido Yotsuya Kaidan" (Yotsuya Ghost Story). The play's influence extends beyond Japan, inspiring Western horror stories and films.</p>

      <p class="mb-4 font-serif text-ink-muted leading-relaxed">Today, theater troupes performing Yotsuya Kadan follow specific rituals to appease Oiwa's spirit. They leave offerings at the theater, and no one is allowed to whistle backstage—a superstition that originates from the belief that whistling can summon ghosts.</p>

      <blockquote class="border-l-4 border-crimson pl-6 my-8 italic text-ink-muted font-serif">
        "The enduring power of Oiwa's story lies in its exploration of betrayal, loss, and the eternal consequences of one's actions. Her ghost serves as a reminder that some wrongs can never be forgotten."
      </blockquote>
    `,
    relatedStories: [
      { title: 'The Birthday Phenomenon', slug: 'birthday-phenomenon', category: 'Modern' },
      { title: 'The Red Room', slug: 'red-room', category: 'Modern' },
      { title: 'The Tale of Genji', slug: 'tale-of-genji', category: 'Classic' }
    ],
    tags: ['Classic', 'Vengeance', 'Theater', 'Edo Period', 'Tragedy']
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-ink-muted mb-8">
          <Link to="/stories" className="hover:text-crimson flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            Stories
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-crimson">{story.category}</span>
        </div>

        {/* Article */}
        <article className="card-archive overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-crimson/5 to-gold/5 p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-crimson/10 border border-crimson/20 text-crimson text-sm rounded-full">
                {story.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-ink-muted">
                <Clock className="w-4 h-4" />
                {story.readTime} read
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 text-ink-base">{story.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-ink-muted">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span>{story.rating}</span>
              </div>
              <span>{story.views} views</span>
              <span>By {story.author}</span>
              <span>{story.published}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between px-8 py-4 border-b border-ink-subtle">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-ink-muted hover:text-crimson transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm">Like</span>
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
          <div className="p-8 md:p-12">
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: story.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-ink-subtle">
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-parchment-alt border border-ink-subtle rounded-full text-sm text-ink-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Box */}
          <div className="px-8 py-6 bg-parchment-alt border-t border-ink-subtle">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-crimson/10 border border-crimson/20 rounded-full flex items-center justify-center font-bold text-crimson">
                {story.author[0]}
              </div>
              <div>
                <div className="font-semibold text-ink-base">{story.author}</div>
                <div className="text-sm text-ink-muted font-serif">Content Curator</div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Stories */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold mb-6 text-ink-base">Related Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {story.relatedStories.map((related, i) => (
              <Link
                key={i}
                to={`/stories/${related.slug}`}
                className="group card-archive p-6 hover:border-crimson/30 transition-all"
              >
                <div className="w-12 h-12 bg-crimson/10 border border-crimson/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-crimson" />
                </div>
                <span className="text-xs text-crimson font-serif">{related.category}</span>
                <h3 className="font-display font-bold mt-1 text-ink-base group-hover:text-crimson transition-colors">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 text-center card-parchment p-8">
          <h3 className="text-xl font-display font-bold mb-2 text-ink-base">Enjoyed this story?</h3>
          <p className="text-ink-muted mb-6 font-serif">
            Get weekly Japanese ghost stories delivered to your inbox
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

export default StoryDetailPage;