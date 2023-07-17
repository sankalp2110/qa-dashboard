import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import LogoutButton from "../components/LogoutButton";
import logo from "../assets/geekyants-logo.svg";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { VerticalFeatures } from "@/components/VerticalFeatures";
import { Meta } from "@/components/layout/Meta";
import { AppConfig } from "./utils/AppConfig";
import NavigationBar from "@/components/NavigationBar";
import { FooterCopyright } from "@/components/layout/FooterCopyright";
import NavigationBarHome from "@/components/NavigationBarHome";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="app">
      <nav className="w-full justify-center border-b border-b-foreground/10 h-16 ">
      {/* <nav className="parent-navbar"> */}
        
        <NavigationBarHome/>
        
      </nav>
      <div className="text-gray-600 antialiased">
        <Home/>
    {/* <Meta title={AppConfig.title} description={AppConfig.description} /> */}
    <VerticalFeatures />
    <Footer />
    <FooterCopyright/>
       </div>
       </div>
  );
}
