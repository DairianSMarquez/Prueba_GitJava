import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private API_SERVER = "http://localhost:8080/clientes/";
  constructor(
    private httpClient: HttpClient

  ) { }

  public getAllClientes(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);


  }
}
