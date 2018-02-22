import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMensageComponent } from './dialog-mensage.component';

describe('DialogMensageComponent', () => {
  let component: DialogMensageComponent;
  let fixture: ComponentFixture<DialogMensageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMensageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMensageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
