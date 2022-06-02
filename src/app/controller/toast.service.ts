import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController
  ) { }

  // Função para apresentação de alertas na tela
  async presentToast(texto: string, cor: string, time: number = 1000){
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: time,
      position: 'top'
    });
    toast.present();
  }
}
