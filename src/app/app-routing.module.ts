import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { AgendadosComponent } from './agendados/agendados.component';
import { DespachadosComponent } from './despachados/despachados.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'agendados', component: AgendadosComponent },
  { path: 'despachados', component: DespachadosComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: '**', redirectTo: '/productos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
