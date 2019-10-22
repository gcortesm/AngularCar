import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  private addFlat =false;

  private tipo:string;

  constructor(private routeActive:ActivatedRoute) { }

  ngOnInit() {
    this.tipo=this.routeActive.snapshot.params.tipo;
    console.log(this.routeActive.snapshot.params.tipo);
  }

  loadFormAdd(){
    this.addFlat=!this.addFlat;
  }



}
