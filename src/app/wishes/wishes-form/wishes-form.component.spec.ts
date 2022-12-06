import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishesFormComponent } from './wishes-form.component';

describe('WishesFormComponent', () => {
  let component: WishesFormComponent;
  let fixture: ComponentFixture<WishesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
