import { Product } from './product';

export class User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  addresses: Address[];
  shoppingCart: Map<Product, number>;
  wishlist: Wishlist[];
  saveforlaterlist: Product[];
  payments: Payment[];

  constructor(
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    addresses: Address[],
    shoppingCart: Map<Product, number>,
    wishlist: Wishlist[],
    saveforlaterlist: Product[],
    payments: Payment[]
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.addresses = addresses;
    this.shoppingCart = shoppingCart;
    this.wishlist = wishlist;
    this.saveforlaterlist = saveforlaterlist;
    this.payments = payments;
  }
}

export class Address {
  // Define properties and constructor for the Address entity
}

export class Wishlist {
  // Define properties and constructor for the Wishlist entity
}

export class Payment {
  // Define properties and constructor for the Payment entity
}
