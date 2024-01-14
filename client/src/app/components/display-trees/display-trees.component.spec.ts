import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTreesComponent } from './display-trees.component';

describe('DisplayTreesComponent', () => {
  let component: DisplayTreesComponent;
  let fixture: ComponentFixture<DisplayTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayTreesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
