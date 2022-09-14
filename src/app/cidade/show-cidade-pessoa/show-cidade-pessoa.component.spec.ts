import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCidadePessoaComponent } from './show-cidade-pessoa.component';

describe('ShowCidadeComponent', () => {
  let component: ShowCidadePessoaComponent;
  let fixture: ComponentFixture<ShowCidadePessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCidadePessoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCidadePessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
