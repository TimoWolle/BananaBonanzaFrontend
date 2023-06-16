export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  // Andere Attribute wie Bewertungen, Lagerstatus usw.

  constructor(id: number, name: string, description = '', price = 0, imageUrl = 'imageUrl', category = '') {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.category = category;
    // Initialisierung der anderen Attribute
  }
}
