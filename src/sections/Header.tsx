import LogoIcon from "@/assets/icon-menu.svg";
import MenuICon from "@/assets/logo.svg";
import logo from "./logo.png";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="py-4 md:border-b border-white/30 md:border-none sticky top-0 z-50 backdrop-blur"> {/* z-50 ensures it stays on top */}
      <div className="container py-2 relative">
        {/* This section is hidden on small screens and appears for sm and above */}
        <div className="nav hidden md:flex lg:flex items-center  justify-center gap-5 border border-white/30 rounded-md py-3 lg:w-1/2 md:w-3/4 mx-auto">
          <div className="h-11 w-11">
            <Image src={logo} alt="Logo" width={44} height={44} />
          </div>
          <div className="font-mono">About</div>
          <div className="font-mono">WorkOut</div>
          <div className="font-mono">Dietplan</div>
          <Link href="/aipage" className="font-mono">Queries</Link>
          <button className="bg-orange-600 rounded-lg p-2">Sign up</button>
        </div>

        {/* This section is visible on small screens (sm and below) */}
        <div className="flex justify-between items-center md:hidden">
          <div className="h-11 w-11">
            <Image src={logo} alt="Logo" width={44} height={44} />
          </div>
          <div className="h-11 w-11">
            <LogoIcon className="h-9 w-9" />
          </div>
        </div>
      </div>
    </header>
  );
};
