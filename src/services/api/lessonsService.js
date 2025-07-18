import lessonsData from "@/services/mockData/lessons.json";

class LessonsService {
  constructor() {
    this.lessons = [...lessonsData];
  }

  async getAll() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...this.lessons];
  }

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200));
    const lesson = this.lessons.find(lesson => lesson.Id === parseInt(id));
    return lesson ? { ...lesson } : null;
  }

  async create(lessonData) {
    await new Promise(resolve => setTimeout(resolve, 400));
    const newLesson = {
      ...lessonData,
      Id: Math.max(...this.lessons.map(l => l.Id)) + 1
    };
    this.lessons.push(newLesson);
    return { ...newLesson };
  }

  async update(id, updateData) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = this.lessons.findIndex(lesson => lesson.Id === parseInt(id));
    if (index !== -1) {
      this.lessons[index] = { ...this.lessons[index], ...updateData };
      return { ...this.lessons[index] };
    }
    return null;
  }

  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = this.lessons.findIndex(lesson => lesson.Id === parseInt(id));
    if (index !== -1) {
      const deleted = this.lessons.splice(index, 1)[0];
      return { ...deleted };
    }
    return null;
  }

  async getByDifficulty(difficulty) {
    await new Promise(resolve => setTimeout(resolve, 250));
    return this.lessons.filter(lesson => lesson.difficulty === difficulty);
  }
}

export default new LessonsService();