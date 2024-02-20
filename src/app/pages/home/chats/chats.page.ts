import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  public name: string = 'Alam';
  public img: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';
  public messageNotifications: number = 0;

  users: User[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.chatService.getChats().subscribe((data) => {
      this.users = data;
    });
  }
}
