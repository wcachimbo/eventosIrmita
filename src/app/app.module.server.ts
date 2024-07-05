import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; // Importa withFetch

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    HttpClientModule // Asegúrate de importar HttpClientModule
  ],
  providers: [
    provideHttpClient(withFetch()) // Habilitar fetch APIs para el servidor
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
