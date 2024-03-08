import { CanActivateChildFn } from '@angular/router';


export const authUserGuard: CanActivateChildFn = (childRoute, state) => {
  const userEmail = localStorage.getItem('userEmail');
  const userType = localStorage.getItem('userType');
  const userId = localStorage.getItem('userId');
  const isAuthenticated = !!userEmail && !!userType && !!userId;

  if (isAuthenticated && userType === 'user') {
    return true; // Allow access for authenticated users with userType "user"
  } else {
    return false; // Redirect or handle unauthorized access
  }
};
