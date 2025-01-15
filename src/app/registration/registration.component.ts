import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../message.service'; // Import MessageService

@Component({
  standalone: true,
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    name: '',
    email: '',
    mobile: ''
  };

  constructor(private messageService: MessageService) {}

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;  // Regex for validating Gmail email
    return emailPattern.test(email);
  }

  validateMobile(mobile: string): boolean {
    return mobile.length === 10 && !isNaN(Number(mobile));  // Validate if mobile is 10 digits
  }

  onSubmit() {
    if (!this.validateMobile(this.user.mobile)) {
      this.messageService.changeMessage('Invalid mobile number! It must be 10 digits.');
      return;
    }

    if (!this.validateEmail(this.user.email)) {
      this.messageService.changeMessage('Invalid Gmail address. Please enter a correct email.');
      return;
    }

    this.messageService.changeMessage(
      `Registration successful! Name: ${this.user.name}, Email: ${this.user.email}, Mobile: ${this.user.mobile}`
    );
    console.log(this.user);
    alert(`User Registered: ${JSON.stringify(this.user)}`);
  }
}
