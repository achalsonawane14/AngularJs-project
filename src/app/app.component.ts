import { Component } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistrationComponent, MessageComponent], // Import child components here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
