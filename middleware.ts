import { auth } from "./auth";
import {
  AUTH_ROUTES,
  PUBLIC_ROUTES,
  ADMIN_ROUTES,
  routes,
} from "./constants/routes";

export default auth(async (req) => {
  const { nextUrl } = req;
  
  const isLoggedIn = !!req.auth;
  const isAuthRoute =
    AUTH_ROUTES.includes(nextUrl.pathname) 
  const isPublicRoute =
    PUBLIC_ROUTES.includes(nextUrl.pathname) 

  const isAdminRoute =
    ADMIN_ROUTES.includes(nextUrl.pathname) 

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(routes.home, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL(routes.login, nextUrl));
  }

  if(isAdminRoute && req.auth?.user?.role !== "ADMIN")
  {return Response.redirect(new URL(routes.unauthorized, nextUrl));}

  return;
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
