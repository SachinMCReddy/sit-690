import { async, TestBed } from '@angular/core/testing';
import { NiliEatCommonModule } from './nili-eat-common.module';

describe('NiliEatCommonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NiliEatCommonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NiliEatCommonModule).toBeDefined();
  });
});
