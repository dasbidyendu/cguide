import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Image from "next/image";




export default function Home() {
  return (
    <div className="bg-amber-50 w-screen h-screen flex-col py-20 overflow-y-scroll">
      <Navbar/>
      <div className="appearing-disappearing-item w-[500px] h-[500px]"><Image src={'/work.svg'} alt="work" width={500} height={500}/></div>

      <div className="flex-col md:flex-row  items-center px-20 ">
      <Button styles="w-60 h-12 px-20 rounded-full bgone hover:bg-blue-800 hover:cursor-pointer m-5 " title="sign in " children={'sign in '}/>
      <Button styles="w-60 h-12 px-20 rounded-full bgone hover:bg-blue-800 hover:cursor-pointer m-5 " title="sign up" children={'sign in '}/>
      </div>
      

      <div>

      </div>
      
    </div>
  );
}
