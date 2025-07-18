import progressData from "@/services/mockData/progress.json";

class ProgressService {
  constructor() {
    this.progress = [...progressData];
  }

  async getAll() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...this.progress];
  }

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200));
    const progress = this.progress.find(progress => progress.Id === parseInt(id));
    return progress ? { ...progress } : null;
  }

  async create(progressData) {
    await new Promise(resolve => setTimeout(resolve, 400));
    const newProgress = {
      ...progressData,
      Id: Math.max(...this.progress.map(p => p.Id)) + 1
    };
    this.progress.push(newProgress);
    return { ...newProgress };
  }

  async update(id, updateData) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = this.progress.findIndex(progress => progress.Id === parseInt(id));
    if (index !== -1) {
      this.progress[index] = { ...this.progress[index], ...updateData };
      return { ...this.progress[index] };
    }
    return null;
  }

  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = this.progress.findIndex(progress => progress.Id === parseInt(id));
    if (index !== -1) {
      const deleted = this.progress.splice(index, 1)[0];
      return { ...deleted };
    }
    return null;
  }

  async getByChildId(childId) {
    await new Promise(resolve => setTimeout(resolve, 250));
    return this.progress.filter(progress => progress.childId === childId.toString());
  }
}

export default new ProgressService();