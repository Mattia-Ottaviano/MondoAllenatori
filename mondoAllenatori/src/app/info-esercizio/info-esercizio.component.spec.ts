import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEsercizioComponent } from './info-esercizio.component';

describe('InfoEsercizioComponent', () => {
  let component: InfoEsercizioComponent;
  let fixture: ComponentFixture<InfoEsercizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEsercizioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoEsercizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
