import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlankTemplateComponent} from './template/blank-template.component';
import {LeftNavTemplateComponent} from './template/left-nav-template.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { IndexComponent } from './Cliente/index/index.component';
import { AsignarMecanicoComponent } from './Mecanico/asignar-mecanico/asignar-mecanico.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: '',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Car Center'
  },
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      data: {
        title: 'Dashboard Page'
      },
    },
    {
      path: 'clientes/:tipo',
      component : IndexComponent,
     // loadChildren: () => import('./Cliente/index/index.component').then(m => m.IndexComponent),
      data: {
        tipo: 'CLIENTE'
      },
    },
    {
      path: 'mecanicos/:tipo',
      component : IndexComponent,
      data: {
        tipo: 'MECANICO'
      },
    },
    {
      path: 'asignar',
      component: AsignarMecanicoComponent,
      data: {
        title: 'Asignar'
      },
    }
  ]
}, {
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
