import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const LessonCard = ({ lesson, isCompleted = false }) => {
  const difficultyLabels = {
    1: "Beginner",
    2: "Intermediate",
    3: "Advanced"
  };

  const difficultyColors = {
    1: "accent",
    2: "secondary",
    3: "primary"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Card className="p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Badge variant={difficultyColors[lesson.difficulty]}>
              {difficultyLabels[lesson.difficulty]}
            </Badge>
            {isCompleted && (
              <Badge variant="success">
                <ApperIcon name="Check" size={14} className="mr-1" />
                Completed
              </Badge>
            )}
          </div>
          <div className="text-2xl">
            {lesson.type === "story" ? "📚" : "🎯"}
          </div>
        </div>

        <div className="flex-1 space-y-3">
          <div>
            <h3 className="font-display text-xl font-bold text-gray-800 mb-1">
              {lesson.title}
            </h3>
            <p className="text-gray-600 text-sm italic">
              {lesson.titleEs}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <ApperIcon name="Heart" size={16} className="mr-2 text-accent" />
              <span>{lesson.emotions.length} emotions</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <ApperIcon name="BookOpen" size={16} className="mr-2 text-secondary" />
              <span>{lesson.vocabulary.length} new words</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {lesson.emotions.slice(0, 3).map((emotion, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
              >
                {emotion}
              </span>
            ))}
            {lesson.emotions.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                +{lesson.emotions.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <Link to={`/lessons/${lesson.Id}`}>
            <Button 
              variant={isCompleted ? "outline" : "primary"}
              className="w-full"
            >
              {isCompleted ? "Review Lesson" : "Start Lesson"}
              <ApperIcon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default LessonCard;