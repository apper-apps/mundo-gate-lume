import { useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const EmotionCard = ({ emotion, onSelect, isSelected }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    setIsPlaying(true);
    // Simulate audio playback
    setTimeout(() => setIsPlaying(false), 1000);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Card 
        className={`p-6 cursor-pointer transition-all duration-200 ${
          isSelected 
            ? "ring-2 ring-primary shadow-elevated bg-primary/5" 
            : "hover:shadow-elevated"
        }`}
        onClick={() => onSelect(emotion)}
      >
        <div className="text-center space-y-4">
          <div 
            className="text-6xl mb-3 transition-transform duration-200 hover:scale-110"
            style={{ color: emotion.color }}
          >
            {emotion.characterImage}
          </div>
          
          <div className="space-y-2">
            <h3 className="font-display text-2xl font-bold text-gray-800">
              {emotion.emotionEs}
            </h3>
            <p className="text-gray-600 text-lg">
              {emotion.emotionEn}
            </p>
          </div>

          <div className="flex justify-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                playAudio();
              }}
              className="flex items-center space-x-2"
            >
              <ApperIcon 
                name={isPlaying ? "Volume2" : "Volume1"} 
                size={16} 
                className={isPlaying ? "text-primary animate-pulse" : "text-gray-500"}
              />
              <span>Listen</span>
            </Button>
          </div>

          {emotion.examplePhrases && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="text-sm space-y-1">
                <p className="font-medium text-gray-700">
                  {emotion.examplePhrases[0]?.spanish}
                </p>
                <p className="text-gray-500">
                  {emotion.examplePhrases[0]?.english}
                </p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default EmotionCard;