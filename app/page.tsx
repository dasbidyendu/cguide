import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-amber-50 w-screen h-screen flex-col pt-20 overflow-y-scroll">
      <Navbar />
      <div>
        <div className="flex flex-row  items-center justify-between w-full h-fit px-20">
          <Image
            src={"/workspace.svg"}
            width={600}
            height={600}
            alt="workspace"
            className="hidden md:flex"
          />
          <div className="flex flex-col w-fit h-fit items-center gap-3 p-5">
            <h2 className="text-6xl font-semibold text-blue-950 ">
              CareerFlow
            </h2>
          </div>
        </div>
        <div className="flex-col md:flex-row  items-center px-20 ">
          <Link
            className="w-60 h-12 px-20 rounded-full bgone hover:bg-blue-800 hover:cursor-pointer m-5 "
            title="sign in "
            href={"/login "}
          />
          <Link
            className="w-60 h-12 px-20 rounded-full bgone hover:bg-blue-800 hover:cursor-pointer m-5 "
            title="sign up"
            href={"/register "}
          />
        </div>
      </div>

      <div
        id="about"
        className="flex flex-col flex-wrap items-center justify-center p-10 mt-10 gap-10"
      >
        <h1 className="text-4xl font-extrabold text-amber-50 bgone p-5 border rounded-3xl  border-blue-950  ">
          ABOUT US
        </h1>
        <h2 className="px-6 text-wrap text-blue-950 min-w-[300px] max-w-[850px] h-fit font-stretch-110% lg:text-xl text-lg">
          Embark on a journey of career discovery with CareerFlow, your
          personalized guide to professional fulfillment. We delve deep into
          your unique profile, analyzing your experiences, passions, and
          aptitudes to unveil career paths that resonate with your true
          potential. Our intelligent platform goes beyond simple job matching,
          providing tailored recommendations accompanied by insights into
          industry trends and required skills. Connect with seasoned
          professionals in your desired fields, fostering invaluable mentorship
          and expanding your network. Access curated learning resources to
          bridge skill gaps and enhance your expertise. We streamline your job
          search, offering personalized recommendations, all while tracking your
          interests and personality . CareerFlow empowers you to make informed
          decisions, navigate career transitions with confidence, and ultimately
          achieve lasting success in a career you love.
        </h2>
      </div>

      <div
        id="services"
        className="flex flex-col flex-wrap items-center justify-center p-5 mt-10 gap-10"
      >
        <h1 className="text-amber-50 border bgone rounded-xl px-9  py-3 text-4xl font-extrabold">
          SERVICES
        </h1>

        <div className="flex flex-row flex-wrap items-center justify-between   ">
          <div className=" w-full lg:w-[27%] h-fit lg:h-[400px] border order-blue-950 m-4 rounded-xl gap-4 bgone p-5 text-amber-50 hover:scale-105 transition-all">
            <h1 className="text-bold text-3xl">
              Personalized Career Path Discovery
            </h1>
            <h3>
              {" "}
              We analyze your hobbies, interests, and past experiences to
              identify career options that align with your unique strengths and
              passions. Our intelligent platform delivers tailored
              recommendations, ensuring you find a fulfilling and successful
              career.
            </h3>
          </div>

          <div className=" w-full lg:w-[27%] h-fit lg:h-[400px] border m-4 order-blue-950 rounded-xl gap-4 bgone p-5 text-amber-50 hover:scale-105 transition-all">
            <h1 className="text-bold text-3xl">
              Professional Networking and Connectiony
            </h1>
            <h3>
              {" "}
              We facilitate connections with individuals who are already
              thriving in your desired career path. Build valuable
              relationships, gain industry insights, and receive mentorship from
              experienced professionals.
            </h3>
          </div>

          <div className=" w-full lg:w-[27%] h-fit lg:h-[400px] border m-4 order-blue-950 rounded-xl gap-4 bgone p-5 text-amber-50 hover:scale-105 transition-all">
            <h1 className="text-bold text-3xl">Expert Career Guidance</h1>
            <h3>
              {" "}
              We offer comprehensive guidance to help you navigate your career
              journey. From identifying skill gaps to providing personalized
              learning resources, we equip you with the tools and knowledge
              necessary to succeed in your chosen field.
            </h3>
          </div>
        </div>
      </div>

      <div
        id="footer"
        className="flex flex-row flex-wrap bgone text-amber-50 w-full h-fit min-h-[100px] items-center justify-between px-10 "
      >
        <div>CareerFlow</div>
        <h2 className="hidden md:flex text-xl font-normal">
          your careers bestfriend
        </h2>
        <div className="flex flex-col items-center justify-start gap-5 pt-8 pb-5">
          <Link href={"instagram.com"}>insta</Link>
          <Link href={"linkedin.com"}>linkedin</Link>
          <Link href={"gmail.com"}>mail</Link>
          <h2>+91 2348726734</h2>
        </div>
      </div>
    </div>
  );
}
