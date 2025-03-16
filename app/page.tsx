import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-amber-50 w-screen h-screen flex-col py-20 overflow-y-scroll">
      <Navbar />
      <div>
        <div className="flex flex-row items-center justify-between w-full h-fit px-20">
          <Image
            src={"/workspace.svg"}
            width={600}
            height={600}
            alt="workspace"
            className="hidden md:flex"
          />
          <div className="flex flex-col w-fit h-fit items-center gap-3 p-5">
            <h2 className="text-6xl font-semibold text-blue-950">CareerFlow</h2>
          </div>
        </div>

        <div className="flex-col md:flex-row items-center px-20">
          <Button
            styles="w-60 h-12 px-20 rounded-full bgone hover:bg-blue-800 hover:cursor-pointer m-5"
            title="sign in"
            children="sign in"
          />
          <Button
            styles="w-60 h-12 px-20 rounded-full bgone hover:bg-blue-800 hover:cursor-pointer m-5"
            title="sign up"
            children="sign up"
          />
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <div
        className="flex flex-col flex-wrap items-center justify-center p-10 mt-10 gap-10"
        id="about"
      >
        <h1 className="text-4xl font-extrabold text-amber-50 bgone p-5 border rounded-3xl border-blue-950">
          ABOUT US
        </h1>
        <h2 className="px-6 text-wrap text-blue-950 min-w-[300px] max-w-[850px] h-fit lg:text-xl text-lg">
          Embark on a journey of career discovery with CareerFlow, your
          personalized guide to professional fulfillment. We analyze your
          experiences, passions, and aptitudes to unveil career paths tailored
          to your potential. Gain insights into industry trends, connect with
          professionals, and access learning resources to build your career.
        </h2>
      </div>

      {/* SERVICES SECTION */}
      <div
        className="flex flex-col flex-wrap items-center justify-center p-10 mt-10 gap-10"
        id="services"
      >
        <h1 className="text-4xl font-extrabold text-amber-50 bgone p-5 border rounded-3xl border-blue-950">
          OUR SERVICES
        </h1>
        <h2 className="px-6 text-wrap text-blue-950 min-w-[300px] max-w-[850px] h-fit lg:text-xl text-lg">
          Our platform offers AI-powered career recommendations, personalized
          learning paths, mentorship connections, and real-time job matching.
          Explore career options, upskill with tailored resources, and gain
          industry insights to advance your professional journey.
        </h2>
      </div>

      {/* CONTACT US SECTION */}
      <div
        className="flex flex-col flex-wrap items-center justify-center p-10 mt-10 gap-10"
        id="contact"
      >
        <h1 className="text-4xl font-extrabold text-amber-50 bgone p-5 border rounded-3xl border-blue-950">
          CONTACT US
        </h1>
        <h2 className="px-6 text-wrap text-blue-950 min-w-[300px] max-w-[850px] h-fit lg:text-xl text-lg">
          Have questions or need support? Reach out to us at{" "}
          <span className="font-bold">support@careerflow.com</span> or follow us
          on social media for updates and career tips.
        </h2>
      </div>
    </div>
  );
}
