import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string;
  public password: string;

  constructor(private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  redirect(url) {
    this.router.navigateByUrl(url);
  }

  async signIn(){
    console.log(this.email, this.password);

    if(this.email === 'admin' && this.password === 'password123'){
      this.redirect('/home/tab1');
    } else {
      await this.presentAlert('Error', '', 'User not found');
    }
  }

  async presentAlert(h: string, subtitle: string, msn: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: h,
      subHeader: subtitle,
      message: msn,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
