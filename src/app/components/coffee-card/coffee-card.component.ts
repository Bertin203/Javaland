import { Component, Input } from '@angular/core';
import { Coffee } from '../../interface/coffee';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'coffee-card',
  standalone: true,
  imports: [FooterComponent, RouterModule, RouterOutlet],
  templateUrl: './coffee-card.component.html',
  styleUrl: './coffee-card.component.css'
})

export class CoffeeCardComponent {
  readonly baseUrl = '../assets/coffee-photos/';
  @Input() coffeeCard !: Coffee;
}
