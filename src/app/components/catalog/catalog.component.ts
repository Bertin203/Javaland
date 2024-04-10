import { Component, inject } from '@angular/core';
import { Coffee } from '../../interface/coffee';
import { CoffeeService } from '../../service/coffee.service';
import { CoffeeCardComponent } from '../coffee-card/coffee-card.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CoffeeCardComponent, FooterComponent, CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  coffeeCard: Coffee | undefined;

  coffeeCardList: Coffee[] = [];

  constructor(private coffeeService: CoffeeService ) {
    this.coffeeService.getAllCoffeeCards().then((coffeeCardList: Coffee[]) => {
      this.coffeeCardList = this.coffeeCardList;
    });
  }
}
