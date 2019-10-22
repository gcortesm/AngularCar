import { Injectable } from '@angular/core';
import { Persona } from 'app/Entity/Persona';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicepersonaService {

  url  = "http://localhost:8080/persona";
  constructor(private Http:HttpClient) { }

  getPersonas(tipo:String){
    return this.Http.get<Persona[]>(this.url+"/all");
  }
  savePersona(persona:Persona){
    return this.Http.post<Persona>(this.url+"/add",persona);
  }
  getFirstTen(){
    return this.Http.get<Persona[]>(this.url+"/ten");
  }
}
