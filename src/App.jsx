import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "@/components/organisms/Layout";
import Home from "@/components/pages/Home";
import Lessons from "@/components/pages/Lessons";
import Activities from "@/components/pages/Activities";
import Progress from "@/components/pages/Progress";
import ParentResources from "@/components/pages/ParentResources";
import LessonDetail from "@/components/pages/LessonDetail";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="lessons/:lessonId" element={<LessonDetail />} />
          <Route path="activities" element={<Activities />} />
          <Route path="progress" element={<Progress />} />
          <Route path="parent-resources" element={<ParentResources />} />
        </Route>
      </Routes>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;