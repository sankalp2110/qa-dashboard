import React from "react";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";

export default async function DashboardContent() {
  // Replace these dummy data with actual user details
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
    <div className="flex">
      {/* Sidebar with user details */}
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-semibold mb-2">User Details</h2>
        {/* Perform null check for 'user' */}
        {user ? (
          <p>Username: {user.email}</p>
        ) : (
          <p>User not logged in</p>
        )}
        {/* Add more user details as needed */}
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4 space-y-4">
        {/* Cards */}
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
