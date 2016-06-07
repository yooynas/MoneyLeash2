import {Component} from '@angular/core';
import {NavController, Alert, ViewController} from 'ionic-angular';
import {AuthService} from '../../../providers/auth-service';

@Component({
  templateUrl: 'build/pages/myinfo/changepassword/changepassword.html'
})

export class ChangePasswordPage { 
  user: {
    email?: string,
    oldpassword?: string,
    newpassword?: string
  } = {};
        
  constructor(
      private nav: NavController,
      private viewCtrl: ViewController,
      private auth: AuthService) {}  
 
  changePassword(user) {
    this.dismiss(user);
  }
  
  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }
    
}