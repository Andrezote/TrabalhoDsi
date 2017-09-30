import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarModalComponent } from './deletar-modal.component';

describe('DeletarModalComponent', () => {
  let component: DeletarModalComponent;
  let fixture: ComponentFixture<DeletarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
