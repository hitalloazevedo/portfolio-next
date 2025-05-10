import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest){
    
    const privateRoutes = ["/dashboard"];

    const path = request.nextUrl.pathname;

    const matchedPrivateRoute = privateRoutes.some((route) => path.startsWith(route));

    if (matchedPrivateRoute){

        const token = request.cookies.get("token")?.value

        if (!token){
            return NextResponse.redirect(new URL('/auth/login', request.url))
        }
    }

    return NextResponse.next();
}