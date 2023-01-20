import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendSchComponent } from './backend-sch.component';

describe('BackendSchComponent', () => {
  let component: BackendSchComponent;
  let fixture: ComponentFixture<BackendSchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendSchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendSchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
