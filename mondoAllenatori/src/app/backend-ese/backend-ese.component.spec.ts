import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendEseComponent } from './backend-ese.component';

describe('BackendEseComponent', () => {
  let component: BackendEseComponent;
  let fixture: ComponentFixture<BackendEseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendEseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendEseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
