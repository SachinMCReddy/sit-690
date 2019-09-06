import { async, TestBed } from '@angular/core/testing';
import { RestaurantRegistrationFormModule } from './restaurant-registration-form.module';

describe('RestaurantRegistrationFormModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RestaurantRegistrationFormModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RestaurantRegistrationFormModule).toBeDefined();
  });
});
