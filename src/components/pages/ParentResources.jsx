import { motion } from "framer-motion";
import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Activities from "@/components/pages/Activities";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";

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
      title: "Family Activities",
      description: "Bilingual printable cards with emotional intelligence exercises and activities for home",
      icon: "Heart",
      color: "success",
      type: "family-activities"
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

  const familyActivities = [
    {
      id: 1,
      title: "Emotion Identification Game",
      titleSpanish: "Juego de Identificación de Emociones",
      ageGroup: "3-5 years",
      ageGroupSpanish: "3-5 años",
      category: "Recognition",
      categorySpanish: "Reconocimiento",
      description: "Help children identify and name emotions through interactive card games",
      descriptionSpanish: "Ayuda a los niños a identificar y nombrar emociones a través de juegos interactivos con tarjetas",
      materials: ["Emotion cards", "Mirror", "Colored pencils"],
      materialsSpanish: ["Tarjetas de emociones", "Espejo", "Lápices de colores"],
      instructions: [
        "Show emotion cards one by one",
        "Ask child to copy the facial expression",
        "Practice saying the emotion in both languages",
        "Draw or color the emotion"
      ],
      instructionsSpanish: [
        "Muestra las tarjetas de emociones una por una",
        "Pide al niño que copie la expresión facial",
        "Practica decir la emoción en ambos idiomas",
        "Dibuja o colorea la emoción"
      ],
      benefits: ["Emotional awareness", "Language development", "Self-expression"],
      benefitsSpanish: ["Conciencia emocional", "Desarrollo del lenguaje", "Autoexpresión"],
      icon: "Smile",
      color: "primary"
    },
    {
      id: 2,
      title: "Feelings Story Creation",
      titleSpanish: "Creación de Historias de Sentimientos",
      ageGroup: "6-8 years",
      ageGroupSpanish: "6-8 años",
      category: "Expression",
      categorySpanish: "Expresión",
      description: "Create bilingual stories about emotions and feelings together",
      descriptionSpanish: "Crea historias bilingües sobre emociones y sentimientos juntos",
      materials: ["Paper", "Crayons", "Stickers", "Story prompts"],
      materialsSpanish: ["Papel", "Crayones", "Calcomanías", "Indicaciones de historia"],
      instructions: [
        "Choose an emotion to focus on",
        "Create a character experiencing that emotion",
        "Write/draw the story in both languages",
        "Share and discuss the story together"
      ],
      instructionsSpanish: [
        "Elige una emoción en la que enfocarse",
        "Crea un personaje que experimente esa emoción",
        "Escribe/dibuja la historia en ambos idiomas",
        "Comparte y discute la historia juntos"
      ],
      benefits: ["Creative expression", "Bilingual literacy", "Emotional processing"],
      benefitsSpanish: ["Expresión creativa", "Alfabetización bilingüe", "Procesamiento emocional"],
      icon: "BookOpen",
      color: "secondary"
    },
    {
      id: 3,
      title: "Mindfulness Breathing Exercise",
      titleSpanish: "Ejercicio de Respiración Consciente",
      ageGroup: "9-12 years",
      ageGroupSpanish: "9-12 años",
      category: "Regulation",
      categorySpanish: "Regulación",
      description: "Practice mindful breathing techniques with bilingual guided instructions",
      descriptionSpanish: "Practica técnicas de respiración consciente con instrucciones bilingües guiadas",
      materials: ["Quiet space", "Comfortable seating", "Timer", "Soft music (optional)"],
      materialsSpanish: ["Espacio tranquilo", "Asientos cómodos", "Cronómetro", "Música suave (opcional)"],
      instructions: [
        "Find a comfortable position",
        "Close eyes or soften gaze",
        "Breathe in for 4 counts, hold for 4, exhale for 6",
        "Practice phrases in both languages during breathing"
      ],
      instructionsSpanish: [
        "Encuentra una posición cómoda",
        "Cierra los ojos o suaviza la mirada",
        "Inhala por 4 tiempos, mantén por 4, exhala por 6",
        "Practica frases en ambos idiomas durante la respiración"
      ],
      benefits: ["Stress reduction", "Emotional regulation", "Mindfulness practice"],
      benefitsSpanish: ["Reducción del estrés", "Regulación emocional", "Práctica de atención plena"],
      icon: "Wind",
      color: "accent"
    },
    {
      id: 4,
      title: "Emotion Wheel Activity",
      titleSpanish: "Actividad de la Rueda de Emociones",
      ageGroup: "6-12 years",
      ageGroupSpanish: "6-12 años",
      category: "Vocabulary",
      categorySpanish: "Vocabulario",
      description: "Create and use an emotion wheel to expand emotional vocabulary",
      descriptionSpanish: "Crea y usa una rueda de emociones para expandir el vocabulario emocional",
      materials: ["Cardboard", "Brass fastener", "Colored markers", "Emotion wheel template"],
      materialsSpanish: ["Cartón", "Remache de latón", "Marcadores de colores", "Plantilla de rueda de emociones"],
      instructions: [
        "Cut out emotion wheel template",
        "Color and decorate with child",
        "Attach pointer with brass fastener",
        "Spin and discuss emotions in both languages"
      ],
      instructionsSpanish: [
        "Recorta la plantilla de la rueda de emociones",
        "Colorea y decora con el niño",
        "Adjunta el puntero con el remache de latón",
        "Gira y discute las emociones en ambos idiomas"
      ],
      benefits: ["Vocabulary expansion", "Interactive learning", "Emotional awareness"],
      benefitsSpanish: ["Expansión del vocabulario", "Aprendizaje interactivo", "Conciencia emocional"],
      icon: "RefreshCw",
      color: "info"
    },
    {
      id: 5,
      title: "Gratitude Journal",
      titleSpanish: "Diario de Gratitud",
      ageGroup: "8-12 years",
      ageGroupSpanish: "8-12 años",
      category: "Reflection",
      categorySpanish: "Reflexión",
      description: "Maintain a bilingual gratitude journal to foster positive emotions",
      descriptionSpanish: "Mantén un diario de gratitud bilingüe para fomentar emociones positivas",
      materials: ["Notebook", "Colored pens", "Stickers", "Gratitude prompts"],
      materialsSpanish: ["Cuaderno", "Bolígrafos de colores", "Calcomanías", "Indicaciones de gratitud"],
      instructions: [
        "Write 3 things you're grateful for daily",
        "Alternate between Spanish and English entries",
        "Include drawings or decorations",
        "Share entries with family weekly"
      ],
      instructionsSpanish: [
        "Escribe 3 cosas por las que estés agradecido diariamente",
        "Alterna entre entradas en español e inglés",
        "Incluye dibujos o decoraciones",
        "Comparte las entradas con la familia semanalmente"
      ],
      benefits: ["Positive thinking", "Writing practice", "Family bonding"],
      benefitsSpanish: ["Pensamiento positivo", "Práctica de escritura", "Vinculación familiar"],
      icon: "Heart",
      color: "success"
    },
    {
      id: 6,
      title: "Emotion Charades",
      titleSpanish: "Charadas de Emociones",
      ageGroup: "5-12 years",
      ageGroupSpanish: "5-12 años",
      category: "Expression",
      categorySpanish: "Expresión",
      description: "Act out emotions while practicing Spanish and English vocabulary",
      descriptionSpanish: "Representa emociones mientras practicas vocabulario en español e inglés",
      materials: ["Emotion cards", "Timer", "Score sheet", "Props (optional)"],
      materialsSpanish: ["Tarjetas de emociones", "Cronómetro", "Hoja de puntuación", "Accesorios (opcional)"],
      instructions: [
        "Pick an emotion card without showing others",
        "Act out the emotion without speaking",
        "Others guess in both languages",
        "Discuss when you might feel this emotion"
      ],
      instructionsSpanish: [
        "Elige una tarjeta de emoción sin mostrar a otros",
        "Representa la emoción sin hablar",
        "Otros adivinan en ambos idiomas",
        "Discute cuándo podrías sentir esta emoción"
      ],
      benefits: ["Physical expression", "Social interaction", "Emotional recognition"],
      benefitsSpanish: ["Expresión física", "Interacción social", "Reconocimiento emocional"],
      icon: "Drama",
      color: "warning"
    }
  ];

  const handlePrintActivity = (activity) => {
    const printContent = `
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 20px; max-width: 800px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #7C3AED; padding-bottom: 20px;">
          <h1 style="color: #7C3AED; font-size: 28px; margin-bottom: 10px;">${activity.title}</h1>
          <h2 style="color: #F59E0B; font-size: 24px; margin-bottom: 15px;">${activity.titleSpanish}</h2>
          <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <span style="background: #7C3AED; color: white; padding: 6px 12px; border-radius: 12px; font-size: 14px;">${activity.ageGroup}</span>
            <span style="background: #F59E0B; color: white; padding: 6px 12px; border-radius: 12px; font-size: 14px;">${activity.ageGroupSpanish}</span>
            <span style="background: #10B981; color: white; padding: 6px 12px; border-radius: 12px; font-size: 14px;">${activity.category}</span>
          </div>
        </div>
        
        <div style="margin-bottom: 25px;">
          <h3 style="color: #374151; font-size: 18px; margin-bottom: 10px;">Description / Descripción:</h3>
          <p style="color: #6B7280; line-height: 1.6; margin-bottom: 8px;">🇺🇸 ${activity.description}</p>
          <p style="color: #6B7280; line-height: 1.6;">🇪🇸 ${activity.descriptionSpanish}</p>
        </div>
        
        <div style="margin-bottom: 25px;">
          <h3 style="color: #374151; font-size: 18px; margin-bottom: 10px;">Materials / Materiales:</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div>
              <h4 style="color: #7C3AED; font-size: 16px; margin-bottom: 8px;">🇺🇸 English:</h4>
              <ul style="color: #6B7280; line-height: 1.6; padding-left: 20px;">
                ${activity.materials.map(item => `<li style="margin-bottom: 4px;">${item}</li>`).join('')}
              </ul>
            </div>
            <div>
              <h4 style="color: #F59E0B; font-size: 16px; margin-bottom: 8px;">🇪🇸 Español:</h4>
              <ul style="color: #6B7280; line-height: 1.6; padding-left: 20px;">
                ${activity.materialsSpanish.map(item => `<li style="margin-bottom: 4px;">${item}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
        
        <div style="margin-bottom: 25px;">
          <h3 style="color: #374151; font-size: 18px; margin-bottom: 10px;">Instructions / Instrucciones:</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div>
              <h4 style="color: #7C3AED; font-size: 16px; margin-bottom: 8px;">🇺🇸 English:</h4>
              <ol style="color: #6B7280; line-height: 1.6; padding-left: 20px;">
                ${activity.instructions.map(item => `<li style="margin-bottom: 6px;">${item}</li>`).join('')}
              </ol>
            </div>
            <div>
              <h4 style="color: #F59E0B; font-size: 16px; margin-bottom: 8px;">🇪🇸 Español:</h4>
              <ol style="color: #6B7280; line-height: 1.6; padding-left: 20px;">
                ${activity.instructionsSpanish.map(item => `<li style="margin-bottom: 6px;">${item}</li>`).join('')}
              </ol>
            </div>
          </div>
        </div>
        
        <div style="margin-bottom: 25px;">
          <h3 style="color: #374151; font-size: 18px; margin-bottom: 10px;">Benefits / Beneficios:</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div>
              <h4 style="color: #7C3AED; font-size: 16px; margin-bottom: 8px;">🇺🇸 English:</h4>
              <ul style="color: #6B7280; line-height: 1.6; padding-left: 20px;">
                ${activity.benefits.map(item => `<li style="margin-bottom: 4px;">${item}</li>`).join('')}
              </ul>
            </div>
            <div>
              <h4 style="color: #F59E0B; font-size: 16px; margin-bottom: 8px;">🇪🇸 Español:</h4>
              <ul style="color: #6B7280; line-height: 1.6; padding-left: 20px;">
                ${activity.benefitsSpanish.map(item => `<li style="margin-bottom: 4px;">${item}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #E5E7EB;">
          <p style="color: #9CA3AF; font-size: 14px;">Mundo - Emotional Intelligence for Children</p>
          <p style="color: #9CA3AF; font-size: 14px;">mundo.com | Printable Family Activity</p>
        </div>
      </div>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>${activity.title} - Mundo Activity</title>
          <style>
            @media print {
              body { margin: 0; padding: 10px; }
              .no-print { display: none; }
            }
            @page {
              size: A4;
              margin: 0.5in;
            }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

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

      {/* Family Activities Section */}
      <Card className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-bold text-gray-800">
            Family Activities / Actividades Familiares
          </h2>
          <div className="flex items-center space-x-2">
            <ApperIcon name="Heart" size={20} className="text-primary" />
            <span className="text-sm text-gray-600">Printable Cards</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Bilingual printable cards with emotional intelligence exercises designed for different age groups. 
          Each activity includes materials, instructions, and benefits in both English and Spanish.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {familyActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="p-6 h-full hover:shadow-elevated transition-all duration-200 border-l-4 border-l-primary/20 group-hover:border-l-primary/60">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activity.color === "primary" ? "bg-primary/20 text-primary" :
                    activity.color === "secondary" ? "bg-secondary/20 text-secondary" :
                    activity.color === "accent" ? "bg-accent/20 text-accent" :
                    activity.color === "success" ? "bg-success/20 text-success" :
                    activity.color === "warning" ? "bg-warning/20 text-warning" :
                    "bg-info/20 text-info"
                  }`}>
                    <ApperIcon name={activity.icon} size={24} />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Badge variant="outline" className="text-xs px-2 py-1">
                      {activity.ageGroup}
                    </Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-secondary/10 text-secondary border-secondary/20">
                      {activity.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-display text-lg font-bold text-gray-800 mb-1">
                    {activity.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-secondary mb-3">
                    {activity.titleSpanish}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    🇺🇸 {activity.description}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    🇪🇸 {activity.descriptionSpanish}
                  </p>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-700 text-sm mb-2">Materials / Materiales:</h5>
                  <div className="flex flex-wrap gap-1">
                    {activity.materials.slice(0, 3).map((material, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {material}
                      </span>
                    ))}
                    {activity.materials.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        +{activity.materials.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-700 text-sm mb-2">Benefits / Beneficios:</h5>
                  <div className="flex flex-wrap gap-1">
                    {activity.benefits.map((benefit, idx) => (
                      <span key={idx} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded border border-accent/20">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2 mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handlePrintActivity(activity)}
                  >
                    <ApperIcon name="Printer" size={14} className="mr-2" />
                    Print
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handlePrintActivity(activity)}
                  >
                    <ApperIcon name="Download" size={14} className="mr-2" />
                    Download
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
          <div className="flex items-center mb-4">
            <ApperIcon name="Lightbulb" size={20} className="text-primary mr-3" />
            <h3 className="font-display text-lg font-bold text-gray-800">
              Tips for Using Family Activities
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">🇺🇸 English Tips:</h4>
              <ul className="space-y-1">
                <li>• Adapt activities to your child's interests</li>
                <li>• Create a regular family activity time</li>
                <li>• Celebrate effort over perfection</li>
                <li>• Use activities as bonding opportunities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">🇪🇸 Consejos en Español:</h4>
              <ul className="space-y-1">
                <li>• Adapta las actividades a los intereses de tu hijo</li>
                <li>• Crea un tiempo regular para actividades familiares</li>
                <li>• Celebra el esfuerzo sobre la perfección</li>
                <li>• Usa las actividades como oportunidades de vinculación</li>
              </ul>
            </div>
          </div>
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