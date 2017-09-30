import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroModalComponent } from './cadastro-modal.component';

describe('CadastroModalComponent', () => {
  let component: CadastroModalComponent;
  let fixture: ComponentFixture<CadastroModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
