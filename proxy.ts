import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// กำหนดว่าหน้าไหนบ้างที่ต้อง Login ก่อนเข้าถึง
const isProtectedRoute = createRouteMatcher([
  '/admin(.*)',
  '/profile(.*)',
]);

// ใน Next.js 16 proxy.ts ต้อง Export ฟังก์ชันชื่อ 'proxy' เท่านั้น
export const proxy = clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
