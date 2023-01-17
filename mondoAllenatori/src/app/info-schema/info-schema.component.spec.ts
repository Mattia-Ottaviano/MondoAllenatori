import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSchemaComponent } from './info-schema.component';

describe('InfoSchemaComponent', () => {
  let component: InfoSchemaComponent;
  let fixture: ComponentFixture<InfoSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSchemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
