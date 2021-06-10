import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  /* 
  Chave pública adquirida no site da marvel
   */
  PUBLIC_KEY = '56dfe9c13876bad301ae2d7843fc8885'

  /* 
  Hash gerado por um site com a combinação de 1 + chave privada + chave puclica 
  */
  HASH = '86b8e6d9c8afb9d2ceecfd7df01db315'

  /* 
  Endereço dos dados que escolhemos obter da marvel 
  */
  URL_API = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`

  constructor(private http: HttpClient) { }

  /* 
  Método que permite listar todos os personagens 
   */
  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }
}
