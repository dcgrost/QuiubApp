import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent  implements OnInit {
  @Input() public update: boolean = false;
  @Input() public mutedUpdate: boolean = false;
  @Input() public call: boolean = false;
  @Input() public callIn: boolean = false;

  
  @Input() public name: string = 'Alam';
  @Input() public img: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';
  @Input() public date: string = '14:08'

  constructor() { }

  ngOnInit() {}

}
