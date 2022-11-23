import { NextResponse } from 'next/server'

export function middleware(req) {
  fetch('https://fakestoreapi.com/products/1')
    .then((res) => res.json())
    .then((json) => console.log(json))

  return NextResponse.redirect(new URL('it-worked', req.nextUrl))
}

export const config = {
  matcher: '/dashboard',
}
