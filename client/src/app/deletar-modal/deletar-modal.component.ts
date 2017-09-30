import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {NgModule} from '@angular/core';
import { Http } from '@angular//http';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-deletar-modal',
  templateUrl: './deletar-modal.component.html',
  styleUrls: ['./deletar-modal.component.css']
})
export class DeletarModalComponent implements OnInit {
    public modalRef: BsModalRef;
    formulario : FormGroup;
      constructor(
          private modalService: BsModalService,
          private formBuilder :FormBuilder,
          private http: Http
      ) {}

      public openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
      }

      ngOnInit(){
          this.formulario = this.formBuilder.group({
          id_animal: [null]
          })
      }

      onSubmit(){
          const body = this.formulario.value

          this.http
            .post('http://localhost:3000/app/animalDel', body)
            .subscribe()
      }

}
