import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCidadePessoaComponent } from './add-edit-cidade-pessoa.component';

describe('AddEditCidadeComponent', () => {
  let component: AddEditCidadePessoaComponent;
  let fixture: ComponentFixture<AddEditCidadePessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCidadePessoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCidadePessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
