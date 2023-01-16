import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAllenatoreComponent } from './info-allenatore.component';

describe('InfoAllenatoreComponent', () => {
  let component: InfoAllenatoreComponent;
  let fixture: ComponentFixture<InfoAllenatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAllenatoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAllenatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
