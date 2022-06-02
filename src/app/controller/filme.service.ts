/* eslint-disable max-len */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IlistaFilmes } from '../model/IfilmeAPI.model';
import { ToastService } from './toast.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  public language = 'pt-BR';
  public region = 'BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=1a8f62517887a16674b3dbbf4ae19f31';


  constructor(
    private http: HttpClient,
    private toastController: ToastService
  ) { }

  async getFilms(search: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type':  'application/json'
      })
    };
    const result = await this.http.get<any>(`${this.apiURL}search/movie${this.key}&language=${this.language}&region=${this.region}&query=`+ search, httpOptions).toPromise();
    if (result) {
      return result;
    }

    return false;
  }
}
