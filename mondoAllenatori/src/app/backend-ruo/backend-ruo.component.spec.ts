import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendRuoComponent } from './backend-ruo.component';

describe('BackendRuoComponent', () => {
  let component: BackendRuoComponent;
  let fixture: ComponentFixture<BackendRuoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendRuoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendRuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
