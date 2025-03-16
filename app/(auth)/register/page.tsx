"use client";
import { SignUp } from "@clerk/clerk-react";

const Page = () => {
  return (
    <div className="flex w-dvw h-dvh justify-center items-center">
      <SignUp />
    </div>
  );
};

export default Page;
