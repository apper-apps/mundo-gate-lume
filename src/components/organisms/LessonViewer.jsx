import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";
import AudioPlayer from "@/components/molecules/AudioPlayer";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";

const LessonViewer = ({ lesson, onComplete }) => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [completedChapters, setCompletedChapters] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!lesson) {
    return <Error message="Lesson not found" onRetry={() => window.location.reload()} />;
  }

  const chapters = lesson.storyContent?.chapters || [];
  const currentChapterData = chapters[currentChapter];
  const isLastChapter = currentChapter === chapters.length - 1;
  const allChaptersCompleted = completedChapters.size === chapters.length;

  const handleNextChapter = () => {
    const newCompleted = new Set(completedChapters);
    newCompleted.add(currentChapter);
    setCompletedChapters(newCompleted);

    if (isLastChapter) {
      toast.success("¡Felicitaciones! You completed the lesson!");
      onComplete?.();
    } else {
      setCurrentChapter(currentChapter + 1);
      setShowTranslation(false);
    }
  };

  const handlePrevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setShowTranslation(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={() => setError("")} />;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Story Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-display text-3xl font-bold text-gray-800">
              {lesson.storyContent.title}
            </h1>
            <p className="text-gray-600 italic">
              {lesson.storyContent.titleEn}
            </p>
          </div>
          <Badge variant="primary">
            Chapter {currentChapter + 1} of {chapters.length}
          </Badge>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <ApperIcon name="Heart" size={16} className="mr-1 text-accent" />
            <span>{lesson.emotions.length} emotions</span>
          </div>
          <div className="flex items-center">
            <ApperIcon name="BookOpen" size={16} className="mr-1 text-secondary" />
            <span>{lesson.vocabulary.length} words</span>
          </div>
          <div className="flex items-center">
            <ApperIcon name="Clock" size={16} className="mr-1 text-primary" />
            <span>5-10 min</span>
          </div>
        </div>
      </Card>

      {/* Story Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentChapter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-8">
            <div className="text-center space-y-6">
              {/* Emotion Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-4xl">
                    {currentChapterData?.emotion === "feliz" && "😊"}
                    {currentChapterData?.emotion === "triste" && "😢"}
                    {currentChapterData?.emotion === "enojado" && "😠"}
                    {currentChapterData?.emotion === "asustado" && "😨"}
                    {currentChapterData?.emotion === "sorprendido" && "😲"}
                    {currentChapterData?.emotion === "emocionado" && "🤩"}
                    {currentChapterData?.emotion === "valiente" && "💪"}
                    {currentChapterData?.emotion === "orgulloso" && "😌"}
                    {currentChapterData?.emotion === "curioso" && "🤔"}
                  </span>
                </div>
              </div>

              {/* Spanish Text */}
              <div className="space-y-4">
                <AudioPlayer
                  text={currentChapterData?.spanish}
                  audioUrl={`/audio/chapter-${currentChapter}.mp3`}
                  showText={true}
                />
                
                {/* Translation Toggle */}
                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowTranslation(!showTranslation)}
                    className="flex items-center space-x-2"
                  >
                    <ApperIcon name="Languages" size={16} />
                    <span>{showTranslation ? "Hide" : "Show"} Translation</span>
                  </Button>
                </div>

                {/* English Translation */}
                <AnimatePresence>
                  {showTranslation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-gray-700 italic">
                          {currentChapterData?.english}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Emotion Badge */}
              <div className="flex justify-center">
                <Badge variant="accent" className="text-lg px-4 py-2">
                  Emotion: {currentChapterData?.emotion}
                </Badge>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrevChapter}
            disabled={currentChapter === 0}
            className="flex items-center space-x-2"
          >
            <ApperIcon name="ArrowLeft" size={16} />
            <span>Previous</span>
          </Button>

          <div className="flex items-center space-x-2">
            {chapters.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentChapter
                    ? "bg-primary scale-125"
                    : completedChapters.has(index)
                    ? "bg-accent"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={handleNextChapter}
            className="flex items-center space-x-2"
          >
            <span>{isLastChapter ? "Complete Lesson" : "Next"}</span>
            <ApperIcon name={isLastChapter ? "Check" : "ArrowRight"} size={16} />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LessonViewer;