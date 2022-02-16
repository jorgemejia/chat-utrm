import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public messageList = [
    { sender: { avatarURL: 'https://ionicframework.com/docs/demos/api/list/avatar-finn.png', name: 'Finn' }, text: 'Hola' },
    { sender: { avatarURL: 'https://ionicframework.com/docs/demos/api/list/avatar-finn.png', name: 'Finn' }, text: 'Cómo estás ?' },
    { me: { avatarURL: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png', name: 'Han' }, text: 'Bien gracias, y tu ?' },
    ];
  public chatMessage: string = '';
  constructor() {
    console.log(this.messageList);
  }

  sendMessage() {
    console.log(this.chatMessage);
    return true;
  }

}
