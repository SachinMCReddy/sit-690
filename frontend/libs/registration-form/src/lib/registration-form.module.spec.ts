import { async, TestBed } from '@angular/core/testing';
import { RegistrationFormModule } from './registration-form.module';

describe('RegistrationFormModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RegistrationFormModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RegistrationFormModule).toBeDefined();
  });
});
