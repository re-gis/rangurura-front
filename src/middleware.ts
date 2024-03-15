import { getCookie } from "cookies-next";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

export default function middleware(
  req: NextRequest,
  res: NextResponse,
  next: () => void,
) {
  const token = req.cookies.get("token")?.value;

  // const decoded = jwtDecode(token ?? "");
  // try {
  //   const currentDate = new Date().toDateString();
  //   const decodedDate = new Date(decoded.iat ?? "").toDateString();
  //   console.log(`Current date: ${currentDate}`);
  //   console.log(`Decoded date: ${decodedDate}`);
  // } catch (error) {
  //   console.error("Error parsing date:", error);
  // }

  if (req.nextUrl.pathname.startsWith("/locales/") || req.nextUrl.pathname === "/" || req.nextUrl.pathname === "/problem" || req.nextUrl.pathname === "/suggestion") {
    return NextResponse.next();
  }

  if (!token && req.nextUrl.pathname !== "/login" && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && req.nextUrl.pathname === "/login") {
    const decoded = jwtDecode(token ?? "") as { role: string };
    if (decoded.role === "ADMIN") {
      return NextResponse.redirect(new URL("/app/leader", req.url));
    } else if (decoded.role === "CITIZEN") {
      return NextResponse.redirect(new URL("/app/citizen", req.url));
    } else {
      toast.error("Invalid Token!");
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|/problem/*|/suggestion|/|/locales/*|register/*|verify|forgot|reset|_next/static|public|_next/image|favicon.ico|images|logo.svg|logo.png|rca.jpeg|favicon.svg|favicon.png).*)",
  ],
};
