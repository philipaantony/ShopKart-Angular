import { CanActivateChildFn } from '@angular/router';


export const authUserGuard: CanActivateChildFn = (childRoute, state) => {
  const userEmail = sessionStorage.getItem('userEmail');
  const userType = sessionStorage.getItem('userType');
  const userId = sessionStorage.getItem('userId');
  const isAuthenticated = !!userEmail && !!userType && !!userId;

  if (isAuthenticated && userType === 'user') {
    return true; // Allow access for authenticated users with userType "user"
  } else {
    return false; // Redirect or handle unauthorized access
  }
};
