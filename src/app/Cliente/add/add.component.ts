import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'app/Entity/Persona';
import { ServicepersonaService } from 'app/Service/servicepersona.service';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';




@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input() tipo:String;
  persona:Persona = new Persona();
  formG:FormGroup;

  constructor(private service:ServicepersonaService,private formBuilder:FormBuilder ) {
    this.formG = this.formBuilder.group({
        nprimarios:['',Validators.required],
        nsecundarios:[''],
        email:['',Validators.compose([Validators.email,Validators.required])],
        celular :['',Validators.required],
        direccion:['',Validators.required]
    });
  }

  ngOnInit() {
  }

  save(form:NgForm){
    if(form.valid){
      this.persona.estado='T';
      this.service
          .savePersona(this.persona)
          .subscribe(data=>{
            this.persona= new Persona();
            alert("Guardo con Exito!");
            console.log(data);
          },
          caches=>{
            alert("Algo salio mal!");
            console.log(caches)
          });
    }
  }

}
