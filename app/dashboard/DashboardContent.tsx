import React from "react";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import Image from 'next/image';
import { FcLike } from "react-icons/fc";

const DashboardContent = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getUser();

  // Generate some random card content for demonstration
  const cards = [
    { title: "Card 1", content: "Some content for Card 1" },
    { title: "Card 2", content: "Some content for Card 2" },
    { title: "Card 3", content: "Some content for Card 3" },
    // Add more cards as needed
  ];

  // Perform null check for 'user'
  const user = data?.user || null;

  return (
    <div className="flex flex-wrap">
      {/* Sidebar with user details */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-semibold mb-2">User Details</h2>
        {/* Perform null check for 'user' */}
        {user ? (
          <div>
            {/* Display the user's profile image */}
            <div className="rounded-full h-24 w-24 mx-auto mb-4 overflow-hidden">
              <Image src="/assets/gaFooterLogo.svg" alt="User Profile" width={100} height={100} objectFit="cover" />
            </div>
            <p className="text-lg">Username: {user.email}</p>
            <p className="text-sm">Role: Admin</p>
          </div>
        ) : (
          <p>User not logged in</p>
        )}
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4 space-y-4">
        {/* Cards */}
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
