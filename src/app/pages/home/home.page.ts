import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public communityNotifications: number = 0;
  public chatsNotifications: number = 0;
  public updatesNotifications: number = 0;
  public callsNotifications: number = 0;

  public seaching: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSearchBar() {
    this.seaching = !this.seaching;
  }

}
