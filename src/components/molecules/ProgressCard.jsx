import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";

const ProgressCard = ({ title, value, subtitle, icon, trend, color = "primary" }) => {
  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    success: "text-success",
    warning: "text-warning"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${
            color === "primary" ? "from-primary/10 to-primary/20" :
            color === "secondary" ? "from-secondary/10 to-secondary/20" :
            color === "accent" ? "from-accent/10 to-accent/20" :
            color === "success" ? "from-success/10 to-success/20" :
            "from-warning/10 to-warning/20"
          }`}>
            <ApperIcon name={icon} size={24} className={colorClasses[color]} />
          </div>
          
          {trend && (
            <Badge variant={trend > 0 ? "success" : "warning"}>
              <ApperIcon 
                name={trend > 0 ? "TrendingUp" : "TrendingDown"} 
                size={12} 
                className="mr-1" 
              />
              {Math.abs(trend)}%
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-600 text-sm uppercase tracking-wide">
            {title}
          </h3>
          <div className="flex items-baseline space-x-2">
            <span className={`text-3xl font-bold ${colorClasses[color]}`}>
              {value}
            </span>
            {subtitle && (
              <span className="text-gray-500 text-sm">
                {subtitle}
              </span>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProgressCard;