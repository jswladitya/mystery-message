"use client";

import React, { useState } from "react";
import {Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const { data: session } = useSession();

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xs md:max-w-lg mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        {/* github */}
        <Link href={"https://github.com/jswladitya/mystery-message"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="GitHub"
          ></MenuItem>
        </Link>
        {/* sign-in */}
        {
        session ? (
        <span onClick={() => signOut()}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Logout"
          ></MenuItem>
        </span>
        ) : (
        <Link href="/sign-in">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Login"
          ></MenuItem>
        </Link>
        )
        }
      </Menu>
    </div>
  );
}

export default Navbar;
