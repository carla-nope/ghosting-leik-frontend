import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Heart, Share2, Bookmark, Clock, Star,
  ChevronRight, Ghost, BookOpen
} from 'lucide-react';

const StoryDetailPage: React.FC = () => {
  const { slug } = useParams();

  // Sample story data - in production this would come from an API/database
  const story = {
    title: 'The Tale of Oiwa',
    category: 'Classic Kaidan',
    readTime: '8 min',
    rating: 4.9,
    views: '12.5K',
    published: 'March 15, 2025',
    author: 'Yuki Tanaka',
    content: `
      <p className="mb-4">The story of Oiwa (お岩) is perhaps the most famous ghost tale in Japanese theater. This wronged woman's spirit has haunted audiences for over three centuries, her tragedy adapted into numerous plays, films, and modern retellings.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Origin</h2>
      <p className="mb-4">The tale begins in Edo period Japan, where Iemon, a low-ranking samurai, yearns for wealth and status. When the opportunity arises to marry into a wealthy family, he sees a chance to escape his humble circumstances. However, he is already married to the gentle and beautiful Oiwa.</p>

      <p className="mb-4">Driven by ambition, Iemon divorces Oiwa and orders her to leave their home. Devastated by this betrayal, Oiwa returns to her father's house, but the shame proves too much to bear. She falls ill, her hair begins to fall out, and she grows increasingly paranoid.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Tragedy</h2>
      <p className="mb-4">One night, Iemon visits the house of a friend named Kiyomatsu, who has been nursing Oiwa back to health. Mistaking Kiyomatsu for an intruder in the dim light, Iemon strikes him down with his sword. Upon closer inspection, he discovers his mistake but realizes that with Oiwa's father conveniently away, there is no witness to his crime.</p>

      <p className="mb-4">In a moment of cruel calculation, Iemon sees an opportunity. He places the body near Oiwa's room and then abandons her, spreading rumors that she is going mad. When Oiwa discovers Kiyomatsu's body, her sanity finally breaks. She takes her own life with the same sword Iemon used to kill Kiyomatsu.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Vengeance</h2>
      <p className="mb-4">From that day forward, Iemon is haunted. His new wife begins to tear out her own hair at night, mirroring Oiwa's affliction. He sees Oiwa's ghost everywhere—in the mirror, in the garden, in the shadows that gather at dusk.</p>

      <p className="mb-4">The vengeance continues even after Iemon marries again. On his wedding night, the ghost appears to his new bride, warning her of the fate that awaits those who take another woman's husband. The terrified bride flees, and Iemon's new life crumbles before it truly begins.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Legacy</h2>
      <p className="mb-4">The tale of Oiwa has been adapted countless times, most notably in the play "Yatsukawa Ichimon Jiro" which was later renamed "Tokaido Yotsuya Kaidan" (Yotsuya Ghost Story). The play's influence extends beyond Japan, inspiring Western horror stories and films.</p>

      <p className="mb-4">Today, theater troupes performing Yotsuya Kadan follow specific rituals to appease Oiwa's spirit. They leave offerings at the theater, and no one is allowed to whistle backstage—a superstition that originates from the belief that whistling can summon ghosts.</p>

      <blockquote className="border-l-4 border-purple-500 pl-6 my-8 italic text-gray-300">
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
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/stories" className="hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            Stories
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-purple-400">{story.category}</span>
        </div>

        {/* Article */}
        <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                {story.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                {story.readTime} read
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{story.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{story.rating}</span>
              </div>
              <span>{story.views} views</span>
              <span>By {story.author}</span>
              <span>{story.published}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between px-8 py-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm">Like</span>
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
          <div className="p-8 md:p-12">
            <div
              className="prose prose-invert prose-purple max-w-none"
              dangerouslySetInnerHTML={{ __html: story.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-white/10">
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Box */}
          <div className="px-8 py-6 bg-white/5 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">
                {story.author[0]}
              </div>
              <div>
                <div className="font-semibold">{story.author}</div>
                <div className="text-sm text-gray-400">Content Curator</div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Stories */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {story.relatedStories.map((related, i) => (
              <Link
                key={i}
                to={`/stories/${related.slug}`}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-xs text-purple-400">{related.category}</span>
                <h3 className="font-bold mt-1 group-hover:text-purple-400 transition-colors">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 text-center bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-2">Enjoyed this story?</h3>
          <p className="text-gray-400 mb-6">
            Get weekly Japanese ghost stories delivered to your inbox
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

export default StoryDetailPage;