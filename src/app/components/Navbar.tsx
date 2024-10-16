"use client";

import LogoToko from "@/assets/logo-ladazal-1.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const navbarPath = usePathname();
  const router = useRouter();
  const { data: session, status }: { data: any; status: string } = useSession();
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <Link aria-current="page" className="flex items-center" href="/">
                <img className="h-7 w-auto" src={LogoToko.src} alt="Logo" />
              </Link>
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <Link
                  href="/"
                  className={`inline-block rounded-lg px-2 py-1 text-sm font-medium ${
                    navbarPath === "/" ? "text-orange-500" : "text-gray-900"
                  } text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                >
                  <li>Home</li>
                </Link>
                <Link
                  href="/shop"
                  className={`inline-block rounded-lg px-2 py-1 text-sm font-medium ${
                    navbarPath === "/shop" ? "text-orange-500" : "text-gray-900"
                  } text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                >
                  <li>Shop</li>
                </Link>
                <Link
                  href="/about"
                  className={`inline-block rounded-lg px-2 py-1 text-sm font-medium ${
                    navbarPath === "/about"
                      ? "text-orange-500"
                      : "text-gray-900"
                  } text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                >
                  <li>About</li>
                </Link>
                <Link
                  href="/contact"
                  className={`inline-block rounded-lg px-2 py-1 text-sm font-medium ${
                    navbarPath === "/contact"
                      ? "text-orange-500"
                      : "text-gray-900"
                  } text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                >
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
            <div className="flex items-center justify-end gap-3">
              {!(status === "authenticated") ? (
                navbarPath === "/register" ? (
                  <Button onClick={() => router.push("/register")}>
                    Register
                  </Button>
                ) : (
                  <Button
                    className="bg-black hover:"
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </Button>
                )
              ) : (
                <div className="flex items-center">
                  <h1 className="text-white mr-3">{session?.user?.fullname}</h1>
                  <Button onClick={() => signOut()}>Logout</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
