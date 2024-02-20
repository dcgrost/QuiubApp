import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {
  users: User[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.chatService.getCalls().subscribe((data) => {
      this.users = data;
    });
  }
}
