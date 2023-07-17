import LogoutButton from '@/components/LogoutButton';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Bars3Icon } from "@heroicons/react/24/outline";
import { cookies } from "next/headers";
import logo from "../assets/geekyants-logo.svg";
import { useRouter } from 'next/navigation';
import AboutUsButton from './AboutUs';
import AboutUs from '@/app/aboutus/page';
import LoginButton from './LoginButton';
import HomeButton from './HomeButton';
import Dashboard from '@/app/dashboard/page';
import DashboardButton from './DashboardButton';

export default async function NavigationBarHome(){
  //const router = useRouter()
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

    return( <div className="w-full flex flex-col items-center app">
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm text-foreground">
        <div className="flex items-center gap-2">
          <Image width={40} height={40} src={logo} alt={"GeekyAnts Logo"} />
          <Link href={"/"} className='custom-link'> GeekyAnts QA </Link>
        </div>
        <div />
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              Hey, {user.email}!
              {/* <DashboardButton/> */}
              <DashboardButton/>
              <AboutUsButton/>
              <LogoutButton />
            </div>
          ) : (
            <div className="flex items-center gap-4">
               
              <LoginButton/>
              
              </div>
          )}
        </div>

      </div>
    </nav>

  </div>
    );
}