import createMiddleware from 'next-intl/middleware';
import { languages } from './config/languages';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(zh|en|de|ja|ru|es|fr|it|pt|ko|ar)/:path*']
}; 