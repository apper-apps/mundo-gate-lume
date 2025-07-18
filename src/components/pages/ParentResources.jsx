import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";

const ParentResources = () => {
  const resources = [
    {
      title: "Getting Started Guide",
      description: "Everything you need to know to help your child begin their Spanish emotional intelligence journey",
      icon: "BookOpen",
      color: "primary",
      type: "guide"
    },
    {
      title: "Daily Conversation Starters",
      description: "Simple phrases and questions to practice Spanish emotions at home",
      icon: "MessageCircle",
      color: "secondary",
      type: "conversation"
    },
    {
      title: "Progress Tracking Tips",
      description: "How to monitor and celebrate your child's learning milestones",
      icon: "BarChart3",
      color: "accent",
      type: "tracking"
    },
    {
      title: "Offline Activities",
      description: "Printable worksheets, crafts, and games for learning without screens",
      icon: "Printer",
      color: "success",
      type: "offline"
    }
  ];

  const tips = [
    {
      category: "Daily Practice",
      items: [
        "Use Spanish emotion words during daily routines",
        "Ask '¿Cómo te sientes?' (How do you feel?) regularly",
        "Celebrate small victories with Spanish praise words",
        "Practice pronunciation together during car rides"
      ]
    },
    {
      category: "Emotional Support",
      items: [
        "Validate feelings in both languages",
        "Create a 'feeling safe space' at home",
        "Model emotional expression yourself",
        "Use stories to discuss complex emotions"
      ]
    },
    {
      category: "Language Learning",
      items: [
        "Don't worry about perfect pronunciation",
        "Focus on communication over accuracy",
        "Use gestures and visuals to support understanding",
        "Make learning fun and pressure-free"
      ]
    }
  ];

  const faqs = [
    {
      question: "How much time should my child spend on Mundo daily?",
      answer: "We recommend 15-20 minutes daily for optimal learning. Short, consistent sessions are more effective than longer, infrequent ones."
    },
    {
      question: "What if my child doesn't want to do the daily check-in?",
      answer: "Make it fun! You can do it together, use silly voices, or let them choose the emotion first. The goal is building emotional awareness, not forcing participation."
    },
    {
      question: "I don't speak Spanish. How can I help my child?",
      answer: "That's perfectly fine! All content includes English translations. You can learn alongside your child, which often makes the experience more enjoyable for both of you."
    },
    {
      question: "How do I know if my child is making progress?",
      answer: "Look for signs like using Spanish emotion words spontaneously, showing interest in feelings discussions, or demonstrating empathy towards others."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-8 bg-gradient-to-r from-info/5 to-primary/5 border-info/20">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-gradient-to-br from-info/20 to-primary/20 rounded-full flex items-center justify-center">
              <ApperIcon name="Users" size={32} className="text-info" />
            </div>
            <div>
              <h1 className="font-display text-4xl font-bold text-gray-800 mb-2">
                Parent Resources
              </h1>
              <p className="text-xl text-gray-600">
                Everything you need to support your child's learning journey
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 h-full hover:shadow-elevated transition-all duration-200">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  resource.color === "primary" ? "bg-primary/20 text-primary" :
                  resource.color === "secondary" ? "bg-secondary/20 text-secondary" :
                  resource.color === "accent" ? "bg-accent/20 text-accent" :
                  "bg-success/20 text-success"
                }`}>
                  <ApperIcon name={resource.icon} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-gray-800 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                    <ApperIcon name="ArrowRight" size={14} className="ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Tips Section */}
      <Card className="p-8">
        <h2 className="font-display text-2xl font-bold text-gray-800 mb-6">
          Expert Tips for Parents
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="space-y-4">
                <h3 className="font-display text-lg font-bold text-gray-800 flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs font-bold text-primary">{index + 1}</span>
                  </div>
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                      <ApperIcon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="p-8">
        <h2 className="font-display text-2xl font-bold text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-200 pb-6 last:border-b-0"
            >
              <h3 className="font-semibold text-gray-800 mb-3 flex items-start">
                <ApperIcon name="HelpCircle" size={20} className="text-primary mt-0.5 mr-3 flex-shrink-0" />
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed ml-8">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Quick Reference */}
      <Card className="p-8 bg-gradient-to-r from-accent/5 to-success/5 border-accent/20">
        <h2 className="font-display text-2xl font-bold text-gray-800 mb-6">
          Quick Reference: Common Spanish Emotions
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { spanish: "feliz", english: "happy", emoji: "😊" },
            { spanish: "triste", english: "sad", emoji: "😢" },
            { spanish: "enojado", english: "angry", emoji: "😠" },
            { spanish: "asustado", english: "scared", emoji: "😨" },
            { spanish: "sorprendido", english: "surprised", emoji: "😲" },
            { spanish: "emocionado", english: "excited", emoji: "🤩" },
            { spanish: "valiente", english: "brave", emoji: "💪" },
            { spanish: "orgulloso", english: "proud", emoji: "😌" }
          ].map((emotion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 bg-white rounded-lg shadow-sm"
            >
              <div className="text-2xl mb-2">{emotion.emoji}</div>
              <p className="font-semibold text-gray-800">{emotion.spanish}</p>
              <p className="text-sm text-gray-600">{emotion.english}</p>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Contact Support */}
      <Card className="p-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <ApperIcon name="MessageCircle" size={32} className="text-primary" />
          </div>
          <h3 className="font-display text-xl font-bold text-gray-800 mb-2">
            Need More Help?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you and your child succeed on this learning journey.
          </p>
          <Button className="flex items-center space-x-2">
            <ApperIcon name="Mail" size={16} />
            <span>Contact Support</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ParentResources;