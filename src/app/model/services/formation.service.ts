import { Injectable,Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Formation } from '../entities/Formation';
import { Observable } from 'rxjs';
import { HttpClientModule } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class FormationService {
   private baseUrl:string; 
  
  constructor(private http: HttpClient) {

    this.baseUrl='http://localhost:8092/api';
  }
  
  
  public GetAllFormation():Observable<Formation[]> {
    return this.http.get<[Formation]>(this.baseUrl + '/formation')
  }
  

  Post( id_Domaine:any ,F: Formation) {
    return this.http.post(this.baseUrl + '/addFormation/'+id_Domaine, F ); 
  }
   
 

}
