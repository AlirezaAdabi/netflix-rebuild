import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import BasicMenu from "./BasicMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`bg-[#141414]/50 ${isScrolled && "bg-[#141414]/100"}`}>
      <div className=" flex items-center space-x-2 md:space-x-10">
        <img
          src={"/assets/Logo.svg"}
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <BasicMenu/>
        <ul className=" hidden space-x-4 md:flex">
          <li className=" headerLink">Home</li>
          <li className=" headerLink">TV Shows</li>
          <li className=" headerLink">Movies</li>
          <li className=" headerLink">New & Popular</li>
          <li className=" headerLink">My List</li>
        </ul>
      </div>
      <div className=" flex items-center space-x-4 text-sm font-light">
        <SearchIcon className=" hidden w-6 h-6 sm:inline" />
        <p className=" hidden lg:inline">Kids</p>
        <BellIcon className=" w-6 h-6" />
        <Link href="/account">
          <img
            src={"/assets/Account.png"}
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
