export enum ProductCategory {
  FRUITS=("Fruits"),
  CLOTHING=("Clothing"),
  HOME_DECOR=("Home Decor"),
  TOYS=("Toys"),
  GADGETS=("Gadgets"),
  ACCESSORIES=("Accessories"),
  BEAUTY=("Beauty"),
  BOOKS=("Books"),
  FOOD_AND_DRINKS=("Food & Drinks"),
  SPORTS_AND_OUTDOORS=("Sports & Outdoors"),
}

export enum ProductStatus {
  AVAILABLE = "Available",
  OUT_OF_STOCK = "Out of Stock",
  DISCONTINUED = "Discontinued",
  PREORDER = "Preorder",
  BACKORDER = "Backorder",
  AVAILABLE_WITH_STOCK = "Available. Stock: %d",
}

export interface Review {
  // Define your review structure here
}

export class Product {
  id: number;
  title: string;
  description: string;
  imageURL: string;
  price: number;
  oldPrice: number;
  category: ProductCategory;
  reviews: Review[];
  status: ProductStatus;

  constructor(
    id: number,
    title: string,
    description: string,
    imageURL: string,
    price: number,
    oldPrice: number,
    category: ProductCategory,
    reviews: Review[],
    status: ProductStatus
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageURL = imageURL;
    this.price = price;
    this.oldPrice = oldPrice;
    this.category = category;
    this.reviews = reviews;
    this.status = status;
  }
}
