'use client'
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

function HeroSection() {
  const { data: session } = useSession();

  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-7 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-3 realtive z-10 w-full text-center">
        <h1 className="mt-40 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Get Feedbacks
        </h1>
        <p className="mt-4 font-normal text-xs md:text-lg text-neutral-300 max-w-lg mx-auto">
          Unfiltered Truth ~ Anonymous Feedbacks!
        </p>
        <div className="mt-4 ">
          {session ? (
            <Link href="/dashboard">
              <Button className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 h-6">
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link href="/sign-in">
              <Button className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 h-6">
                Get Started
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
