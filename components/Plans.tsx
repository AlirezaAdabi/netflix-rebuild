import { CheckIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import products from "../lib/plans";
import Table from "./Table";
interface Props {
  name: string;
  selectedPlan: string;
}


const Plans = () => {
  const { logout } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState(2);
  return (
    <div>
      <Head>
        <title> Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src={"/assets/Logo.svg"}
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>
      <main className="pt-28 max-w-5xl px-5 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>
        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-center self-end md:w-3/5">
            {products.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`planBox ${
                    selectedPlan === item.id ? "opacity-100" : "opacity-60"
                  }`}
                  onClick={() => setSelectedPlan(item.id )}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
          <Table selectedPlan={selectedPlan} />
          <button>Subscribe</button>
        </div>
      </main>
    </div>
  );
};

export default Plans;
