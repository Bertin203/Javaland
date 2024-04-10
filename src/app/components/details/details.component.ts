import { Component, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { CoffeeService } from '../../service/coffee.service';
import { Coffee } from '../../interface/coffee';
import { CoffeeCardComponent } from '../coffee-card/coffee-card.component';

@Component({
  selector: 'coffee-details',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  coffeeService = inject(CoffeeService);
  coffeeCard: Coffee | undefined;

  constructor() {
    const coffeeCardId = parseInt(this.route.snapshot.params['id'], 20);

    this.coffeeService.getCoffeeCardById(coffeeCardId).then(coffeeCard => {
      this.coffeeCard = this.coffeeCard;
    });
  }
}
