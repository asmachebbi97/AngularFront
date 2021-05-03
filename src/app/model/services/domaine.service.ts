import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Domaine } from '../entities/Domaine';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DomaineService {
   private baseUrl:string; 
  
  constructor(private http: HttpClient) {

    this.baseUrl='http://localhost:8092/api';
  }
  
  
  public GetAlldDomaine():Observable<Domaine[]> {
    return this.http.get<[Domaine]>(this.baseUrl + '/Domaines')
  }
  
}
