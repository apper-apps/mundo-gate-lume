import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const AudioPlayer = ({ text, audioUrl, showText = true }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    setIsPlaying(true);
    // Simulate audio playback
    setTimeout(() => setIsPlaying(false), 2000);
  };

  return (
    <div className="flex items-center space-x-3 p-4 bg-surface rounded-lg border border-yellow-200">
      <Button
        variant="ghost"
        size="sm"
        onClick={playAudio}
        className="flex-shrink-0"
      >
        <motion.div
          animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
        >
          <ApperIcon 
            name={isPlaying ? "Volume2" : "Volume1"} 
            size={20} 
            className={isPlaying ? "text-primary" : "text-gray-500"}
          />
        </motion.div>
      </Button>
      
      {showText && (
        <div className="flex-1">
          <p className="text-gray-700 font-medium">
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;