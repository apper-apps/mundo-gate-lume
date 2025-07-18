import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";
import ProgressCard from "@/components/molecules/ProgressCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import progressService from "@/services/api/progressService";
import childrenService from "@/services/api/childrenService";

const ProgressDashboard = () => {
  const [progress, setProgress] = useState([]);
  const [child, setChild] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProgressData();
  }, []);

  const loadProgressData = async () => {
    try {
      setLoading(true);
      setError("");
      
      const currentChild = await childrenService.getCurrentChild();
      if (currentChild) {
        setChild(currentChild);
        const progressData = await progressService.getByChildId(currentChild.Id);
        setProgress(progressData);
      }
    } catch (err) {
      setError("Failed to load progress data. Please try again.");
      console.error("Error loading progress:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadProgressData} />;
  if (!child) return <Empty message="No child profile found" />;

  const totalVocabulary = child.emotionVocabulary?.length || 0;
  const completedLessons = child.completedLessons?.length || 0;
  const totalBadges = child.badges?.length || 0;
  const weeklyCheckIns = child.weeklyCheckIns?.length || 0;

  return (
    <div className="space-y-8">
      {/* Child Profile Header */}
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <span className="text-2xl">👧</span>
          </div>
          <div className="flex-1">
            <h1 className="font-display text-3xl font-bold text-gray-800">
              {child.name}'s Progress
            </h1>
            <p className="text-gray-600">
              Age {child.age} • Level {child.currentLevel}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="primary">
              Streak: {weeklyCheckIns} days
            </Badge>
            <Badge variant="accent">
              {totalBadges} badges
            </Badge>
          </div>
        </div>
      </Card>

      {/* Progress Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProgressCard
          title="Vocabulary Learned"
          value={totalVocabulary}
          subtitle="Spanish words"
          icon="BookOpen"
          color="primary"
          trend={15}
        />
        <ProgressCard
          title="Lessons Completed"
          value={completedLessons}
          subtitle="stories"
          icon="CheckCircle"
          color="accent"
          trend={8}
        />
        <ProgressCard
          title="Weekly Check-ins"
          value={weeklyCheckIns}
          subtitle="this week"
          icon="Heart"
          color="secondary"
          trend={12}
        />
        <ProgressCard
          title="Badges Earned"
          value={totalBadges}
          subtitle="achievements"
          icon="Award"
          color="success"
          trend={5}
        />
      </div>

      {/* Vocabulary Progress */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl font-bold text-gray-800">
            Vocabulary Garden
          </h3>
          <Badge variant="accent">
            {totalVocabulary} words learned
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {child.emotionVocabulary?.map((word, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 bg-gradient-to-br from-accent/10 to-accent/20 rounded-lg"
            >
              <div className="text-2xl mb-2">🌱</div>
              <span className="text-sm font-medium text-gray-700">{word}</span>
            </motion.div>
          ))}
          
          {/* Empty slots */}
          {Array.from({ length: Math.max(0, 12 - totalVocabulary) }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="text-center p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200"
            >
              <div className="text-2xl mb-2 opacity-30">🌱</div>
              <span className="text-xs text-gray-400">Coming soon</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Badges Collection */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl font-bold text-gray-800">
            Badge Collection
          </h3>
          <Badge variant="primary">
            {totalBadges} earned
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {child.badges?.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg"
            >
              <div className="text-3xl mb-2">🏆</div>
              <span className="text-sm font-medium text-gray-700 capitalize">
                {badge.replace("-", " ")}
              </span>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="font-display text-xl font-bold text-gray-800 mb-6">
          Recent Check-ins
        </h3>
        
        <div className="space-y-4">
          {child.weeklyCheckIns?.slice(0, 5).map((checkin, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-accent/30 flex items-center justify-center">
                <span className="text-lg">
                  {checkin.emotion === "feliz" && "😊"}
                  {checkin.emotion === "triste" && "😢"}
                  {checkin.emotion === "emocionado" && "🤩"}
                  {checkin.emotion === "asustado" && "😨"}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800 capitalize">
                  Feeling {checkin.emotion}
                </p>
                <p className="text-sm text-gray-600">{checkin.reason}</p>
              </div>
              <div className="text-sm text-gray-500">
                {new Date(checkin.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ProgressDashboard;