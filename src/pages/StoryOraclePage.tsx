import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles, Wand2, RefreshCw, Copy, Check, ArrowRight,
  Ghost, Heart, Moon, BookOpen, Star, Zap
} from 'lucide-react';

const StoryOraclePage: React.FC = () => {
  const [mood, setMood] = useState('');
  const [genre, setGenre] = useState('');
  const [generatedStory, setGeneratedStory] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const moods = [
    { id: 'chilling', label: 'Chilling', emoji: '🥶', description: 'Hair-raising terror' },
    { id: 'mysterious', label: 'Mysterious', emoji: '🔮', description: 'Puzzle and intrigue' },
    { id: 'bittersweet', label: 'Bittersweet', emoji: '😢', description: 'Sad beauty' },
    { id: 'whimsical', label: 'Whimsical', emoji: '✨', description: 'Playful magic' },
    { id: 'romantic', label: 'Romantic', emoji: '💕', description: 'Love and longing' },
  ];

  const genres = [
    { id: 'kaidan', label: 'Kaidan', description: 'Classic ghost stories' },
    { id: 'yokai', label: 'Yōkai', description: 'Supernatural creatures' },
    { id: 'urban', label: 'Urban Legend', description: 'Modern horror' },
    { id: 'folklore', label: 'Folklore', description: 'Traditional tales' },
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
    setIsGenerating(true);

    // Simulate API call
    setTimeout(() => {
      const story = sampleStories[Math.floor(Math.random() * sampleStories.length)];
      setGeneratedStory(story);
      setIsGenerating(false);
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
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Wand2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Story Oracle
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let the ancient spirits inspire your next tale. Describe your mood and genre, and receive a unique supernatural story seed.
          </p>
        </div>

        {/* Generator Form */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-6 text-center">What story do you seek?</h2>

          {/* Mood Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-300 mb-3">Select your mood</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {moods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMood(m.id)}
                  className={`p-4 rounded-xl border transition-all ${
                    mood === m.id
                      ? 'bg-purple-500/20 border-purple-500 text-white'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:border-purple-500/30'
                  }`}
                >
                  <div className="text-2xl mb-2">{m.emoji}</div>
                  <div className="font-medium text-sm">{m.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{m.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Genre Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-300 mb-3">Choose a genre</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {genres.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setGenre(g.id)}
                  className={`p-4 rounded-xl border transition-all ${
                    genre === g.id
                      ? 'bg-purple-500/20 border-purple-500 text-white'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:border-purple-500/30'
                  }`}
                >
                  <div className="font-medium">{g.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{g.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateStory}
            disabled={!mood || !genre || isGenerating}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/20 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="text-4xl">
                  {moods.find(m => m.id === generatedStory.mood)?.emoji || '✨'}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{generatedStory.title}</h3>
                  <p className="text-sm text-purple-400">
                    {generatedStory.mood} • {generatedStory.genre}
                  </p>
                </div>
              </div>
              <button
                onClick={copyStory}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-sm"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-2">PREMISE</h4>
                <p className="text-gray-300 leading-relaxed">{generatedStory.premise}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-2">CHARACTERS</h4>
                <div className="flex flex-wrap gap-2">
                  {generatedStory.characters.map((char: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-2">SETTING</h4>
                <p className="text-gray-300">{generatedStory.setting}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-2">PLOT POINTS</h4>
                <ol className="space-y-2">
                  {generatedStory.plotPoints.map((point: string, i: number) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">ENDING</h4>
                <p className="text-gray-200 leading-relaxed italic">{generatedStory.ending}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={generateStory}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                Generate Another
              </button>
              <Link
                to="/pricing"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                Get Full Access
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Ghost className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="font-bold mb-2">About Story Oracle</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Our Story Oracle uses carefully crafted story templates inspired by traditional Japanese supernatural tales.
                Each generated story seed includes a premise, character concepts, setting details, plot structure, and an ending twist.
                Use these as starting points for your own writing, games, or creative projects.
                <span className="text-purple-400 ml-1">
                  <Link to="/pricing">Upgrade to Premium</Link>
                </span> for unlimited generations and access to our full story archive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryOraclePage;