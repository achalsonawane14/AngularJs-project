import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  standalone: true,
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message = '';

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.currentMessage.subscribe((msg) => (this.message = msg));
  }
}
