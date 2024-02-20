import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {
  public name: string = 'Alam';
  public img: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';
  public callIn: boolean = false;

  constructor() {}

  ngOnInit() {}
}
