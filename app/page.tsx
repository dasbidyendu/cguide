import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Image from "next/image";




export default function Home() {
  return (
    <div className="bg-amber-50 w-screen h-screen flex-col py-20 overflow-y-scroll">
      <Navbar/>
      <div>
      <div className="flex flex-row  items-center justify-between w-full h-fit px-20">
        <Image src={'/workspace.svg'} width={600} height={600} alt="workspace" className="hidden md:flex"/>
        <div className="flex flex-col w-fit h-fit items-center gap-3 p-5">
          <h2 className="text-6xl font-semibold text-blue-950 ">CareerFlow</h2>
        </div>

      </div>
      <div className="flex-col md:flex-row  items-center px-20 ">
      <Button styles="w-60 h-12 px-20 rounded-full bgone hover:bg-blue-800 hover:cursor-pointer m-5 " title="sign in " children={'sign in '}/>
      <Button styles="w-60 h-12 px-20 rounded-full bgone hover:bg-blue-800 hover:cursor-pointer m-5 " title="sign up" children={'sign in '}/>
      </div>

      </div>

      <div className="flex flex-col flex-wrap items-center justify-center p-10 mt-10 gap-10">
        <h1 className="text-4xl font-extrabold text-amber-50 bgone p-5 border rounded-3xl  border-blue-950  ">ABOUT US</h1>
        <h2 className="px-6 text-wrap text-blue-950 min-w-[300px] max-w-[850px] h-fit font-stretch-110% lg:text-xl text-lg">Embark on a journey of career discovery with CareerFlow, your personalized guide to professional fulfillment. We delve deep into your unique profile, analyzing your experiences, passions, and aptitudes to unveil career paths that resonate with your true potential. Our intelligent platform goes beyond simple job matching, providing tailored recommendations accompanied by insights into industry trends and required skills. Connect with seasoned professionals in your desired fields, fostering invaluable mentorship and expanding your network. Access curated learning resources to bridge skill gaps and enhance your expertise. We streamline your job search, offering personalized recommendations, all while tracking your interests and personality . CareerFlow empowers you to make informed decisions, navigate career transitions with confidence, and ultimately achieve lasting success in a career you love.</h2>

      </div>
      
      

      <div>

      </div>
      
    </div>
  );
}
