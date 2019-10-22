import { Injectable } from '@angular/core';
import { Mantenimiento } from 'app/Entity/Mantenimiento';
import { HttpClient } from '@angular/common/http';
import { Persona } from 'app/Entity/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceMantenimientoService {

  url  = "http://localhost:8080/mante";
  constructor(private Http:HttpClient) { }

  getMantenimientosPendientes(){
    return this.Http.get<Mantenimiento[]>(this.url+"/sinasignar");
  }

  setMecanico(Persona,idMante:Number){
    return this.Http.post<Persona>(this.url +"/asignar/"+idMante,Persona);
  }


}
