import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class GerenciadorTarefasApiService {

  constructor(protected http:HttpClient) { }


}
