import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FilmeService } from '../controller/filme.service';
import { LoadingService } from '../controller/loading.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public filmesAPI = [];

  constructor(
    private platform: Platform,
    private loadingController: LoadingService,
    private filmeController: FilmeService
  ) {}

  searchFilme(evento: any) {
    console.log(evento.target.value);
    const search = evento.target.value;
    if (search && search.trim() !== '') {
      this.getFilme(search);
    }
  }

  ionViewWillEnter() {
    this.getFilme('homem');
  }

  public getFilme(value: any) {
    this.platform.ready().then(async () => {
      this.loadingController.presentLoading('Favor aguarde...');
      try {
        await this.filmeController.getFilms(value).then((result) => {
          this.loadingController.loadingDismiss();

          this.filmesAPI = result.results; // Exibe os resultados
          console.log(this.filmesAPI);

          // Outras propiedades
          console.log(result.results[0].original_title);
        });
      } catch (error) {
        this.loadingController.loadingDismiss();
        console.log(error);
      }
    });
  }
}
