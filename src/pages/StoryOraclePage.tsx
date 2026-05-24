import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles, Wand2, RefreshCw, Copy, Check, ArrowRight,
  Ghost, Heart, Moon, BookOpen, Star, Scroll, Zap
} from 'lucide-react';

const StoryOraclePage: React.FC = () => {
  const [mood, setMood] = useState('');
  const [genre, setGenre] = useState('');
  const [generatedStory, setGeneratedStory] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generationsLeft, setGenerationsLeft] = useState(3);
  const [showLimitModal, setShowLimitModal] = useState(false);

  // Demo: Simulate different membership levels (0 = free, 1 = seeker, 2 = adept, 3 = collector)
  const [membershipLevel] = useState(0);

  const getGenerationLimits = () => {
    switch (membershipLevel) {
      case 3: // Collector - unlimited
        return { limit: Infinity, label: 'Unlimited', color: 'text-gold' };
      case 2: // Adept - 20/month
        return { limit: 20, label: '20/month', color: 'text-crimson' };
      case 1: // Seeker - 5/month
        return { limit: 5, label: '5/month', color: 'text-crimson' };
      default: // Free - 3/month
        return { limit: 3, label: '3/month', color: 'text-ink-muted' };
    }
  };

  const limits = getGenerationLimits();

  const moods = [
    { id: 'chilling', label: 'Chilling', description: 'Hair-raising terror', icon: <Moon className="w-6 h-6" /> },
    { id: 'mysterious', label: 'Mysterious', description: 'Puzzle and intrigue', icon: <Sparkles className="w-6 h-6" /> },
    { id: 'bittersweet', label: 'Bittersweet', description: 'Sad beauty', icon: <Heart className="w-6 h-6" /> },
    { id: 'whimsical', label: 'Whimsical', description: 'Playful magic', icon: <Star className="w-6 h-6" /> },
    { id: 'romantic', label: 'Romantic', description: 'Love and longing', icon: <Ghost className="w-6 h-6" /> },
  ];

  const genres = [
    { id: 'kaidan', label: 'Kaidan', description: 'Classic ghost stories', icon: <Scroll className="w-5 h-5" /> },
    { id: 'yokai', label: 'Yōkai', description: 'Supernatural creatures', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'urban', label: 'Urban Legend', description: 'Modern horror', icon: <Zap className="w-5 h-5" /> },
    { id: 'folklore', label: 'Folklore', description: 'Traditional tales', icon: <Star className="w-5 h-5" /> },
  ];

  const sampleStories = [
    {
      title: "The Lantern of Lost Souls",
      mood: "mysterious",
      genre: "kaidan",
      premise: "A wandering spirit who collects abandoned paper lanterns discovers one that belonged to a poet who died 200 years ago. Through the lantern's glow, they witness the poet's unfinished love letter and become determined to deliver it.",
      characters: ["Yurei (gentle ghost)", "The Paper Lantern (conscious entity)", "Memories of the Poet"],
      setting: "Feudal Japan, during the Obon festival when the boundary between worlds thins",
      plotPoints: [
        "The spirit discovers the lantern at an abandoned temple",
        "Through the lantern's memories, they see a poet composing a letter to his beloved",
        "The poet died before finishing the letter when war came",
        "The spirit must journey to find the poet's descendants",
        "The final reveal: the beloved also became a ghost, still waiting"
      ],
      ending: "Bittersweet - The two ghosts finally meet at the river of the dead, the letter completed by moonlight. They walk together into the next world, lanterns glowing like twin stars."
    },
    {
      title: "The Kappa's Last Recipe",
      mood: "whimsical",
      genre: "yokai",
      premise: "A young cook discovers that the river kappa who terrorized her village for centuries only wanted someone to appreciate his cucumber recipes. When she becomes the first person to taste his cooking, an unlikely friendship forms.",
      characters: ["Hanako (ambitious cook)", "Lord Kappa (ancient water spirit)", "The Village Elder"],
      setting: "Rural Japan, a village known for its cucumber farms near a sacred river",
      plotPoints: [
        "Hanako's family restaurant is failing, and she's desperate for a new recipe",
        "She ventures to the river where the legendary kappa lives",
        "She accidentally tastes his special cucumber sushi and loves it",
        "The kappa, shocked by genuine appreciation, becomes her mentor",
        "A storm threatens the village, and Hanako must save her teacher"
      ],
      ending: "Heartwarming - The kappa reveals he was once human, a chef who loved water so much he became one with the river. He teaches Hanako his final recipe, then gently dissolves into the water, finally at peace."
    },
    {
      title: "The Sleepover Ghost",
      mood: 'chilling',
      genre: "urban",
      premise: "A group of friends on a camping trip discover they've been sharing their tent with something that only appears when everyone falls asleep at the same time. The entity doesn't harm them - it just watches, and it's been doing this for decades.",
      characters: ["The Narrator (skeptic)", "Maya (believer)", "Jake (reluctant participant)", "The Watcher (unknown entity)"],
      setting: "A campground with a dark history - once a children's asylum",
      plotPoints: [
        "Strange sounds wake the narrator at 3 AM",
        "They see a silhouette watching them through the tent wall",
        "They try to wake others but everyone is in deep sleep",
        "The entity leaves a mark: a small origami crane on each sleeping person",
        "Old newspapers reveal: children used to disappear from this area in the 1950s"
      ],
      ending: "Ambiguous - The next morning, everyone finds cranes under their pillows. The camp ranger reveals he was one of the missing children. He was never rescued - he became the Watcher. Now he protects others from what took him."
    },
    {
      title: "The Red Shoe Shrine",
      mood: "bittersweet",
      genre: "folklore",
      premise: "In modern Tokyo, a young woman discovers a tiny shrine hidden in an alley where people leave single red shoes. She learns it's dedicated to a geisha who died waiting for a soldier who never returned from war.",
      characters: ["Sakura (curious office worker)", "The Shrine Keeper (ancient spirit)", "The Memory of Hiroshi (the soldier)"],
      setting: "Shibuya, Tokyo - where ancient shrines hide between modern buildings",
      plotPoints: [
        "Sakura discovers the shrine while taking a shortcut home",
        "She's drawn to leave her own worn red shoe - her favorite pair",
        "She meets the shrine keeper who tells the geisha's story",
        "The geisha's spirit still waits, unable to move on",
        "Sakura must help her understand: he died in the war, never returning"
      ],
      ending: "Poignant - The geisha finally understands and releases her attachment. She thanks Sakura and fades into the morning light. But in her place, a single perfect red shoe appears - and every shoe left at the shrine is now new, suggesting the geisha continues to watch over those who loved and lost."
    }
  ];

  const generateStory = () => {
    // Check if user has generations left
    if (generationsLeft <= 0 && limits.limit !== Infinity) {
      setShowLimitModal(true);
      return;
    }

    setIsGenerating(true);

    setTimeout(() => {
      const filtered = sampleStories.filter(s => s.mood === mood && s.genre === genre);
      const story = filtered.length > 0
        ? filtered[Math.floor(Math.random() * filtered.length)]
        : sampleStories[Math.floor(Math.random() * sampleStories.length)];
      setGeneratedStory(story);
      setIsGenerating(false);
      // Decrement generations left
      if (limits.limit !== Infinity) {
        setGenerationsLeft(prev => prev - 1);
      }
    }, 2000);
  };

  const copyStory = () => {
    if (generatedStory) {
      const storyText = `
${generatedStory.title}
Mood: ${generatedStory.mood} | Genre: ${generatedStory.genre}

PREMISE:
${generatedStory.premise}

CHARACTERS:
${generatedStory.characters.map(c => `- ${c}`).join('\n')}

SETTING:
${generatedStory.setting}

PLOT POINTS:
${generatedStory.plotPoints.map((p, i) => `${i + 1}. ${p}`).join('\n')}

ENDING:
${generatedStory.ending}
      `.trim();

      navigator.clipboard.writeText(storyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-crimson/10 border border-crimson/30 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Wand2 className="w-10 h-10 text-crimson" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-ink-base">
            Story Oracle
          </h1>
          <p className="text-xl text-ink-muted max-w-2xl mx-auto">
            Let the ancient spirits inspire your next tale. Describe your mood and genre, and receive a unique supernatural story seed.
          </p>
        </div>

        {/* Generations Counter */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className={`px-4 py-2 rounded-full border ${limits.limit === Infinity ? 'bg-gold/10 border-gold/30' : 'bg-parchment-alt border-ink-subtle'}`}>
            <span className={`text-sm font-medium ${limits.color}`}>
              {limits.limit === Infinity ? (
                <><Zap className="w-4 h-4 inline mr-1" />Unlimited generations</>
              ) : (
                <><Sparkles className="w-4 h-4 inline mr-1" />{generationsLeft} of {limits.limit} generations remaining</>
              )}
            </span>
          </div>
        </div>

        {/* Generator Form */}
        <div className="card-archive p-8 mb-8">
          <h2 className="text-xl font-display font-bold mb-6 text-center text-ink-base">What story do you seek?</h2>

          {/* Mood Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-ink-base mb-3">Select your mood</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {moods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMood(m.id)}
                  className={`relative p-4 rounded-lg border-2 transition-all font-serif text-center ${
                    mood === m.id
                      ? 'bg-crimson/10 border-crimson shadow-lg shadow-crimson/20'
                      : 'bg-parchment-alt border-ink-subtle text-ink-muted hover:border-crimson/30 hover:bg-parchment'
                  }`}
                >
                  {/* Selection indicator */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    mood === m.id
                      ? 'bg-crimson text-parchment scale-100 opacity-100'
                      : 'bg-ink-subtle text-parchment scale-75 opacity-0'
                  }`}>
                    <Check className="w-4 h-4" />
                  </div>
                  <div className={`mb-2 flex justify-center ${mood === m.id ? 'text-crimson' : 'text-ink-muted'}`}>
                    {m.icon}
                  </div>
                  <div className={`font-medium text-sm mb-1 ${mood === m.id ? 'text-ink-base' : ''}`}>
                    {m.label}
                  </div>
                  <div className="text-xs text-ink-muted">{m.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Genre Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-ink-base mb-3">Choose a genre</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {genres.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setGenre(g.id)}
                  className={`relative p-4 rounded-lg border-2 transition-all font-serif text-center ${
                    genre === g.id
                      ? 'bg-crimson/10 border-crimson shadow-lg shadow-crimson/20'
                      : 'bg-parchment-alt border-ink-subtle text-ink-muted hover:border-crimson/30 hover:bg-parchment'
                  }`}
                >
                  {/* Selection indicator */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    genre === g.id
                      ? 'bg-crimson text-parchment scale-100 opacity-100'
                      : 'bg-ink-subtle text-parchment scale-75 opacity-0'
                  }`}>
                    <Check className="w-4 h-4" />
                  </div>
                  <div className={`mb-2 flex justify-center ${genre === g.id ? 'text-crimson' : 'text-ink-muted'}`}>
                    {g.icon}
                  </div>
                  <div className={`font-medium text-sm ${genre === g.id ? 'text-ink-base' : ''}`}>
                    {g.label}
                  </div>
                  <div className="text-xs text-ink-muted mt-1">{g.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateStory}
            disabled={!mood || !genre || isGenerating}
            className="w-full py-4 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                The spirits are weaving...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Story
              </>
            )}
          </button>
        </div>

        {/* Generated Story */}
        {generatedStory && (
          <div className="card-parchment p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="text-xl font-display font-bold text-ink-base">{generatedStory.title}</h3>
                  <p className="text-sm text-crimson font-serif">
                    {generatedStory.mood} • {generatedStory.genre}
                  </p>
                </div>
              </div>
              <button
                onClick={copyStory}
                className="flex items-center gap-2 px-4 py-2 bg-parchment-alt border border-ink-subtle rounded-lg hover:bg-parchment transition-all text-sm font-medium"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-crimson mb-2 font-display">PREMISE</h4>
                <p className="text-ink-muted leading-relaxed font-serif">{generatedStory.premise}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-crimson mb-2 font-display">CHARACTERS</h4>
                <div className="flex flex-wrap gap-2">
                  {generatedStory.characters.map((char: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-parchment-alt border border-ink-subtle text-sm font-serif">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-crimson mb-2 font-display">SETTING</h4>
                <p className="text-ink-muted font-serif">{generatedStory.setting}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-crimson mb-2 font-display">PLOT POINTS</h4>
                <ol className="space-y-2">
                  {generatedStory.plotPoints.map((point: string, i: number) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-6 h-6 bg-crimson/10 border border-crimson/20 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 text-crimson">
                        {i + 1}
                      </span>
                      <span className="text-ink-muted font-serif">{point}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-ink-subtle pt-6">
                <h4 className="text-sm font-semibold text-crimson mb-2 font-display">ENDING</h4>
                <p className="text-ink-base leading-relaxed italic font-serif">{generatedStory.ending}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  if (generationsLeft <= 0 && limits.limit !== Infinity) {
                    setShowLimitModal(true);
                  } else {
                    generateStory();
                  }
                }}
                disabled={isGenerating}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-parchment-alt border border-ink-subtle rounded-lg hover:bg-parchment transition-all font-medium disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                Generate Another
              </button>
              <Link
                to="/pricing"
                className="flex-1 flex items-center justify-center gap-2 py-3 btn-primary"
              >
                <BookOpen className="w-4 h-4" />
                Get Full Access
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-8 card-parchment p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-crimson/10 border border-crimson/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Ghost className="w-6 h-6 text-crimson" />
            </div>
            <div>
              <h3 className="font-display font-bold mb-2 text-ink-base">About Story Oracle</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-serif">
                Our Story Oracle uses carefully crafted story templates inspired by traditional Japanese supernatural tales.
                Each generated story seed includes a premise, character concepts, setting details, plot structure, and an ending twist.
                Use these as starting points for your own writing, games, or creative projects.
                <Link to="/pricing" className="text-crimson ml-1 hover:underline">Upgrade to Premium</Link> for unlimited generations and access to our full story archive.
              </p>
            </div>
          </div>
        </div>

        {/* Generation Limit Modal */}
        {showLimitModal && (
          <div className="fixed inset-0 bg-ink-base/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="card-archive p-8 max-w-md w-full text-center">
              <div className="w-16 h-16 bg-crimson/10 border border-crimson/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-crimson" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2 text-ink-base">Generations Exhausted</h3>
              <p className="text-ink-muted font-serif mb-6">
                You've used all your free Story Oracle generations for this period. Upgrade to unlock unlimited story generation.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  to="/pricing"
                  className="w-full py-3 btn-primary flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Unlock Unlimited Access
                </Link>
                <button
                  onClick={() => setShowLimitModal(false)}
                  className="w-full py-3 bg-parchment-alt border border-ink-subtle rounded-lg hover:bg-parchment transition-all font-medium text-ink-muted"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryOraclePage;