"use client";

import React from "react";
import Navhome from "@/components/Navhome";
import { UserButton, UserProfile, useUser } from "@clerk/nextjs";
interface ProfileData {
  username: string;
  avatarUrl: string;
  bio: string;
  hobby: string[];
  interest: string[];
  designation: string;
  socialLinks: { [key: string]: string };
}

const page: React.FC = () => {
  const { user } = useUser();
  const profile: ProfileData = {
    username: "AnimeFan123",
    avatarUrl: "https://via.placeholder.com/150",
    bio: "Just your average anime and manga enthusiast!",
    hobby: ["sleeping"],
    interest: ["software", "design"],
    designation: "student",

    socialLinks: {
      Twitter: "https://twitter.com/animefan123",
      Discord: "discord.gg/anime",
      contact: "3q3242521",
      mail: "sgsg.gmail.com",
    },
  };

  const handleLogout = () => {
    console.log("Logout clicked!");
    // Add your logout logic here (e.g., clear session, redirect)
  };

  return (
    <div className="w-screen h-full min-h-screen overflow-y-scroll bg-amber-50 text-blue-900">
      <Navhome />
      <div className="max-w-3xl mx-auto p-6  font-sans  gap-5">
        <div className="flex items-center justify-between mb-6 w-[80px] h-[80px] rounded-full">
          <UserButton />
          <div className="flex flex-row flex-wrap items-center justify-between px-7">
            <h1 className="text-2xl font-semibold mb-2">
              Profile: {user?.firstName}
            </h1>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="text-white p-4 rounded-lg border bg-blue-900 border-blue-900">
            <h2 className="text-lg font-semibold mb-2">About Me</h2>
            <p>{profile.bio}</p>
          </div>

          <div className="text-white p-4 rounded-lg border bg-blue-900 border-blue-900">
            <h2 className="text-lg font-semibold mb-2">Favorites</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {profile.interest.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>

          <div className="text-white p-4 rounded-lg border bg-blue-900 border-blue-900">
            <h2 className="text-lg font-semibold mb-2">Social Links</h2>
            <ul>
              {Object.entries(profile.socialLinks).map(([name, link]) => (
                <li key={name}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white opacity-60 hover:underline"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
