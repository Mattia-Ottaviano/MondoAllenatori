import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllenatoreComponent } from './allenatore.component';

describe('AllenatoreComponent', () => {
  let component: AllenatoreComponent;
  let fixture: ComponentFixture<AllenatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllenatoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllenatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
