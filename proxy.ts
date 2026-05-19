import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// กำหนดว่าหน้าไหนบ้างที่ต้อง Login ก่อนเข้าถึง
const isProtectedRoute = createRouteMatcher([
  '/admin(.*)',
  '/profile(.*)',
]);

// ใช้รูปแบบ export default function proxy เพื่อความชัวร์ที่สุดใน Next 16
export default function proxy(req: any, event: any) {
  return clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) {
      await auth.protect();
    }
  })(req, event);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
