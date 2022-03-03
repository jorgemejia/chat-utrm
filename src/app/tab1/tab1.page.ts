import {Component, OnInit} from '@angular/core';
import { SocketServiceService } from '../services/socket-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public onlineUsers = [];

  constructor(private socketService: SocketServiceService) {}

  ngOnInit() {
    console.log('init tab');
    this.socketService.getOnlineUsers().subscribe((users) => {
      console.log('users connected', users);
      if(users) {
        this.onlineUsers = users;
      }
    });
  }

  hola(){
    console.log('hola');
  }
}
