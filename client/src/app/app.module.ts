import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroModalComponent } from './cadastro-modal/cadastro-modal.component';

import { ModalModule } from 'ngx-bootstrap';
import { ResultTableComponent } from './result-table/result-table.component';
import { DeletarModalComponent } from './deletar-modal/deletar-modal.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroModalComponent,
    ResultTableComponent,
    DeletarModalComponent,
    UpdateModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
