import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { NumberPhoneLists } from '../../NumberPhoneLists';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  numberLists;

  constructor(
    private alertCtrl :AlertController,
    private callNumber: CallNumber,
    private numberList: NumberPhoneLists,
    ) 
    {}
    
    ngOnInit(): void {
      this.numberLists = this.numberList.data    
  }

  onCall(number) {

    const confirm = this.alertCtrl.create({
      title: 'ยืนยัน ?',
      message: `ต้องการติดต่อตำรวจช่าง ${number.B} หมายเลข ${number.C} หรือไม่`,
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
            this.callPhone(number);
          }
        }
      ]
    });
    confirm.present();
  }

  callPhone(number) {
    this.callNumber.callNumber(number.C, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
