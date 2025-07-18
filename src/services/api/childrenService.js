import childrenData from "@/services/mockData/children.json";

class ChildrenService {
  constructor() {
    this.children = [...childrenData];
  }

  async getAll() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...this.children];
  }

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200));
    const child = this.children.find(child => child.Id === parseInt(id));
    return child ? { ...child } : null;
  }

  async create(childData) {
    await new Promise(resolve => setTimeout(resolve, 400));
    const newChild = {
      ...childData,
      Id: Math.max(...this.children.map(c => c.Id)) + 1,
      emotionVocabulary: [],
      completedLessons: [],
      badges: [],
      weeklyCheckIns: []
    };
    this.children.push(newChild);
    return { ...newChild };
  }

  async update(id, updateData) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = this.children.findIndex(child => child.Id === parseInt(id));
    if (index !== -1) {
      this.children[index] = { ...this.children[index], ...updateData };
      return { ...this.children[index] };
    }
    return null;
  }

  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = this.children.findIndex(child => child.Id === parseInt(id));
    if (index !== -1) {
      const deleted = this.children.splice(index, 1)[0];
      return { ...deleted };
    }
    return null;
  }

  async getCurrentChild() {
    await new Promise(resolve => setTimeout(resolve, 200));
    return this.children.length > 0 ? { ...this.children[0] } : null;
  }
}

export default new ChildrenService();