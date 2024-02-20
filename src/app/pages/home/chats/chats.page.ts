import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  public name: string = 'Alam';
  public img: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';
  public messageNotifications: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
