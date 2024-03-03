import { CanActivateChildFn } from '@angular/router';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const userEmail = sessionStorage.getItem('userEmail');
  const userType = sessionStorage.getItem('userType');
  const userId = sessionStorage.getItem('userId');
  const isAuthenticated = !!userEmail && !!userType && !!userId;

  if (isAuthenticated) {
    return true;
  } else {

    return false;
  }
};
