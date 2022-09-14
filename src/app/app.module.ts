import  {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CidadeComponent} from './cidade/cidade.component'
import { CidadePessoaComponent } from './cidade/cidade-pessoa.component';
import { ShowCidadePessoaComponent } from './cidade/show-cidade-pessoa/show-cidade-pessoa.component';
import { AddEditCidadePessoaComponent } from './cidade/add-edit-cidade-pessoa/add-edit-cidade-pessoa.component';
import { AddEditCidadeComponent } from './cidade/add-edit-cidade/add-edit-cidade.component';
import { StefaniniApiService } from './stefanini-api.service';
import { ShowCidadeComponent } from './cidade/show-cidade/show-cidade.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    CidadePessoaComponent,
    CidadeComponent,
    ShowCidadePessoaComponent,
    ShowCidadeComponent,
    AddEditCidadePessoaComponent,
    AddEditCidadeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [StefaniniApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
