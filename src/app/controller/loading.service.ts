import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = false;

  constructor(
    public loadingController: LoadingController
  ) { }

  // Inicia o Loading
  async presentLoading(msg: string) {
    this.isLoading = true;
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: msg,
      spinner: 'circles'
    }).then(a => {
      a.present().then(() => {
        if(!this.isLoading){
          a.dismiss().then(() =>{
            console.log('Loading Fechado.');
          });
        }
      });
    });
  }

  // Fecha o Loading
  async loadingDismiss(){
    this.isLoading = false;
    return await this.loadingController.dismiss()
    .then(() => {
      console.log('Loading Fechado');
    });
  }
}
