import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  // <-- Añadir aquí
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { ProductosComponent } from './productos/productos.component';
import { AgendadosComponent } from './agendados/agendados.component';
import { DespachadosComponent } from './despachados/despachados.component';
import { BuysComponent } from './buys/buys.component';  // <-- Añadir aquí

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavigationComponent,
    ProductosComponent,
    AgendadosComponent,
    DespachadosComponent,
    BuysComponent  // <-- Añadir aquí
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,  // <-- Añadir aquí
    FormsModule,           // <-- Añadir aquí
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
