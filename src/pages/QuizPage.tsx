import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles, ArrowRight, Check, Clock, Zap,
  Heart, Star, ChevronRight, RotateCcw, BookOpen, Scroll
} from 'lucide-react';

const QuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = [
    {
      question: "How do you feel about being alone in the dark?",
      options: [
        { value: "a", label: "Comfortable - darkness is peaceful", trait: "calm" },
        { value: "b", label: "Slightly uneasy, but I can handle it", trait: "balanced" },
        { value: "c", label: "It's my favorite time to think and create", trait: "creative" },
        { value: "d", label: "I prefer to have some light nearby", trait: "practical" }
      ]
    },
    {
      question: "What's your ideal supernatural encounter?",
      options: [
        { value: "a", label: "A wise spirit offering ancient knowledge", trait: "scholar" },
        { value: "b", label: "A playful trickster testing my wit", trait: "mischievous" },
        { value: "c", label: "A mysterious figure with a hidden past", trait: "mysterious" },
        { value: "d", label: "A protective guardian watching over me", trait: "protective" }
      ]
    },
    {
      question: "What aspect of Japanese culture fascinates you most?",
      options: [
        { value: "a", label: "Ancient traditions and rituals", trait: "traditional" },
        { value: "b", label: "Folklore and supernatural stories", trait: "mythical" },
        { value: "c", label: "Hidden meanings and symbolism", trait: "symbolic" },
        { value: "d", label: "The beauty in impermanence (mono no aware)", trait: "aesthetic" }
      ]
    },
    {
      question: "How do you usually solve problems?",
      options: [
        { value: "a", label: "By seeking wisdom from books and mentors", trait: "analytical" },
        { value: "b", label: "Through patience and careful observation", trait: "observant" },
        { value: "c", label: "With creativity and unconventional thinking", trait: "innovative" },
        { value: "d", label: "By forming alliances and working together", trait: "social" }
      ]
    },
    {
      question: "What role do you naturally take in a group?",
      options: [
        { value: "a", label: "The leader with a clear vision", trait: "commanding" },
        { value: "b", label: "The wise advisor others turn to", trait: "wise" },
        { value: "c", label: "The creative spirit inspiring new ideas", trait: "inspiring" },
        { value: "d", label: "The loyal protector of the group", trait: "guardian" }
      ]
    },
    {
      question: "What draws you to ghost stories and folklore?",
      options: [
        { value: "a", label: "Understanding human nature and morality", trait: "philosophical" },
        { value: "b", label: "Escaping into mysterious worlds", trait: "dreamer" },
        { value: "c", label: "Learning about different cultures", trait: "cultural" },
        { value: "d", label: "The thrill of the unknown", trait: "adventurous" }
      ]
    }
  ];

  const yokaiResults = {
    calm: {
      name: "Kitsune",
      japanese: "狐",
      description: "You embody the cunning intelligence of the Kitsune - a fox spirit known for wisdom, adaptability, and the ability to see through deception. Like the Kitsune, you navigate life with grace and wit.",
      traits: ["Clever", "Adaptable", "Wise", "Observant"],
      compatibility: "Best paired with: Books on Japanese history, tea ceremonies, moonlit walks"
    },
    balanced: {
      name: "Kappa",
      japanese: "河童",
      description: "Your practical nature and love of routine reflects the Kappa - a water spirit known for its disciplined sumo wrestling and cucumber culinary arts. You find joy in the simple pleasures of life.",
      traits: ["Practical", "Disciplined", "Friendly", "Playful"],
      compatibility: "Best paired with: River festivals, cooking classes, sumo wrestling events"
    },
    creative: {
      name: "Tanuki",
      japanese: "狸",
      description: "Your creative spirit mirrors the mischievous Tanuki - a raccoon dog famous for its shapeshifting abilities and playful nature. You're a natural entertainer who brings joy wherever you go.",
      traits: ["Creative", "Mischievous", "Charismatic", "Fun-loving"],
      compatibility: "Best paired with: Comedy shows, art workshops, festival celebrations"
    },
    scholar: {
      name: "Tengu",
      japanese: "天狗",
      description: "Your thirst for knowledge aligns with the Tengu - mountain-dwelling spirits who guard ancient wisdom. You seek truth and are not afraid to venture into the unknown to find answers.",
      traits: ["Scholarly", "Ambitious", "Disciplined", "Mysterious"],
      compatibility: "Best paired with: Mountain hiking, meditation retreats, ancient texts"
    },
    protective: {
      name: "Baku",
      japanese: "獏",
      description: "Your nurturing nature embodies the Baku - a dream-eating creature that protects people from nightmares. You have a gentle spirit that brings comfort and peace to those around you.",
      traits: ["Nurturing", "Protective", "Gentle", "Compassionate"],
      compatibility: "Best paired with: Sleep wellness, dream journals, cozy reading nooks"
    },
    mysterious: {
      name: "Yūrei",
      japanese: "幽霊",
      description: "Your mysterious aura reflects the Yūrei - restless spirits who exist between worlds. You're deeply intuitive and sensitive to things others cannot perceive, walking the line between light and shadow.",
      traits: ["Intuitive", "Sensitive", "Mysterious", "Perceptive"],
      compatibility: "Best paired with: Night photography, ghost tours, atmospheric music"
    }
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const traitCounts: Record<string, number> = {};
    answers.forEach((answer, idx) => {
      const question = questions[idx];
      const option = question.options.find(o => o.value === answer);
      if (option) {
        traitCounts[option.trait] = (traitCounts[option.trait] || 0) + 1;
      }
    });

    const dominantTrait = Object.keys(traitCounts).reduce((a, b) =>
      traitCounts[a] > traitCounts[b] ? a : b
    );

    return yokaiResults[dominantTrait as keyof typeof yokaiResults] || yokaiResults.calm;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setQuizStarted(false);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-crimson/10 border border-crimson/30 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-crimson" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-ink-base">
            Yōkai Personality Quiz
          </h1>
          <p className="text-xl text-ink-muted">
            Discover which supernatural creature from Japanese folklore matches your personality in just 3 minutes.
          </p>
        </div>

        {/* Progress */}
        {quizStarted && !showResult && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-ink-muted">Question {currentQuestion + 1} of {questions.length}</span>
              <span className="text-sm text-crimson font-medium">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="h-2 bg-parchment-alt border border-ink-subtle rounded-full overflow-hidden">
              <div
                className="h-full bg-crimson rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Quiz Content */}
        <div className="card-archive p-8">
          {!quizStarted && (
            <div className="text-center">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="card-parchment p-4">
                  <div className="text-3xl mb-2">🦊</div>
                  <div className="text-xs text-ink-muted">Kitsune</div>
                </div>
                <div className="card-parchment p-4">
                  <div className="text-3xl mb-2">👻</div>
                  <div className="text-xs text-ink-muted">Yūrei</div>
                </div>
                <div className="card-parchment p-4">
                  <div className="text-3xl mb-2">👹</div>
                  <div className="text-xs text-ink-muted">Oni</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 mb-8 text-sm text-ink-muted">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>3 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>6 questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Instant results</span>
                </div>
              </div>

              <button
                onClick={() => setQuizStarted(true)}
                className="group btn-primary inline-flex items-center gap-2"
              >
                Begin Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {quizStarted && !showResult && (
            <div>
              <h2 className="text-xl font-display font-bold mb-6 text-center text-ink-base">
                {questions[currentQuestion].question}
              </h2>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left p-4 bg-parchment-alt border border-ink-subtle rounded-lg hover:bg-parchment hover:border-crimson/30 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-ink-base group-hover:text-crimson transition-colors font-serif">
                        {option.label}
                      </span>
                      <ChevronRight className="w-5 h-5 text-gold group-hover:text-crimson transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {showResult && (
            <div className="text-center">
              <div className="mb-6">
                <div className="text-8xl mb-4">{getResult().japanese}</div>
                <h2 className="text-3xl font-display font-bold mb-2 text-ink-base">
                  You are a <span className="text-crimson">{getResult().name}</span>
                </h2>
              </div>

              <p className="text-ink-muted mb-8 leading-relaxed font-serif">
                {getResult().description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {getResult().traits.map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-gold/10 border border-gold/30 text-gold-dark rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              <div className="card-parchment p-4 mb-8">
                <p className="text-sm text-ink-muted font-serif">
                  <strong className="text-ink-base">Compatibility:</strong> {getResult().compatibility}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={restartQuiz}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-parchment-alt border border-ink-subtle rounded-lg hover:bg-parchment transition-colors font-medium"
                >
                  <RotateCcw className="w-4 h-4" />
                  Take Again
                </button>
                <Link
                  to="/yokai"
                  className="flex items-center justify-center gap-2 px-6 py-3 btn-primary"
                >
                  Learn About {getResult().name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex -space-x-2">
              {['S', 'K', 'M', 'A', 'J'].map((initial, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-crimson/10 border border-crimson/30 rounded-full flex items-center justify-center text-xs font-bold text-crimson"
                >
                  {initial}
                </div>
              ))}
            </div>
            <span className="text-sm text-ink-muted">+4,995 people took this quiz</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
            <span className="text-sm text-ink-muted ml-2">4.9/5 rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;