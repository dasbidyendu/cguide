import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-amber-50 w-screen h-screen flex-col py-20 overflow-y-scroll">
      <Navbar/>
      <div className="appearing-disappearing-item"><Image src={'work'} alt="work" width={100} height={100}/></div>
    </div>
  );
}
