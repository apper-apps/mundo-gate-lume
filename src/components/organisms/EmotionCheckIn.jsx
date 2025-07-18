import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import ApperIcon from "@/components/ApperIcon";
import EmotionCard from "@/components/molecules/EmotionCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import emotionCardsService from "@/services/api/emotionCardsService";

const EmotionCheckIn = ({ onComplete }) => {
  const [emotions, setEmotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [reason, setReason] = useState("");
  const [step, setStep] = useState(1);

  useEffect(() => {
    loadEmotions();
  }, []);

  const loadEmotions = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await emotionCardsService.getAll();
      setEmotions(data);
    } catch (err) {
      setError("Failed to load emotions. Please try again.");
      console.error("Error loading emotions:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEmotionSelect = (emotion) => {
    setSelectedEmotion(emotion);
    setStep(2);
  };

  const handleSubmit = () => {
    if (!selectedEmotion || !reason.trim()) {
      toast.error("Please select an emotion and tell us why!");
      return;
    }

    const checkIn = {
      emotion: selectedEmotion.emotionEs,
      reason: reason.trim(),
      date: new Date().toISOString(),
    };

    toast.success(`¡Excelente! You're feeling ${selectedEmotion.emotionEs} today!`);
    onComplete?.(checkIn);
  };

  const handleBack = () => {
    setStep(1);
    setSelectedEmotion(null);
    setReason("");
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadEmotions} />;

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl font-bold text-gray-800 mb-2">
          Daily Check-In
        </h2>
        <p className="text-gray-600 text-lg">
          ¿Cómo te sientes hoy? (How are you feeling today?)
        </p>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {emotions.map((emotion) => (
                <EmotionCard
                  key={emotion.Id}
                  emotion={emotion}
                  onSelect={handleEmotionSelect}
                />
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-md mx-auto space-y-6">
              <div className="text-center">
                <div className="text-6xl mb-3" style={{ color: selectedEmotion.color }}>
                  {selectedEmotion.characterImage}
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-800">
                  Me siento {selectedEmotion.emotionEs}
                </h3>
                <p className="text-gray-600">
                  I feel {selectedEmotion.emotionEn}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Por qué te sientes así? (Why do you feel this way?)
                  </label>
                  <Input
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Tell us what happened..."
                    className="w-full"
                  />
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="flex-1"
                  >
                    <ApperIcon name="ArrowLeft" size={16} className="mr-2" />
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    className="flex-1"
                    disabled={!reason.trim()}
                  >
                    Complete Check-In
                    <ApperIcon name="Heart" size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default EmotionCheckIn;