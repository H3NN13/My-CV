import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechMeComponent } from './tech-me.component';

describe('TechMeComponent', () => {
  let component: TechMeComponent;
  let fixture: ComponentFixture<TechMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
