import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealWorldComponent } from './real-world.component';

describe('RealWorldComponent', () => {
  let component: RealWorldComponent;
  let fixture: ComponentFixture<RealWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
