import { async, TestBed } from '@angular/core/testing';
import { LoginFormModule } from './login-form.module';

describe('LoginFormModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoginFormModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LoginFormModule).toBeDefined();
  });
});
