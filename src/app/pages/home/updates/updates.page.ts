import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.page.html',
  styleUrls: ['./updates.page.scss'],
})
export class UpdatesPage implements OnInit {
  public name: string = 'Alam';
  public img: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';
  showViewed: boolean = false;
  showMuted: boolean = false;

  user: User = {userName: this.name, image: this.img, created: '15:08'};
  news: User[] = [];
  vieweds: User[] = [];
  muteds: User[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.fetchData();
  }

  toggleViewedList() {
    this.showViewed = !this.showViewed;
  }

  toggleMutedList() {
    this.showMuted = !this.showMuted;
  }

  fetchData() {
    this.chatService.getNewUpdates().subscribe((data) => {
      this.news = data;
    });
    this.chatService.getViewedUpdates().subscribe((data) => {
      this.vieweds = data;
    });
    this.chatService.getMutedUpdates().subscribe((data) => {
      this.muteds = data;
    });
    this.chatService.getUser().subscribe((data) => {
      this.user = data;
    })
  }
}
