import { NextResponse } from 'next/server'

function isUpperCase(str) {
  return str === str.toUpperCase();
}

function isLowerCase(str) {
  return str === str.toLowerCase();
}

export const config = {
  matcher: '/:path*',
}

export function middleware(request) {
  let checkItem = request.nextUrl.search.split('?text');

  if( checkItem[1] ){
    return NextResponse.redirect(new URL(request.nextUrl.pathname, request.url), 301)
  }

  checkItem = request.nextUrl.search.split('?showItem');

  if( checkItem[1] ){
    return NextResponse.redirect(new URL(request.nextUrl.pathname, request.url), 301)
  }

  checkItem = request.nextUrl.search.split('?act_');

  if( checkItem[1] ){
    return NextResponse.redirect(new URL(request.nextUrl.pathname, request.url), 301)
  }

  checkItem = request.nextUrl.pathname.split('.');

  if( !isLowerCase(request.nextUrl.pathname) && !checkItem[1] ){
    return NextResponse.redirect(new URL(request.nextUrl.pathname.toLowerCase(), request.url), 301)
  }

  const res = NextResponse.next();

  res.headers.append('Access-Control-Allow-Credentials', "true")
  res.headers.append('Access-Control-Allow-Origin', '*') // replace this your actual origin
  res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  res.headers.append(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  return res;
}