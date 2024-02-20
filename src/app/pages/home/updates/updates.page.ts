import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}

  toggleViewedList() {
    this.showViewed = !this.showViewed;
  }

  toggleMutedList() {
    this.showMuted = !this.showMuted;
  }
}
