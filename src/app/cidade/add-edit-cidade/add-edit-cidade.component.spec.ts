import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCidadeComponent } from './add-edit-cidade.component';

describe('AddEditCidadeComponent', () => {
  let component: AddEditCidadeComponent;
  let fixture: ComponentFixture<AddEditCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
