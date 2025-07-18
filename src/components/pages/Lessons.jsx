import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";
import LessonCard from "@/components/molecules/LessonCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import lessonsService from "@/services/api/lessonsService";
import childrenService from "@/services/api/childrenService";

const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  const [child, setChild] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  useEffect(() => {
    loadLessonsData();
  }, []);

  const loadLessonsData = async () => {
    try {
      setLoading(true);
      setError("");
      
      const [allLessons, currentChild] = await Promise.all([
        lessonsService.getAll(),
        childrenService.getCurrentChild()
      ]);
      
      setLessons(allLessons);
      setChild(currentChild);
    } catch (err) {
      setError("Failed to load lessons. Please try again.");
      console.error("Error loading lessons:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredLessons = selectedDifficulty === "all" 
    ? lessons 
    : lessons.filter(lesson => lesson.difficulty === parseInt(selectedDifficulty));

  const difficultyFilters = [
    { key: "all", label: "All Lessons", count: lessons.length },
    { key: "1", label: "Beginner", count: lessons.filter(l => l.difficulty === 1).length },
    { key: "2", label: "Intermediate", count: lessons.filter(l => l.difficulty === 2).length },
    { key: "3", label: "Advanced", count: lessons.filter(l => l.difficulty === 3).length }
  ];

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadLessonsData} />;
  if (lessons.length === 0) return <Empty message="No lessons available" icon="BookOpen" />;

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <ApperIcon name="BookOpen" size={32} className="text-primary" />
              </div>
              <div>
                <h1 className="font-display text-4xl font-bold text-gray-800 mb-2">
                  Story Lessons
                </h1>
                <p className="text-xl text-gray-600">
                  Learn Spanish through emotional stories
                </p>
              </div>
            </div>
            <div className="text-right">
              <Badge variant="primary" className="text-lg px-4 py-2 mb-2">
                {child?.completedLessons?.length || 0} completed
              </Badge>
              <p className="text-sm text-gray-600">
                {lessons.length} total lessons
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Difficulty Filters */}
      <div className="flex flex-wrap gap-3">
        {difficultyFilters.map((filter) => (
          <Button
            key={filter.key}
            variant={selectedDifficulty === filter.key ? "primary" : "outline"}
            onClick={() => setSelectedDifficulty(filter.key)}
            className="flex items-center space-x-2"
          >
            <span>{filter.label}</span>
            <Badge 
              variant={selectedDifficulty === filter.key ? "accent" : "default"}
              className="ml-2"
            >
              {filter.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson, index) => (
          <motion.div
            key={lesson.Id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <LessonCard
              lesson={lesson}
              isCompleted={child?.completedLessons?.includes(`lesson-${lesson.Id}`)}
            />
          </motion.div>
        ))}
      </div>

      {/* Learning Path */}
      <Card className="p-6">
        <h2 className="font-display text-2xl font-bold text-gray-800 mb-6">
          Your Learning Path
        </h2>
        
        <div className="space-y-4">
          {lessons.slice(0, 5).map((lesson, index) => {
            const isCompleted = child?.completedLessons?.includes(`lesson-${lesson.Id}`);
            const isNext = !isCompleted && !lessons.slice(0, index).some(l => 
              !child?.completedLessons?.includes(`lesson-${l.Id}`)
            );
            
            return (
              <div
                key={lesson.Id}
                className={`flex items-center space-x-4 p-4 rounded-lg border-2 transition-all duration-200 ${
                  isCompleted 
                    ? "bg-accent/10 border-accent/20" 
                    : isNext 
                    ? "bg-primary/10 border-primary/20" 
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isCompleted 
                    ? "bg-accent text-white" 
                    : isNext 
                    ? "bg-primary text-white" 
                    : "bg-gray-300 text-gray-600"
                }`}>
                  {isCompleted ? (
                    <ApperIcon name="Check" size={16} />
                  ) : (
                    <span className="font-bold text-sm">{index + 1}</span>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-gray-600 italic">
                    {lesson.titleEs}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Badge variant={
                    lesson.difficulty === 1 ? "accent" : 
                    lesson.difficulty === 2 ? "secondary" : "primary"
                  }>
                    Level {lesson.difficulty}
                  </Badge>
                  
                  {isNext && (
                    <Badge variant="primary">
                      Next
                    </Badge>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Lessons;