import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public messageList = [
    { sender: { avatarURL: 'https://ionicframework.com/docs/demos/api/list/avatar-finn.png', name: 'Amigo' }, text: 'Hola' },
    { sender: { avatarURL: 'https://ionicframework.com/docs/demos/api/list/avatar-finn.png', name: 'Amigo' }, text: 'Cómo estás ?' },
    { me: { avatarURL: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png', name: 'Yo' }, text: 'Bien gracias, y tu ?' },
    ];
  public chatMessage: string = '';
  constructor() {
    console.log(this.messageList);
  }

  sendMessage() {
    console.log(this.chatMessage);
    this.messageList.push({
      me: { avatarURL: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png', name: 'Yo' }, text: this.chatMessage
    });
    this.chatMessage = '';
    return true;
  }

}
