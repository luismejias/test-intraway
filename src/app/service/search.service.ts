import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private headers = new HttpHeaders()
  .set('Authorization', 'Basic xpto')
  .set('Content-Type', 'application/json');

  
  constructor(
    private httpClient: HttpClient
  ) { }
  search(id:number) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Basic xpto')
      .set('Content-Type', 'application/json');
    const opciones = {
      headers: headers,
      responseType: 'json' as 'text',
      withCredentials: false
    }   
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/"+id,
      opciones
    );
  }
}
