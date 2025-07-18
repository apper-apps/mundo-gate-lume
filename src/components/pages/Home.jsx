import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";
import EmotionCheckIn from "@/components/organisms/EmotionCheckIn";
import LessonCard from "@/components/molecules/LessonCard";
import ProgressCard from "@/components/molecules/ProgressCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import childrenService from "@/services/api/childrenService";
import lessonsService from "@/services/api/lessonsService";

const Home = () => {
  const [child, setChild] = useState(null);
  const [featuredLesson, setFeaturedLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showCheckIn, setShowCheckIn] = useState(false);

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    try {
      setLoading(true);
      setError("");
      
      const currentChild = await childrenService.getCurrentChild();
      if (currentChild) {
        setChild(currentChild);
        
        // Get featured lesson (next uncompleted lesson)
        const allLessons = await lessonsService.getAll();
        const nextLesson = allLessons.find(lesson => 
          !currentChild.completedLessons?.includes(`lesson-${lesson.Id}`)
        );
        setFeaturedLesson(nextLesson);
      }
    } catch (err) {
      setError("Failed to load home data. Please try again.");
      console.error("Error loading home data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckInComplete = (checkInData) => {
    setShowCheckIn(false);
    // Update child's check-in data
    if (child) {
      setChild({
        ...child,
        weeklyCheckIns: [...(child.weeklyCheckIns || []), checkInData]
      });
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadHomeData} />;

  if (showCheckIn) {
    return <EmotionCheckIn onComplete={handleCheckInComplete} />;
  }

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-3xl">👋</span>
              </div>
              <div>
                <h1 className="font-display text-4xl font-bold text-gray-800 mb-2">
                  ¡Hola, {child?.name || "Friend"}!
                </h1>
                <p className="text-xl text-gray-600">
                  Ready to learn Spanish and explore emotions today?
                </p>
              </div>
            </div>
            <div className="text-right">
              <Badge variant="primary" className="text-lg px-4 py-2 mb-2">
                Level {child?.currentLevel || 1}
              </Badge>
              <p className="text-sm text-gray-600">
                {child?.weeklyCheckIns?.length || 0} check-ins this week
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 text-center hover:shadow-elevated transition-all duration-200 cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <ApperIcon name="Heart" size={32} className="text-accent" />
            </div>
            <h3 className="font-display text-xl font-bold text-gray-800 mb-2">
              Daily Check-In
            </h3>
            <p className="text-gray-600 mb-4">
              How are you feeling today?
            </p>
            <Button 
              onClick={() => setShowCheckIn(true)}
              className="w-full"
            >
              Start Check-In
            </Button>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/lessons">
            <Card className="p-6 text-center hover:shadow-elevated transition-all duration-200 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="BookOpen" size={32} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-800 mb-2">
                Continue Learning
              </h3>
              <p className="text-gray-600 mb-4">
                Explore stories and emotions
              </p>
              <Button variant="secondary" className="w-full">
                View Lessons
              </Button>
            </Card>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/progress">
            <Card className="p-6 text-center hover:shadow-elevated transition-all duration-200 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="BarChart3" size={32} className="text-secondary" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-800 mb-2">
                View Progress
              </h3>
              <p className="text-gray-600 mb-4">
                See how much you've learned
              </p>
              <Button variant="accent" className="w-full">
                Check Progress
              </Button>
            </Card>
          </Link>
        </motion.div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <ProgressCard
          title="Words Learned"
          value={child?.emotionVocabulary?.length || 0}
          subtitle="Spanish words"
          icon="BookOpen"
          color="primary"
        />
        <ProgressCard
          title="Lessons Done"
          value={child?.completedLessons?.length || 0}
          subtitle="stories"
          icon="CheckCircle"
          color="accent"
        />
        <ProgressCard
          title="Check-ins"
          value={child?.weeklyCheckIns?.length || 0}
          subtitle="this week"
          icon="Heart"
          color="secondary"
        />
        <ProgressCard
          title="Badges"
          value={child?.badges?.length || 0}
          subtitle="earned"
          icon="Award"
          color="success"
        />
      </div>

      {/* Featured Lesson */}
      {featuredLesson && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-gray-800">
              Continue Your Journey
            </h2>
            <div className="max-w-md">
              <LessonCard lesson={featuredLesson} />
            </div>
          </div>
        </motion.div>
      )}

      {/* Parent Tip */}
      <Card className="p-6 bg-gradient-to-r from-info/5 to-info/10 border-info/20">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-info/20 rounded-full flex items-center justify-center flex-shrink-0">
            <ApperIcon name="Lightbulb" size={24} className="text-info" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-gray-800 mb-2">
              Parent Tip of the Day
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Encourage your child to use the Spanish emotion words throughout the day. 
              When they express feelings, ask them to try saying it in Spanish first. 
              This helps reinforce their learning and builds confidence!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;