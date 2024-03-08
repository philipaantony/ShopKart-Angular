import { CanActivateChildFn } from '@angular/router';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const userEmail = localStorage.getItem('userEmail');
  const userType = localStorage.getItem('userType');
  const userId = localStorage.getItem('userId');
  const isAuthenticated = !!userEmail && !!userType && !!userId;

  if (isAuthenticated) {
    return true;
  } else {

    return false;
  }
};
