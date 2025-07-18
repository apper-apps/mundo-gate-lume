import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const NavigationItem = ({ to, icon, label, isActive }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-gradient-to-r from-primary/10 to-primary/20 text-primary font-semibold"
            : "text-gray-600 hover:text-primary hover:bg-primary/5"
        }`
      }
    >
      {({ isActive }) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-3 w-full"
        >
          <ApperIcon 
            name={icon} 
            size={20} 
            className={isActive ? "text-primary" : "text-gray-500"}
          />
          <span className="font-medium">{label}</span>
        </motion.div>
      )}
    </NavLink>
  );
};

export default NavigationItem;