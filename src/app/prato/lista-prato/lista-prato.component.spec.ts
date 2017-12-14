import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPratoComponent } from './lista-prato.component';

describe('ListaPratoComponent', () => {
  let component: ListaPratoComponent;
  let fixture: ComponentFixture<ListaPratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
