import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPairsImpairsChildComponent } from './angular-pairs-impairs-child.component';

describe('AngularPairsImpairsChildComponent', () => {
  let component: AngularPairsImpairsChildComponent;
  let fixture: ComponentFixture<AngularPairsImpairsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPairsImpairsChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPairsImpairsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
