import LogoutButton from '@/components/LogoutButton';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Bars3Icon } from "@heroicons/react/24/outline";
import { cookies } from "next/headers";
import logo from "../../assets/geekyants-logo.svg";
import { useRouter } from 'next/navigation';
import NavigationBar from '@/components/NavigationBar';

export default async function AboutUs(){
    return (
        <div className='w-full items-center'>

            <NavigationBar/>
        </div>
      );

    };