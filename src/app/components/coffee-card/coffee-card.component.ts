import { Component, Input } from '@angular/core';
import { Coffee } from '../../interface/coffee';

@Component({
  selector: 'coffee-card',
  standalone: true,
  imports: [],
  templateUrl: './coffee-card.component.html',
  styleUrl: './coffee-card.component.css'
})
export class CoffeeCardComponent {
  @Input() coffeeCard !: Coffee;
}
