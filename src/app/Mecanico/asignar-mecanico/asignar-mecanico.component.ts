import { Component, OnInit } from '@angular/core';
import { ServicepersonaService } from 'app/Service/servicepersona.service';
import { Persona } from 'app/Entity/Persona';
import { ServiceMantenimientoService } from 'app/Service/service-mantenimiento.service';
import { Mantenimiento } from 'app/Entity/Mantenimiento';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-asignar-mecanico',
  templateUrl: './asignar-mecanico.component.html',
  styleUrls: ['./asignar-mecanico.component.scss']
})
export class AsignarMecanicoComponent implements OnInit {

  personas:Persona[];
  mantenimientos:Mantenimiento[];
  selected={};

  constructor(private servicePersona:ServicepersonaService,private serviceMan:ServiceMantenimientoService) { }

  ngOnInit() {
   this.loadDataManteniminetos();
   this.loadDataMecanicos();
  }

  loadDataManteniminetos(){
    this.serviceMan.getMantenimientosPendientes()
    .subscribe(data=>{
      this.mantenimientos =data
      console.log(data)
    });
  }

  loadDataMecanicos(){
    this.servicePersona.getFirstTen()
        .subscribe(data=>{
          this.personas=data;
        },
        caches =>{
          alert('Algo salio Mal');
          console.log(caches);
        })
  }

  asignar(persona:Persona,mante:Mantenimiento){
      if(mante!=null){
        this.serviceMan
        .setMecanico(persona,mante.codMantenimiento)
        .subscribe(data=>{
          this.loadDataMecanicos();
          this.loadDataManteniminetos();
          console.log(data);
        },
        caches=>{
          console.log(caches);
        })
      }
      else{
        alert('No hay mantenimientos disponibles')
      }
  }

}
