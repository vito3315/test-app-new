import { NextResponse } from 'next/server'

function isUpperCase(str) {
  return str === str.toUpperCase();
}

function isLowerCase(str) {
  return str === str.toLowerCase();
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


  const protocol = request.nextUrl?.protocol;

  console.log( 'request.nextUrl', request.nextUrl )

  if (protocol !== 'https:' && request.nextUrl.hostname !== 'localhost') {
    const url = new URL(request.nextUrl);
    url.protocol = 'https:';
    //return NextResponse.redirect(url.toString(), 301);
  }


  return NextResponse.next()
}