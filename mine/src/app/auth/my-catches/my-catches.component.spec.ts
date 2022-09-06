import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCatchesComponent } from './my-catches.component';

describe('MyCatchesComponent', () => {
  let component: MyCatchesComponent;
  let fixture: ComponentFixture<MyCatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
