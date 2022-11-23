import { NextResponse } from 'next/server'

export function middleware(req) {
  return NextResponse.redirect(new URL('it-worked', req.nextUrl))
}

// export const config = {
//   matcher: '/dashboard',
// }
