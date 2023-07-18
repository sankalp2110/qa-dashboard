import React from "react";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import { VerticalFeatures } from "@/components/VerticalFeatures";
import DashboardContent from "./DashboardContent";

export default async function Dashboard() {

  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="w-full justify-center border-b border-b-foreground/10 h-16">
        <NavigationBar />
      </nav>

      {/* Dashboard Content */}
      <main>
        {/* Add your dashboard content here */}
        {/* For example: */}
        {/* <h1 className="text-3xl text-center font-bold mb-4">
        </h1> */}

        {/* Display user information if logged in */}
        {user ? (
          <div className="text-3xl font-semibold text-center text-gray-900">
            <h1>Welcome To Dashboard</h1>
            <DashboardContent/>
          </div>
        ) : (
          <div className="text-center">
            Please Login to Access Dashboard
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
