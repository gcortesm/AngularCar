import { Component, OnInit, Input } from '@angular/core';
import { ServicepersonaService } from '../../Service/servicepersona.service'
import { Persona } from 'app/Entity/Persona';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  @Input() tipo:String;

  personas:Persona[];

  constructor(private service:ServicepersonaService ) { }

  ngOnInit() {
    this.service.getPersonas(this.tipo)
    .subscribe(data=>{
      console.log(data);
      this.personas=data;
    });
  }

}
