import { auth } from "./auth";
import {
  AUTH_ROUTES,
  PUBLIC_ROUTES,
  ADMIN_ROUTES,
  routes,
} from "./constants/routes";
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Middleware de internacionalización
const intlMiddleware = createMiddleware(routing);

// Middleware de autenticación combinado con internacionalización
export default auth(async (req) => {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;

  // Excluir rutas API del middleware
  if (pathname.startsWith('/api')) {
    return;
  }

  // Aplicar middleware de internacionalización a rutas no API
  const intlResponse = intlMiddleware(req);
  if (intlResponse) {
    return intlResponse;
  }

  // Lógica de autenticación
  const isLoggedIn = !!req.auth;
  const isAuthRoute = AUTH_ROUTES.includes(pathname);
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  const isAdminRoute = ADMIN_ROUTES.includes(pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(routes.home, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL(routes.login, nextUrl));
  }

  if (isAdminRoute && req.auth?.user?.role !== "ADMIN") {
    return Response.redirect(new URL(routes.unauthorized, nextUrl));
  }

  return;
});

export const config = {
  matcher: [
    // Excluir rutas API y archivos estáticos
    '/((?!api|_next|favicon.ico|logo.svg|fonts|images|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(es|en)/:path*'
  ],
};