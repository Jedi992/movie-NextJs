import Image from "next/image";
import loopInput from "../../../public/loop.svg" 

export default function Input() {
    
    return (
      <div className="flex items-center">
      <Image 
            className="absolute ml-5 "
            src={loopInput}
            alt="logo"
          />
          <input className="border-solid border border-[#323B54] py-6 pl-14 pr-24 rounded-xl text-[#ffffff] text-sm" type="text" minLength={0} maxLength={32} placeholder="Search Movies or TV Shows"/>

      </div>
    );
  }
  