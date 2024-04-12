import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CoffeeCardComponent } from '../coffee-card/coffee-card.component';
import { DetailsComponent } from '../details/details.component';
import { Coffee } from '../../interface/coffee';
import { CoffeeService } from '../../service/coffee.service';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'myMain',
  standalone: true,
  imports: [FooterComponent, CoffeeCardComponent, CommonModule, DetailsComponent, AppComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  coffeeCardList: Coffee[] = [];

  filteredCoffeeCardList: Coffee[] = [];

  constructor(private coffeeService: CoffeeService) {
    this.coffeeService.getAllCoffeeCards().then((coffeeCardList: Coffee[]) => {
      this.coffeeCardList = coffeeCardList;
      this.filteredCoffeeCardList = coffeeCardList;
    });
  }

  filterResults(text: string) {
    if(!text) {
      this.coffeeCardList = this.coffeeCardList;      
    }
      return this.filteredCoffeeCardList = this.coffeeCardList.filter(coffeeCard => coffeeCard?.name.toLowerCase().includes(text.toLowerCase()));
  }
}
