import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nums = ['191', '199', '1669', '1554', '1192', '1195', '1584', '1599', '1197', '1323', '1677'];


  constructor(
    private callNumber: CallNumber,
    public alertCtrl: AlertController) {
    
  }


  onCall(number) {

    const confirm = this.alertCtrl.create({
      title: 'ยืนยัน ?',
      message: `ต้องการโทรฉุกเฉินหมายเลข ${number} หรือไม่`,
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('ยกเลิก');
          }
        },
        {
          text: 'โทร',
          handler: () => {
            this.callPhone(number)
          }
        }
      ]
    });
    confirm.present();
  }

  callPhone(number) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    // window.open("tel:" + number);
  }
 
}
