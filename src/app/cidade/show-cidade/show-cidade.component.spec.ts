import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCidadeComponent } from './show-cidade.component';

describe('ShowCidadeComponent', () => {
  let component: ShowCidadeComponent;
  let fixture: ComponentFixture<ShowCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
