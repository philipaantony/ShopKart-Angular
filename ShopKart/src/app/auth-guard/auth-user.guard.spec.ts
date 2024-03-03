import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { authUserGuard } from './auth-user.guard';

describe('authUserGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
