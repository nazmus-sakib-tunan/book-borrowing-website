import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {

  const session = await auth.api.getSession({
    headers: await headers(),
    
  })
console.log("Session data in proxy:", session);
  // const isLoggedIn = false;
  if (session) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/auth/signup', request.url))
} 

export const config = {
  matcher: ["/allbook","/books/:id*"],
}