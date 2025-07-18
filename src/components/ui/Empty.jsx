import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  message = "No data found", 
  subtitle = "Start your journey by exploring our lessons",
  actionLabel = "Get Started",
  onAction,
  icon = "BookOpen"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-center min-h-[400px]"
    >
      <Card className="p-8 max-w-md mx-auto text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <ApperIcon name={icon} size={40} className="text-primary" />
        </div>
        
        <h3 className="font-display text-2xl font-bold text-gray-800 mb-2">
          {message}
        </h3>
        
        <p className="text-gray-600 mb-8">
          {subtitle}
        </p>
        
        {onAction && (
          <Button onClick={onAction} className="flex items-center space-x-2">
            <ApperIcon name="Play" size={16} />
            <span>{actionLabel}</span>
          </Button>
        )}
      </Card>
    </motion.div>
  );
};

export default Empty;