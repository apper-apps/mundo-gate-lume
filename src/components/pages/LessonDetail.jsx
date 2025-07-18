import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LessonViewer from "@/components/organisms/LessonViewer";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import lessonsService from "@/services/api/lessonsService";
import childrenService from "@/services/api/childrenService";

const LessonDetail = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadLesson();
  }, [lessonId]);

  const loadLesson = async () => {
    try {
      setLoading(true);
      setError("");
      
      const lessonData = await lessonsService.getById(lessonId);
      if (lessonData) {
        setLesson(lessonData);
      } else {
        setError("Lesson not found");
      }
    } catch (err) {
      setError("Failed to load lesson. Please try again.");
      console.error("Error loading lesson:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLessonComplete = async () => {
    try {
      const child = await childrenService.getCurrentChild();
      if (child) {
        const updatedLessons = [...(child.completedLessons || []), `lesson-${lesson.Id}`];
        const updatedVocabulary = [...(child.emotionVocabulary || [])];
        
        // Add new vocabulary words
        lesson.vocabulary.forEach(word => {
          if (!updatedVocabulary.includes(word.spanish)) {
            updatedVocabulary.push(word.spanish);
          }
        });

        await childrenService.update(child.Id, {
          completedLessons: updatedLessons,
          emotionVocabulary: updatedVocabulary
        });

        toast.success("Lesson completed! Great job!");
        navigate("/lessons");
      }
    } catch (err) {
      toast.error("Failed to save progress. Please try again.");
      console.error("Error saving progress:", err);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadLesson} />;

  return (
    <LessonViewer 
      lesson={lesson} 
      onComplete={handleLessonComplete}
    />
  );
};

export default LessonDetail;