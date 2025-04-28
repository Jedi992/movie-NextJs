import Image from "next/image";
import logo from "../../../public/logo.svg"

export default function Home() {

  return (
    <header className="mb-20 max-w-[1200] mx-auto my-0">
      <nav className="flex justify-between items-center">
        <div>
         <a href="#"> <Image
            className="py-5"
            src={logo}
            alt="logo"
          />
          </a>
        </div>
        <div>
          <ul className="flex  gap-4 ">
            {/* <li className="py-3 px-4 font-semibold text-[#A8AEBF]"><a href="#">Movies</a></li> */}
            {/* <li className="py-3 px-4 font-semibold text-[#A8AEBF]"><a href="#">TV Shows</a></li> */}
            <li className="py-3 px-4 font-semibold text-[#A8AEBF]"><a href="#">Login</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
