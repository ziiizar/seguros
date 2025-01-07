interface routes {
  home: string;
  login: string;
  register: string;
  admin: string;
  adminNotifications: string
  adminLeads: string
  unauthorized: string;
  confirmEmail:string
  verifyEmail:string
  reset: string
  newPassword: string
  services: string
  aboutUs:  string
  

}

export const routes: routes = {
  home: "/",
  login: "/login",
  register: "/register",
  admin: "/admin/dashboard",
  adminNotifications:'/admin/notifications',
  adminLeads:'/admin/leads',
  unauthorized: "/unauthorized",
  confirmEmail: '/confirm-email',
  verifyEmail: '/email-verification',
  reset: '/reset',
  newPassword: '/auth/new-password',
  services: '/services',
  aboutUs: '/aboutUs'


};


const PUBLIC_ROUTES = [routes.home, routes.unauthorized, routes.services, routes.aboutUs,routes.admin,  routes.adminNotifications, routes.adminLeads, routes.login, routes.register];
// const PREFIX_PUBLIC_ROUTES = [];
// const PRIVATE_ROUTES = [];
const AUTH_ROUTES = [, routes.verifyEmail, routes.confirmEmail, routes.reset, routes.newPassword];

export { AUTH_ROUTES,  PUBLIC_ROUTES };
