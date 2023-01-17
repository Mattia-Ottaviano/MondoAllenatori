import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRuoloComponent } from './info-ruolo.component';

describe('InfoRuoloComponent', () => {
  let component: InfoRuoloComponent;
  let fixture: ComponentFixture<InfoRuoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRuoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoRuoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
