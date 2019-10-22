import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BlankTemplateComponent } from "./template/blank-template.component";
import { LeftNavTemplateComponent } from "./template/left-nav-template.component";
import { AppRoutingModule, routes } from "./app.routing";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeaderComponent } from "./shared/header/header.component";
import { NavigationComponent } from "./shared/navigation/navigation.component";
import { AddComponent } from './Cliente/add/add.component';
import { EditComponent } from './Cliente/edit/edit.component';
import { ListComponent } from './Mantenimiento/list/list.component';
import { IndexComponent } from './Cliente/index/index.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import {FormsModule,FormBuilder,ReactiveFormsModule} from '@angular/forms';
import {ServicepersonaService} from './Service/servicepersona.service';
import {HttpClientModule} from '@angular/common/http';
import { AsignarMecanicoComponent } from './Mecanico/asignar-mecanico/asignar-mecanico.component';
import { ServiceMantenimientoService } from './Service/service-mantenimiento.service';

@NgModule({
  declarations: [
    AppComponent,
    BlankTemplateComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LeftNavTemplateComponent,
    NavigationComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    IndexComponent,
    ListarComponent,
    AsignarMecanicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule
  ],
  providers: [ServicepersonaService,    FormBuilder,ServiceMantenimientoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
