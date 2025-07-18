import emotionCardsData from "@/services/mockData/emotionCards.json";

class EmotionCardsService {
  constructor() {
    this.emotionCards = [...emotionCardsData];
  }

  async getAll() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...this.emotionCards];
  }

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200));
    const card = this.emotionCards.find(card => card.Id === parseInt(id));
    return card ? { ...card } : null;
  }

  async create(cardData) {
    await new Promise(resolve => setTimeout(resolve, 400));
    const newCard = {
      ...cardData,
      Id: Math.max(...this.emotionCards.map(c => c.Id)) + 1
    };
    this.emotionCards.push(newCard);
    return { ...newCard };
  }

  async update(id, updateData) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = this.emotionCards.findIndex(card => card.Id === parseInt(id));
    if (index !== -1) {
      this.emotionCards[index] = { ...this.emotionCards[index], ...updateData };
      return { ...this.emotionCards[index] };
    }
    return null;
  }

  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = this.emotionCards.findIndex(card => card.Id === parseInt(id));
    if (index !== -1) {
      const deleted = this.emotionCards.splice(index, 1)[0];
      return { ...deleted };
    }
    return null;
  }

  async getByEmotion(emotion) {
    await new Promise(resolve => setTimeout(resolve, 250));
    return this.emotionCards.filter(card => 
      card.emotionEs.toLowerCase().includes(emotion.toLowerCase()) ||
      card.emotionEn.toLowerCase().includes(emotion.toLowerCase())
    );
  }
}

export default new EmotionCardsService();