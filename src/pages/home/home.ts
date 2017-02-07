import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public alerCtrl: AlertController) {
  }

  scan() {
    BarcodeScanner.scan().then((barcodeData) => {
      this.doAlert(barcodeData);
    }, (err) => {
      console.log(err);
    });
  }

  doAlert(bc: any) {
    let alert = this.alerCtrl.create({
      title: 'Escaneado!',
      message: bc.text,
      buttons: ['Ok']
    });
    alert.present()
  }

}
