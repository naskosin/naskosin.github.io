import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerDetailsComponent } from './galler-details.component';

describe('GallerDetailsComponent', () => {
  let component: GallerDetailsComponent;
  let fixture: ComponentFixture<GallerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
