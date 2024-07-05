// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { AgendadosComponent } from './agendados/agendados.component';
import { DespachadosComponent } from './despachados/despachados.component';
import { BuysComponent } from './buys/buys.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'agendados', component: AgendadosComponent },
  { path: 'despachados', component: DespachadosComponent },
  { path: 'buys', component: BuysComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
