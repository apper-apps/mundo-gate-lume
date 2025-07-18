import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";
import EmotionCard from "@/components/molecules/EmotionCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import emotionCardsService from "@/services/api/emotionCardsService";

const Activities = () => {
  const [emotions, setEmotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("emotion-cards");
  const [gameState, setGameState] = useState({
    score: 0,
    currentQuestion: 0,
    selectedAnswer: null,
    showResult: false
  });

  useEffect(() => {
    loadEmotions();
  }, []);

  const loadEmotions = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await emotionCardsService.getAll();
      setEmotions(data);
    } catch (err) {
      setError("Failed to load activities. Please try again.");
      console.error("Error loading emotions:", err);
    } finally {
      setLoading(false);
    }
  };

  const activities = [
    {
      id: "emotion-cards",
      title: "Emotion Cards",
      description: "Practice Spanish emotions with interactive cards",
      icon: "Heart",
      color: "accent"
    },
    {
      id: "memory-game",
      title: "Memory Match",
      description: "Match Spanish emotions with their English meanings",
      icon: "Brain",
      color: "primary"
    },
    {
      id: "listening-practice",
      title: "Listening Practice",
      description: "Listen and identify the correct emotion",
      icon: "Volume2",
      color: "secondary"
    },
    {
      id: "drawing-activity",
      title: "Draw Your Feelings",
      description: "Express emotions through art (printable activity)",
      icon: "Palette",
      color: "success"
    }
  ];

  const matchingQuestions = [
    {
      question: "How do you say 'happy' in Spanish?",
      options: ["triste", "feliz", "enojado"],
      correct: "feliz",
      emoji: "😊"
    },
    {
      question: "What does 'asustado' mean?",
      options: ["scared", "excited", "angry"],
      correct: "scared",
      emoji: "😨"
    },
    {
      question: "How do you say 'surprised' in Spanish?",
      options: ["sorprendido", "orgulloso", "valiente"],
      correct: "sorprendido",
      emoji: "😲"
    }
  ];

  const handleAnswerSelect = (answer) => {
    setGameState(prev => ({
      ...prev,
      selectedAnswer: answer,
      showResult: true
    }));

    setTimeout(() => {
      const isCorrect = answer === matchingQuestions[gameState.currentQuestion].correct;
      setGameState(prev => ({
        ...prev,
        score: isCorrect ? prev.score + 1 : prev.score,
        currentQuestion: prev.currentQuestion + 1,
        selectedAnswer: null,
        showResult: false
      }));
    }, 1500);
  };

  const resetGame = () => {
    setGameState({
      score: 0,
      currentQuestion: 0,
      selectedAnswer: null,
      showResult: false
    });
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadEmotions} />;
  if (emotions.length === 0) return <Empty message="No activities available" icon="Gamepad2" />;

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-8 bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
              <ApperIcon name="Gamepad2" size={32} className="text-accent" />
            </div>
            <div>
              <h1 className="font-display text-4xl font-bold text-gray-800 mb-2">
                Fun Activities
              </h1>
              <p className="text-xl text-gray-600">
                Interactive games and exercises to practice Spanish emotions
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Activity Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card 
              className={`p-6 cursor-pointer transition-all duration-200 ${
                selectedActivity === activity.id 
                  ? "ring-2 ring-primary shadow-elevated" 
                  : "hover:shadow-elevated"
              }`}
              onClick={() => setSelectedActivity(activity.id)}
            >
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                  activity.color === "accent" ? "bg-accent/20 text-accent" :
                  activity.color === "primary" ? "bg-primary/20 text-primary" :
                  activity.color === "secondary" ? "bg-secondary/20 text-secondary" :
                  "bg-success/20 text-success"
                }`}>
                  <ApperIcon name={activity.icon} size={32} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-gray-800">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {activity.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Activity Content */}
      <Card className="p-8">
        {selectedActivity === "emotion-cards" && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold text-gray-800 mb-2">
                Emotion Cards Practice
              </h2>
              <p className="text-gray-600">
                Click on cards to hear pronunciation and learn new words
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {emotions.map((emotion) => (
                <EmotionCard
                  key={emotion.Id}
                  emotion={emotion}
                  onSelect={() => {}}
                />
              ))}
            </div>
          </div>
        )}

        {selectedActivity === "memory-game" && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold text-gray-800 mb-2">
                Memory Match Game
              </h2>
              <p className="text-gray-600">
                Answer questions to test your Spanish emotion vocabulary
              </p>
            </div>

            {gameState.currentQuestion < matchingQuestions.length ? (
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="primary">
                    Question {gameState.currentQuestion + 1} of {matchingQuestions.length}
                  </Badge>
                  <Badge variant="accent">
                    Score: {gameState.score}
                  </Badge>
                </div>

                <div className="text-center space-y-6">
                  <div className="text-6xl mb-4">
                    {matchingQuestions[gameState.currentQuestion].emoji}
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-gray-800">
                    {matchingQuestions[gameState.currentQuestion].question}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {matchingQuestions[gameState.currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant={
                          gameState.showResult 
                            ? gameState.selectedAnswer === option 
                              ? option === matchingQuestions[gameState.currentQuestion].correct
                                ? "accent"
                                : "outline"
                              : option === matchingQuestions[gameState.currentQuestion].correct
                                ? "accent"
                                : "outline"
                            : "outline"
                        }
                        onClick={() => handleAnswerSelect(option)}
                        disabled={gameState.showResult}
                        className="py-4 text-lg"
                      >
                        {option}
                        {gameState.showResult && option === matchingQuestions[gameState.currentQuestion].correct && (
                          <ApperIcon name="Check" size={16} className="ml-2" />
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-display text-2xl font-bold text-gray-800">
                  ¡Excelente! Great Job!
                </h3>
                <p className="text-xl text-gray-600">
                  You scored {gameState.score} out of {matchingQuestions.length}!
                </p>
                <Button onClick={resetGame} className="mt-4">
                  Play Again
                  <ApperIcon name="RotateCcw" size={16} className="ml-2" />
                </Button>
              </div>
            )}
          </div>
        )}

        {selectedActivity === "listening-practice" && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold text-gray-800 mb-2">
                Listening Practice
              </h2>
              <p className="text-gray-600">
                Listen to Spanish emotion words and practice pronunciation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emotions.slice(0, 6).map((emotion) => (
                <div key={emotion.Id} className="p-6 bg-surface rounded-lg">
                  <div className="text-center space-y-4">
                    <div className="text-4xl">{emotion.characterImage}</div>
                    <h3 className="font-display text-xl font-bold text-gray-800">
                      {emotion.emotionEs}
                    </h3>
                    <p className="text-gray-600">{emotion.emotionEn}</p>
                    <Button variant="ghost" size="sm">
                      <ApperIcon name="Volume2" size={16} className="mr-2" />
                      Listen & Repeat
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedActivity === "drawing-activity" && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold text-gray-800 mb-2">
                Draw Your Feelings
              </h2>
              <p className="text-gray-600">
                Express emotions through art with these printable activities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto">
                    <ApperIcon name="Download" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-800">
                    Emotion Faces Worksheet
                  </h3>
                  <p className="text-sm text-gray-600">
                    Draw faces showing different emotions and label them in Spanish
                  </p>
                  <Button variant="outline" className="w-full">
                    Download PDF
                    <ApperIcon name="Download" size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-success/20 rounded-full flex items-center justify-center mx-auto">
                    <ApperIcon name="Palette" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-800">
                    Emotion Coloring Pages
                  </h3>
                  <p className="text-sm text-gray-600">
                    Color characters showing different emotions with Spanish labels
                  </p>
                  <Button variant="outline" className="w-full">
                    Download PDF
                    <ApperIcon name="Download" size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Activities;