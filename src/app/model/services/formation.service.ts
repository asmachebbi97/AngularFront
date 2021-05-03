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

  public GetFormationById(idformation : any):Observable<Formation>  {
    return this.http.get<Formation>(this.baseUrl + '/formationById/'+idformation)
  }

  public GetDomaineByFormation(id_formation : any) {
    return this.http.get(this.baseUrl + '/DomaineByFormation/'+id_formation)
  }
  


  public GetDomaineNameByFormation(id_formation : any) {
    return this.http.get(this.baseUrl + '/DomaineNameByFormation/'+id_formation)
  }



  public GetTypeFormation(id_formation : any) {
    return this.http.get(this.baseUrl + '/typeFormation/'+id_formation)
  }

  
  public Post( id_Domaine:any ,F: Formation) {
    return this.http.post(this.baseUrl + '/addFormation/'+id_Domaine, F ); 
  }
   
 public Put(id_Domaine:any ,F: Formation) :Observable<Formation> {
    return this.http.put<Formation>(this.baseUrl + '/FormationId/'+id_Domaine, F)
  }

 public Delete(id_Domaine:any ) {
    return this.http.delete(this.baseUrl + '/addFormation/'+id_Domaine)
  }

}
