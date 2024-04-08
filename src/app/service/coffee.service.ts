import { Injectable } from '@angular/core';
import { Coffee } from '../interface/coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor() { }

  getAllCoffeeCard(): Coffee[]{
    return this.coffeeCardList;
  }

  readonly baseUrl = '../assets/coffee-photos/';

  coffeeCardList : Coffee[] = [
    {
      id: 0,
      name: 'Signature Blend',
      weight: 500,
      price: 12.99,
      photo: `${this.baseUrl}coffee 1.png`
    },
    {
      id: 1,
      name: 'Golden Sunrise',
      weight: 500,
      price: 10.99,
      photo: `${this.baseUrl}coffee 2.png`
    },
    {
      id: 2,
      name: 'Rainforest',
      weight: 500,
      price: 14.99,
      photo: `${this.baseUrl}coffee 3.png`
    },
    {
      id: 3,
      name: 'Harvest Moon',
      weight: 500,
      price: 9.99,
      photo: `${this.baseUrl}coffee 4.png`
    },
    {
      id: 4,
      name: 'Wildfire',
      weight: 500,
      price: 12.99,
      photo: `${this.baseUrl}coffee 5.png`
    },
    {
      id: 5,
      name: 'Walnut Wonder',
      weight: 500,
      price: 9.99,
      photo: `${this.baseUrl}coffee 6.png`
    },
    {
      id: 6,
      name: 'Breezy Beans',
      weight: 500,
      price: 11.99,
      photo: `${this.baseUrl}coffee 7.png`
    },
    {
      id: 7,
      name: 'Indo-Viet Roast',
      weight: 500,
      price: 13.99,
      photo: `${this.baseUrl}coffee 8.png`
    },
    {
      id: 8,
      name: 'Yirgacheffe',
      weight: 500,
      price: 12.99,
      photo: `${this.baseUrl}coffee 9.png`
    },
    {
      id: 9,
      name: 'Lazy Days',
      weight: 500,
      price: 9.99,
      photo: `${this.baseUrl}coffee 10.png`
    },
    {
      id: 10,
      name: 'Andean Almond',
      weight: 500,
      price: 10.99,
      photo: `${this.baseUrl}coffee 11.png`
    },
    {
      id: 11,
      name: 'Savanna Noir',
      weight: 500,
      price: 12.99,
      photo: `${this.baseUrl}coffee 12.png`
    },
    {
      id: 12,
      name: 'Coconut Kiss',
      weight: 500,
      price: 9.99,
      photo: `${this.baseUrl}coffee 13.png`
    },
    {
      id: 13,
      name: 'Arabian Nights',
      weight: 500,
      price: 13.99,
      photo: `${this.baseUrl}coffee 14.png`
    },
    {
      id: 14,
      name: 'Midnight Mocha',
      weight: 500,
      price: 14.99,
      photo: `${this.baseUrl}coffee 15.png`
    },
    {
      id: 15,
      name: 'Himalayan Heights',
      weight: 500,
      price: 12.99,
      photo: `${this.baseUrl}coffee 16.png`
    },
    {
      id: 16,
      name: 'Sumatra Blend',
      weight: 500,
      price: 8.99,
      photo: `${this.baseUrl}coffee 17.png`
    },
    {
      id: 17,
      name: 'Bali Bliss',
      weight: 500,
      price: 11.99,
      photo: `${this.baseUrl}coffee 18.png`
    },
    {
      id: 18,
      name: 'Central Perk',
      weight: 500,
      price: 9.99,
      photo: `${this.baseUrl}coffee 19.png`
    },
    {
      id: 19,
      name: 'Chilean Charm',
      weight: 500,
      price: 12.99,
      photo: `${this.baseUrl}coffee 20.png`
    }
  ];
}
