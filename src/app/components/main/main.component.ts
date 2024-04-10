import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CoffeeCardComponent } from '../coffee-card/coffee-card.component';
import { DetailsComponent } from '../details/details.component';
import { Coffee } from '../../interface/coffee';
import { CoffeeService } from '../../service/coffee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'myMain',
  standalone: true,
  imports: [FooterComponent, CoffeeCardComponent, CommonModule, DetailsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
