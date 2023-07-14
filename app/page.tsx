import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import LogoutButton from "../components/LogoutButton";
import logo from "../assets/geekyants-logo.svg";
import { Bars3Icon } from "@heroicons/react/24/outline";
import LoginSignupButton from "@/components/LoginSignupButton";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="app">
      {/*<nav className="w-full justify-center border-b border-b-foreground/10 h-16 bg-red-100">*/}
      <nav className="parent-navbar">
        <div className="main-logo items-center">
          <Image width={30} height={30} src={logo} alt={"GeekyAnts Logo"}/>
          GeekyAnts QA
        </div>
        <div className="login-btn">
          <LoginSignupButton />
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              Hey, {user.email}!
              <LogoutButton />
            </div>
          ) : (
            <div>
              <a href="/"></a>
            </div>
          )}
        </div>
      </nav>
      <div className="">
        <Home />
      </div>
      <div className="">
        <Services />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
