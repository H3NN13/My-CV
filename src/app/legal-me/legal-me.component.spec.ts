import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalMeComponent } from './legal-me.component';

describe('LegalMeComponent', () => {
  let component: LegalMeComponent;
  let fixture: ComponentFixture<LegalMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
