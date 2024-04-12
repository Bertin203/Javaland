import { Component } from '@angular/core';
import { CoffeeService } from '../../service/coffee.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'myFooter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private coffeeService: CoffeeService){}

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  submitMessage() {
    this.coffeeService.submitMessage(
      this.contactForm.value.name ?? '',
      this.contactForm.value.email ?? '',
      this.contactForm.value.message ?? ''
    );
  }
}
