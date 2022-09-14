import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadePessoaComponent } from './cidade-pessoa.component';

describe('CidadeComponent', () => {
  let component: CidadePessoaComponent;
  let fixture: ComponentFixture<CidadePessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadePessoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CidadePessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
