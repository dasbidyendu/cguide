"use client";
import React from "react";
import Navhome from "@/components/Navhome";
import CareerPage from "@/components/Career";

const page = () => {
  return (
    <div className="w-screen h-screen overflow-y-scroll text-black bg-amber-50 flex flex-col justify-start items-center">
      <Navhome />
      <h1 className="w-full h-fit py-3 text-center">
        Your Personalized Career Guide
      </h1>
      <div className="w-full flex-1 flex justify-center items-center overflow-hidden">
        <CareerPage />
      </div>
    </div>
  );
};

export default page;
