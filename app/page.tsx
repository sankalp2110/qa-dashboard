import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import LogoutButton from "../components/LogoutButton";
import logo from "../assets/geekyants-logo.svg";

import { Bars3Icon } from "@heroicons/react/24/outline";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm text-foreground">
          <div className="flex items-center gap-2">
            <Image width={20} height={20} src={logo} alt={"GeekyAnts Logo"} />
            <Link href={"/"}> GeekyAnts QA </Link>
          </div>
          <div />
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {user.email}!
                <LogoutButton />
              </div>
            ) : (
              <Link
                href="/login"
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              >
                Login
              </Link>
            )}
          </div>
          <button className="absolute right-10">
            <Bars3Icon color="white" className="h-6 w-6" />
          </button>
        </div>
      </nav>
      <div className="w-full h-auto items-center justify-center flex bg-red-700">
        <text>QA DASHBOARD</text>
      </div>
    </div>
  );
}
