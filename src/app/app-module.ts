import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Productos } from './components/productos/productos';
import { Movimientoinventario } from './components/movimientoinventario/movimientoinventario';

@NgModule({
  declarations: [
    App,
    Productos,
    Movimientoinventario
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
