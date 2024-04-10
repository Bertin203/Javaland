import { Injectable } from '@angular/core';
import { Coffee } from '../interface/coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor() { }
  url = 'http://localhost:3000/coffeeProducts'

  async getAllCoffeeCards(): Promise<Coffee[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getCoffeeCardById(id: number): Promise<Coffee | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  readonly baseUrl = '../assets/coffee-photos/';

  /*
    getAllCoffeeCard(): Coffee[]{
      return this.coffeeCardList;
    }

    coffeeCardList : Coffee[] = [
    
    ];
  */
}
