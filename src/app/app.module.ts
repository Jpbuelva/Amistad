import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContacListComponent } from './components/contactoGrupo/contac-list/contac-list.component';
import { DataService } from './service/data.service';
import { ContactoComponent } from './components/contactoGrupo/contacto/contacto.component';
import { DatePipe } from '@angular/common';
import { ContactoEditComponent } from './components/contactoGrupo/contacto-edit/contacto-edit.component';
import { ContactoBorrarComponent } from './components/contactoGrupo/contacto-borrar/contacto-borrar.component';
import { InicioComponent } from './components/Inicio/inicio/inicio.component';
import { ModalDetallesComponent } from './components/Inicio/modal-detalles/modal-detalles.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ContacListComponent,
    ContactoComponent, ContactoEditComponent, ContactoBorrarComponent, InicioComponent, ModalDetallesComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule

  ],
  providers: [DataService, DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [ContactoComponent, ContactoEditComponent,ContactoBorrarComponent]

})
export class AppModule { }
